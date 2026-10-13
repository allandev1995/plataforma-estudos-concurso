/* =========================================================================
   app.js — Lógica da plataforma de estudos
   ----------------------------------------------------------------------------
   Organização deste arquivo:
     1. Utilidades gerais
     2. Lógica pura (montagem do simulado, correção, seleção de questões)
        — testável sem navegador (exposta em window.Logica)
     3. Registro de respostas (progresso + caderno de erros)
     4. Visões da interface (Início, Estudar, Simulado, Erros, Desempenho)
     5. Inicialização (após DOMContentLoaded; nenhum acesso ao DOM no carregamento)

   Dependências: js/questions.js (QUESTOES, DISCIPLINAS, SIMULADO_*)
                 js/storage.js  (window.Armazenamento)
   ========================================================================= */

(function () {
  'use strict';

  /* =======================================================================
     1. UTILIDADES GERAIS
     ======================================================================= */

  // Embaralhamento Fisher–Yates. Aceita função aleatória para permitir
  // testes determinísticos no Node (rng falsa).
  function embaralhar(lista, rng) {
    rng = rng || Math.random;
    var arr = lista.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  // Escapa texto antes de inserir no HTML (segurança básica).
  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Letras das alternativas
  var LETRAS = ['A', 'B', 'C', 'D'];

  function rotuloDificuldade(d) {
    return { facil: 'Fácil', intermediaria: 'Intermediária', dificil: 'Difícil' }[d] || d;
  }

  function rotuloOrigem(q) {
    if (q.sourceType === 'prova-anterior') {
      return 'Prova anterior (2020) — transcrita; sem gabarito oficial';
    }
    return 'Questão autoral de estudo — não é questão oficial da SELECON';
  }

  // Classe CSS por disciplina (badge de cor)
  function slugDisciplina(disciplina) {
    var s = disciplina.toLowerCase();
    if (s.normalize) s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return s.replace(/[^a-z]+/g, '-');
  }

  // Tempo em milissegundos → "3h 59m 12s"
  function formatarTempo(ms) {
    if (ms < 0) ms = 0;
    var totalSeg = Math.floor(ms / 1000);
    var h = Math.floor(totalSeg / 3600);
    var m = Math.floor((totalSeg % 3600) / 60);
    var s = totalSeg % 60;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    return h + 'h ' + pad(m) + 'm ' + pad(s) + 's';
  }

  function formatarData(ts) {
    if (!ts) return '—';
    var d = new Date(ts);
    return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  // Índice do elemento da lista DOM (helper)
  function porId(id) { return document.getElementById(id); }

  /* =======================================================================
     2. LÓGICA PURA (sem DOM) — exposta em window.Logica para os testes
     ======================================================================= */

  // Mapa id → questão (construído uma vez na inicialização)
  var mapaQuestoes = {};

  function montarMapa(banco) {
    mapaQuestoes = {};
    banco.forEach(function (q) { mapaQuestoes[q.id] = q; });
    return mapaQuestoes;
  }

  // Valida se há questões suficientes para a distribuição oficial.
  function verificarDistribuicao(banco, distribuicao) {
    var faltas = [];
    Object.keys(distribuicao).forEach(function (disc) {
      var disponiveis = banco.filter(function (q) { return q.discipline === disc; }).length;
      if (disponiveis < distribuicao[disc].questoes) {
        faltas.push(disc + ': ' + disponiveis + ' disponível(is), ' +
          distribuicao[disc].questoes + ' necessária(s).');
      }
    });
    return { ok: faltas.length === 0, faltas: faltas };
  }

  // Monta um simulado: distribuição exata, sem repetição, questões e
  // alternativas embaralhadas (preservando o gabarito via ordemAlternativas).
  function montarSimulado(banco, distribuicao, rng) {
    var verificacao = verificarDistribuicao(banco, distribuicao);
    if (!verificacao.ok) return { ok: false, faltas: verificacao.faltas };

    var escolhidas = [];
    Object.keys(distribuicao).forEach(function (disc) {
      var pool = embaralhar(banco.filter(function (q) { return q.discipline === disc; }), rng);
      for (var i = 0; i < distribuicao[disc].questoes; i++) {
        escolhidas.push({
          qid: pool[i].id,
          ordemAlternativas: embaralhar([0, 1, 2, 3], rng)
        });
      }
    });
    // Embaralha a ordem geral das questões.
    return { ok: true, itens: embaralhar(escolhidas, rng) };
  }

  // Texto exibido da alternativa i (posição na tela) de um item do simulado.
  function alternativaExibida(questao, item, posicao) {
    var original = item.ordemAlternativas[posicao];
    return { texto: questao.options[original], original: original };
  }

  // Corrige um simulado entregue. Devolve nota (0–100), contagens,
  // desempenho por disciplina e situação dos critérios do edital.
  function corrigirSimulado(estado, distribuicao, criterios) {
    var porDisciplina = {};
    Object.keys(distribuicao).forEach(function (disc) {
      porDisciplina[disc] = {
        questoes: distribuicao[disc].questoes,
        acertos: 0,
        pontos: 0,
        maxPontos: distribuicao[disc].questoes * distribuicao[disc].pontosPorQuestao
      };
    });

    var acertos = 0, erros = 0, brancos = 0, nota = 0;
    estado.itens.forEach(function (item) {
      var q = mapaQuestoes[item.qid];
      if (!q) return;
      if (!porDisciplina[q.discipline]) {
        porDisciplina[q.discipline] = { questoes: 0, acertos: 0, pontos: 0, maxPontos: 0 };
      }
      var escolhida = estado.respostas[item.qid];
      if (escolhida === undefined || escolhida === null) {
        brancos++;
        return;
      }
      if (escolhida === q.correctIndex) {
        acertos++;
        nota += q.points;
        porDisciplina[q.discipline].acertos++;
        porDisciplina[q.discipline].pontos += q.points;
      } else {
        erros++;
      }
    });

    var zeradas = Object.keys(porDisciplina).filter(function (d) {
      return porDisciplina[d].pontos === 0;
    });
    var pontosOk = nota >= criterios.pontosMinimas;
    var semZeradaOk = !criterios.semDisciplinaZerada || zeradas.length === 0;

    return {
      nota: nota,
      acertos: acertos,
      erros: erros,
      brancos: brancos,
      porDisciplina: porDisciplina,
      criterios: {
        pontosMinimas: criterios.pontosMinimas,
        pontosOk: pontosOk,
        semZeradaOk: semZeradaOk,
        ok: pontosOk && semZeradaOk,
        disciplinasZeradas: zeradas
      }
    };
  }

  // Tempo restante com base no horário-limite (confiável entre abas/recarga).
  function tempoRestante(estado, agora) {
    if (!estado || !estado.limiteEm) return 0;
    agora = (agora === undefined) ? Date.now() : agora;
    return Math.max(0, estado.limiteEm - agora);
  }

  // Seleciona questões para uma sessão de estudo, respeitando filtros,
  // quantidade e exclusões (para não repetir na mesma tentativa).
  function selecionarQuestoes(banco, filtros, quantidade, rng, excluidas) {
    excluidas = excluidas || {};
    var pool = banco.filter(function (q) {
      if (excluidas[q.id]) return false;
      if (filtros.disciplina && q.discipline !== filtros.disciplina) return false;
      if (filtros.topico && q.topic !== filtros.topico) return false;
      if (filtros.dificuldade && q.difficulty !== filtros.dificuldade) return false;
      return true;
    });
    return embaralhar(pool, rng).slice(0, quantidade);
  }

  // Registra uma resposta no progresso e atualiza o caderno de erros.
  // - Acerto/erro é contado UMA vez por questão dentro da mesma tentativa
  //   (o chamador garante isso).
  // - Erro cria/atualiza entrada no caderno (pendente = true).
  // - Acerto em questão que está no caderno confirma domínio (pendente = false),
  //   preservando todo o histórico anterior.
  function registrarResposta(progresso, caderno, qid, escolhida, correta, contexto) {
    var agora = Date.now();
    var r = progresso.respostas[qid] || { acertos: 0, erros: 0 };
    if (correta) r.acertos++; else r.erros++;
    r.ultimaData = agora;
    r.ultimaEscolhida = escolhida;
    r.ultimaCorreta = correta;
    progresso.respostas[qid] = r;

    var entrada = caderno.erros[qid];
    if (!correta) {
      if (!entrada) {
        entrada = { vezesErradas: 0, pendente: true, historico: [] };
        caderno.erros[qid] = entrada;
      }
      entrada.vezesErradas++;
      entrada.pendente = true;
      entrada.ultimaEscolhida = escolhida;
      entrada.historico.push({ data: agora, contexto: contexto, escolhida: escolhida, correta: correta });
    } else if (entrada) {
      // Demonstrou domínio: sai dos pendentes, histórico fica preservado.
      entrada.pendente = false;
      entrada.historico.push({ data: agora, contexto: contexto, escolhida: escolhida, correta: correta });
    }
    // Mantém o histórico enxuto (últimas 30 tentativas por questão).
    if (entrada && entrada.historico.length > 30) {
      entrada.historico = entrada.historico.slice(-30);
    }
    return { progresso: progresso, caderno: caderno };
  }

  // Expõe a lógica pura para testes em Node (sem navegador).
  window.Logica = {
    embaralhar: embaralhar,
    montarMapa: montarMapa,
    verificarDistribuicao: verificarDistribuicao,
    montarSimulado: montarSimulado,
    alternativaExibida: alternativaExibida,
    corrigirSimulado: corrigirSimulado,
    tempoRestante: tempoRestante,
    selecionarQuestoes: selecionarQuestoes,
    registrarResposta: registrarResposta,
    obterMapaQuestoes: function () { return mapaQuestoes; }
  };

  /* =======================================================================
     3. ESTADO DA APLICAÇÃO (em memória; persistência via Armazenamento)
     ======================================================================= */

  var banco = [];            // banco de questões completo
  var sessaoEstudo = null;   // sessão do modo Estudar em andamento
  var estadoSimulado = null; // simulado em andamento (ou entregue)
  var tickAtivo = null;      // intervalo do cronômetro
  var entregaEmAndamento = false; // evita entrega dupla do cronômetro

  /* =======================================================================
     4. MODAL GENÉRICO (sem alert()/confirm() do navegador)
     ======================================================================= */

  function abrirModal(titulo, htmlCorpo, acoes) {
    var overlay = porId('modal-overlay');
    porId('modal-titulo').textContent = titulo;
    porId('modal-corpo').innerHTML = htmlCorpo;
    var acoesEl = porId('modal-acoes');
    acoesEl.innerHTML = '';
    (acoes || [{ rotulo: 'Fechar', classe: 'btn-primario' }]).forEach(function (acao) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn ' + (acao.classe || 'btn-secundario');
      btn.textContent = acao.rotulo;
      btn.addEventListener('click', function () {
        if (acao.aoClicar) acao.aoClicar();
        if (!acao.manterAberto) fecharModal();
      });
      acoesEl.appendChild(btn);
    });
    overlay.hidden = false;
    var primeiro = acoesEl.querySelector('button');
    if (primeiro) primeiro.focus();
  }

  function fecharModal() {
    porId('modal-overlay').hidden = true;
  }

  function confirmar(titulo, mensagem, rotuloConfirmar, aoConfirmar) {
    abrirModal(titulo, '<p>' + esc(mensagem) + '</p>', [
      { rotulo: rotuloConfirmar, classe: 'btn-perigo', aoClicar: aoConfirmar },
      { rotulo: 'Cancelar', classe: 'btn-secundario' }
    ]);
  }

  /* =======================================================================
     4.1. RENDERIZAÇÃO COMPARTILHADA DE UMA QUESTÃO
     ======================================================================= */

  // Monta o bloco de uma questão (enunciado + metadados + alternativas).
  // opts: { questao, item (opcional, simulado), escolhida (original index ou null),
  //         corrigida (bool), aoResponder(posicaoNaTela) }
  function renderizarQuestao(container, opts) {
    var q = opts.questao;
    var item = opts.item || null;
    var html = '';

    html += '<div class="meta-questao">';
    html += '<span class="badge badge-' + slugDisciplina(q.discipline) + '">' + esc(q.discipline) + '</span>';
    html += '<span class="meta-info">' + esc(q.topic) + (q.subtopic ? ' · ' + esc(q.subtopic) : '') + '</span>';
    html += '<span class="meta-info">' + esc(rotuloDificuldade(q.difficulty)) + '</span>';
    html += '<span class="meta-origem ' + (q.sourceType === 'prova-anterior' ? 'origem-historica' : '') + '">' + esc(rotuloOrigem(q)) + '</span>';
    html += '</div>';
    html += '<p class="enunciado">' + esc(q.statement).replace(/\n/g, '<br>') + '</p>';

    html += '<ul class="alternativas" role="list">';
    for (var i = 0; i < 4; i++) {
      var original = item ? item.ordemAlternativas[i] : i;
      var texto = q.options[original];
      var classes = ['alternativa'];
      if (opts.corrigida) {
        if (original === q.correctIndex) classes.push('alternativa-correta');
        if (opts.escolhida === original && original !== q.correctIndex) classes.push('alternativa-errada');
        if (opts.escolhida === original) classes.push('alternativa-escolhida');
      }
      html += '<li>';
      html += '<button type="button" class="' + classes.join(' ') + '" data-pos="' + i + '"' +
        (opts.corrigida ? ' disabled' : '') + '>';
      html += '<span class="letra">' + LETRAS[i] + ')</span> <span class="texto-alt">' + esc(texto) + '</span>';
      html += '</button></li>';
    }
    html += '</ul>';
    container.innerHTML = html;

    if (!opts.corrigida) {
      var botoes = container.querySelectorAll('.alternativa');
      Array.prototype.forEach.call(botoes, function (btn) {
        btn.addEventListener('click', function () {
          opts.aoResponder(parseInt(btn.getAttribute('data-pos'), 10));
        });
      });
    }
  }

  // Bloco de feedback (correção imediata) — compartilhado.
  function renderizarFeedback(container, questao, escolhidaOriginal) {
    var correta = escolhidaOriginal === questao.correctIndex;
    var html = '';
    html += '<div class="feedback ' + (correta ? 'feedback-ok' : 'feedback-erro') + '" role="status">';
    html += '<p class="feedback-titulo">' + (correta ? '✔ Resposta correta!' : '✘ Resposta incorreta.') + '</p>';
    if (!correta) {
      html += '<p>Você escolheu a alternativa <strong>' + LETRAS[escolhidaOriginal] + '</strong>. ' +
        'A alternativa correta é a <strong>' + LETRAS[questao.correctIndex] + '</strong>.</p>';
    } else {
      html += '<p>A alternativa correta é a <strong>' + LETRAS[questao.correctIndex] + '</strong>.</p>';
    }
    html += '<p class="explicacao-gabarito"><strong>Gabarito comentado:</strong> ' + esc(questao.explanation) + '</p>';
    html += '<details class="explicacao-alternativas"><summary>Ver explicação de cada alternativa</summary><ol>';
    for (var i = 0; i < 4; i++) {
      html += '<li><strong>' + LETRAS[i] + ')</strong> ' + esc(questao.options[i]) + ' — <em>' + esc(questao.optionExplanations[i]) + '</em></li>';
    }
    html += '</ol></details>';
    html += '<p class="meta-referencia"><strong>Referência:</strong> ' + esc(questao.sourceReference) + '</p>';
    html += '</div>';
    container.innerHTML = html;
  }

  /* =======================================================================
     5. VISÃO: INÍCIO
     ======================================================================= */

  function renderizarHome() {
    var progresso = Armazenamento.obterProgresso();
    var caderno = Armazenamento.obterCaderno();
    var historico = Armazenamento.obterHistorico();

    var totalRespostas = 0, totalAcertos = 0;
    Object.keys(progresso.respostas).forEach(function (qid) {
      var r = progresso.respostas[qid];
      totalRespostas += (r.acertos || 0) + (r.erros || 0);
      totalAcertos += r.acertos || 0;
    });
    var pendentes = Object.keys(caderno.erros).filter(function (qid) {
      return caderno.erros[qid].pendente;
    }).length;

    var html = '';
    if (totalRespostas === 0 && historico.simulados.length === 0) {
      html += '<div class="card destaque-neutro"><p><strong>Nenhuma atividade registrada ainda.</strong> ' +
        'Comece estudando por matéria ou fazendo um simulado completo — seu progresso será salvo automaticamente neste computador.</p></div>';
    } else {
      var aproveitamento = totalRespostas ? Math.round(totalAcertos / totalRespostas * 100) : 0;
      html += '<div class="grade-indicadores">';
      html += indicador('Questões respondidas', totalRespostas);
      html += indicador('Acertos', totalAcertos);
      html += indicador('Aproveitamento geral', aproveitamento + '%');
      html += indicador('Erros pendentes', pendentes);
      html += indicador('Simulados concluídos', historico.simulados.length);
      html += '</div>';
    }
    porId('home-indicadores').innerHTML = html;

    var aviso = porId('home-aviso-banco');
    if (aviso) {
      var nAutoral = banco.filter(function (q) { return q.sourceType === 'autoral'; }).length;
      var nAnterior = banco.length - nAutoral;
      aviso.innerHTML = '<p>Banco de estudo com <strong>' + banco.length + ' questões</strong> (' +
        nAutoral + ' autorais de estudo e ' + nAnterior + ' transcritas da prova anterior de 2020, sem gabarito oficial). ' +
        'Nenhuma questão é oficial do Instituto SELECON. Veja <code>FONTES_E_LIMITACOES.md</code> para detalhes.</p>';
    }
  }

  function indicador(rotulo, valor) {
    return '<div class="indicador"><span class="indicador-valor">' + esc(String(valor)) +
      '</span><span class="indicador-rotulo">' + esc(rotulo) + '</span></div>';
  }

  /* =======================================================================
     6. VISÃO: ESTUDAR (correção imediata)
     ======================================================================= */

  function popularFiltrosEstudo() {
    var selDisc = porId('est-f-disciplina');
    selDisc.innerHTML = '<option value="">Todas as disciplinas</option>';
    DISCIPLINAS.forEach(function (d) {
      var opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      selDisc.appendChild(opt);
    });
    var selDif = porId('est-f-dificuldade');
    selDif.innerHTML = '<option value="">Qualquer dificuldade</option>' +
      '<option value="facil">Fácil</option>' +
      '<option value="intermediaria">Intermediária</option>' +
      '<option value="dificil">Difícil</option>';
    var selQtd = porId('est-f-quantidade');
    selQtd.innerHTML = '';
    [5, 10, 15, 20].forEach(function (n) {
      var opt = document.createElement('option');
      opt.value = n; opt.textContent = n + ' questões';
      selQtd.appendChild(opt);
    });
    // Restaura preferências
    var prefs = Armazenamento.obterPrefs();
    if (prefs.estudo) {
      selDisc.value = prefs.estudo.disciplina || '';
      selDif.value = prefs.estudo.dificuldade || '';
      selQtd.value = prefs.estudo.quantidade || 10;
    }
    atualizarTopicosEstudo();
  }

  function atualizarTopicosEstudo() {
    var disc = porId('est-f-disciplina').value;
    var selTop = porId('est-f-topico');
    var topicoAtual = selTop.value;
    var topicos = {};
    banco.forEach(function (q) {
      if (!disc || q.discipline === disc) topicos[q.topic] = true;
    });
    selTop.innerHTML = '<option value="">Todos os tópicos</option>';
    Object.keys(topicos).sort().forEach(function (t) {
      var opt = document.createElement('option');
      opt.value = t; opt.textContent = t;
      selTop.appendChild(opt);
    });
    if (topicos[topicoAtual]) selTop.value = topicoAtual;
  }

  // Inicia uma sessão de estudo com um conjunto já definido de questões.
  function iniciarSessaoEstudo(questoes, rotulo) {
    sessaoEstudo = {
      questoes: questoes,
      respostas: {},   // qid → índice original da alternativa escolhida
      respondidas: {}, // qid → true (contagem já feita; evita repetição)
      marcadas: {},    // qid → true (marcação para revisão)
      atual: 0,
      rotulo: rotulo || 'Estudo'
    };
    porId('est-form-wrap').hidden = true;
    porId('est-sessao').hidden = false;
    porId('est-acoes').hidden = false;
    renderizarSessaoEstudo();
  }

  function iniciarSessaoPorFiltros() {
    var filtros = {
      disciplina: porId('est-f-disciplina').value,
      topico: porId('est-f-topico').value,
      dificuldade: porId('est-f-dificuldade').value
    };
    var quantidade = parseInt(porId('est-f-quantidade').value, 10);

    // Salva preferências
    var prefs = Armazenamento.obterPrefs();
    prefs.estudo = { disciplina: filtros.disciplina, topico: filtros.topico, dificuldade: filtros.dificuldade, quantidade: quantidade };
    Armazenamento.salvarPrefs(prefs);

    var questoes = Logica.selecionarQuestoes(banco, filtros, quantidade, Math.random, {});
    if (questoes.length === 0) {
      abrirModal('Nenhuma questão encontrada',
        '<p>Não há questões no banco que atendam aos filtros escolhidos. Ajuste disciplina, tópico ou dificuldade.</p>');
      return;
    }
    iniciarSessaoEstudo(questoes, 'Estudo');
  }

  function renderizarSessaoEstudo() {
    var s = sessaoEstudo;
    if (!s) return;
    var q = s.questoes[s.atual];
    var container = porId('est-questao');

    porId('est-rotulo').textContent = s.rotulo;
    porId('est-progresso').textContent = 'Questão ' + (s.atual + 1) + ' de ' + s.questoes.length +
      ' · Respondidas: ' + Object.keys(s.respondidas).length;

    var jaRespondida = !!s.respondidas[q.id];
    renderizarQuestao(container, {
      questao: q,
      escolhida: jaRespondida ? s.respostas[q.id] : null,
      corrigida: jaRespondida,
      aoResponder: function (posicao) { responderQuestaoEstudo(posicao); }
    });

    // Feedback (apenas se já respondida nesta sessão)
    var fb = porId('est-feedback');
    if (jaRespondida) {
      renderizarFeedback(fb, q, s.respostas[q.id]);
    } else {
      fb.innerHTML = '<p class="aguardando">Selecione uma alternativa para ver a correção imediata.</p>';
    }

    // Botão marcar para revisão
    var btnMarcar = porId('est-btn-marcar');
    btnMarcar.textContent = s.marcadas[q.id] ? '★ Remover marcação de revisão' : '☆ Marcar para revisão';
    btnMarcar.setAttribute('aria-pressed', s.marcadas[q.id] ? 'true' : 'false');

    // Navegação
    porId('est-btn-anterior').disabled = (s.atual === 0);
    porId('est-btn-proxima').textContent =
      (s.atual === s.questoes.length - 1) ? 'Ver resumo da sessão' : 'Próxima questão';
    renderizarGradeEstudo();

    // Se todas foram respondidas e o usuário está na última, oferece resumo
    if (s.atual === s.questoes.length - 1 && Object.keys(s.respondidas).length === s.questoes.length) {
      porId('est-btn-proxima').textContent = 'Ver resumo da sessão';
    }
  }

  function renderizarGradeEstudo() {
    var s = sessaoEstudo;
    var grade = porId('est-grade');
    var html = '<p class="grade-rotulo">Navegação da sessão:</p><div class="grade-botoes">';
    s.questoes.forEach(function (q, i) {
      var classe = 'grade-btn';
      if (i === s.atual) classe += ' grade-atual';
      if (s.respondidas[q.id]) classe += ' grade-respondida';
      if (s.marcadas[q.id]) classe += ' grade-marcada';
      html += '<button type="button" class="' + classe + '" data-i="' + i + '" aria-label="Questão ' + (i + 1) + '">' + (i + 1) + '</button>';
    });
    html += '</div>';
    grade.innerHTML = html;
    Array.prototype.forEach.call(grade.querySelectorAll('.grade-btn'), function (btn) {
      btn.addEventListener('click', function () {
        sessaoEstudo.atual = parseInt(btn.getAttribute('data-i'), 10);
        renderizarSessaoEstudo();
      });
    });
  }

  function responderQuestaoEstudo(posicao) {
    var s = sessaoEstudo;
    var q = s.questoes[s.atual];
    var original = posicao; // na sessão de estudo a ordem é a original

    // Conta somente a primeira vez que a questão é respondida nesta tentativa.
    if (!s.respondidas[q.id]) {
      s.respostas[q.id] = original;
      s.respondidas[q.id] = true;

      var correta = original === q.correctIndex;
      var progresso = Armazenamento.obterProgresso();
      var caderno = Armazenamento.obterCaderno();
      Logica.registrarResposta(progresso, caderno, q.id, original, correta, 'estudo');
      Armazenamento.salvarProgresso(progresso);
      Armazenamento.salvarCaderno(caderno);
    } else {
      // Já respondida: apenas exibe o estado salvo (não conta de novo).
      s.respostas[q.id] = original;
    }
    renderizarSessaoEstudo();
  }

  function proximaQuestaoEstudo() {
    var s = sessaoEstudo;
    if (s.atual < s.questoes.length - 1) {
      s.atual++;
      renderizarSessaoEstudo();
    } else {
      mostrarResumoSessao();
    }
  }

  function mostrarResumoSessao() {
    var s = sessaoEstudo;
    var acertos = 0, erros = 0, brancas = 0;
    s.questoes.forEach(function (q) {
      if (!s.respondidas[q.id]) { brancas++; return; }
      if (s.respostas[q.id] === q.correctIndex) acertos++; else erros++;
    });
    var respondidas = acertos + erros;
    var ap = respondidas ? Math.round(acertos / respondidas * 100) : 0;

    // Atualiza "última sessão" no progresso
    var progresso = Armazenamento.obterProgresso();
    progresso.ultimaSessao = { tipo: 'estudo', data: Date.now(), total: s.questoes.length, acertos: acertos, erros: erros, brancas: brancas, rotulo: s.rotulo };
    Armazenamento.salvarProgresso(progresso);

    var marcadas = Object.keys(s.marcadas);
    var html = '<div class="card"><h3>Resumo da sessão (' + esc(s.rotulo) + ')</h3>';
    html += '<div class="grade-indicadores">';
    html += indicador('Questões', s.questoes.length);
    html += indicador('Acertos', acertos);
    html += indicador('Erros', erros);
    html += indicador('Em branco', brancas);
    html += indicador('Aproveitamento', ap + '%');
    html += '</div>';
    if (marcadas.length) {
      html += '<p><strong>Marcadas para revisão:</strong> ' + marcadas.map(function (qid) {
        return esc(mapaQuestoes[qid] ? mapaQuestoes[qid].topic : qid);
      }).join('; ') + '</p>';
    }
    html += '<p class="dica">Continue praticando: as questões erradas entraram no seu Caderno de Erros.</p>';
    html += '<button type="button" class="btn btn-primario" id="est-btn-nova">Nova sessão de estudo</button>';
    html += '</div>';
    porId('est-questao').innerHTML = html;
    porId('est-feedback').innerHTML = '';
    porId('est-grade').innerHTML = '';
    porId('est-acoes').hidden = true;
    porId('est-btn-nova').addEventListener('click', encerrarSessaoEstudo);
  }

  function encerrarSessaoEstudo() {
    sessaoEstudo = null;
    porId('est-sessao').hidden = true;
    porId('est-form-wrap').hidden = false;
    porId('est-acoes').hidden = false;
    renderizarHome();
  }

  /* =======================================================================
     7. VISÃO: SIMULADO (80 questões, 4h, sem gabarito antes da entrega)
     ======================================================================= */

  function renderizarIntroSimulado() {
    estadoSimulado = Armazenamento.obterSimulado();

    // Se o último simulado já foi entregue, mostra os resultados dele.
    if (estadoSimulado && estadoSimulado.entregue && estadoSimulado.resultado) {
      renderizarResultadosSimulado(estadoSimulado.resultado.automatico);
      return;
    }

    // Se há simulado em andamento (não entregue), oferece continuar.
    var wrapContinuar = porId('sim-continuar-wrap');
    if (estadoSimulado && !estadoSimulado.entregue) {
      var restante = Logica.tempoRestante(estadoSimulado);
      wrapContinuar.hidden = false;
      porId('sim-continuar-info').textContent = 'Há um simulado em andamento. Tempo restante: ' +
        formatarTempo(restante) + '.';
    } else {
      wrapContinuar.hidden = true;
    }

    // Validação da distribuição
    var verificacao = Logica.verificarDistribuicao(banco, SIMULADO_DISTRIBUICAO);
    var statusEl = porId('sim-status');
    if (verificacao.ok) {
      statusEl.innerHTML = '<div class="card destaque-ok"><p>✔ Banco válido: há questões suficientes para montar a distribuição oficial ' +
        '(80 questões, 100 pontos, 4 horas).</p></div>';
      porId('btn-sim-iniciar').disabled = false;
    } else {
      statusEl.innerHTML = '<div class="card destaque-erro"><p><strong>✘ Não é possível iniciar o simulado:</strong> questões insuficientes em:</p><ul>' +
        verificacao.faltas.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
        '<p>Adicione questões em <code>js/questions.js</code> para liberar o simulado.</p></div>';
      porId('btn-sim-iniciar').disabled = true;
    }

    // Tabela da distribuição oficial
    var html = '<table class="tabela"><caption>Distribuição oficial (Edital nº 001/PMSG/2026, item 9.5)</caption><thead><tr>' +
      '<th scope="col">Disciplina</th><th scope="col">Questões</th><th scope="col">Valor</th><th scope="col">Pontos</th></tr></thead><tbody>';
    var totalQ = 0, totalP = 0;
    Object.keys(SIMULADO_DISTRIBUICAO).forEach(function (d) {
      var cfg = SIMULADO_DISTRIBUICAO[d];
      var p = cfg.questoes * cfg.pontosPorQuestao;
      totalQ += cfg.questoes; totalP += p;
      html += '<tr><td>' + esc(d) + '</td><td>' + cfg.questoes + '</td><td>' + cfg.pontosPorQuestao + '</td><td>' + p + '</td></tr>';
    });
    html += '<tr class="linha-total"><td><strong>Total</strong></td><td><strong>' + totalQ + '</strong></td><td>—</td><td><strong>' + totalP + '</strong></td></tr>';
    html += '</tbody></table>';
    porId('sim-tabela-dist').innerHTML = html;

    porId('sim-intro').hidden = false;
    porId('sim-prova').hidden = true;
    porId('sim-resultados').hidden = true;
  }

  function iniciarNovoSimulado() {
    var montagem = Logica.montarSimulado(banco, SIMULADO_DISTRIBUICAO, Math.random);
    if (!montagem.ok) {
      abrirModal('Simulado indisponível',
        '<p>Não foi possível montar o simulado. Questões insuficientes:</p><ul>' +
        montagem.faltas.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>');
      return;
    }
    var agora = Date.now();
    estadoSimulado = {
      versao: 1,
      iniciadoEm: agora,
      limiteEm: agora + SIMULADO_TEMPO_MS,
      itens: montagem.itens,
      respostas: {},
      marcadas: [],
      atual: 0,
      entregue: false,
      registrado: false
    };
    Armazenamento.salvarSimulado(estadoSimulado);
    iniciarTickCronometro();
    renderizarProvaSimulado();
  }

  function continuarSimulado() {
    estadoSimulado = Armazenamento.obterSimulado();
    if (!estadoSimulado) { renderizarIntroSimulado(); return; }
    iniciarTickCronometro();
    if (Logica.tempoRestante(estadoSimulado) <= 0) {
      entregarSimulado(true); // tempo já esgotado ao retornar
    } else {
      renderizarProvaSimulado();
    }
  }

  function renderizarProvaSimulado() {
    var s = estadoSimulado;
    porId('sim-intro').hidden = true;
    porId('sim-resultados').hidden = true;
    porId('sim-prova').hidden = false;

    var item = s.itens[s.atual];
    var q = mapaQuestoes[item.qid];

    porId('sim-numero').textContent = 'Questão ' + (s.atual + 1) + ' de ' + s.itens.length;
    var respondidas = Object.keys(s.respostas).length;
    porId('sim-barra-progresso').style.width = Math.round(respondidas / s.itens.length * 100) + '%';
    porId('sim-contagem').textContent = respondidas + ' respondidas · ' + s.marcadas.length + ' marcada(s)';
    atualizarCronometro();

    var escolhida = s.respostas[item.qid]; // índice ORIGINAL
    renderizarQuestao(porId('sim-questao'), {
      questao: q,
      item: item,
      escolhida: escolhida === undefined ? null : escolhida,
      corrigida: false, // NUNCA revela gabarito antes da entrega
      aoResponder: function (posicao) { responderQuestaoSimulado(posicao); }
    });

    var btnMarcar = porId('sim-btn-marcar');
    var marcada = s.marcadas.indexOf(item.qid) !== -1;
    btnMarcar.textContent = marcada ? '★ Desmarcar revisão' : '☆ Marcar para revisão';
    btnMarcar.setAttribute('aria-pressed', marcada ? 'true' : 'false');

    porId('sim-btn-anterior').disabled = (s.atual === 0);
    porId('sim-btn-proxima').textContent = (s.atual === s.itens.length - 1) ? 'Ir para o final' : 'Próxima questão';
    renderizarGradeSimulado();
  }

  function renderizarGradeSimulado() {
    var s = estadoSimulado;
    var grade = porId('sim-grade');
    var html = '<p class="grade-rotulo">Todas as questões:</p><div class="grade-botoes">';
    s.itens.forEach(function (item, i) {
      var classe = 'grade-btn';
      if (i === s.atual) classe += ' grade-atual';
      if (s.respostas[item.qid] !== undefined) classe += ' grade-respondida';
      if (s.marcadas.indexOf(item.qid) !== -1) classe += ' grade-marcada';
      html += '<button type="button" class="' + classe + '" data-i="' + i + '" aria-label="Questão ' + (i + 1) + '">' + (i + 1) + '</button>';
    });
    html += '</div>';
    grade.innerHTML = html;
    Array.prototype.forEach.call(grade.querySelectorAll('.grade-btn'), function (btn) {
      btn.addEventListener('click', function () {
        estadoSimulado.atual = parseInt(btn.getAttribute('data-i'), 10);
        Armazenamento.salvarSimulado(estadoSimulado);
        renderizarProvaSimulado();
      });
    });
  }

  function responderQuestaoSimulado(posicao) {
    var s = estadoSimulado;
    var item = s.itens[s.atual];
    // Guarda o índice ORIGINAL da alternativa (a exibição é embaralhada).
    s.respostas[item.qid] = item.ordemAlternativas[posicao];
    Armazenamento.salvarSimulado(s);
    renderizarProvaSimulado();
  }

  function marcarRevisaoSimulado() {
    var s = estadoSimulado;
    var qid = s.itens[s.atual].qid;
    var i = s.marcadas.indexOf(qid);
    if (i === -1) s.marcadas.push(qid); else s.marcadas.splice(i, 1);
    Armazenamento.salvarSimulado(s);
    renderizarProvaSimulado();
  }

  // Cronômetro baseado em horário-limite absoluto (confiável entre abas).
  function iniciarTickCronometro() {
    if (tickAtivo) clearInterval(tickAtivo);
    tickAtivo = setInterval(function () {
      if (!estadoSimulado || estadoSimulado.entregue) return;
      atualizarCronometro();
      if (Logica.tempoRestante(estadoSimulado) <= 0 && !entregaEmAndamento) {
        entregarSimulado(true);
      }
    }, 1000);
  }

  function atualizarCronometro() {
    var el = porId('sim-cronometro');
    if (!el || !estadoSimulado) return;
    var restante = Logica.tempoRestante(estadoSimulado);
    el.textContent = formatarTempo(restante);
    el.classList.toggle('cronometro-alerta', restante <= 10 * 60 * 1000); // alerta nos últimos 10min
  }

  function pedirEntrega() {
    var s = estadoSimulado;
    var respondidas = Object.keys(s.respostas).length;
    var brancas = s.itens.length - respondidas;
    abrirModal('Entregar simulado',
      '<p>Você respondeu <strong>' + respondidas + '</strong> de <strong>' + s.itens.length + '</strong> questões.' +
      (brancas > 0 ? ' Há <strong>' + brancas + '</strong> questão(ões) em branco.' : '') + '</p>' +
      '<p>A entrega é definitiva: o gabarito será revelado e a nota calculada.</p>',
      [
        { rotulo: 'Entregar agora', classe: 'btn-primario', aoClicar: function () { entregarSimulado(false); } },
        { rotulo: 'Continuar prova', classe: 'btn-secundario' }
      ]);
  }

  // Entrega o simulado: calcula, persiste resultado e revela gabarito.
  function entregarSimulado(automatico) {
    if (!estadoSimulado || estadoSimulado.entregue) return;
    entregaEmAndamento = true;

    var agora = Date.now();
    var resultado = Logica.corrigirSimulado(estadoSimulado, SIMULADO_DISTRIBUICAO, SIMULADO_CRITERIOS);
    resultado.tempoMs = Math.min(agora - estadoSimulado.iniciadoEm, SIMULADO_TEMPO_MS);
    resultado.data = agora;
    resultado.automatico = !!automatico;

    estadoSimulado.entregue = true;
    estadoSimulado.resultado = resultado;

    // Registra uma única vez no progresso e no caderno de erros.
    if (!estadoSimulado.registrado) {
      estadoSimulado.registrado = true;
      var progresso = Armazenamento.obterProgresso();
      var caderno = Armazenamento.obterCaderno();
      estadoSimulado.itens.forEach(function (item) {
        var escolhida = estadoSimulado.respostas[item.qid];
        if (escolhida === undefined || escolhida === null) return; // em branco não é erro
        var q = mapaQuestoes[item.qid];
        if (!q) return;
        Logica.registrarResposta(progresso, caderno, item.qid, escolhida, escolhida === q.correctIndex, 'simulado');
      });
      progresso.ultimaSessao = {
        tipo: 'simulado', data: agora, total: estadoSimulado.itens.length,
        acertos: resultado.acertos, erros: resultado.erros, brancas: resultado.brancos,
        nota: resultado.nota
      };
      Armazenamento.salvarProgresso(progresso);
      Armazenamento.salvarCaderno(caderno);

      // Histórico de simulados concluídos (para o painel de desempenho)
      var historico = Armazenamento.obterHistorico();
      historico.simulados.push({
        id: 'sim-' + agora,
        data: agora,
        tempoMs: resultado.tempoMs,
        nota: resultado.nota,
        acertos: resultado.acertos,
        erros: resultado.erros,
        brancos: resultado.brancos,
        porDisciplina: resultado.porDisciplina,
        criterios: resultado.criterios,
        automatico: !!automatico
      });
      Armazenamento.salvarHistorico(historico);
    }

    Armazenamento.salvarSimulado(estadoSimulado);
    if (tickAtivo) { clearInterval(tickAtivo); tickAtivo = null; }
    entregaEmAndamento = false;
    renderizarResultadosSimulado(automatico);
  }

  function renderizarResultadosSimulado(automatico) {
    var r = estadoSimulado.resultado;
    porId('sim-intro').hidden = true;
    porId('sim-prova').hidden = true;
    porId('sim-resultados').hidden = false;

    var aproveitamento = Math.round(r.acertos / (r.acertos + r.erros + r.brancos) * 100);
    var html = '';

    if (automatico) {
      html += '<div class="card destaque-erro"><p><strong>⏰ Tempo esgotado!</strong> O simulado foi entregue automaticamente.</p></div>';
    }

    html += '<div class="card nota-card">';
    html += '<p class="nota-valor">' + r.nota + '<span> / ' + SIMULADO_CRITERIOS.totalPontos + ' pontos</span></p>';
    html += '<p class="nota-aviso">Resultado de <strong>simulação da prova objetiva</strong> — não é previsão nem garantia de aprovação no concurso real.</p>';
    html += '</div>';

    html += '<div class="grade-indicadores">';
    html += indicador('Acertos', r.acertos);
    html += indicador('Erros', r.erros);
    html += indicador('Em branco', r.brancos);
    html += indicador('Aproveitamento', aproveitamento + '%');
    html += indicador('Tempo utilizado', formatarTempo(r.tempoMs));
    html += '</div>';

    // Critérios do edital (50 pts + nenhuma disciplina zerada)
    var c = r.criterios;
    html += '<div class="card ' + (c.ok ? 'destaque-ok' : 'destaque-erro') + '">';
    if (c.ok) {
      html += '<p><strong>✔ Parâmetros da prova objetiva simulada alcançados</strong> (pelo menos ' +
        c.pontosMinimas + ' pontos e nenhuma disciplina zerada). Isso não garante aprovação no concurso real.</p>';
    } else {
      html += '<p><strong>✘ Parâmetros da prova objetiva simulada NÃO alcançados:</strong></p><ul>';
      if (!c.pontosOk) html += '<li>Pontuação insuficiente: obtidos <strong>' + r.nota + '</strong>, mínimo simulado de <strong>' + c.pontosMinimas + '</strong>.</li>';
      if (!c.semZeradaOk) html += '<li>Disciplina(s) zerada(s): <strong>' + c.disciplinasZeradas.map(esc).join(', ') + '</strong>.</li>';
      html += '</ul>';
    }
    html += '</div>';

    // Tabela por disciplina
    html += '<table class="tabela"><caption>Desempenho por disciplina</caption><thead><tr>' +
      '<th scope="col">Disciplina</th><th scope="col">Acertos</th><th scope="col">Questões</th><th scope="col">Pontos</th><th scope="col">Máximo</th></tr></thead><tbody>';
    Object.keys(r.porDisciplina).forEach(function (d) {
      var pd = r.porDisciplina[d];
      var classeZerada = pd.pontos === 0 ? 'linha-zerada' : '';
      html += '<tr class="' + classeZerada + '"><td>' + esc(d) + '</td><td>' + pd.acertos + '</td><td>' + pd.questoes +
        '</td><td>' + pd.pontos + '</td><td>' + pd.maxPontos + '</td></tr>';
    });
    html += '</tbody></table>';

    // Questões erradas e em branco
    var problemas = [];
    estadoSimulado.itens.forEach(function (item) {
      var q = mapaQuestoes[item.qid];
      var escolhida = estadoSimulado.respostas[item.qid];
      if (escolhida === undefined) {
        problemas.push({ q: q, tipo: 'branco' });
      } else if (escolhida !== q.correctIndex) {
        problemas.push({ q: q, tipo: 'erro', escolhida: escolhida });
      }
    });
    if (problemas.length) {
      html += '<div class="card"><h3>Questões erradas e em branco (' + problemas.length + ')</h3><ul class="lista-simples">';
      problemas.forEach(function (p) {
        html += '<li><span class="badge badge-' + slugDisciplina(p.q.discipline) + '">' + esc(p.q.discipline) + '</span> ' +
          esc(p.q.statement.slice(0, 140)) + (p.q.statement.length > 140 ? '…' : '') +
          ' <em>(' + (p.tipo === 'branco' ? 'em branco' : 'sua resposta: ' + LETRAS[p.escolhida]) + '; gabarito: ' + LETRAS[p.q.correctIndex] + ')</em></li>';
      });
      html += '</ul></div>';
    } else {
      html += '<div class="card destaque-ok"><p>✔ Nenhuma questão errada ou em branco. Parabéns!</p></div>';
    }

    porId('res-conteudo').innerHTML = html;
    renderizarGabaritoComentado();
  }

  // Gabarito comentado — disponível somente após a entrega.
  function renderizarGabaritoComentado() {
    var html = '<h3>Gabarito comentado (somente após a entrega)</h3>';
    estadoSimulado.itens.forEach(function (item, i) {
      var q = mapaQuestoes[item.qid];
      var escolhida = estadoSimulado.respostas[item.qid];
      var status = escolhida === undefined ? 'Em branco' :
        (escolhida === q.correctIndex ? '✔ Acertou' : '✘ Errou (sua resposta: ' + LETRAS[item.ordemAlternativas.indexOf(escolhida)] + ')');
      html += '<details class="gab-item"><summary>' + (i + 1) + '. [' + esc(q.discipline) + '] ' +
        esc(q.statement.slice(0, 110)) + (q.statement.length > 110 ? '…' : '') +
        ' — <strong>' + esc(status) + '</strong></summary>';
      html += '<div class="gab-corpo">';
      html += '<p class="enunciado">' + esc(q.statement).replace(/\n/g, '<br>') + '</p>';
      html += '<p><strong>Gabarito: ' + LETRAS[q.correctIndex] + '</strong> — ' + esc(q.options[q.correctIndex]) + '</p>';
      html += '<p>' + esc(q.explanation) + '</p>';
      html += '<details><summary>Explicação de cada alternativa</summary><ol>';
      for (var k = 0; k < 4; k++) {
        html += '<li><strong>' + LETRAS[k] + ')</strong> ' + esc(q.options[k]) + ' — <em>' + esc(q.optionExplanations[k]) + '</em></li>';
      }
      html += '</ol></details>';
      html += '<p class="meta-referencia"><strong>Referência:</strong> ' + esc(q.sourceReference) + '</p>';
      html += '</div></details>';
    });
    porId('res-gabarito').innerHTML = html;
  }

  function revisarRespostasSimulado() {
    // A revisão é somente leitura: rola até o gabarito comentado.
    porId('res-gabarito').scrollIntoView({ behavior: 'smooth', block: 'start' });
    var primeiro = porId('res-gabarito').querySelector('details');
    if (primeiro) primeiro.open = true;
  }

  function novoSimulado() {
    confirmar('Novo simulado', 'O simulado atual (já entregue) será substituído por um novo. A nota anterior permanece no seu histórico. Deseja continuar?', 'Sim, iniciar novo simulado', function () {
      Armazenamento.limparSimulado();
      estadoSimulado = null;
      renderizarIntroSimulado();
    });
  }

  function descartarSimuladoEmAndamento() {
    confirmar('Descartar simulado em andamento', 'O simulado em andamento será perdido, sem contabilizar nota. Deseja descartar?', 'Descartar', function () {
      Armazenamento.limparSimulado();
      estadoSimulado = null;
      renderizarIntroSimulado();
    });
  }

  /* =======================================================================
     8. VISÃO: CADERNO DE ERROS
     ======================================================================= */

  var filtrosErros = { disciplina: '', topico: '' };

  function renderizarErros() {
    var caderno = Armazenamento.obterCaderno();
    var progresso = Armazenamento.obterProgresso();
    var qids = Object.keys(caderno.erros);

    // Pendentes x resolvidos (histórico preservado)
    var pendentes = qids.filter(function (qid) { return caderno.erros[qid].pendente; });
    porId('erros-contador').innerHTML = '<strong>' + pendentes.length + '</strong> questão(ões) ainda pendente(s) de domínio' +
      (qids.length > pendentes.length ? ' · ' + (qids.length - pendentes.length) + ' já dominada(s) no histórico' : '');

    // Filtros (disciplinas e tópicos presentes no caderno)
    var selDisc = porId('er-f-disciplina');
    var discAtual = selDisc.value;
    var discs = {};
    qids.forEach(function (qid) { var q = mapaQuestoes[qid]; if (q) discs[q.discipline] = true; });
    selDisc.innerHTML = '<option value="">Todas as disciplinas</option>';
    Object.keys(discs).sort().forEach(function (d) {
      var opt = document.createElement('option'); opt.value = d; opt.textContent = d;
      selDisc.appendChild(opt);
    });
    selDisc.value = discAtual;

    var selTop = porId('er-f-topico');
    var topAtual = selTop.value;
    var tops = {};
    qids.forEach(function (qid) {
      var q = mapaQuestoes[qid];
      if (!q) return;
      if (filtrosErros.disciplina && q.discipline !== filtrosErros.disciplina) return;
      tops[q.topic] = true;
    });
    selTop.innerHTML = '<option value="">Todos os tópicos</option>';
    Object.keys(tops).sort().forEach(function (t) {
      var opt = document.createElement('option'); opt.value = t; opt.textContent = t;
      selTop.appendChild(opt);
    });
    selTop.value = topAtual;

    // Lista
    var lista = porId('erros-lista');
    var filtrados = qids.filter(function (qid) {
      var q = mapaQuestoes[qid];
      if (!q) return false;
      if (filtrosErros.disciplina && q.discipline !== filtrosErros.disciplina) return false;
      if (filtrosErros.topico && q.topic !== filtrosErros.topico) return false;
      return true;
    });

    // Marcadas para revisão (Estudar/caderno) — exibidas à parte
    var revisaoQids = Object.keys(progresso.revisao || {}).filter(function (qid) { return mapaQuestoes[qid]; });

    if (filtrados.length === 0 && revisaoQids.length === 0) {
      lista.innerHTML = '<div class="card destaque-neutro"><p>Nenhuma questão no caderno de erros' +
        (filtrosErros.disciplina || filtrosErros.topico ? ' para os filtros escolhidos' : '') + '. ' +
        'As questões erradas nas sessões de estudo e nos simulados aparecem aqui automaticamente.</p></div>';
      return;
    }

    var html = '';
    if (filtrados.length) {
      html += '<h3>Erros (' + filtrados.length + ')</h3>';
      filtrados.forEach(function (qid) {
        var q = mapaQuestoes[qid];
        var entrada = caderno.erros[qid];
        var marcadaRev = !!progresso.revisao[qid];
        html += '<div class="card erro-card">';
        html += '<div class="meta-questao">';
        html += '<span class="badge badge-' + slugDisciplina(q.discipline) + '">' + esc(q.discipline) + '</span>';
        html += '<span class="meta-info">' + esc(q.topic) + '</span>';
        html += '<span class="meta-info ' + (entrada.pendente ? 'pendente' : 'dominada') + '">' +
          (entrada.pendente ? 'Pendente de domínio' : '✔ Domínio confirmado') + '</span>';
        html += '<span class="meta-info">Errada ' + entrada.vezesErradas + 'x</span>';
        html += '</div>';
        html += '<p class="enunciado">' + esc(q.statement.slice(0, 220)) + (q.statement.length > 220 ? '…' : '') + '</p>';
        if (entrada.ultimaEscolhida !== undefined) {
          html += '<p class="erro-detalhes">Sua última resposta: <strong>' + LETRAS[entrada.ultimaEscolhida] + '</strong> · ' +
            'Gabarito: <strong>' + LETRAS[q.correctIndex] + '</strong></p>';
        }
        html += '<details class="explicacao-alternativas"><summary>Ver explicação</summary><p>' + esc(q.explanation) + '</p></details>';
        html += '<div class="erro-acoes">';
        html += '<button type="button" class="btn btn-primario" data-refazer="' + esc(qid) + '">Refazer questão</button>';
        html += '<button type="button" class="btn btn-secundario" data-revisar="' + esc(qid) + '">' +
          (marcadaRev ? '★ Remover revisão' : '☆ Marcar para revisão') + '</button>';
        html += '</div></div>';
      });
    }

    if (revisaoQids.length) {
      html += '<h3>Marcadas para revisão (' + revisaoQids.length + ')</h3>';
      revisaoQids.forEach(function (qid) {
        var q = mapaQuestoes[qid];
        html += '<div class="card revisao-card"><span class="badge badge-' + slugDisciplina(q.discipline) + '">' + esc(q.discipline) + '</span> ' +
          esc(q.statement.slice(0, 160)) + (q.statement.length > 160 ? '…' : '') +
          ' <button type="button" class="btn btn-secundario btn-pequeno" data-revisar="' + esc(qid) + '">☆ Remover marcação</button></div>';
      });
    }

    lista.innerHTML = html;

    Array.prototype.forEach.call(lista.querySelectorAll('[data-refazer]'), function (btn) {
      btn.addEventListener('click', function () { abrirRefazerIndividual(btn.getAttribute('data-refazer')); });
    });
    Array.prototype.forEach.call(lista.querySelectorAll('[data-revisar]'), function (btn) {
      btn.addEventListener('click', function () { alternarRevisao(btn.getAttribute('data-revisar')); });
    });
  }

  function alternarRevisao(qid) {
    var progresso = Armazenamento.obterProgresso();
    if (!progresso.revisao) progresso.revisao = {};
    if (progresso.revisao[qid]) delete progresso.revisao[qid];
    else progresso.revisao[qid] = Date.now();
    Armazenamento.salvarProgresso(progresso);
    renderizarErros();
  }

  // Refazer uma questão individualmente, com correção imediata.
  function abrirRefazerIndividual(qid) {
    var q = mapaQuestoes[qid];
    var corpo = '<div id="refazer-questao"></div><div id="refazer-feedback"></div>';
    abrirModal('Refazer questão', corpo, [{ rotulo: 'Fechar', classe: 'btn-secundario' }]);
    renderizarQuestao(porId('refazer-questao'), {
      questao: q,
      escolhida: null,
      corrigida: false,
      aoResponder: function (posicao) {
        var correta = posicao === q.correctIndex;
        var progresso = Armazenamento.obterProgresso();
        var caderno = Armazenamento.obterCaderno();
        Logica.registrarResposta(progresso, caderno, q.id, posicao, correta, 'refazer');
        Armazenamento.salvarProgresso(progresso);
        Armazenamento.salvarCaderno(caderno);

        // Bloqueia novas respostas e mostra a correção
        renderizarQuestao(porId('refazer-questao'), { questao: q, escolhida: posicao, corrigida: true });
        renderizarFeedback(porId('refazer-feedback'), q, posicao);
        porId('refazer-feedback').scrollIntoView({ block: 'nearest' });
      }
    });
    porId('refazer-feedback').innerHTML = '';
  }

  // Sessão de estudo formada pelas questões erradas pendentes.
  function iniciarSessaoComErros() {
    var caderno = Armazenamento.obterCaderno();
    var qids = Object.keys(caderno.erros).filter(function (qid) {
      return caderno.erros[qid].pendente && mapaQuestoes[qid];
    });
    if (qids.length === 0) {
      abrirModal('Sem erros pendentes', '<p>Você não tem questões pendentes de domínio no caderno de erros.</p>');
      return;
    }
    var questoes = embaralhar(qids.map(function (qid) { return mapaQuestoes[qid]; }), Math.random);
    mostrarView('estudar');
    iniciarSessaoEstudo(questaoLimitada(questoes, 20), 'Revisão de erros');
  }

  function questaoLimitada(questoes, max) {
    return questoes.slice(0, max);
  }

  /* =======================================================================
     9. VISÃO: DESEMPENHO
     ======================================================================= */

  function renderizarDesempenho() {
    var progresso = Armazenamento.obterProgresso();
    var caderno = Armazenamento.obterCaderno();
    var historico = Armazenamento.obterHistorico();

    var totalRespostas = 0, totalAcertos = 0, totalErros = 0;
    var porDisciplina = {};
    Object.keys(progresso.respostas).forEach(function (qid) {
      var r = progresso.respostas[qid];
      var q = mapaQuestoes[qid];
      totalAcertos += r.acertos || 0;
      totalErros += r.erros || 0;
      totalRespostas += (r.acertos || 0) + (r.erros || 0);
      if (q) {
        if (!porDisciplina[q.discipline]) porDisciplina[q.discipline] = { acertos: 0, total: 0 };
        porDisciplina[q.discipline].acertos += r.acertos || 0;
        porDisciplina[q.discipline].total += (r.acertos || 0) + (r.erros || 0);
      }
    });

    var html = '';
    if (totalRespostas === 0) {
      html += '<div class="card destaque-neutro"><p><strong>Ainda não há tentativas registradas.</strong> ' +
        'Responda questões no modo Estudar ou conclua um simulado para ver seu desempenho — nada aqui é estimado.</p></div>';
      porId('desp-conteudo').innerHTML = html;
      return;
    }

    var ap = Math.round(totalAcertos / totalRespostas * 100);
    html += '<div class="grade-indicadores">';
    html += indicador('Questões respondidas', totalRespostas);
    html += indicador('Acertos', totalAcertos);
    html += indicador('Erros', totalErros);
    html += indicador('Aproveitamento', ap + '%');
    html += '</div>';

    // Evolução entre simulados concluídos
    html += '<div class="card"><h3>Evolução entre simulados</h3>';
    if (historico.simulados.length === 0) {
      html += '<p class="dica">Nenhum simulado concluído ainda.</p>';
    } else {
      historico.simulados.forEach(function (sim, i) {
        var pctNota = Math.round(sim.nota / SIMULADO_CRITERIOS.totalPontos * 100);
        html += '<div class="barra-linha"><span class="barra-rotulo">Simulado ' + (i + 1) + ' (' + formatarData(sim.data) + ')</span>' +
          '<div class="barra"><div class="barra-preencher" style="width:' + pctNota + '%"></div></div>' +
          '<span class="barra-valor">' + sim.nota + ' pts</span></div>';
      });
    }
    html += '</div>';

    // Desempenho por disciplina
    html += '<div class="card"><h3>Desempenho por disciplina</h3>';
    Object.keys(porDisciplina).forEach(function (d) {
      var pd = porDisciplina[d];
      var pct = pd.total ? Math.round(pd.acertos / pd.total * 100) : 0;
      html += '<div class="barra-linha"><span class="barra-rotulo">' + esc(d) + '</span>' +
        '<div class="barra"><div class="barra-preencher" style="width:' + pct + '%"></div></div>' +
        '<span class="barra-valor">' + pd.acertos + '/' + pd.total + ' (' + pct + '%)</span></div>';
    });
    html += '</div>';

    // Assuntos com maior índice de erros
    var errosPorTopico = {};
    Object.keys(caderno.erros).forEach(function (qid) {
      var q = mapaQuestoes[qid];
      var entrada = caderno.erros[qid];
      if (!q) return;
      if (!errosPorTopico[q.topic]) errosPorTopico[q.topic] = { vezes: 0, pendentes: 0 };
      errosPorTopico[q.topic].vezes += entrada.vezesErradas || 0;
      if (entrada.pendente) errosPorTopico[q.topic].pendentes++;
    });
    var topicosOrdenados = Object.keys(errosPorTopico).sort(function (a, b) {
      return errosPorTopico[b].vezes - errosPorTopico[a].vezes;
    });
    html += '<div class="card"><h3>Assuntos com maior índice de erros</h3>';
    if (topicosOrdenados.length === 0) {
      html += '<p class="dica">Nenhum erro registrado.</p>';
    } else {
      var maxVezes = errosPorTopico[topicosOrdenados[0]].vezes;
      topicosOrdenados.slice(0, 6).forEach(function (t) {
        var info = errosPorTopico[t];
        var pct = maxVezes ? Math.round(info.vezes / maxVezes * 100) : 0;
        html += '<div class="barra-linha"><span class="barra-rotulo">' + esc(t) + '</span>' +
          '<div class="barra barra-erro"><div class="barra-preencher" style="width:' + pct + '%"></div></div>' +
          '<span class="barra-valor">' + info.vezes + ' erro(s)' + (info.pendentes ? ' · ' + info.pendentes + ' pendente(s)' : '') + '</span></div>';
      });
    }
    html += '</div>';

    // Questões ainda não estudadas
    html += '<div class="card"><h3>Questões ainda não estudadas</h3>';
    var naoEstudadas = {};
    var totalNao = 0;
    DISCIPLINAS.forEach(function (d) { naoEstudadas[d] = 0; });
    banco.forEach(function (q) {
      if (!progresso.respostas[q.id]) { naoEstudadas[q.discipline]++; totalNao++; }
    });
    if (totalNao === 0) {
      html += '<p class="dica">Todas as questões do banco já foram respondidas ao menos uma vez. 👏</p>';
    } else {
      html += '<p><strong>' + totalNao + '</strong> de ' + banco.length + ' questões ainda sem resposta.</p>';
      DISCIPLINAS.forEach(function (d) {
        if (!naoEstudadas[d]) return;
        var disponiveis = banco.filter(function (q) { return q.discipline === d; }).length;
        var pct = Math.round((disponiveis - naoEstudadas[d]) / disponiveis * 100);
        html += '<div class="barra-linha"><span class="barra-rotulo">' + esc(d) + '</span>' +
          '<div class="barra"><div class="barra-preencher" style="width:' + pct + '%"></div></div>' +
          '<span class="barra-valor">' + naoEstudadas[d] + ' restante(s)</span></div>';
      });
    }
    html += '</div>';

    // Resumo da última sessão
    html += '<div class="card"><h3>Resumo da última sessão</h3>';
    if (!progresso.ultimaSessao) {
      html += '<p class="dica">Sem sessão registrada.</p>';
    } else {
      var u = progresso.ultimaSessao;
      html += '<p><strong>' + esc(u.rotulo || (u.tipo === 'simulado' ? 'Simulado' : 'Estudo')) + '</strong> — ' + formatarData(u.data) + '</p>';
      html += '<p>Questões: ' + u.total + ' · Acertos: ' + u.acertos + ' · Erros: ' + u.erros +
        (u.brancas ? ' · Em branco: ' + u.brancas : '') + (u.nota !== undefined ? ' · Nota: ' + u.nota + ' pontos' : '') + '</p>';
    }
    html += '</div>';

    porId('desp-conteudo').innerHTML = html;
  }

  /* =======================================================================
     10. NAVEGAÇÃO ENTRE VISÕES E INICIALIZAÇÃO
     ======================================================================= */

  function mostrarView(nome) {
    ['home', 'estudar', 'simulado', 'erros', 'desempenho'].forEach(function (v) {
      var el = porId('view-' + v);
      if (el) el.hidden = (v !== nome);
    });
    Array.prototype.forEach.call(document.querySelectorAll('.nav-btn'), function (btn) {
      btn.setAttribute('aria-current', btn.getAttribute('data-view') === nome ? 'page' : 'false');
    });

    if (nome === 'home') renderizarHome();
    if (nome === 'estudar' && !sessaoEstudo) { porId('est-form-wrap').hidden = false; porId('est-sessao').hidden = true; }
    if (nome === 'simulado') renderizarIntroSimulado();
    if (nome === 'erros') renderizarErros();
    if (nome === 'desempenho') renderizarDesempenho();

    window.scrollTo(0, 0);
  }

  function iniciar() {
    // Carrega o banco e o mapa de questões
    banco = QUESTOES.slice();
    montarMapa(banco);

    // Persistência
    var persistenciaOk = Armazenamento.iniciar();
    var avisoPersistencia = porId('aviso-persistencia');
    if (avisoPersistencia) {
      avisoPersistencia.hidden = persistenciaOk;
    }

    // Navegação principal
    Array.prototype.forEach.call(document.querySelectorAll('.nav-btn'), function (btn) {
      btn.addEventListener('click', function () { mostrarView(btn.getAttribute('data-view')); });
    });

    // Botões da página inicial
    porId('btn-iniciar-simulado').addEventListener('click', function () { mostrarView('simulado'); });
    porId('btn-estudar').addEventListener('click', function () { mostrarView('estudar'); });
    porId('btn-erros').addEventListener('click', function () { mostrarView('erros'); });
    porId('btn-desempenho').addEventListener('click', function () { mostrarView('desempenho'); });

    // Limpar progresso (com confirmação)
    porId('btn-limpar-progresso').addEventListener('click', function () {
      confirmar('Limpar meu progresso',
        'Isso apaga TODO o seu progresso salvo neste computador: respostas, caderno de erros, simulados e histórico. Não há como desfazer. Deseja continuar?',
        'Sim, apagar tudo', function () {
          Armazenamento.limparTudo();
          sessaoEstudo = null;
          estadoSimulado = null;
          if (tickAtivo) { clearInterval(tickAtivo); tickAtivo = null; }
          mostrarView('home');
        });
    });

    // Modo Estudar
    popularFiltrosEstudo();
    porId('est-f-disciplina').addEventListener('change', atualizarTopicosEstudo);
    porId('btn-est-start').addEventListener('click', iniciarSessaoPorFiltros);
    porId('est-btn-anterior').addEventListener('click', function () {
      if (sessaoEstudo && sessaoEstudo.atual > 0) { sessaoEstudo.atual--; renderizarSessaoEstudo(); }
    });
    porId('est-btn-proxima').addEventListener('click', proximaQuestaoEstudo);
    porId('est-btn-marcar').addEventListener('click', function () {
      var s = sessaoEstudo;
      if (!s) return;
      var qid = s.questoes[s.atual].id;
      if (s.marcadas[qid]) delete s.marcadas[qid]; else s.marcadas[qid] = true;
      // Persiste a marcação também no progresso (visão geral de revisão)
      var progresso = Armazenamento.obterProgresso();
      if (!progresso.revisao) progresso.revisao = {};
      if (progresso.revisao[qid]) delete progresso.revisao[qid]; else progresso.revisao[qid] = Date.now();
      Armazenamento.salvarProgresso(progresso);
      renderizarSessaoEstudo();
    });

    // Simulado
    porId('btn-sim-iniciar').addEventListener('click', function () {
      if (estadoSimulado && !estadoSimulado.entregue) {
        confirmar('Já há um simulado em andamento',
          'Iniciar um novo simulado descartará o que está em andamento. Deseja continuar?',
          'Sim, iniciar novo', function () {
            Armazenamento.limparSimulado();
            iniciarNovoSimulado();
          });
      } else {
        iniciarNovoSimulado();
      }
    });
    porId('btn-sim-continuar').addEventListener('click', continuarSimulado);
    porId('btn-sim-descartar').addEventListener('click', descartarSimuladoEmAndamento);
    porId('sim-btn-anterior').addEventListener('click', function () {
      if (estadoSimulado && estadoSimulado.atual > 0) {
        estadoSimulado.atual--;
        Armazenamento.salvarSimulado(estadoSimulado);
        renderizarProvaSimulado();
      }
    });
    porId('sim-btn-proxima').addEventListener('click', function () {
      var s = estadoSimulado;
      if (!s) return;
      if (s.atual < s.itens.length - 1) {
        s.atual++;
        Armazenamento.salvarSimulado(s);
        renderizarProvaSimulado();
      } else {
        // No final, pergunta sobre a entrega
        pedirEntrega();
      }
    });
    porId('sim-btn-marcar').addEventListener('click', marcarRevisaoSimulado);
    porId('sim-btn-entregar').addEventListener('click', pedirEntrega);
    porId('btn-res-revisar').addEventListener('click', revisarRespostasSimulado);
    porId('btn-res-novo').addEventListener('click', novoSimulado);

    // Caderno de erros
    porId('er-f-disciplina').addEventListener('change', function () {
      filtrosErros.disciplina = porId('er-f-disciplina').value;
      filtrosErros.topico = '';
      renderizarErros();
    });
    porId('er-f-topico').addEventListener('change', function () {
      filtrosErros.topico = porId('er-f-topico').value;
      renderizarErros();
    });
    porId('btn-er-sessao').addEventListener('click', iniciarSessaoComErros);

    // Modal: fechar por ESC e clique no overlay
    porId('modal-overlay').addEventListener('click', function (ev) {
      if (ev.target === porId('modal-overlay')) fecharModal();
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && !porId('modal-overlay').hidden) fecharModal();
    });

    // Exibe aviso de persistência, se necessário
    if (!persistenciaOk) {
      var el = porId('aviso-persistencia');
      if (el) el.innerHTML = '<p><strong>Aviso:</strong> não foi possível salvar o progresso neste navegador ' +
        '(localStorage indisponível, possibly por modo restrito). A sessão funciona, mas o progresso não persiste ao fechar a página.</p>';
      el.hidden = false;
    }

    // Visão inicial + recuperação de simulado em andamento
    mostrarView('home');
    var sim = Armazenamento.obterSimulado();
    if (sim && !sim.entregue) {
      estadoSimulado = sim;
      iniciarTickCronometro();
      if (Logica.tempoRestante(sim) <= 0) entregarSimulado(true);
    }
  }

  // A aplicação só toca o DOM após o carregamento completo da página.
  document.addEventListener('DOMContentLoaded', iniciar);
})();
