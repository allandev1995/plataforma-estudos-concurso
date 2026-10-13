/* =========================================================================
   storage.js — Persistência local da plataforma
   ----------------------------------------------------------------------------
   - Usa exclusivamente o localStorage do navegador (sem servidor, sem nuvem).
   - Cada categoria de dados tem uma chave versionada: se o formato mudar no
     futuro, basta incrementar a versão para evitar leitura de dados antigos.
   - Todas as leituras/gravações são protegidas por try/catch: se o navegador
     bloquear o localStorage (alguns casos em file://), a aplicação continua
     funcionando em memória, apenas sem salvar entre sessões.
   ========================================================================= */

(function () {
  'use strict';

  // Prefixo e versão das chaves -------------------------------------------
  var PREFIXO = 'gmsg_';
  var VERSAO = 1;

  var CHAVES = {
    progresso: PREFIXO + 'progresso_v' + VERSAO, // respostas de estudo e simulado
    caderno: PREFIXO + 'caderno_v' + VERSAO,     // caderno de erros
    simulado: PREFIXO + 'simulado_v' + VERSAO,   // simulado em andamento
    historico: PREFIXO + 'historico_v' + VERSAO, // simulados concluídos
    prefs: PREFIXO + 'prefs_v' + VERSAO          // preferências do usuário
  };

  // Memória temporária (fallback quando o localStorage está indisponível)
  var memoria = {};

  function localStorageDisponivel() {
    try {
      var chaveTeste = PREFIXO + '_teste';
      window.localStorage.setItem(chaveTeste, '1');
      window.localStorage.removeItem(chaveTeste);
      return true;
    } catch (erro) {
      return false;
    }
  }

  var temLocalStorage = false;

  // Lê uma chave já versionada; devolve null se inválida/inexistente.
  function ler(chave) {
    var bruto = null;
    try {
      bruto = temLocalStorage ? window.localStorage.getItem(chave) : memoria[chave];
    } catch (erro) {
      bruto = memoria[chave] || null;
    }
    if (bruto === null || bruto === undefined) return null;
    try {
      var dados = JSON.parse(bruto);
      return (dados && typeof dados === 'object') ? dados : null;
    } catch (erro) {
      // Dado corrompido: descarta em vez de derrubar a aplicação.
      return null;
    }
  }

  // Grava uma chave; devolve true se conseguiu persistir.
  function salvar(chave, valor) {
    var bruto;
    try {
      bruto = JSON.stringify(valor);
    } catch (erro) {
      return false;
    }
    memoria[chave] = bruto;
    if (!temLocalStorage) return false;
    try {
      window.localStorage.setItem(chave, bruto);
      return true;
    } catch (erro) {
      // Quota excedida ou modo privado: mantém ao menos na memória.
      return false;
    }
  }

  function remover(chave) {
    delete memoria[chave];
    try {
      if (temLocalStorage) window.localStorage.removeItem(chave);
    } catch (erro) { /* ignora */ }
  }

  // ---------- Fábricas de estruturas padrão ----------

  function progressoPadrao() {
    return {
      versao: VERSAO,
      // respostas[qid] = { acertos, erros, ultimaData, ultimaEscolhida, ultimaCorreta }
      respostas: {},
      // revisao[qid] = data (marcação para revisão, vinda do Estudar ou do caderno)
      revisao: {},
      // resumo da última sessão de estudo ou do último simulado entregue
      ultimaSessao: null
    };
  }

  function cadernoPadrao() {
    return {
      versao: VERSAO,
      // erros[qid] = { vezesErradas, pendente, historico: [...] }
      erros: {}
    };
  }

  function historicoPadrao() {
    return { versao: VERSAO, simulados: [] };
  }

  function prefsPadrao() {
    return {
      versao: VERSAO,
      // última configuração usada no modo Estudar
      estudo: { disciplina: '', topico: '', dificuldade: '', quantidade: 10 }
    };
  }

  // ---------- Leitura/escrita por categoria ----------

  function obterProgresso() {
    var p = ler(CHAVES.progresso);
    return (p && p.respostas) ? p : progressoPadrao();
  }
  function salvarProgresso(p) { return salvar(CHAVES.progresso, p); }

  function obterCaderno() {
    var c = ler(CHAVES.caderno);
    return (c && c.erros) ? c : cadernoPadrao();
  }
  function salvarCaderno(c) { return salvar(CHAVES.caderno, c); }

  // Simulado em andamento: pode não existir (null) — é esperado.
  function obterSimulado() { return ler(CHAVES.simulado); }
  function salvarSimulado(s) { return salvar(CHAVES.simulado, s); }
  function limparSimulado() { remover(CHAVES.simulado); }

  function obterHistorico() {
    var h = ler(CHAVES.historico);
    return (h && Array.isArray(h.simulados)) ? h : historicoPadrao();
  }
  function salvarHistorico(h) { return salvar(CHAVES.historico, h); }

  function obterPrefs() {
    var p = ler(CHAVES.prefs);
    return (p && p.estudo) ? p : prefsPadrao();
  }
  function salvarPrefs(p) { return salvar(CHAVES.prefs, p); }

  // "Limpar meu progresso": apaga todas as chaves da aplicação.
  function limparTudo() {
    remover(CHAVES.progresso);
    remover(CHAVES.caderno);
    remover(CHAVES.simulado);
    remover(CHAVES.historico);
    remover(CHAVES.prefs);
    return true;
  }

  // Inicialização (protegida): testa o localStorage uma única vez.
  function iniciar() {
    temLocalStorage = localStorageDisponivel();
    return temLocalStorage;
  }

  // Expõe a API global para o app.js
  window.Armazenamento = {
    iniciar: iniciar,
    disponivel: function () { return temLocalStorage; },
    obterProgresso: obterProgresso,
    salvarProgresso: salvarProgresso,
    obterCaderno: obterCaderno,
    salvarCaderno: salvarCaderno,
    obterSimulado: obterSimulado,
    salvarSimulado: salvarSimulado,
    limparSimulado: limparSimulado,
    obterHistorico: obterHistorico,
    salvarHistorico: salvarHistorico,
    obterPrefs: obterPrefs,
    salvarPrefs: salvarPrefs,
    limparTudo: limparTudo
  };
})();
