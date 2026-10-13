/* =========================================================================
   BANCO DE QUESTÕES — Plataforma de Estudos
   Guarda Municipal de São Gonçalo (RJ) — Edital nº 001/PMSG/2026 (SELECON)

   COMO EDITAR ESTE ARQUIVO
   - Cada questão é um objeto da lista QUESTOES.
   - "correctIndex" é o índice da alternativa correta: 0 = A, 1 = B, 2 = C, 3 = D.
   - "options" deve ter exatamente 4 textos; "optionExplanations" também 4.
   - "points": 2 para Conhecimentos Específicos (peso 2 no edital), 1 para as demais.
   - "sourceType": "autoral" (escrita para este banco) ou "prova-anterior"
     (transcrita da Prova Objetiva do Edital nº 003/PMSG/2020).
   - Dificuldade aceita: "facil", "intermediaria" ou "dificil".
   ========================================================================= */

// Disciplinas na ordem oficial do edital (item 9.5).
const DISCIPLINAS = [
  'Língua Portuguesa',
  'Noções de Direito',
  'Legislação Extravagante',
  'Conhecimentos Específicos',
  'Informática'
];

// Distribuição oficial do "Simulado completo" (Edital nº 001/PMSG/2026, item 9.5):
// 80 questões, 100 pontos, 4 horas de prova; Conhecimentos Específicos vale 2 pontos.
const SIMULADO_DISTRIBUICAO = {
  'Língua Portuguesa': { questoes: 15, pontosPorQuestao: 1 },
  'Noções de Direito': { questoes: 20, pontosPorQuestao: 1 },
  'Legislação Extravagante': { questoes: 15, pontosPorQuestao: 1 },
  'Conhecimentos Específicos': { questoes: 20, pontosPorQuestao: 2 },
  'Informática': { questoes: 10, pontosPorQuestao: 1 }
};

// Tempo do simulado em milissegundos: 4 horas (edital, item 8.21).
const SIMULADO_TEMPO_MS = 4 * 60 * 60 * 1000;

// Critérios simulados de aproveitamento (edital, item 9.6): pelo menos 50 pontos
// e nenhuma disciplina com nota zero.
const SIMULADO_CRITERIOS = { pontosMinimas: 50, totalPontos: 100, semDisciplinaZerada: true };

const QUESTOES = [

/* =========================================================================
   1. LÍNGUA PORTUGUESA (30 questões)
   ========================================================================= */
{
  id: 'lp-001',
  discipline: 'Língua Portuguesa',
  topic: 'Interpretação de textos',
  subtopic: 'Gêneros textuais',
  difficulty: 'intermediaria',
  statement: 'Leia o trecho a seguir.\n\n"Prezado Sr. Secretário, comunicamos que a campanha de vacinação será ampliada no próximo mês, conforme deliberação do colegiado. Solicitamos, se possível, a disponibilização de dois veículos oficiais para o deslocamento das equipes." (Trecho adaptado de ofício interno)\n\nA finalidade principal do texto é:',
  options: [
    'relatar um fato ocorrido no passado de forma imparcial',
    'solicitar um apoio logístico e comunicar uma decisão',
    'convencer o leitor de uma tese polêmica',
    'divulgar um produto para um público consumidor'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Trata-se de correspondência oficial (ofício) cujo objetivo é comunicar uma decisão (ampliação da campanha) e solicitar apoio (dois veículos). Comunicar e solicitar são finalidades típicas da correspondência administrativa, que deve ser clara, objetiva e impessoal.',
  optionExplanations: [
    'Relatar fatos passados de forma imparcial é característica de textos jornalísticos ou históricos, não de ofícios.',
    'Correto: o texto comunica uma deliberação e, em seguida, formula pedido de apoio — finalidades típicas do gênero.',
    'Textos argumentativos buscam defender uma tese; aqui não há tese polêmica em disputa.',
    'Textos publicitários promovem produtos ou serviços a consumidores, o que não ocorre.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-002',
  discipline: 'Língua Portuguesa',
  topic: 'Interpretação de textos',
  subtopic: 'Tipos e gêneros textuais',
  difficulty: 'facil',
  statement: 'Um texto que apresenta fatos com início, meio e fim, organizados em uma sequência temporal, e que costuma usar verbos no pretérito, é predominantemente:',
  options: [
    'narrativo',
    'descritivo',
    'expositivo',
    'prescritivo'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O tipo textual narrativo organiza acontecimentos em uma sequência temporal e usa predominantemente verbos no passado (pretérito perfeito e imperfeito).',
  optionExplanations: [
    'Correto: sequência temporal e verbos no passado são marcas da narração.',
    'O tipo descritivo retrata características de pessoas, lugares ou objetos, sem necessariamente haver temporalidade.',
    'O tipo expositivo explica ideias e conceitos; verbos do passado não são sua marca.',
    'O tipo prescritivo (ou injuntivo) dá ordens e instruções, com verbos no imperativo ou no infinitivo.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-003',
  discipline: 'Língua Portuguesa',
  topic: 'Interpretação de textos',
  subtopic: 'Ideia principal e inferência',
  difficulty: 'intermediaria',
  statement: 'Leia o texto.\n\n"A implantação de câmeras de monitoramento em espaços públicos reduziu, segundo levantamento local, a incidência de furtos em vias de grande movimento. O equipamento, porém, não substitui a presença do agente de segurança, que interpreta o contexto e age preventivamente."\n\nA ideia central do texto é:',
  options: [
    'a tecnologia é suficiente para garantir a segurança urbana',
    'o monitoramento por câmeras deve ser proibido',
    'a tecnologia apoia, mas não substitui a atuação humana na segurança',
    'os furtos ocorrem apenas em vias de pouco movimento'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'O texto reconhece o benefício das câmeras e, no segundo período, introduz com "porém" a limitação da tecnologia: ela não substitui a presença e a interpretação de contexto pelo agente.',
  optionExplanations: [
    'Contraria o texto, que afirma explicitamente a limitação do equipamento.',
    'Nada no texto defende proibição; o monitoramento é apresentado como benéfico.',
    'Correto: as câmeras reduzem furtos, mas não substituem a atuação humana — é o que diz o período iniciado por "porém".',
    'O texto diz o contrário: a redução ocorreu em vias de grande movimento.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-004',
  discipline: 'Língua Portuguesa',
  topic: 'Ortografia',
  subtopic: 'Emprego das letras',
  difficulty: 'facil',
  statement: 'Em conformidade com a ortografia oficial, o emprego da letra "s" está correto em todas as alternativas, EXCETO em:',
  options: [
    'psicologia',
    'pszicológico',
    'respeito',
    'anestesia'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Quando o "s" se encontra no início do grupo silábico seguido de consoante, grafia-se "s" simples, e não "z": escreve-se psicologia (e não pszicologia).',
  optionExplanations: [
    'Grafia correta: "ps" inicial mantém o "s" simples (psicologia).',
    'Grafia incorreta: a sequência inicial é "ps", sem "z" (psicologia).',
    'Grafia correta: o "s" da preposição latina "re" antes de "s" da raiz mantém-se simples (respeito).',
    'Grafia correta: "s" simples entre vogais com som de "z" (anestesia).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-005',
  discipline: 'Língua Portuguesa',
  topic: 'Acentuação gráfica',
  subtopic: 'Paroxítonas e esdrúxulas',
  difficulty: 'facil',
  statement: 'Assinale a alternativa em que todas as palavras são acentuadas pela mesma regra (grafia com acento obrigatório por serem proparoxítonas — esdrúxulas):',
  options: [
    'ótimo, câmera, técnica',
    'jovem, prata, costa',
    'professor, menina, campo',
    'cidade, festa, música'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'São proparoxítonas (esdrúxulas) as palavras acentuadas na antepenúltima sílaba: "ótimo", "câmera" e "técnica" são todas esdrúxulas e, por isso, sempre acentuadas, independentemente de terminação.',
  optionExplanations: [
    'Correto: as três são esdrúxulas e recebem acento gráfico por força da regra (não por terminação).',
    '"Jovem", "prata" e "costa" são paroxítonas terminadas em "m", "a" e "a", que não se acentuam.',
    '"Professor", "menina" e "campo" são paroxítonas em "o" e "a", grafadas sem acento.',
    'Dentre as três, apenas "música" é acentuada (esdrúxula); as outras são paroxítonas comuns.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-006',
  discipline: 'Língua Portuguesa',
  topic: 'Acentuação gráfica',
  subtopic: 'Acentuação de palavras estrangeiras e termos técnicos',
  difficulty: 'intermediaria',
  statement: 'Pelas regras de acentuação gráfica vigentes (Código de Acentuação do Acordo Ortográfico), assinale a opção correta:',
  options: [
    'As palavras paroxítonas terminadas em "o" e "a" não recebem acento gráfico.',
    'Todas as monossílabas tônicas são grafadas sem acento gráfico.',
    'As proparoxítonas (esdrúxulas) podem ser escritas sem acento gráfico.',
    'As oxítonas terminadas em "o" ou "e" nunca recebem acento gráfico.'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A regra geral do Código de Acentuação estabelece que as paroxítonas terminadas em "o" e "a" não são acentuadas (ex.: menina, objeto). As demais afirmações contradizem regras básicas: monossílabas tônicas como "é", "já", "só" e "pé" são acentuadas; toda proparoxítona é sempre acentuada (ex.: ótimo, música); oxítonas terminadas em "o" e "e" são acentuadas (ex.: avô, café).',
  optionExplanations: [
    'Correto: paroxítonas terminadas em "o" e "a" não recebem acento gráfico (ex.: menina, objeto, campo).',
    'Falsa: há monossílabas tônicas acentuadas, como "é", "já", "só", "pé" e "ô".',
    'Falsa: toda proparoxítona é sempre acentuada, independentemente da terminação (ex.: ótimo, técnica, música).',
    'Falsa: oxítonas terminadas em "o" e "e" são sempre acentuadas (ex.: avô, café, pó).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-007',
  discipline: 'Língua Portuguesa',
  topic: 'Coesão textual',
  subtopic: 'Conectores e sequenciação',
  difficulty: 'facil',
  statement: 'No período "A reunião foi adiada; portanto, os servidores serão avisados com antecedência", o conector "portanto" estabelece relação:',
  options: [
    'de oposição',
    'de conclusão',
    'de causa',
    'de condição'
  ],
  correctIndex: 1,
  points: 1,
  explanation: '"Portanto" é conector conclusivo (resultativo): introduz a consequência lógica do que foi afirmado antes.',
  optionExplanations: [
    'Oposição seria marcada por "entretanto", "porém", "contudo".',
    'Correto: "portanto" introduz a conclusão ou consequência do que foi dito.',
    'Causa seria marcada por "porque", "visto que", "uma vez que".',
    'Condição seria marcada por "se", "caso", "contanto que".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-008',
  discipline: 'Língua Portuguesa',
  topic: 'Coesão textual',
  subtopic: 'Referenciação e substituição',
  difficulty: 'intermediaria',
  statement: 'Considere a frase: "O delegado recebeu o relatório do agente; este estava completo e assinado." O pronome "este" faz referência a:',
  options: [
    'o delegado',
    'o relatório',
    'o agente',
    'a assinatura'
  ],
  correctIndex: 1,
  points: 1,
  explanation: '"Este" é pronome demonstrativo que substitui o substantivo masculino anterior mais próximo compatível: o relatório (coisa, não pessoa). "Relatório" é o antecedente lógico de "estava completo e assinado".',
  optionExplanations: [
    '"O delegado" é pessoa; o pronome "este" não se refere a pessoas nesse contexto.',
    'Correto: "este" substitui "relatório", o antecedente compatível em gênero e sentido.',
    'Embora masculino, "agente" não é o antecedente natural de "estava completo e assinado".',
    '"Assinatura" não aparece como antecedente; "assinado" é particípio do verbo, não referência.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-009',
  discipline: 'Língua Portuguesa',
  topic: 'Tempos e modos verbais',
  subtopic: 'Correlação verbal',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase em que a correlação de tempos e modos verbais está correta:',
  options: [
    'Quando ele chegou, todos já haviam saído do prédio.',
    'Quando ele chega, todos já haviam saído do prédio.',
    'Quando ele chegou, todos já saíram do prédio no futuro.',
    'Quando ele chegará, todos já sairiam do prédio.'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Na oração subordinada temporal no pretérito perfeito, a oração principal no mais-que-perfeito composto indica ação anterior: "quando ele chegou" (passado) e "todos já haviam saído" (ação anterior no passado) — correlação correta.',
  optionExplanations: [
    'Correto: pretérito perfeito na temporal + mais-que-perfeito composto na principal = ação anterior no passado.',
    '"Chega" (presente) não se correlaciona com "haviam saído" (passado), gerando salto temporal incoerente.',
    'A expressão "no futuro" no enunciado quebra a coerência temporal.',
    '"Chegará" (futuro do presente) combinado a "sairiam" (condicional) não expressa a sequência lógica descrita.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-010',
  discipline: 'Língua Portuguesa',
  topic: 'Estrutura morfossintática',
  subtopic: 'Subordinação',
  difficulty: 'intermediaria',
  statement: 'Na oração "O oficial confirmou que a ocorrência havia sido registrada", a oração subordinada "que a ocorrência havia sido registrada" é do tipo:',
  options: [
    'adverbial condicional',
    'substantiva objetiva direta',
    'adjetiva restritiva',
    'adverbial final'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A oração introduzida por "que" ocupa a função de complemento do verbo "confirmou" (alguém confirmou algo), sendo, portanto, subordinada substantiva objetiva direta.',
  optionExplanations: [
    'A condicional seria introduzida por "se", "caso" e indicaria condição.',
    'Correto: "que..." completa o sentido de "confirmou" como objeto — substantiva objetiva direta.',
    'A adjetiva qualificaria um substantivo e seria introduzida por "cujo", "que", "onde", com sentido de restrição.',
    'A final indicaria propósito, com "para que", "a fim de que".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-011',
  discipline: 'Língua Portuguesa',
  topic: 'Estrutura morfossintática',
  subtopic: 'Coordenação',
  difficulty: 'facil',
  statement: 'Em "O serviço foi concluído, mas o relatório ainda não foi assinado", o nexo "mas" estabelece relação de coordenação:',
  options: [
    'aditiva',
    'adversativa',
    'alternativa',
    'explicativa'
  ],
  correctIndex: 1,
  points: 1,
  explanation: '"Mas" é nexo adversativo: une orações com sentido de oposição ou contraste.',
  optionExplanations: [
    'Aditivas unem ideias somadas: "e", "bem como", "também".',
    'Correto: "mas" expressa oposição entre o serviço concluído e o relatório pendente.',
    'Alternativas apresentam opções: "ou", "senão".',
    'Explicativas fundamentam a ideia: "porque", "pois", "logo".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-012',
  discipline: 'Língua Portuguesa',
  topic: 'Classes de palavras',
  subtopic: 'Morfologia',
  difficulty: 'facil',
  statement: 'Na frase "Os servidores agiram rapidamente na emergência", a palavra "rapidamente" é:',
  options: [
    'adjetivo',
    'advérbio',
    'substantivo',
    'conjunção'
  ],
  correctIndex: 1,
  points: 1,
  explanation: '"Rapidamente" termina em "-mente" (sufixo advérbial), deriva do adjetivo "rápido" e modifica o verbo "agiram", indicando modo. É, portanto, advérbio de modo.',
  optionExplanations: [
    'Adjetivos qualificam substantivos e não terminam obrigatoriamente em "-mente".',
    'Correto: forma derivada com o sufixo "-mente" que modifica o verbo — advérbio de modo.',
    'Substantivos nomeiam pessoas, coisas ou ideias; "rapidamente" não nomeia.',
    'Conjunções unem orações ou termos; "rapidamente" não cumpre essa função.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-013',
  discipline: 'Língua Portuguesa',
  topic: 'Concordância verbal',
  subtopic: 'Verbo impessoal "haver"',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase redigida em conformidade com a norma-padrão:',
  options: [
    'Houveram muitos motivos para a reunião.',
    'Há muitos motivos para a reunião.',
    'Houveram-se muitos motivos para a reunião.',
    'Hão haver muitos motivos para a reunião.'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O verbo "haver" no sentido de "existir" é impessoal: fica sempre no singular e não admite flexão de número nem crase no sujeito: "Há muitos motivos".',
  optionExplanations: [
    '"Houveram" flexiona o verbo impessoal no plural; o correto seria "houve".',
    'Correto: "haver" com sentido de existir é impessoal e fica no singular ("há").',
    'Forma pronominal inexistente na norma-padrão para esse sentido.',
    'Locução gramaticalmente impossível ("hão haver" não existe na norma-padrão).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-014',
  discipline: 'Língua Portuguesa',
  topic: 'Concordância verbal',
  subtopic: 'Sujeito posposto e oração sem sujeito',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase em que a concordância verbal está inteiramente correta:',
  options: [
    'Chegaram três novos servidores na unidade ontem.',
    'Chegou três novos servidores na unidade ontem.',
    'Foi entregues dois relatórios à comissão.',
    'Fazem dois anos que o prédio foi inaugurado.'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O sujeito "três novos servidores" (posposto ao verbo) é plural, por isso o verbo fica no plural: "chegaram". Já "fazer" com sentido de tempo decorrido é impessoal (faz dois anos) e o particípio deve concordar com o sujeito (foram entregues os relatórios).',
  optionExplanations: [
    'Correto: sujeito plural posposto, verbo no plural.',
    'O verbo deveria concordar com "servidores" (plural): "chegaram".',
    'O particípio deve concordar com o sujeito "dois relatórios" (masculino plural): "foram entregues".',
    'Com sentido de tempo decorrido, "fazer" é impessoal: o correto é "faz dois anos".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-015',
  discipline: 'Língua Portuguesa',
  topic: 'Concordância nominal',
  subtopic: 'Flexão de nomes',
  difficulty: 'facil',
  statement: 'A frase que apresenta concordância nominal correta é:',
  options: [
    'Foram emitidos dois primeiros avisos oficiais.',
    'Foram emitidas dois avisos oficiais.',
    'Os dois avisos oficiais foram emitido ontem.',
    'Dois avisos oficiais foram emitidas ontem.'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O artigo e o numeral flexionam-se em número e gênero conforme o substantivo: "dois avisos". O particípio "emitidos" também concorda com "avisos" (masculino plural).',
  optionExplanations: [
    'Correto: artigo, numeral e particípio flexionados com "avisos" (masculino plural).',
    'O numeral e o particípio devem ser masculinos: "dois avisos ... emitidos".',
    'O particípio deve concordar com o sujeito no plural: "emitidos".',
    'O particípio deve ser masculino plural: "emitidos".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-016',
  discipline: 'Língua Portuguesa',
  topic: 'Sinal indicativo de crase',
  subtopic: 'Regras de emprego',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase em que o sinal indicativo de crase está empregado corretamente em todas as palavras em que aparece:',
  options: [
    'Dirigiu-se à Brasília para tratar do assunto.',
    'O trabalho será entregue à partir de segunda-feira.',
    'Obrigado à todos os presentes pela atenção.',
    'Chegamos à tarde e fomos à recepção do órgão.'
  ],
  correctIndex: 3,
  points: 1,
  explanation: 'Em "à tarde" há a locução consagrada com crase, e em "à recepção" a preposição exigida pelo verbo "ir" funde-se com o artigo feminino antes de "recepção". As demais alternativas violam regras clássicas: nomes de cidades como Brasília não recebem crase, "a partir de" é locução prepositiva sem crase antes de "partir" (palavra masculina) e "a todos" é construção sem artigo.',
  optionExplanations: [
    'Nomes de cidades que não iniciam com substantivo comum não recebem crase: o correto é "dirigiu-se a Brasília".',
    'A locução "a partir de" não admite crase, pois "partir" é palavra masculina e a locução já contém a preposição: "entregue a partir de segunda-feira".',
    '"A todos" não leva crase, pois "todos" é usado sem artigo nessa construção de agradecimento.',
    'Correto: "à tarde" é locução fixa com crase e "à recepção" resulta da fusão da preposição "a" com o artigo feminino.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-017',
  discipline: 'Língua Portuguesa',
  topic: 'Sinal indicativo de crase',
  subtopic: 'Verbo + preposição + palavra iniciada por "a"',
  difficulty: 'intermediaria',
  statement: 'Em "A equipe dirigiu-se à delegacia para registrar a ocorrência", a crase ocorre porque:',
  options: [
    'o verbo "dirigir-se" pede a preposição "a", mas "delegacia" é iniciada por consoante e, por isso, dispensa o sinal de crase',
    'a preposição exigida pelo verbo encontra o artigo feminino "a" antes de "delegacia"',
    '"Delegacia" é proparoxítona e sempre recebe crase',
    'a expressão "dirigir-se a" é locução que dispensa preposição'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A crase é a fusão da preposição "a" exigida pelo verbo "dirigir-se" com o artigo "a" que antecede o substantivo feminino "delegacia": "dirigiu-se a + a delegacia" = "dirigiu-se à delegacia".',
  optionExplanations: [
    'A alternativa contém contradição ("feminina iniciada por consoante" e "artigo elíptico") e está mal formulada.',
    'Correto: preposição exigida pelo verbo + artigo feminino antes do substantivo = crase.',
    'O acento da palavra não determina crase; a regra é sintática.',
    '"Dirigir-se a" exige preposição; a afirmação de que dispensa preposição é falsa.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-018',
  discipline: 'Língua Portuguesa',
  topic: 'Colocação pronominal',
  subtopic: 'Pronomes átonos',
  difficulty: 'intermediaria',
  statement: 'Assinale a opção em que o pronome átono está colocado de acordo com o uso do português brasileiro contemporâneo (próclise com verbos no modo não-finito e com auxiliares):',
  options: [
    'Vamo-nos encontrar no portão às 8 horas.',
    'Vamos nos encontrar no portão às 8 horas.',
    'Encontrar-nos-ei no portão às 8 horas.',
    'Vamos encontra-nos no portão às 8 horas.'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'No português brasileiro, o pronome átono antepõe-se ao verbo (próclise), sobretudo com verbos no modo não-finito e com auxiliares: "vamos nos encontrar" é a forma recomendada pela norma culta contemporânea do Brasil.',
  optionExplanations: [
    'A enclise com verbo no infinitivo ("vamo-nos encontrar") corresponde ao uso europeu; no Brasil, prefere-se "vamos nos encontrar".',
    'Correto: próclise recomendada no português brasileiro ("vamos nos encontrar").',
    'A enclise com auxiliar ("encontrar-nos-ei") corresponde ao uso europeu; no Brasil, prefere-se a próclise ("nos encontrarei").',
    'A ordem "vamos encontra-nos" mistura próclise e enclise e não corresponde a nenhuma construção gramatical regular.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-019',
  discipline: 'Língua Portuguesa',
  topic: 'Pontuação',
  subtopic: 'Vírgula e dois-pontos',
  difficulty: 'facil',
  statement: 'Assinale a frase corretamente pontuada:',
  options: [
    'O planejamento previa três ações, treinamento, fiscalização e prevenção.',
    'O planejamento previa três ações: treinamento, fiscalização e prevenção.',
    'O planejamento previa três ações treinamento; fiscalização: e prevenção.',
    'O planejamento: previa três ações, treinamento; fiscalização e prevenção.'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Os dois-pontos introduzem explicitação ou enumeração que completa o sentido do que foi dito antes: "três ações: treinamento, fiscalização e prevenção". Na enumeração, os itens são separados por vírgulas e o último é unido por "e".',
  optionExplanations: [
    'Sem os dois-pontos, a enumeração fica ambígua; o correto é introduzir a lista com dois-pontos.',
    'Correto: dois-pontos antes da enumeração e vírgulas separando os itens.',
    'Uso de vírgula e dois-pontos intercalados está incorreto para enumeração simples.',
    'Os dois-pontos devem vir após o termo que introduz a lista ("ações"), não após "planejamento".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-020',
  discipline: 'Língua Portuguesa',
  topic: 'Pontuação',
  subtopic: 'Vírgulas com orações',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase corretamente pontuada:',
  options: [
    'Quando o fiscal chegou, a equipe já havia iniciado a vistoria.',
    'Quando o fiscal chegou a equipe, já havia iniciado a vistoria.',
    'Quando, o fiscal chegou; a equipe já havia iniciado a vistoria.',
    'Quando o fiscal chegou: a equipe já havia iniciado a vistoria.'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A oração subordinada adverbial temporal introduzida por "quando", anteposta à principal, deve ser separada dela por vírgula.',
  optionExplanations: [
    'Correto: vírgula separando a oração temporal anteposta da principal.',
    'Sem vírgula, os dois sujeitos se confundem ("fiscal chegou a equipe").',
    'A vírgula não deve separar o conector do verbo, e o ponto-e-vírgula não une orações que formam um período.',
    'Os dois-pontos não se aplicam a oração temporal; a pontuação correta é vírgula.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-021',
  discipline: 'Língua Portuguesa',
  topic: 'Regência verbal',
  subtopic: 'Regência consagrada',
  difficulty: 'intermediaria',
  statement: 'Pela norma-padrão, a frase de regência correta é:',
  options: [
    'O candidato aspira um cargo público desde jovem.',
    'O candidato aspira a um cargo público desde jovem.',
    'O candidato aspira para um cargo público desde jovem.',
    'O candidato aspira de um cargo público desde jovem.'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O verbo "aspirar", no sentido de desejar algo elevado, rege a preposição "a": "aspirar a um cargo".',
  optionExplanations: [
    'A forma "aspirar um cargo" (transitiva direta) é considerada regência inadequada na norma-padrão.',
    'Correto: "aspirar" rege a preposição "a".',
    'A preposição "para" não é regida por "aspirar" nesse sentido.',
    'A preposição "de" não é regida por "aspirar" nesse sentido.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-022',
  discipline: 'Língua Portuguesa',
  topic: 'Pronomes',
  subtopic: 'Pronome relativo',
  difficulty: 'intermediaria',
  statement: 'Assinale a frase em que o pronome relativo está empregado corretamente:',
  options: [
    'O servidor a qual foi convocado compareceu à sala.',
    'O servidor o qual foi convocado compareceu à sala.',
    'O servidor que foi convocado compareceu à sala.',
    'A qual servidor foi convocado compareceu à sala.'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'Quando o pronome relativo "que" substitui pessoa ou coisa e inicia oração subordinada, é correto o uso simples: "o servidor que foi convocado". A forma "o qual" é aceita, mas com artigo flexionado ("o qual"), e "a qual servidor" é construção inexistente.',
  optionExplanations: [
    'A forma correta seria "ao qual" (com preposição, se houvesse) ou "que"; "a qual" sem preposição não substitui "servidor" (masculino).',
    '"O qual" sem preposição é dispensável; o padrão recomenda "que".',
    'Correto: "que" simples para pessoa, sem preposição.',
    'Construção gramaticalmente inválida: o relativo não precede o substantivo assim.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-023',
  discipline: 'Língua Portuguesa',
  topic: 'Correspondência oficial',
  subtopic: 'Manual de Redação da Presidência da República',
  difficulty: 'intermediaria',
  statement: 'Conforme o Manual de Redação da Presidência da República, o documento oficial destinado à comunicação interna de assuntos de interesse ou de competência das unidades de uma mesma entidade, em nível hierárquico equivalente ou inferior, é:',
  options: [
    'o ofício',
    'o memorando',
    'o formulário',
    'o edital'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'No Manual de Redação da Presidência da República, o memorando é o documento de comunicação interna, entre unidades da mesma entidade, em nível hierárquico equivalente ou inferior.',
  optionExplanations: [
    'O ofício é usado para comunicações entre entidades diferentes ou com autoridades, com numeração obrigatória.',
    'Correto: memorando = documento de comunicação interna, em nível hierárquico equivalente ou inferior.',
    'O formulário é documento com campos predeterminados para registro de dados padronizados.',
    'O edital é ato de divulgação pública de normas, concursos ou licitações, não é instrumento de comunicação interna.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa (Manual de Redação da Presidência da República)'
},
{
  id: 'lp-024',
  discipline: 'Língua Portuguesa',
  topic: 'Correspondência oficial',
  subtopic: 'Redação de documentos',
  difficulty: 'intermediaria',
  statement: 'Segundo as diretrizes do Manual de Redação da Presidência da República, a redação de documento oficial deve observar, entre outros princípios:',
  options: [
    'uso da primeira pessoa do plural e linguagem rebuscada',
    'voz passiva obrigatória em todos os períodos',
    'clareza, concisão, impessoalidade e preferência pela voz ativa',
    'uso de jargões técnicos sempre que possível'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'O Manual recomenda linguagem clara, direta e concisa, redigida em terceira pessoa, com impessoalidade e preferência pela voz ativa, evitando formalismos excessivos e estrangeirismos desnecessários.',
  optionExplanations: [
    'A primeira pessoa do plural e a linguagem rebuscada contrariam a impessoalidade e a clareza.',
    'A voz passiva é admitida, mas não é obrigatória; o Manual prefere a voz ativa.',
    'Correto: clareza, concisão, impessoalidade e voz ativa são diretrizes centrais do Manual.',
    'Jargões e estrangeirismos sem necessidade devem ser evitados.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa (Manual de Redação da Presidência da República)'
},
{
  id: 'lp-025',
  discipline: 'Língua Portuguesa',
  topic: 'Correspondência oficial',
  subtopic: 'Adequação ao gênero',
  difficulty: 'facil',
  statement: 'Um servidor precisa solicitar formalmente ao seu superior hierárquico a autorização de deslocamento a serviço. O documento mais adequado, no contexto de comunicação interna do órgão, é:',
  options: [
    'um bilhete informal dirigido ao colega de mesa',
    'uma circular enviada a todas as unidades',
    'um memorando dirigido à autoridade competente',
    'um poema de agradecimento'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'A solicitação formal interna, dirigida a autoridade hierarquicamente superior, cabe ao memorando (ou ao ofício, conforme a entidade); entre as opções, o memorando é o gênero adequado à comunicação interna formal.',
  optionExplanations: [
    'Bilhete informal não é documento oficial nem atende à formalidade exigida.',
    'A circular destina-se a comunicar assuntos de interesse comum a múltiplas unidades, não a solicitação individual.',
    'Correto: memorando é o instrumento de comunicação interna formal para solicitações.',
    'Poema não é gênero da correspondência oficial.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa (Manual de Redação da Presidência da República)'
},
{
  id: 'lp-026',
  discipline: 'Língua Portuguesa',
  topic: 'Verbo "se"',
  subtopic: 'Pronome apassivador e indeterminação',
  difficulty: 'intermediaria',
  statement: 'Na frase "Realizaram-se as reuniões previstas no calendário", o pronome "se" tem função de:',
  options: [
    'apassivador, pois o sujeito ("as reuniões") é paciente da ação',
    'recíproco, pois indica ação mútua entre os participantes',
    ' reflexivo, pois retoma o sujeito da oração',
    'indefinido, pois indetermina o agente da ação'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O "se" é apassivador (ou de substituição de voz passiva): o sujeito "as reuniões" sofre a ação do verbo, e o agente não é relevante. O verbo concorda com o sujeito posposto, no plural: "realizaram-se".',
  optionExplanations: [
    'Correto: "se" + verbo + sujeito = construção apassivadora; o sujeito é paciente.',
    'Recíproco exigiria sentido de ação mútua ("viram-se no espelho" com sentido de mutuamente).',
    'Reflexivo retoma o próprio sujeito do verbo, o que não ocorre aqui.',
    'Indefinido seria um pronome como "alguém", "ninguém", "se" com sentido de "qualquer pessoa".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-027',
  discipline: 'Língua Portuguesa',
  topic: 'Interpretação de textos',
  subtopic: 'Intenção comunicativa',
  difficulty: 'intermediaria',
  statement: 'Leia o aviso.\n\n"ATENÇÃO: o setor de atendimento funcionará, a partir de segunda-feira, das 8h às 14h. Pedimos desculpas pelo inconveniente e reforçamos que os pedidos protocolados até sexta-feira serão atendidos na íntegra."\n\nO aviso cumpre, simultaneamente, as funções de:',
  options: [
    'orientar o público e amenizar o impacto da mudança',
    'critificar o público e encerrar o atendimento',
    'anunciar um produto e promover vendas',
    'determinar pena a quem descumprir o horário'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O texto informa o novo horário (orientação) e pede desculpas pelo inconveniente (mitigação do impacto), funções típicas de avisos administrativos dirigidos ao público.',
  optionExplanations: [
    'Correto: informa o novo horário (orienta) e pede desculpas (ameniza o impacto).',
    'Não há crítica nem encerramento do atendimento.',
    'Não há oferta comercial nem intuito publicitário.',
    'Não há sanção; o aviso é informativo e diplomático.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-028',
  discipline: 'Língua Portuguesa',
  topic: 'Conectores',
  subtopic: 'Relações lógicas',
  difficulty: 'facil',
  statement: 'Em "Embora estivesse chovendo, a patrulha cumpriu o itinerário", o conector "embora" expressa relação de:',
  options: [
    'concessão',
    'causa',
    'finalidade',
    'tempo'
  ],
  correctIndex: 0,
  points: 1,
  explanation: '"Embora" é conector subordinativo concessivo: introduz uma ideia que não impede a realização da ação principal ("mesmo chovendo, a patrulha cumpriu").',
  optionExplanations: [
    'Correto: "embora" expressa concessão (a chuva não impediu a ação).',
    'Causa seria "porque", "visto que", "já que".',
    'Finalidade seria "para que", "a fim de que".',
    'Tempo seria "quando", "enquanto", "assim que".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-029',
  discipline: 'Língua Portuguesa',
  topic: 'Morfossintaxe',
  subtopic: 'Funções sintáticas',
  difficulty: 'intermediaria',
  statement: 'Na frase "O relatório foi entregue ao coordenador pelo relator", a expressão "pelo relator" exerce a função sintática de:',
  options: [
    'complemento nominal',
    'agente da voz passiva',
    'circunstância de modo',
    'sujeito da oração'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Em "foi entregue" (voz passiva analítica), "pelo relator" indica o agente da ação (quem entregou), expresso pela preposição "por" + nome.',
  optionExplanations: [
    'Complemento nominal completo um nome (ex.: "gosto de leitura"); não é o caso.',
    'Correto: "por" + nome em voz passiva indica o agente da ação.',
    'Circunstância de modo responderia "como?" e seria expressa por advérbio ou locução (ex.: "rapidamente").',
    'O sujeito é "o relatório".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},
{
  id: 'lp-030',
  discipline: 'Língua Portuguesa',
  topic: 'Reescrita de textos',
  subtopic: 'Adequação de formalidade',
  difficulty: 'intermediaria',
  statement: 'A frase informal "A gente não deu conta de fechar o relatório hoje, mas amanhã a gente entrega" deve ser reescrita, em linguagem adequada a documento oficial, como:',
  options: [
    'Nós não dermos conta de fechar o relatório, mas amanhã nós entregamos.',
    'A equipe não concluiu a elaboração do relatório nesta data; o documento será entregue amanhã.',
    'A gente não fechou o relatório, né? Mas amanhã a gente fecha, pode confiar.',
    'Relatório não fechou, entrega amanhã, ok?'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A reescrita em linguagem oficial exige impessoalidade, terceira pessoa, vocabulário comum e clareza: "a equipe não concluiu... o documento será entregue". As demais opções mantêm coloquialidade ou apresentam erros gramaticais.',
  optionExplanations: [
    'A forma "dermos" é erro de concordância/tempo verbal ("dar conta" no pretérito é "deu/demos conta"), e a alternativa ainda usa "nós" repetido sem necessidade.',
    'Correto: impessoal, claro, em terceira pessoa, com vocabulário próprio da correspondência oficial.',
    'Linguagem coloquial ("né", "pode confiar") é incompatível com documento oficial.',
    'Frases telegráficas sem verbo auxiliar adequado e com "ok?" não atendem à norma oficial.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Língua Portuguesa'
},

/* =========================================================================
   2. NOÇÕES DE DIREITO (40 questões)
   Constitucional (001-012), Penal (013-024),
   Processual Penal (025-032), Administrativo (033-040)
   ========================================================================= */
{
  id: 'nd-001',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Organização do Estado — Guarda Municipal',
  difficulty: 'facil',
  statement: 'A Constituição Federal de 1988, ao tratar da segurança pública (art. 144), prevê no seu § 8º que os Municípios poderão instituir Guarda Municipal, na forma da lei, para:',
  options: [
    'exercer policiamento ostensivo em todo o território nacional',
    'a proteção de bens, serviços e instalações municipais',
    'substituir a polícia militar nos municípios com até 50 mil habitantes',
    'aplicar penas privativas de liberdade por infrações municipais'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 144, § 8º, da CF/88 é expresso: "Os Municípios poderão instituir Guarda Municipal, na forma da lei, para a proteção de bens, serviços e instalações municipais".',
  optionExplanations: [
    'O policiamento ostensivo compete à polícia militar (art. 144, § 4º); a competência da Guarda Municipal é municipal e não nacional.',
    'Correto: é a finalidade constitucional expressamente prevista no art. 144, § 8º.',
    'A Constituição não prevê substituição da polícia militar pela Guarda Municipal; as instituições coexistem com atribuições distintas.',
    'A aplicação de penas privativas de liberdade é privativa do Poder Judiciário (art. 5º, LIV e LV).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-002',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Princípios da administração pública',
  difficulty: 'facil',
  statement: 'Estão entre os princípios da administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, segundo o art. 37, caput, da Constituição Federal:',
  options: [
    'legalidade, impessoalidade, moralidade, publicidade e eficiência',
    'legalidade, isonomia, razoabilidade, motivação e celeridade',
    'legalidade, moralidade, supremacia do interesse individual, publicidade e eficiência',
    'impessoalidade, supremacia do interesse público, motivação, transparência e economicidade'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 37, caput, da CF/88 enumera exatamente cinco princípios: legalidade, impessoalidade, moralidade, publicidade e eficiência.',
  optionExplanations: [
    'Correto: é a lista exata do art. 37, caput, da CF/88.',
    'Isonomia, razoabilidade, motivação e celeridade são princípios relevantes, mas não constam do rol do art. 37, caput.',
    '"Supremacia do interesse individual" contraria a própria noção de administração pública; não é princípio constitucional.',
    'Motivação e economicidade são princípios do processo administrativo (Lei nº 9.784/1999), mas não integram o rol do art. 37, caput.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-003',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Princípios da administração pública',
  difficulty: 'intermediaria',
  statement: 'O princípio da eficiência foi expressamente incorporado ao rol do art. 37 da Constituição Federal por meio da:',
  options: [
    'Emenda Constitucional nº 19, de 1998 (Reforma Administrativa)',
    'Emenda Constitucional nº 32, de 2001',
    'Emenda Constitucional nº 45, de 2004 (Reforma do Judiciário)',
    'Lei Federal nº 9.784, de 1999'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A Emenda Constitucional nº 19, de 4 de junho de 1998 (Reforma do Estado e da Administração Pública), acrescentou o princípio da eficiência ao art. 37, caput, da CF/88, que antes continha apenas legalidade, impessoalidade, moralidade e publicidade.',
  optionExplanations: [
    'Correto: a EC nº 19/1998 é a emenda da Reforma Administrativa que inseriu "eficiência" no art. 37.',
    'A EC nº 32/2001 tratou, entre outros assuntos, de medidas provisórias e da organização do Ministério Público, não do art. 37, caput.',
    'A EC nº 45/2004 tratou da Reforma do Judiciário; não inseriu o princípio da eficiência.',
    'A Lei nº 9.784/1999 regulou o processo administrativo federal; emendas constitucionais alteram o texto da CF, não leis ordinárias.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-004',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Direitos e garantias fundamentais',
  difficulty: 'intermediaria',
  statement: 'Sobre o direito ao silêncio previsto na Constituição Federal, é correto afirmar:',
  options: [
    'o silêncio do indiciado poderá ser interpretado a seu desfavor quando ele for réu',
    'o preso será informado de seus direitos, entre os quais o de permanecer calado, e o silêncio do indiciado não poderá ser interpretado em seu desfavor',
    'o direito ao silêncio aplica-se apenas após a sentença condenatória transitada em julgado',
    'o silêncio do indiciado equivale à confissão nos autos do inquérito policial'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 5º, LXIII, da CF/88 garante que o preso será informado de seus direitos, "entre os quais o de permanecer calado, sendo assegurado o direito à assistência da família e de advogado", e que "o silêncio do indiciado não poderá ser interpretado em seu desfavor".',
  optionExplanations: [
    'A Constituição proíbe a interpretação desfavorável do silêncio, inclusive na fase de investigação.',
    'Correto: transcrição fiel do art. 5º, LXIII, da CF/88.',
    'O direito ao silêncio é assegurado desde a prisão/investigação, não apenas após a sentença.',
    'Interpretar o silêncio como confissão viola o princípio da não autoincriminação (nemo tenetur se detegere).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-005',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Remédios constitucionais',
  difficulty: 'facil',
  statement: 'O remédio constitucional do habeas corpus, previsto no art. 5º, LXVIII, da Constituição Federal, destina-se a proteger:',
  options: [
    'a legalidade dos atos da Administração Pública',
    'a liberdade de locomoção de pessoa que sofra ou se ache em risco de sofrer violência ou coação ilegal ou por abuso de poder',
    'a inviolabilidade do domicílio',
    'o direito de propriedade contra atos confiscatórios'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 5º, LXVIII, da CF/88 assegura habeas corpus "sempre que alguém sofrer ou se achar em risco de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder".',
  optionExplanations: [
    'A legalidade dos atos administrativos é tutelada por mandado de segurança, não por habeas corpus.',
    'Correto: o habeas corpus protege a liberdade de locomoção (art. 5º, LXVIII).',
    'A inviolabilidade do domicílio é tutelada pelo mandado de segurança e por ações próprias.',
    'O habeas de propriedade não é remédio previsto; a proteção contra confisco é genérica (art. 5º, XXIV).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-006',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Direitos e garantias fundamentais',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 5º, XLIII, da Constituição Federal, a lei considerará inafiançáveis e insuscetíveis de anistia e graça os crimes de:',
  options: [
    'furto majorado e estelionato',
    'tortura, terrorismo e hediondos',
    'peculato e corrupção ativa',
    'desacato e desobediência'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 5º, XLIII, da CF/88 determina: "A lei considerará crimes inafiançáveis e insuscetíveis de anistia e graça os de tortura, terrorismo e hediondos".',
  optionExplanations: [
    'Furto e estelionato não estão no rol do art. 5º, XLIII.',
    'Correto: é o rol taxativo do art. 5º, XLIII, da CF/88.',
    'Peculato e corrupção ativa não constam desse dispositivo (embora a corrupção seja grave, não integra a lista do XLIII).',
    'Desacato e desobediência são crimes de menor gravidade e não se enquadram no dispositivo.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-007',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Competências da União, dos Estados e dos Municípios',
  difficulty: 'intermediaria',
  statement: 'A elaboração e a edição de leis sobre direito penal é competência:',
  options: [
    'concorrente da União, dos Estados e do Distrito Federal',
    'exclusiva da União',
    'privativa dos Municípios, por força do art. 30 da Constituição Federal',
    'comum de todos os entes federativos'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 22, I, da CF/88 lista como competência EXCLUSIVA da União legislar sobre "direito civil, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho".',
  optionExplanations: [
    'A competência legislativa concorrente (art. 24) não abrange direito penal; este é exclusivo da União.',
    'Correto: direito penal é matéria de competência exclusiva da União (art. 22, I).',
    'Os Municípios legislam sobre assuntos de interesse local (art. 30, I), não sobre direito penal.',
    'Não há competência comum para legislar sobre direito penal; o art. 22, I, é exclusivo da União.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-008',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Competências da União, dos Estados e dos Municípios',
  difficulty: 'intermediaria',
  statement: 'A competência legislativa CONCORRENTE prevista no art. 24 da Constituição Federal pertence:',
  options: [
    'à União, aos Estados e ao Distrito Federal, cabendo à União suplementar a legislação nacional',
    'aos Estados e aos Municípios, cabendo ao Estado suplementar',
    'apenas aos Municípios, no que couber',
    'à União e ao Ministério Público Federal'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 24, caput, da CF/88: "Compete concorrentemente à União, aos Estados e ao Distrito Federal legislar sobre:"; § 1º: "No âmbito da legislação concorrente, a competência da União limitar-se-á a estabelecer normas gerais". Os Municípios não integram a competência concorrente.',
  optionExplanations: [
    'Correto: art. 24, caput e § 1º, da CF/88 (União, Estados e Distrito Federal).',
    'Os Municípios não legislam concorrentemente; a competência é da União, dos Estados e do DF.',
    'Os Municípios legislam supletivamente sobre assuntos de interesse local (art. 30), não em regime de concorrência.',
    'O Ministério Público não é ente federativo titular de competência legislativa.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-009',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Organização político-administrativa',
  difficulty: 'facil',
  statement: 'A organização político-administrativa da República Federativa do Brasil, segundo o art. 18 da Constituição Federal, compreende:',
  options: [
    'a União, os Estados, o Distrito Federal e os Municípios',
    'a União, os Estados e os Municípios',
    'os Estados, o Distrito Federal e os Territórios',
    'a União, os Municípios e as Regiões Integradas de Desenvolvimento'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 18, caput, da CF/88: "A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos, nos termos desta Constituição."',
  optionExplanations: [
    'Correto: são os quatro entes federativos do art. 18 da CF/88.',
    'A redação omite o Distrito Federal, que é ente federativo autônomo.',
    'Territórios não integram a federação atual como entes autônomos (o DF está ausente da lista).',
    '"Regiões Integradas" não é ente da organização político-administrativa constitucional.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-010',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Competências da União, dos Estados e dos Municípios',
  difficulty: 'intermediaria',
  statement: 'É competência do Município, nos termos do art. 30 da Constituição Federal:',
  options: [
    'legislar sobre direito penal e processual',
    'legislar sobre assuntos de interesse local',
    'legislar concorrentemente sobre proteção ao meio ambiente',
    'organizar e manter a polícia civil do Estado'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 30, I, da CF/88: "Compete ao Município: I - legislar sobre assuntos de interesse local;".',
  optionExplanations: [
    'Direito penal e processual é competência exclusiva da União (art. 22, I).',
    'Correto: art. 30, I, da CF/88 — legislar sobre assuntos de interesse local.',
    'A proteção ambiental é matéria de competência legislativa concorrente da União, dos Estados e do DF (art. 24, VI).',
    'A polícia civil é dos Estados (art. 144, § 5º).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-011',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Objetivos da República',
  difficulty: 'facil',
  statement: 'Entre os objetivos fundamentais da República Federativa do Brasil, previstos no art. 3º da Constituição Federal, está:',
  options: [
    'erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais',
    'assegurar a supremacia do interesse privado sobre o interesse coletivo',
    'substituir a participação popular pela decisão exclusiva do Poder Executivo',
    'concentrar a riqueza nacional nas mãos de um reduzido grupo econômico'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 3º da CF/88: "São objetivos fundamentais da República Federativa do Brasil: I - construir uma sociedade livre, justa e solidária; II - garantir o desenvolvimento nacional; III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação."',
  optionExplanations: [
    'Correto: é o objetivo do art. 3º, III, da CF/88.',
    'A Constituição afirma o oposto: a supremacia é do interesse público e o princípio fundamental é a dignidade da pessoa humana.',
    'A participação popular é assegurada (art. 1º, III e IV; art. 27 do ADCT).',
    'A redistribuição da riqueza e a redução de desigualdades são objetivos constitucionais, não a concentração.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-012',
  discipline: 'Noções de Direito',
  topic: 'Direito Constitucional',
  subtopic: 'Concurso público e carreira',
  difficulty: 'intermediaria',
  statement: 'Conforme a Constituição Federal, o prazo de validade do concurso público é de até:',
  options: [
    'dois anos, sempre improrrogáveis',
    'quatro anos, prorrogável uma vez, por igual período',
    'seis anos, prorrogável a critério da banca examinadora',
    'dez anos, enquanto houver candidatos aprovados em lista'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 37, § 2º, da CF/88 estabelece que o prazo de validade do concurso público é de até 4 (quatro) anos, prorrogável uma vez, por igual período.',
  optionExplanations: [
    'O prazo constitucional é de até 4 anos, não de 2 anos.',
    'Correto: até 4 anos, prorrogável uma única vez por igual período (art. 37, § 2º).',
    'Não há previsão constitucional de 6 anos nem competência da banca para prorrogar.',
    'O prazo constitucional é de até 4 anos, prorrogável uma vez — não de 10 anos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Constitucional)'
},
{
  id: 'nd-013',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Princípios do direito penal',
  difficulty: 'facil',
  statement: 'Diante de uma conduta grave, mas não prevista em lei anterior, o juiz pode criar o tipo penal por analogia para punir o agente. Segundo o Código Penal, essa conduta:',
  options: [
    'é permitida quando a analogia for favorável ao réu',
    'é vedada, pois não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal',
    'é permitida em crimes de ação penal pública incondicionada',
    'é permitida quando houver consenso da comunidade local'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 1º do Código Penal: "Não há crime sem lei anterior que o defina. Não há pena sem prévia cominação legal." É o princípio da legalidade (nullum crimen nulla poena sine lege), que veda a criação de tipos penais por analogia em prejuízo do agente.',
  optionExplanations: [
    'A analogia em matéria penal é vedada quando desfavorável; apenas a analogia favorável é excepcionalmente admitida, nunca para criar crime.',
    'Correto: é a formulação do art. 1º do Código Penal.',
    'O tipo de ação penal não autoriza a criação de crime por analogia.',
    'A opinião da comunidade não integra o processo de criação de tipos penais (princípio da legalidade estrita).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-014',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Aplicação da lei penal no tempo',
  difficulty: 'intermediaria',
  statement: 'Um fato foi praticado quando a lei previa pena de reclusão de 4 a 8 anos. Após o fato, a lei nova reduziu a pena para 2 a 4 anos. Se o processo ainda estiver em curso, aplica-se ao agente:',
  options: [
    'a lei antiga, pois a lei penal é sempre retroativa',
    'a lei nova, pois a lei posterior que de qualquer modo favorece o agente aplica-se ao fato anterior, ainda que posteriormente julgado, salvo já transitada em julgado a sentença condenatória',
    'nenhuma das leis, pois o fato ficaria sem punição',
    'a lei nova apenas se o agente for primário'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 10 do Código Penal: "A lei posterior, que de qualquer modo favorece o agente, aplica-se ao fato anterior, ainda que posteriormente julgado, salvo já transitada em julgado a sentença condenatória." É a retroatividade da lei mais benéfica.',
  optionExplanations: [
    'A lei penal não é retroativa em prejuízo do agente (art. 5º, XXXIX, e XL, da CF/88); retroage apenas se mais benéfica.',
    'Correto: é a regra do art. 10 do Código Penal (retroatividade da lei benigna).',
    'A conduta é punível pela lei vigente ao tempo; a lei nova apenas modifica a pena.',
    'A primariedade não condiciona a retroatividade da lei mais benéfica.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-015',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Aplicação da lei penal no espaço',
  difficulty: 'facil',
  statement: 'A regra geral de aplicação da lei penal no espaço no Brasil é a:',
  options: [
    'territorialidade, segundo a qual a lei penal brasileira aplica-se ao fato praticado no território nacional',
    'personalidade ativa, segundo a qual a lei brasileira segue o agente para qualquer país',
    'proteção, segundo a qual a lei brasileira protege nacionais no exterior',
    'universalidade, aplicável a qualquer fato praticado por qualquer pessoa'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A regra geral é a territorialidade: a lei penal aplica-se aos fatos praticados no território nacional, observadas as exceções constitucionais (art. 5º, XLIX, e art. 7º, § 1º, a, da CF/88). Personalidade ativa, proteção e universalidade são hipóteses excepcionais.',
  optionExplanations: [
    'Correto: a territorialidade é a regra geral de aplicação da lei penal no espaço.',
    'A personalidade ativa é exceção (aplicação da lei brasileira a crimes praticados por brasileiros no exterior, nos limites da CF).',
    'A proteção é exceção, não regra geral.',
    'A universalidade aplica-se apenas a crimes de competência internacional (ex.: tortura e terrorismo, conforme a CF).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-016',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Teoria do crime — nexo causal',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 13 do Código Penal, o resultado é imputável ao agente quando a ação ou a omissão é causa do resultado, ou seja, quando a conduta é:',
  options: [
    'meramente desejada pelo agente, ainda que inidônea',
    'necessária para a produção do resultado e idônea para produzi-lo nas condições em que se verificou',
    'praticada por pessoa dolosa, ainda que sem nexo com o resultado',
    'anterior no tempo ao resultado, independentemente de qualquer nexo'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 13, caput e § 1º, do Código Penal: "A ação ou omissão é causa do resultado quando o resultado é imputável ao agente, isto é, quando a ação ou omissão é: I - necessária para a produção; II - idônea para produzi-lo, nas condições em que se verificou."',
  optionExplanations: [
    'Desejo sem idoneidade da conduta não configura nexo causal (ex.: desejar a morte de alguém sem agir).',
    'Correto: necessidade e idoneidade são os critérios do art. 13 do Código Penal.',
    'Sem nexo causal, não há imputação objetiva do resultado, ainda que haja dolo na conduta.',
    'A mera anterioridade no tempo não basta: é exigível nexo de causalidade.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-017',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Momento consumativo e tentativa',
  difficulty: 'intermediaria',
  statement: 'Entrando na casa de outrem para praticar furto, o agente, sem ser surpreendido, arrepende-se, não leva nada e retira-se. Nesse caso, segundo o Código Penal:',
  options: [
    'há crime consumado, pois o agente adentrou o domicílio',
    'há tentativa punível, pois o agente iniciou a execução',
    'não se pune a tentativa, pois o agente, por vontade espontânea, desistiu de prosseguir na ação',
    'há tentativa punida com a pena do crime consumado em dobro'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'O art. 14 do Código Penal prevê que a desistência voluntária (ou a impedição do resultado pelo próprio agente) exclui a punibilidade da tentativa: se o agente pôde prosseguir e, por vontade espontânea, interrompe a execução, não há pena.',
  optionExplanations: [
    'O furto só se consuma com o término da subtração de coisa alheia móvel; adentrar o domicílio não consuma o furto.',
    'Haveria tentativa se a interrupção fosse por circunstâncias alheias à vontade do agente (ex.: vizinho que chega).',
    'Correto: a desistência voluntária, por vontade espontânea do agente, exclui a punibilidade da tentativa.',
    'A lei não prevê agravamento em dobro para a tentativa; a regra é a redução da pena (art. 14, § 2º).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-018',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Causas de exclusão de ilicitude',
  difficulty: 'facil',
  statement: 'Para a configuração da legítima defesa (art. 25 do Código Penal), é indispensável:',
  options: [
    'que a agressão seja praticada por funcionário público no exercício da função',
    'que haja injusta agressão, atual ou iminente, a direito próprio ou de outrem, repelida com razões de valor',
    'que o agente seja superior em força física ao agressor',
    'que a agressão já tenha se consumado, não admitindo a defesa contra ameaça'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 25 do Código Penal: "Entende-se em legítima defesa quem, com razões de valor, repele injusta agressão, atual ou iminente, a direito seu ou de outrem." Os elementos são: agressão injusta, atual ou iminente, a direito próprio ou de terceiro, repelida com moderação/razões de valor.',
  optionExplanations: [
    'A condição de funcionário público não é elemento da legítima defesa.',
    'Correto: é a formulação do art. 25 do Código Penal.',
    'Não se exige superioridade física; exige-se a moderação (razões de valor) na reação.',
    'A legítima defesa admite reação contra agressão iminente (que ainda não se consumou).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-019',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Causas de exclusão de ilicitude',
  difficulty: 'intermediaria',
  statement: 'Um motorista, em via urbana, desvia repentinamente o veículo para evitar o atropelamento de uma criança que correu para a pista, atingindo um poste e um automóvel estacionado. A conduta do motorista configura, em tese:',
  options: [
    'estado de necessidade, pois houve perigo atual de dano a direito alheio, não podendo a ação ser de outro modo evitada',
    'legítima defesa, pois houve agressão da criança ao seu veículo',
    'estrito cumprimento de dever legal, pois ele estava dirigindo autorizado',
    'crime consumado de dano, sem qualquer causa de exclusão'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 24 do Código Penal: "O estado de necessidade é a condição em que alguém pratica o fato para salvar direito seu ou de outrem, de perigo atual, que não era de outro modo evitável, salvo se a conduta foi normalmente exigível." Havendo perigo atual, inevitabilidade e salvamento de direito, há estado de necessidade.',
  optionExplanations: [
    'Correto: perigo atual (criança na pista), inevitabilidade (desvio) e salvamento de direito alheio — art. 24 do CP.',
    'Não houve agressão injusta por parte da criança; logo, não há legítima defesa.',
    'Estar dirigindo regularmente não é dever legal que exclua a ilicitude do dano causado ao poste.',
    'O estado de necessidade exclui a ilicitude da lesão ao bem jurídico alheio.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-020',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Causas de exclusão de ilicitude',
  difficulty: 'facil',
  statement: 'Não há crime quando o agente pratica o fato em estrito cumprimento de dever legal a cargo do agente (art. 23, III, do Código Penal). Assinale a hipótese que melhor exemplifica essa excludente:',
  options: [
    'o servidor público que, agindo nos limites da lei e de sua atribuição, pratica fato típico sem excesso',
    'o particular que invade casa alheia por vontade própria',
    'o funcionário que age com dano ao erário por interesse próprio',
    'o agente que pratica o fato após a revogação da lei que autorizava a conduta'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 23, III, do Código Penal exclui a ilicitude quando o fato é praticado em estrito cumprimento de dever legal (ex.: funcionário que cumpre ordem legal sem exceder os limites da atribuição). Havendo excesso doloso ou culposo, a excludente não aproveita.',
  optionExplanations: [
    'Correto: é a hipótese clássica do art. 23, III, do CP — cumprimento do dever, sem excesso.',
    'A invasão de domicílio por vontade própria viola o art. 150 do CP, sem excludente.',
    'Agir por interesse próprio configura, em tese, prevaricação (art. 319), sem excludente.',
    'Se a lei foi revogada, a conduta é atualmente atípica; não se trata de estrito cumprimento de dever.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-021',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Teoria do crime — erro',
  difficulty: 'dificil',
  statement: 'Um indivíduo pega o celular de outra pessoa, achando, de forma justificada, que o aparelho era seu. Sendo a "coisa alheia" elemento constitutivo do tipo do furto, o erro recai sobre:',
  options: [
    'erro de proibição, gerando a exclusão da culpabilidade',
    'erro sobre elemento constitutivo do tipo penal, que exclui o dolo, inexistindo crime doloso',
    'erro acerca de fato próprio, que jamais exclui a punição',
    'erro na execução, que transforma o crime em tentativa punível'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 21 do Código Penal: "O erro sobre elemento constitutivo do tipo penal, ou sobre fato que o próprio agente considera elemento constitutivo do tipo, exclui o dolo..." Como o agente erra quanto à alheidade da coisa (elemento do tipo), não há dolo de furto.',
  optionExplanations: [
    'O erro de proibição (art. 20) recai sobre a proibição ou ilicitude, não sobre elemento do tipo.',
    'Correto: art. 21 do CP — erro sobre elemento constitutivo do tipo exclui o dolo.',
    'O erro relevante sobre elemento constitutivo exclui o dolo; a afirmação de que "jamais exclui" é falsa.',
    'Trata-se de erro na própria conduta quanto ao objeto, não de erro na execução que gera desvio de meio.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-022',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Concurso de pessoas',
  difficulty: 'intermediaria',
  statement: 'No concurso de pessoas, se a participação de uma das pessoas for de menor importância, a pena poderá ser reduzida, nos termos do Código Penal, de:',
  options: [
    'um terço à metade',
    'um sexto a um terço',
    'metade a dois terços',
    'apenas a multa, em qualquer caso'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 29, § 1º, do Código Penal: "Se a participação de uma das pessoas for de menor importância, a pena poderá ser reduzida de um sexto a um terço."',
  optionExplanations: [
    'A redução de um terço à metade não corresponde ao dispositivo.',
    'Correto: redução de um sexto a um terço (art. 29, § 1º, do CP).',
    'Não há previsão de redução de metade a dois terços nesse dispositivo.',
    'A redução é proporcional à pena, não se limita à multa.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-023',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Crimes em espécie',
  difficulty: 'intermediaria',
  statement: 'Servidor público, após receber ordem legítima e por escrito de sua autoridade, deliberadamente descumpre a ordem. A conduta amolda-se, em tese, ao crime de:',
  options: [
    'desobediência (art. 330 do Código Penal)',
    'desacato (art. 331 do Código Penal)',
    'prevaricação (art. 319 do Código Penal)',
    'corrupção passiva (art. 333 do Código Penal)'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 330 do Código Penal prevê o crime de desobediência: "Descumprir ordem legalmente emanada de autoridade competente: Pena - detenção, de três meses a um ano, e multa." Já o desacato exige desacato (ofensa) à autoridade; a prevaricação exige satisfazer interesse ou sentimento pessoal; a corrupção passiva exige vantagem indevida.',
  optionExplanations: [
    'Correto: descumprir ordem legal de autoridade = desobediência (art. 330).',
    'O desacato (art. 331) pressupõe ofensa ou irreverência à autoridade, não apenas o descumprimento.',
    'A prevaricação (art. 319) exige retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal.',
    'A corrupção passiva (art. 333) exige solicitar ou receber vantagem indevida.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-024',
  discipline: 'Noções de Direito',
  topic: 'Direito Penal',
  subtopic: 'Crimes em espécie',
  difficulty: 'intermediaria',
  statement: 'Servidor público deixa de autuar um parente próximo em infração administrativa que ele mesmo fiscalizava, para lhe fazer um favor pessoal. A conduta caracteriza, em tese, o crime de:',
  options: [
    'corrupção passiva, por receber vantagem futura',
    'prevaricação, por deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal',
    'desacato, por ofender a ordem da administração',
    'peculato, por desviar função pública'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 319 do Código Penal: "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal: Pena - detenção, de três meses a um ano, e multa." É o crime de prevaricação.',
  optionExplanations: [
    'Não houve solicitação ou recebimento de vantagem (art. 333).',
    'Correto: deixar de praticar ato de ofício por favor pessoal = prevaricação (art. 319).',
    'Não houve ofensa verbal ou irreverência a autoridade (art. 331).',
    'Não houve apropriação de dinheiro ou valor público (art. 312).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Penal)'
},
{
  id: 'nd-025',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Ação penal',
  difficulty: 'facil',
  statement: 'Segundo o art. 5º do Código de Processo Penal, a regra geral no Brasil é que a ação penal é:',
  options: [
    'privativa da vítima em todos os crimes',
    'pública, salvo quando a lei expressamente a declarar privativa da vítima',
    'pública incondicionada, sem exceções legais',
    'exclusiva do Ministério Público em qualquer hipótese, sem condicionantes'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 5º do CPP: "A ação penal é pública, salvo quando a lei expressamente o declarar privativa da vítima." A regra é a ação penal pública, podendo ser incondicionada ou condicionada à representação, e a lei pode prever a ação penal privativa.',
  optionExplanations: [
    'A ação privativa da vítima é exceção prevista em lei, não regra.',
    'Correto: é a regra do art. 5º do CPP.',
    'Há exceções legais, como a ação privativa da vítima (ex.: difamação, salvo interesse público).',
    'A ação penal pública pode ser condicionada à representação da vítima, e há ações privativas.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-026',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Inquérito policial',
  difficulty: 'facil',
  statement: 'Compete à autoridade policial, entre outras atribuições previstas no art. 13 do Código de Processo Penal:',
  options: [
    'aplicar penas e decretar prisões preventivas',
    'instaurar inquérito policial e dirigi-lo, requisitando os procedimentos necessários à sua instrução',
    'julgar improcedente a ação penal proposta',
    'redigir a sentença condenatória do réu'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 13, I, do CPP: compete à autoridade policial "instaurar inquérito policial e dirigi-lo, requisitando os procedimentos necessários a sua instrução".',
  optionExplanations: [
    'Aplicar penas e decretar prisão preventiva compete ao juiz, não à autoridade policial.',
    'Correto: art. 13, I, do CPP.',
    'Julgar compete ao Poder Judiciário.',
    'A sentença é ato do juiz; o inquérito é dirigido pela autoridade policial.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-027',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Prisão em flagrante',
  difficulty: 'intermediaria',
  statement: 'Considera-se em flagrante delito, entre outras hipóteses do art. 302 do Código de Processo Penal, quem:',
  options: [
    'é encontrado três dias depois da prática do crime, ainda que em sua residência',
    'é perseguido, logo em seguida à prática da infração, pela autoridade ou por qualquer pessoa, em situação que faça presumir ser ele o autor',
    'é citado para responder a ação penal iniciada há um ano',
    'é intimado para prestar esclarecimentos ao juízo'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 302, III, do CPP considera em flagrante delito quem "é perseguido, logo em seguida, pela autoridade, pelos agentes da autoridade ou por qualquer pessoa, em situação que faça presumir ser ele o autor da infração".',
  optionExplanations: [
    'A prisão sem flagrante, após prazo razoável, depende de mandado (prisão preventiva ou temporária).',
    'Correto: é a hipótese III do art. 302 do CPP (perseguição imediata).',
    'Citação para resposta à ação penal não configura flagrante.',
    'Intimação judicial não é hipótese de flagrante delito.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-028',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Auto de prisão em flagrante',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 304 do Código de Processo Penal, o auto de prisão em flagrante, devidamente autuado, deve ser apresentado ao juiz competente no prazo de:',
  options: [
    '24 horas a contar da prisão',
    '48 horas a contar da prisão',
    '5 dias úteis a contar da prisão',
    '10 dias a contar da lavratura do auto'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 304 do CPP determina a apresentação do auto de prisão em flagrante ao juiz competente no prazo de 48 (quarenta e oito) horas a contar da prisão, assegurados o contraditório e a ampla defesa na comparescência do preso perante a autoridade.',
  optionExplanations: [
    'As 24 horas referem-se ao prazo do juiz para decidir sobre o flagrante (art. 310), não à apresentação do auto.',
    'Correto: 48 horas a contar da prisão (art. 304 do CPP).',
    'Não há prazo de 5 dias úteis para a apresentação do auto de flagrante.',
    'Não há prazo de 10 dias para esse ato.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-029',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Decisão do juiz sobre o flagrante',
  difficulty: 'dificil',
  statement: 'Recebido o auto de prisão em flagrante, no prazo máximo de 24 horas o juiz decidirá, nos termos do art. 310 do CPP. NÃO é uma das alternativas legais do juiz:',
  options: [
    'relaxar a prisão ilegal',
    'manter a prisão, emitindo mandado acompanhado de fundamentação',
    'converter a prisão em fiança, quando cabível',
    'absolver o réu por falta de provas'
  ],
  correctIndex: 3,
  points: 1,
  explanation: 'O art. 310 do CPP prevê apenas três possibilidades: I - relaxar a prisão ilegal; II - manter a prisão, emitindo mandado de prisão acompanhado de demonstração dos motivos; III - converter a prisão em fiança, quando cabível. A absolvição é ato de julgamento, próprio da sentença, e não da fase de controle do flagrante.',
  optionExplanations: [
    'É opção legal do juiz (art. 310, I).',
    'É opção legal do juiz (art. 310, II).',
    'É opção legal do juiz (art. 310, III).',
    'Correto (é a alternativa NÃO prevista): a absolvição depende de instrução e julgamento.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-030',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Prisão preventiva',
  difficulty: 'dificil',
  statement: 'A prisão preventiva será decretada pelo juiz, em decisão fundamentada, somente quando imprescindível para assegurar a execução da pena, garantir a aplicação da lei penal ou assegurar a conveniência da instrução criminal, nos casos de:',
  options: [
    'garantia da ordem pública, garantia da ordem econômica, conveniência da instrução criminal ou assegurar a aplicação da lei penal',
    'interesse da vítima em ver o indiciado preso, desejo da opinião pública ou pressão da imprensa',
    'primariedade do agente, inexistência de antecedentes e boa-fé',
    'pedido do delegado de policial sem fundamentação'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 312, I a IV, do CPP (redação da Lei nº 12.403/2011) elenca: I - garantia da ordem pública; II - garantia da ordem econômica; III - conveniência da instrução criminal; IV - assegurar a aplicação da lei penal. Não há previsão legal para os demais motivos.',
  optionExplanations: [
    'Correto: é o rol legal do art. 312, I a IV, do CPP.',
    'Vontade da opinião pública ou da imprensa não é hipótese legal de preventiva.',
    'Primariedade e boa-fé, em regra, afastam a preventiva (art. 313, § 1º), não a fundamentam.',
    'A preventiva exige decisão fundamentada do juiz, não mero pedido.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-031',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Prisão temporária',
  difficulty: 'intermediaria',
  statement: 'A prisão temporária é medida cautelar disciplinada, no direito brasileiro, pela:',
  options: [
    'Lei nº 7.960/1989, cabendo quando houver receio de que o indiciado se ausente para livrar-se do processo ou influir na instrução criminal',
    'Lei nº 9.099/1995, aplicável apenas a infrações de menor potencial ofensivo',
    'Lei nº 8.072/1990, exclusivamente para crimes hediondos',
    'Lei nº 9.455/1997, somente em casos de tortura'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A prisão temporária foi instituída pela Lei nº 7.960, de 25 de dezembro de 1989, cujo art. 1º prevê a decretação pelo juiz quando houver receio de ausência do indiciado para livrar-se do processo ou influir na instrução criminal, entre outras hipóteses.',
  optionExplanations: [
    'Correto: Lei nº 7.960/1989 e hipóteses clássicas de temporária.',
    'A Lei nº 9.099/1995 trata dos juizados especiais e de medidas para infrações de menor potencial ofensivo.',
    'A Lei nº 8.072/1990 define crimes hediondos, não a prisão temporária.',
    'A Lei nº 9.455/1997 tipifica o crime de tortura; não disciplina a temporária.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-032',
  discipline: 'Noções de Direito',
  topic: 'Direito Processual Penal',
  subtopic: 'Juizados Especiais Criminais',
  difficulty: 'dificil',
  statement: 'Nos termos do art. 89 da Lei nº 9.099/1995, a suspensão condicional do processo pode ser decretada pelo juiz, para acusados primários, quando a pena privativa de liberdade não ultrapassar:',
  options: [
    '1 ano, pelo prazo de 1 a 2 anos',
    '2 anos, pelo prazo não inferior a 2 nem superior a 4 anos',
    '4 anos, pelo prazo de 3 a 5 anos',
    '8 anos, pelo prazo de 5 a 8 anos'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 89 da Lei nº 9.099/1995: "O juiz, por decisão fundamentada, poderá decretar a suspensão condicional do processo, pelo prazo não inferior a 2 (dois) nem superior a 4 (quatro) anos, para os acusados primários, quando a pena privativa de liberdade não ultrapasse 2 (dois) anos."',
  optionExplanations: [
    'O limite da pena é de 2 anos e o prazo da suspensão é de 2 a 4 anos.',
    'Correto: pena máxima de 2 anos, prazo de suspensão de 2 a 4 anos (art. 89).',
    'Não há previsão de 4 anos de pena para a suspensão condicional do processo.',
    'O prazo legal máximo é de 4 anos, não de 8.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Processual Penal)'
},
{
  id: 'nd-033',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Atos administrativos — atributos',
  difficulty: 'facil',
  statement: 'A presunção de legitimidade dos atos administrativos significa que eles gozam de:',
  options: [
    'verdade absoluta, jamais impugnável pelos administrados',
    'verdade até prova em contrário, admitindo impugnação e revisão',
    'presunção de veracidade apenas quando assinados pelo Prefeito',
    'presunção relativa somente em juízo de peticionamento'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A presunção de legitimidade (ou veracidade) é relativa: os atos administrativos presumem-se legais e verdadeiros até prova em contrário, podendo ser impugnados pelos administrados e revisados pela própria Administração ou pelo Judiciário.',
  optionExplanations: [
    'Trata-se de presunção relativa, não absoluta: há meios de impugnação.',
    'Correto: verdade até prova em contrário — presunção relativa.',
    'A presunção não depende de quem assina o ato, e sim da competência e da forma.',
    'A presunção beneficia o ato em qualquer esfera, não apenas em petições.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-034',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Atos administrativos — atributos',
  difficulty: 'intermediaria',
  statement: 'A prerrogativa que permite à Administração Pública impor unilateralmente obrigações e restrições aos administrados, sem o seu consentimento, caracteriza o atributo da:',
  options: [
    'autoexecutoriedade',
    'imperatividade',
    'tipicidade',
    'publicidade'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A imperatividade é o atributo que confere à Administração a faculdade de impor unilateralmente obrigações, restrições ou deveres aos administrados, em razão do interesse público, independentemente de consentimento.',
  optionExplanations: [
    'A autoexecutoriedade permite executar diretamente o ato sem ordem judicial (é execução, não imposição).',
    'Correto: imperatividade = imposição unilateral de obrigações.',
    'A tipicidade refere-se à conformidade do ato com a hipótese legal.',
    'A publicidade é princípio do art. 37, caput, não atributo específico de imposição.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-035',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Improbidade administrativa',
  difficulty: 'intermediaria',
  statement: 'Sobre a responsabilização por ato de improbidade administrativa (Lei nº 8.429/1992, com a redação da Lei nº 14.230/2021), é correto afirmar que:',
  options: [
    'basta a mera culpa para a configuração do ato de improbidade',
    'exige-se a comprovação do dolo do agente; a mera culpa é insuficiente',
    'a responsabilidade é objetiva, independentemente de intenção',
    'apenas o Prefeito pode ser responsabilizado'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A Lei nº 14.230/2021 reformou a Lei nº 8.429/1992 e passou a exigir o DOLO para a configuração de ato de improbidade, afastando a responsabilização por mera culpa ou por resultado, salvo nos casos de dano ao erário em que se exige a intenção de causar dano.',
  optionExplanations: [
    'A responsabilidade por improbidade não é culposa: exige-se dolo.',
    'Correto: a reforma da Lei nº 14.230/2021 exigiu o elemento subjetivo (dolo).',
    'A responsabilidade não é objetiva; exige dolo.',
    'Qualquer agente público pode ser responsabilizado, não apenas o Prefeito.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-036',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Extinção dos atos administrativos',
  difficulty: 'intermediaria',
  statement: 'Um ato administrativo válido, que passou a ser inconveniente ou inoportuno para o interesse público, pode ser revogado pela Administração por conveniência e oportunidade. Tal afirmação encontra fundamento na:',
  options: [
    'Súmula 473 do STF, que distingue anulação (ato ilegal) de revogação (ato válido, por conveniência e oportunidade)',
    'Súmula 473 do STF, que veda a revogação de atos administrativos',
    'Constituição Federal, art. 5º, LV, que proíbe a revogação',
    'Lei nº 9.784/1999, que veda a revogação após 1 ano'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A Súmula 473 do STF: "A Administração pode anular seus atos administrativos, de que decorram efeitos favoráveis para os seus destinatários, quando eivados de vícios que os tornem ilegais... ou revogá-los, por conveniência e oportunidade, ressalvados, em todos os casos, os adquiridos por terceiros de boa-fé." Anulação supõe ilegalidade; revogação, ato válido.',
  optionExplanations: [
    'Correto: a Súmula 473 distingue anulação (vício de ilegalidade) de revogação (ato válido, por conveniência e oportunidade).',
    'A súmula admite a revogação; a afirmação de que a veda é falsa.',
    'O art. 5º, LV, assegura o devido processo; não proíbe a revogação de atos válidos.',
    'A Lei nº 9.784/1999 trata do processo administrativo; não veda a revogação após 1 ano.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-037',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Anulação de atos administrativos',
  difficulty: 'dificil',
  statement: 'Pela Lei nº 9.784/1999 (processo administrativo federal), o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em:',
  options: [
    '2 anos, contados da ciência do vício',
    '5 anos, contados da expedição do ato, ressalvada a hipótese de má-fé',
    '10 anos, sem qualquer ressalva',
    'prazo indeterminado, enquanto houver efeitos favoráveis'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 54 da Lei nº 9.784/1999: "O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os seus destinatários decai em 5 (cinco) anos, contados de sua expedição, ressalvada a hipótese de má-fé."',
  optionExplanations: [
    'O prazo legal decadencial é de 5 anos, não de 2.',
    'Correto: 5 anos contados da expedição, salvo má-fé (art. 54).',
    'Não há prazo de 10 anos na lei.',
    'A lei fixa prazo certo de 5 anos, com ressalva de má-fé.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-038',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Poder de polícia',
  difficulty: 'intermediaria',
  statement: 'Segundo o Código Tributário Nacional, o poder de polícia administrativa:',
  options: [
    'é privativo da União, nunca podendo ser exercido pelos Municípios',
    'pode ser exercido pela União, pelos Estados, pelo Distrito Federal e pelos Municípios, no que lhes seja afeto',
    'compete apenas ao Poder Judiciário',
    'é privativo do Ministério Público'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O CTN, art. 77, § 2º: "Compete privativamente à União, aos Estados, ao Distrito Federal e aos Municípios, no que lhes seja afeto, assegurada a execução dos atos mediante processo administrativo a ser disciplinado em lei." Cada ente exerce o poder de polícia na matéria de sua competência.',
  optionExplanations: [
    'Os Municípios exercem poder de polícia nas matérias de sua competência (ex.: posturas, trânsito).',
    'Correto: cada ente federativo exerce o poder de polícia no que lhe seja afeto (CTN, art. 77, § 2º).',
    'A atividade de polícia administrativa é exercida pela Administração, não pelo Judiciário.',
    'O Ministério Público fiscaliza a legalidade, mas não exerce o poder de polícia.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-039',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Responsabilidade do Estado',
  difficulty: 'dificil',
  statement: 'Pela Súmula 347 do STF, a responsabilidade civil do Estado, decorrente de atos lícitos praticados por seus agentes que causem dano a terceiro, é:',
  options: [
    'subjetiva, exigindo comprovação de culpa exclusiva do Estado',
    'objetiva, no regime da teoria do risco administrativo',
    'inexistente, pois atos lícitos não geram dano indenizável',
    'penal, com pena de multa ao Estado'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A Súmula 347 do STF: "A responsabilidade civil do Estado, decorrente de atos lícitos praticados por seus agentes, que causem dano a terceiro, é objetiva, no regime da teoria do risco administrativo." O art. 37, § 6º, da CF/88 assegura ainda o direito de regresso contra o responsável nos casos de dolo ou culpa.',
  optionExplanations: [
    'A responsabilidade é objetiva para atos lícitos lesivos; a subjetividade aplica-se aos atos ilícitos (com culpa).',
    'Correto: Súmula 347 do STF — responsabilidade objetiva (risco administrativo).',
    'Atos lícitos que causam dano geram indenização (art. 37, § 6º).',
    'A responsabilidade em questão é civil, não penal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
{
  id: 'nd-040',
  discipline: 'Noções de Direito',
  topic: 'Direito Administrativo',
  subtopic: 'Processo administrativo',
  difficulty: 'intermediaria',
  statement: 'A Lei nº 9.784/1999, em seu art. 2º, elenca os princípios da atuação administrativa. NÃO integra esse rol:',
  options: [
    'motivação',
    'eficiência',
    'supremacia do interesse privado',
    'segurança jurídica'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'O art. 2º da Lei nº 9.784/1999 prevê, entre outros, os princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência. A "supremacia do interesse privado" não é princípio do processo administrativo.',
  optionExplanations: [
    'Motivação consta expressamente do art. 2º.',
    'Eficiência consta expressamente do art. 2º.',
    'Correto (é o que NÃO integra o rol): o processo administrativo rege-se pelo interesse público, não pela supremacia do interesse privado.',
    'Segurança jurídica consta expressamente do art. 2º.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Noções de Direito (Direito Administrativo)'
},
/* =========================================================================
   3. LEGISLAÇÃO EXTRAVAGANTE (30 questões)
   ========================================================================= */
{
  id: 'le-001',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes hediondos (Lei nº 8.072/1990)',
  subtopic: 'Rol de crimes hediondos',
  difficulty: 'intermediaria',
  statement: 'Sobre o rol de crimes hediondos previstos na Lei nº 8.072/1990, é correto afirmar:',
  options: [
    'o rol é taxativo e não comporta interpretação analógica para abranger outros crimes',
    'o rol é meramente exemplificativo, cabendo ao juiz enquadrar qualquer crime grave',
    'o rol abrange apenas crimes praticados contra a administração pública',
    'o rol foi integralmente revogado pela Lei nº 13.964/2019'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 1º da Lei nº 8.072/1990 apresenta rol taxativo (fechado): estupro, estupro de vulnerável, sequestro e cárcere privado, extorsão mediante sequestro, entre outros expressamente previstos. Por ser exceção ao regime ordinário (penas especiais), não admite analogia em prejuízo do réu.',
  optionExplanations: [
    'Correto: o rol é taxativo; a hediondidade não se estende por analogia.',
    'O rol não é exemplificativo: a hediondidade decorre apenas de previsão legal expressa.',
    'A hediondidade não se limita a crimes contra a administração; envolve bens jurídicos variados (vida, liberdade).',
    'A Lei nº 13.964/2019 alterou dispositivos da Lei nº 8.072/1990, mas não revogou o rol de crimes hediondos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-002',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes hediondos (Lei nº 8.072/1990)',
  subtopic: 'Equiparação',
  difficulty: 'dificil',
  statement: 'Conforme a Lei nº 8.072/1990, são equiparados aos crimes hediondos, para os fins previstos em lei, os crimes do art. 1º praticados:',
  options: [
    'somente por menores de 18 anos',
    'em atividade típica de organização criminosa ou por quadro ou membro de organização criminosa',
    'apenas quando praticados no âmbito doméstico',
    'exclusivamente contra a Administração Pública'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 1º, § 1º, da Lei nº 8.072/1990 equipara aos crimes hediondos os praticados em atividade típica de organização criminosa ou por quadro ou membro de organização criminosa.',
  optionExplanations: [
    'A menoridade não é causa de equiparação prevista no dispositivo.',
    'Correto: art. 1º, § 1º, da Lei nº 8.072/1990.',
    'A equiparação não se limita ao contexto doméstico.',
    'A equiparação não depende da qualidade do ofendido.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-003',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes hediondos (Lei nº 8.072/1990)',
  subtopic: 'Progressão de regime',
  difficulty: 'dificil',
  statement: 'Pela Lei nº 8.072/1990 (redação da Lei nº 13.964/2019), o condenado PRIMÁRIO por crime hediondo somente poderá progredir de regime ao término do cumprimento mínimo de:',
  options: [
    'um sexto da pena',
    'um quarto (25%) da pena',
    'um terço (33%) da pena',
    'metade (50%) da pena'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 2º da Lei nº 8.072/1990, na redação da Lei nº 13.964/2019, estabelece percentuais mínimos de cumprimento para a progressão de regime: 25% para o condenado primário; 35% para o reincidente em crime comum; e 40% para o reincidente em crime hediondo.',
  optionExplanations: [
    'Um sexto é o percentual do art. 29, § 1º, do CP (participação de menor importância), não da progressão.',
    'Correto: 25% da pena para o condenado primário por crime hediondo.',
    'O percentual do reincidente em crime comum é 35%, não o do primário.',
    'Não há percentual de 50% previsto para a progressão em crimes hediondos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-004',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Tortura (Lei nº 9.455/1997)',
  subtopic: 'Natureza do crime',
  difficulty: 'intermediaria',
  statement: 'O crime de tortura, tipificado na Lei nº 9.455/1997, é, segundo o próprio diploma legal:',
  options: [
    'crime de ação penal privada',
    'crime inafiançável e imprescritível',
    'crime punível apenas com multa',
    'crime de menor potencial ofensivo'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 1º, § 2º, da Lei nº 9.455/1997: "O crime é inafiançável e imprescritível." A Constituição também o prevê no art. 5º, XLIII, ao lado do terrorismo e dos crimes hediondos.',
  optionExplanations: [
    'A ação penal é pública incondicionada, não privada.',
    'Correto: art. 1º, § 2º, da Lei nº 9.455/1997 — inafiançável e imprescritível.',
    'A pena é privativa de liberdade (reclusão), não apenas multa.',
    'Trata-se de crime grave, afastado do rito dos juizados.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-005',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Tortura (Lei nº 9.455/1997)',
  subtopic: 'Agravamento',
  difficulty: 'dificil',
  statement: 'Nos termos da Lei nº 9.455/1997, a pena do crime de tortura é aumentada de um terço quando o crime é praticado:',
  options: [
    'contra funcionário público no exercício da função',
    'por funcionário público ou contra criança, gestante, enfermo ou pessoa portadora de deficiência mental',
    'à noite ou em local ermo',
    'com o emprego de arma de fogo'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 1º, § 1º, da Lei nº 9.455/1997 aumenta a pena de um terço se o crime é praticado por funcionário público ou contra criança, gestante, enfermo ou pessoa portadora de deficiência mental.',
  optionExplanations: [
    'A majorante não se refere à qualidade do ofendido como funcionário, mas a o agente ser funcionário público ou às qualidades da vítima.',
    'Correto: é a redação do art. 1º, § 1º, da Lei nº 9.455/1997.',
    'A majorante não se aplica ao horário nem ao local.',
    'A majorante não se refere ao uso de arma.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-006',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Tortura (Lei nº 9.455/1997)',
  subtopic: 'Ação penal',
  difficulty: 'intermediaria',
  statement: 'A ação penal pelos crimes de tortura é:',
  options: [
    'pública incondicionada, independentemente de representação da vítima',
    'pública condicionada à representação da vítima',
    'privativa da vítima',
    'exclusiva do Ministério Público Federal'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Os crimes de tortura são de ação penal pública incondicionada, sem necessidade de representação da vítima, o que decorre da gravidade do delito e de sua previsão constitucional (art. 5º, XLIII e XLIV, da CF/88).',
  optionExplanations: [
    'Correto: ação penal pública incondicionada.',
    'Não se exige representação; a ação é pública incondicionada.',
    'A ação privativa da vítima não se aplica a crimes de tortura.',
    'A competência segue as regras ordinárias (justiça estadual ou federal, conforme o caso), sem exclusividade federal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-007',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes de abuso de autoridade (Lei nº 13.869/2019)',
  subtopic: 'Dispositivo legal',
  difficulty: 'facil',
  statement: 'Os crimes de abuso de autoridade são disciplinados, no direito brasileiro atual, pela:',
  options: [
    'Lei nº 4.898/1965, que permanece integralmente em vigor',
    'Lei nº 13.869/2019, que revogou a Lei nº 4.898/1965',
    'Lei nº 8.072/1990',
    'Lei nº 12.850/2013'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A Lei nº 13.869, de 13 de setembro de 2019, dispõe sobre os crimes de abuso de autoridade e revogou expressamente a Lei nº 4.898/1965 (antiga Lei de Abuso de Autoridade).',
  optionExplanations: [
    'A Lei nº 4.898/1965 foi revogada pela Lei nº 13.869/2019.',
    'Correto: Lei nº 13.869/2019, que revogou a Lei nº 4.898/1965.',
    'A Lei nº 8.072/1990 trata dos crimes hediondos.',
    'A Lei nº 12.850/2013 trata de organizações criminosas e de colaboração premiada.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-008',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes de abuso de autoridade (Lei nº 13.869/2019)',
  subtopic: 'Alegação falsa de autoridade',
  difficulty: 'intermediaria',
  statement: 'Uma pessoa que, sem ser autoridade, apresenta-se como delegado de polícia, usando uniforme e insígnia, para obter vantagem, comete, em tese, o crime previsto na Lei nº 13.869/2019 de:',
  options: [
    'alegação falsa de autoridade (art. 4º)',
    'omissão de socorro (art. 6º)',
    'corrupção ativa (art. 333 do CP)',
    'prevaricação (art. 319 do CP)'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 4º da Lei nº 13.869/2019 pune quem alega falsamente ser autoridade, ou serve-se de insígnia ou uniforme de autoridade, ou exerce função que não lhe compete, ou exercita, com abuso de poder, função que lhe compete.',
  optionExplanations: [
    'Correto: alegar falsamente ser autoridade e usar insígnia ou uniforme é o art. 4º da Lei nº 13.869/2019.',
    'O art. 6º trata de recusar, retardar ou dificultar socorro a pessoa em situação de risco.',
    'A corrupção ativa pressupõe oferta de vantagem indevida a funcionário público.',
    'A prevaricação pressupõe ser funcionário público que omite ato de ofício por interesse ou sentimento pessoal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-009',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes de abuso de autoridade (Lei nº 13.869/2019)',
  subtopic: 'Omissão de socorro',
  difficulty: 'intermediaria',
  statement: 'Nos termos da Lei nº 13.869/2019, recusar, retardar ou dificultar, por ilegalidade ou abuso de poder, o socorro ou a assistência a pessoa em situação de risco ou emergência configura:',
  options: [
    'crime de desacato (art. 331 do CP)',
    'crime de omissão de socorro previsto no art. 6º da Lei nº 13.869/2019',
    'crime de prevaricação somente se houver favor',
    'mera infração administrativa, sem punição penal'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 6º da Lei nº 13.869/2019 tipifica a conduta de recusar, retardar ou dificultar, por ilegalidade ou abuso de poder, o socorro ou a assistência a pessoa em situação de risco ou emergência.',
  optionExplanations: [
    'O desacato pressupõe ofensa ou irreverência à autoridade; não é o caso.',
    'Correto: art. 6º da Lei nº 13.869/2019.',
    'A tipificação do art. 6º independe de favor pessoal.',
    'A conduta é tipificada como crime pela lei específica.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-010',
  discipline: 'Legislação Extravagante',
  topic: 'ECA — Lei nº 8.069/1990',
  subtopic: 'Conceitos legais',
  difficulty: 'facil',
  statement: 'Segundo o Estatuto da Criança e do Adolescente, considera-se adolescente:',
  options: [
    'a pessoa entre 12 e 18 anos de idade',
    'a pessoa de 10 a 14 anos de idade',
    'a pessoa de 16 a 21 anos de idade',
    'a pessoa até 10 anos de idade incompletos'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 2º do ECA: "Para os fins desta Lei, considera-se: I - criança, a pessoa até doze anos de idade incompletos; II - adolescente, a pessoa entre doze e dezoito anos de idade."',
  optionExplanations: [
    'Correto: adolescente é a pessoa entre 12 e 18 anos de idade (art. 2º, II).',
    'A faixa de 10 a 14 anos não corresponde à definição legal.',
    'A partir dos 18 anos a pessoa é maior de idade, sem o amparo especial do ECA.',
    'Até 10 anos incompletos não é o limite legal; criança é a pessoa até 12 anos incompletos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-011',
  discipline: 'Legislação Extravagante',
  topic: 'ECA — Lei nº 8.069/1990',
  subtopic: 'Proteção integral',
  difficulty: 'facil',
  statement: 'A Constituição Federal (art. 227) e o ECA asseguram à criança e ao adolescente a proteção integral, o que implica:',
  options: [
    'prioridade absoluta na formulação de políticas sociais públicas e destinação privilegiada de recursos',
    'tratamento igual ao dos adultos em todas as esferas',
    'prioridade apenas em matéria penal',
    'vedação de qualquer intervenção do Estado'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 4º do ECA, em harmonia com o art. 227 da CF/88, garante prioridade absoluta na formulação de políticas sociais públicas e destinação privilegiada de recursos públicos nas áreas relacionadas com a proteção à infância e à juventude.',
  optionExplanations: [
    'Correto: prioridade absoluta e destinação privilegiada de recursos (art. 4º do ECA).',
    'A proteção integral reconhece a vulnerabilidade da criança e do adolescente, com regime especial.',
    'A prioridade não se limita à esfera penal; abrange políticas sociais e recursos.',
    'A proteção é dever do Estado (art. 4º e art. 98 do ECA).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-012',
  discipline: 'Legislação Extravagante',
  topic: 'ECA — Lei nº 8.069/1990',
  subtopic: 'Medidas aplicáveis ao adolescente',
  difficulty: 'dificil',
  statement: 'Entre as medidas de orientação e apoio previstas no art. 112, II, do ECA, aplicáveis ao adolescente autor de ato infracional, está:',
  options: [
    'a prescrição de eventual abstinência de álcool e drogas',
    'a internação em estabelecimento penal',
    'a prisão preventiva',
    'a detenção em regime fechado'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 112, II, do ECA lista medidas de orientação e apoio, entre as quais: matrícula e frequência obrigatórias; acompanhamento e auxílio temporários; prescrição de eventual abstinência de álcool e drogas; e requisição de tratamento psicológico, psiquiátrico, médico e psicossocial.',
  optionExplanations: [
    'Correto: prescrição de eventual abstinência de álcool e drogas (art. 112, II, "c").',
    'A internação é medida socioeducativa do ECA, jamais em estabelecimento penal comum.',
    'A prisão preventiva é cautela criminal aplicável a adultos; não é medida do art. 112.',
    'Não existe regime fechado de pena para adolescente; o ECA aplica medidas socioeducativas.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-013',
  discipline: 'Legislação Extravagante',
  topic: 'Estatuto do Desarmamento (Lei nº 10.826/2003)',
  subtopic: 'Posse e porte',
  difficulty: 'intermediaria',
  statement: 'No Estatuto do Desarmamento, a diferença essencial entre posse e porte de arma de fogo é que:',
  options: [
    'ambos dependem apenas de registro no DETRAN',
    'a posse de arma de uso permitido depende de registro, enquanto o porte depende de prévia e expressa autorização da autoridade competente',
    'o porte é livre para maiores de 18 anos',
    'a posse depende de autorização e o porte, apenas, de registro'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 4º da Lei nº 10.826/2003 exige REGISTRO para o possuidor de arma de uso permitido; o art. 5º exige prévia e expressa AUTORIZAÇÃO para o porte, em caráter pessoal. O porte sem autorização é crime (art. 14).',
  optionExplanations: [
    'O registro de arma não é feito no DETRAN, que trata de veículos.',
    'Correto: registro para a posse (art. 4º) e autorização para o porte (art. 5º).',
    'O porte sem autorização legal é crime, mesmo para maiores de 18 anos.',
    'A afirmação inverte os institutos: posse = registro; porte = autorização.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-014',
  discipline: 'Legislação Extravagante',
  topic: 'Estatuto do Desarmamento (Lei nº 10.826/2003)',
  subtopic: 'Registro de arma',
  difficulty: 'intermediaria',
  statement: 'O prazo de validade do registro de arma de fogo de uso permitido é de:',
  options: [
    '2 anos, improrrogável',
    '5 anos, prorrogável uma vez',
    '10 anos, prorrogável por igual período',
    'prazo indeterminado, vitalício'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'O art. 4º, § 2º, da Lei nº 10.826/2003: o prazo de validade do registro é de 10 (dez) anos, prorrogável por igual período.',
  optionExplanations: [
    'Não há previsão legal de prazo de 2 anos.',
    'O prazo legal é de 10 anos, não de 5.',
    'Correto: 10 anos, prorrogáveis por igual período (art. 4º, § 2º).',
    'O registro não é vitalício; exige renovação no prazo legal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-015',
  discipline: 'Legislação Extravagante',
  topic: 'Estatuto do Desarmamento (Lei nº 10.826/2003)',
  subtopic: 'Vedações',
  difficulty: 'dificil',
  statement: 'A pessoa física que adquire arma de fogo de uso permitido, no Estatuto do Desarmamento:',
  options: [
    'pode transferi-la livremente a qualquer amigo maior de 18 anos',
    'somente pode adquiri-la mediante autorização, e a transferência a particular depende de autorização, observados os limites legais',
    'pode revendê-la sem qualquer formalidade',
    'pode portá-la livremente em qualquer lugar público'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A aquisição de arma de uso permitido por pessoa física é condicionada a autorização, e a transferência entre particulares depende de autorização. O porte em lugar público é vedado (art. 6º), salvo as hipóteses legais.',
  optionExplanations: [
    'A transferência não é livre: depende de autorização e observância da lei.',
    'Correto: aquisição mediante autorização e transferência a particular mediante autorização, nos limites da lei.',
    'A revenda sem formalidade é vedada e pode configurar crime.',
    'O porte em lugar público é, em regra, vedado (art. 6º).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-016',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes ambientais (Lei nº 9.605/1998)',
  subtopic: 'Crime contra a flora',
  difficulty: 'intermediaria',
  statement: 'Destruir, total ou parcialmente, floresta considerada de preservação permanente, sem autorização, constitui crime contra:',
  options: [
    'o ordenamento urbano',
    'a flora',
    'o patrimônio histórico',
    'a administração pública'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 38 da Lei nº 9.605/1998 (crimes contra a flora) pune quem destrói, total ou parcialmente, floresta considerada de preservação permanente, sem autorização, com pena de reclusão de 1 a 3 anos e multa.',
  optionExplanations: [
    'A destruição de floresta não é tipificada como crime contra o ordenamento urbano.',
    'Correto: é crime contra a FLORA (art. 38 da Lei nº 9.605/1998).',
    'O patrimônio histórico é tutelado por tipos próprios (art. 163 e seguintes do CP).',
    'A lesão ao meio ambiente não se tipifica como crime contra a administração pública.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-017',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes ambientais (Lei nº 9.605/1998)',
  subtopic: 'Crime contra a fauna',
  difficulty: 'intermediaria',
  statement: 'Matar, perseguir, caçar, apanhar ou utilizar animais silvestres, nativos ou em rota migratória, sem autorização legal, configura crime contra:',
  options: [
    'a fauna',
    'o meio ambiente do trabalho',
    'a saúde pública',
    'a relação de consumo'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 29 da Lei nº 9.605/1998 tipifica os crimes contra a fauna: matar, perseguir, caçar, apanhar, utilizar animais silvestres, nativos ou em rota migratória, sem autorização.',
  optionExplanations: [
    'Correto: é crime contra a fauna (art. 29 da Lei nº 9.605/1998).',
    'Não existe tipificação específica "contra o meio ambiente do trabalho" para essa conduta.',
    'A saúde pública é tutelada por outros tipos (ex.: contaminação de alimentos).',
    'A conduta lesa o meio ambiente, não a relação de consumo.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-018',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes ambientais (Lei nº 9.605/1998)',
  subtopic: 'Ação penal',
  difficulty: 'dificil',
  statement: 'Os crimes contra o meio ambiente previstos na Lei nº 9.605/1998 são punidos mediante:',
  options: [
    'ação penal pública incondicionada',
    'ação penal privada',
    'ação penal pública condicionada à representação',
    'medida administrativa apenas'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Os crimes ambientais são de ação penal pública incondicionada, sem necessidade de representação da vítima, com legitimidade do Ministério Público e das entidades associativas.',
  optionExplanations: [
    'Correto: ação penal pública incondicionada.',
    'A ação penal privativa da vítima não se aplica aos crimes ambientais.',
    'Não há exigência de representação para o início da ação penal.',
    'Há punição penal, não apenas administrativa.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-019',
  discipline: 'Legislação Extravagante',
  topic: 'Lei Maria da Penha (Lei nº 11.340/2006)',
  subtopic: 'Formas de violência',
  difficulty: 'facil',
  statement: 'A prática de difamação, calúnia e injúria contra a mulher no contexto doméstico configura, nos termos do art. 5º, IV, da Lei nº 11.340/2006, violência:',
  options: [
    'psíquica',
    'moral',
    'patrimonial',
    'física'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 5º, IV, da Lei nº 11.340/2006 define violência moral como "a que se configura mediante difamação, calúnia e injúria".',
  optionExplanations: [
    'A violência psíquica (art. 5º, II) abrange ameaça, constrangimento, humilhação, manipulação e isolamento, entre outras condutas.',
    'Correto: difamação, calúnia e injúria = violência moral (art. 5º, IV).',
    'A violência patrimonial (art. 5º, V) atinge bens e valores.',
    'A violência física (art. 5º, I) atinge o corpo, causando sofrimento ou lesão.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-020',
  discipline: 'Legislação Extravagante',
  topic: 'Lei Maria da Penha (Lei nº 11.340/2006)',
  subtopic: 'Registro de ocorrência',
  difficulty: 'intermediaria',
  statement: 'Nos termos do art. 12 da Lei nº 11.340/2006, a mulher que pretende registrar ocorrência de violência doméstica e familiar:',
  options: [
    'deve obrigatoriamente procurar apenas a Delegacia da Mulher da sua comarca',
    'pode fazê-lo em qualquer órgão policial, perante qualquer autoridade policial',
    'deve registrar a ocorrência diretamente no Ministério Público',
    'somente pode registrar mediante autorização judicial'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 12 da Lei nº 11.340/2006 assegura que a mulher pode registrar a ocorrência em qualquer órgão policial, perante qualquer autoridade policial.',
  optionExplanations: [
    'A lei assegura o registro em qualquer órgão policial, não apenas na Delegacia da Mulher.',
    'Correto: art. 12 da Lei nº 11.340/2006.',
    'O registro é feito em órgão policial; o MP atua na ação penal e nas medidas protetivas.',
    'Não se exige autorização judicial para registrar ocorrência.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-021',
  discipline: 'Legislação Extravagante',
  topic: 'Lei Maria da Penha (Lei nº 11.340/2006)',
  subtopic: 'Medidas protetivas de urgência',
  difficulty: 'intermediaria',
  statement: 'As medidas protetivas de urgência previstas na Lei nº 11.340/2006 são aplicadas:',
  options: [
    'por qualquer delegado de polícia, de ofício',
    'pelo juiz competente, mediante pedido do Ministério Público ou da vítima, conforme o art. 22 da Lei nº 11.340/2006',
    'apenas pelo Prefeito do Município',
    'somente após a sentença condenatória'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 22 da Lei nº 11.340/2006 prevê que as medidas protetivas de urgência serão requeridas ao juiz pelo Ministério Público ou pela vítima (ou seu representante legal), podendo ser determinadas de ofício pelo juiz quando necessário.',
  optionExplanations: [
    'A aplicação das medidas protetivas é judicial, não policial.',
    'Correto: art. 22 da Lei nº 11.340/2006 — juiz, mediante requisição do MP ou da vítima.',
    'A competência é judicial, não do Executivo municipal.',
    'As medidas são de urgência, anteriores à sentença.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-022',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Drogas (Lei nº 11.343/2006)',
  subtopic: 'Tráfico ilícito',
  difficulty: 'intermediaria',
  statement: 'A pena do crime de tráfico ilícito de drogas (art. 33, caput, da Lei nº 11.343/2006) é de:',
  options: [
    'detenção de 6 meses a 1 ano e multa',
    'reclusão de 5 a 15 anos e multa',
    'reclusão de 8 a 15 anos e multa',
    'reclusão de 2 a 4 anos e multa'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 33, caput, da Lei nº 11.343/2006: "Pena - reclusão, de 5 (cinco) a 15 (quinze) anos, e multa de 500 (quinhentos) a 1.500 (mil e quinhentos) dias-multa."',
  optionExplanations: [
    'Essa pena corresponde ao art. 28 (conduta para consumo pessoal), não ao tráfico.',
    'Correto: reclusão de 5 a 15 anos e multa (art. 33, caput).',
    'A pena de 8 a 15 anos aplica-se ao reincidente em crime previsto na própria Lei de Drogas (art. 40).',
    'Não há previsão de 2 a 4 anos para o tráfico.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-023',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Drogas (Lei nº 11.343/2006)',
  subtopic: 'Uso e consumo pessoal',
  difficulty: 'intermediaria',
  statement: 'Quem adquire, transporta ou traz consigo droga, sem autorização, para consumo pessoal, responde, nos termos do art. 28 da Lei nº 11.343/2006, por:',
  options: [
    'reclusão de 3 a 10 anos',
    'detenção de 6 meses a 1 ano e multa, ou prestação de serviços à comunidade de 2 meses a 1 ano',
    'pena de multa apenas',
    'medida de segurança em hospital psiquiátrico'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 28 da Lei nº 11.343/2006 prevê, para quem adquire, armazena, transporta, traz consigo etc. droga sem autorização, para consumo pessoal: detenção de 6 meses a 1 ano e multa, ou prestação de serviços à comunidade por 2 meses a 1 ano.',
  optionExplanations: [
    'A pena de 3 a 10 anos não corresponde ao art. 28.',
    'Correto: detenção de 6 meses a 1 ano e multa, ou prestação de serviços à comunidade de 2 meses a 1 ano (art. 28).',
    'A lei prevê pena privativa de liberdade ou prestação de serviços, não apenas multa.',
    'Não há previsão de internação psiquiátrica como consequência direta do art. 28.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-024',
  discipline: 'Legislação Extravagante',
  topic: 'Lei de Drogas (Lei nº 11.343/2006)',
  subtopic: 'Reincidência',
  difficulty: 'dificil',
  statement: 'Conforme o art. 40 da Lei nº 11.343/2006, quem pratica o tráfico ilícito (art. 33, caput) sendo reincidente em crime previsto nesta Lei sofre pena de:',
  options: [
    'reclusão de 5 a 15 anos e multa',
    'reclusão de 8 a 15 anos e multa',
    'reclusão de 10 a 20 anos e multa',
    'detenção de 2 a 4 anos e multa'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 40 da Lei nº 11.343/2006: quem pratica o crime do art. 33, caput, sendo reincidente em crime previsto nesta Lei: pena - reclusão, de 8 (oito) a 15 (quinze) anos, e multa de 500 a 1.500 dias-multa.',
  optionExplanations: [
    'Essa é a pena do art. 33, caput, para o agente não reincidente.',
    'Correto: reclusão de 8 a 15 anos e multa (art. 40).',
    'Não há previsão de 10 a 20 anos na Lei de Drogas.',
    'A pena é privativa de liberdade (reclusão), não de detenção de 2 a 4 anos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-025',
  discipline: 'Legislação Extravagante',
  topic: 'Organizações criminosas (Lei nº 12.850/2013)',
  subtopic: 'Definição legal',
  difficulty: 'intermediaria',
  statement: 'A Lei nº 12.850/2013 define organização criminosa como:',
  options: [
    'qualquer grupo de duas pessoas que pratique um crime',
    'grupo de três ou mais pessoas, estruturalmente ordenado, caracterizado pela divisão de tarefas, ainda que informalmente, com objetivo de obter vantagem de qualquer natureza mediante a prática de infrações penais',
    'associação de mais de dez pessoas com registro em cartório',
    'pessoa jurídica que pratique crime econômico'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 2º da Lei nº 12.850/2013: organização criminosa é a associação de três ou mais pessoas estruturalmente ordenada, caracterizada pela divisão de tarefas, ainda que informalmente, com objetivo de obter, direta ou indiretamente, vantagem de qualquer natureza, mediante a prática de infrações penais.',
  optionExplanations: [
    'Exige-se, no mínimo, três pessoas (a definição legal é expressa).',
    'Correto: é a definição do art. 2º da Lei nº 12.850/2013.',
    'Não se exige registro em cartório nem número mínimo de dez pessoas.',
    'A lei alcança associações informais, não apenas pessoas jurídicas.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-026',
  discipline: 'Legislação Extravagante',
  topic: 'Organizações criminosas (Lei nº 12.850/2013)',
  subtopic: 'Colaboração premiada',
  difficulty: 'dificil',
  statement: 'A colaboração premiada, disciplinada pela Lei nº 12.850/2013, permite que o participante que contribua espontaneamente para a apuração do fato e a identificação dos demais coautores e partícipes:',
  options: [
    'seja automaticamente absolvido, sem qualquer análise judicial',
    'tenha sua pena reduzida, mediante acordo homologado pelo juiz, observados os requisitos legais',
    'fique isento de comparecer ao processo',
    'tenha o processo arquivado de plano pela autoridade policial'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A colaboração premiada (Lei nº 12.850/2013, arts. 3º e seguintes) é negócio jurídico processual: mediante acordo, o colaborador tem a pena reduzida nos limites legais, com análise e homologação judicial, garantias do contraditório e contrapartidas.',
  optionExplanations: [
    'A absolução automática não existe; o juiz analisa o acordo e a contribuição.',
    'Correto: redução de pena mediante acordo homologado pelo juiz, nos limites legais.',
    'O colaborador deve colaborar de forma útil e concreta, sob controle judicial.',
    'O arquivamento não decorre automaticamente da colaboração.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-027',
  discipline: 'Legislação Extravagante',
  topic: 'Código de Trânsito Brasileiro (Lei nº 9.503/1997)',
  subtopic: 'Penalidades',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 258 do CTB, o infrator de trânsito responderá, cumulativamente, por:',
  options: [
    'apenas multa',
    'multa, suspensão do direito de dirigir e recolhimento do documento de habilitação',
    'prisão em flagrante obrigatória',
    'perda do veículo em favor da União'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 258 do CTB: "O infrator responderá, cumulativamente, por: I - multa; II - suspensão do direito de dirigir; III - recolhimento do documento de habilitação."',
  optionExplanations: [
    'A penalidade não se limita à multa; as três penalidades podem ser aplicadas cumulativamente.',
    'Correto: art. 258, I a III, do CTB.',
    'A prisão em flagrante é medida restritiva de liberdade aplicável em situações específicas (crimes de trânsito), não penalidade administrativa geral.',
    'A perda do veículo não é penalidade geral prevista no art. 258.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-028',
  discipline: 'Legislação Extravagante',
  topic: 'Código de Trânsito Brasileiro (Lei nº 9.503/1997)',
  subtopic: 'Princípios',
  difficulty: 'facil',
  statement: 'O art. 7º do CTB estabelece que:',
  options: [
    'o trânsito, em condições seguras, é um direito de todos e dever dos órgãos de trânsito',
    'o trânsito é direito exclusivo dos condutores de veículos automotores',
    'os pedestres não têm qualquer direito nas vias',
    'a segurança viária depende exclusivamente da vontade do condutor'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O art. 7º do CTB: "O trânsito, em condições seguras, é um direito de todos e dever dos órgãos de trânsito, devendo os órgãos de trânsito, no âmbito de suas competências, adotar as medidas necessárias com a finalidade de salvar vidas e evitar danos."',
  optionExplanations: [
    'Correto: art. 7º do CTB — direito de todos e dever dos órgãos de trânsito.',
    'O trânsito envolve todos os usuários das vias, não apenas condutores.',
    'O CTB protege os pedestres e demais usuários das vias.',
    'A segurança viária é dever dos órgãos de trânsito e responsabilidade de todos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-029',
  discipline: 'Legislação Extravagante',
  topic: 'Código de Trânsito Brasileiro (Lei nº 9.503/1997)',
  subtopic: 'Definições',
  difficulty: 'intermediaria',
  statement: 'No CTB, considera-se "trânsito" a:',
  options: [
    'circulação exclusiva de veículos automotores',
    'circulação de veículos, de pedestres ou de animais, nas vias terrestres do país',
    'circulação de veículos em rodovias federais',
    'locomoção de pedestres apenas em calçadas'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O CTB define o trânsito como a circulação de veículos, de pedestres ou de animais, nas vias terrestres do país. O conceito é amplo e abrange todos os usuários das vias.',
  optionExplanations: [
    'A definição legal abrange pedestres e animais, não apenas veículos.',
    'Correto: é a definição do CTB.',
    'O trânsito não se limita às rodovias federais; abrange todas as vias terrestres.',
    'A locomoção de pedestres integra o conceito de trânsito, não o exclui.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
{
  id: 'le-030',
  discipline: 'Legislação Extravagante',
  topic: 'Código de Trânsito Brasileiro (Lei nº 9.503/1997)',
  subtopic: 'Embriaguez ao volante',
  difficulty: 'dificil',
  statement: 'Dirigir sob influência de álcool ou de qualquer substância psicoativa que determine dependência configura, no CTB, infração:',
  options: [
    'leve, com advertência por escrito',
    'gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir',
    'média, com multa simples',
    'gravíssima, apenas com multa simples'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O art. 165 do CTB: dirigir sob influência de álcool ou de qualquer substância psicoativa que determine dependência é infração gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir, além das medidas administrativas cabíveis (retenção do veículo e recolhimento da CNH).',
  optionExplanations: [
    'A infração é gravíssima, não leve; não se aplica advertência.',
    'Correto: infração gravíssima, multa multiplicada por dez e suspensão do direito de dirigir (art. 165).',
    'A infração é gravíssima, não média.',
    'Há suspensão do direito de dirigir, não apenas multa simples.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Legislação Extravagante'
},
/* =========================================================================
   4. CONHECIMENTOS ESPECÍFICOS (25 questões) — 2 pontos cada
   SUSP (001-005), EGM (006-011), Lei 1.625/2026 (012-022), Lei 1.416/2022 (023-025)
   ========================================================================= */
{
  id: 'ce-001',
  discipline: 'Conhecimentos Específicos',
  topic: 'SUSP — Lei nº 13.675/2018',
  subtopic: 'Organização do SUSP',
  difficulty: 'intermediaria',
  statement: 'Nos termos da Lei nº 13.675/2018, o Sistema Único de Segurança Pública (SUSP) tem como órgão central:',
  options: [
    'o Conselho Nacional de Segurança Pública e Defesa Social',
    'o Ministério Extraordinário da Segurança Pública',
    'a Secretaria Nacional de Segurança Pública (Senasp), isoladamente',
    'o Supremo Tribunal Federal'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 9º da Lei nº 13.675/2018 institui o SUSP "que tem como órgão central o Ministério Extraordinário da Segurança Pública", sendo coordenado por esse Ministério (art. 10, § 1º).',
  optionExplanations: [
    'Os Conselhos integram o SUSP, mas não são o órgão central.',
    'Correto: art. 9º da Lei nº 13.675/2018 — órgão central do SUSP.',
    'A Senasp é integrante operacional (art. 9º, § 2º, XI), não o órgão central isolado.',
    'O STF não integra a estrutura do SUSP.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.675/2018)'
},
{
  id: 'ce-002',
  discipline: 'Conhecimentos Específicos',
  topic: 'SUSP — Lei nº 13.675/2018',
  subtopic: 'Disposições preliminares',
  difficulty: 'facil',
  statement: 'Conforme o art. 2º da Lei nº 13.675/2018, a segurança pública é:',
  options: [
    'dever exclusivo dos Municípios, nos termos do art. 30 da CF/88',
    'dever do Estado e responsabilidade de todos, compreendendo a União, os Estados, o Distrito Federal e os Municípios',
    'dever exclusivo da União, por ser matéria de segurança nacional',
    'atribuição privativa das polícias militares'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 2º da Lei nº 13.675/2018: "A segurança pública é dever do Estado e responsabilidade de todos, compreendendo a União, os Estados, o Distrito Federal e os Municípios, no âmbito das competências e atribuições legais de cada um."',
  optionExplanations: [
    'A responsabilidade abrange todos os entes federativos, não só o Município.',
    'Correto: transcrição do art. 2º da Lei nº 13.675/2018.',
    'A segurança não é matéria exclusiva da União; a CF/88 distribui competências (art. 144).',
    'As polícias militares integram o sistema, mas a responsabilidade é difusa (dever do Estado e responsabilidade de todos).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.675/2018)'
},
{
  id: 'ce-003',
  discipline: 'Conhecimentos Específicos',
  topic: 'SUSP — Lei nº 13.675/2018',
  subtopic: 'Integrantes do SUSP',
  difficulty: 'intermediaria',
  statement: 'No âmbito do SUSP, as guardas municipais figuram como:',
  options: [
    'integrantes estratégicas, ao lado dos Poderes Executivos',
    'integrantes operacionais, entre os órgãos e instituições do art. 9º, § 2º',
    'meros convidados sem direito a voto nos conselhos',
    'órgãos de controle externo do sistema'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 9º, § 2º, VII, da Lei nº 13.675/2018 lista as guardas municipais entre os integrantes operacionais do SUSP; os integrantes estratégicos são os Poderes Executivos e os Conselhos (§ 1º).',
  optionExplanations: [
    'Os integrantes estratégicos são a União, Estados, DF e Municípios e os Conselhos (§ 1º).',
    'Correto: guardas municipais = integrantes operacionais (art. 9º, § 2º, VII).',
    'As guardas são integrantes plenas, e não "convidadas".',
    'O controle é exercido por corregedorias e ouvidorias, não pelas guardas como categoria.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.675/2018)'
},
{
  id: 'ce-004',
  discipline: 'Conhecimentos Específicos',
  topic: 'SUSP — Lei nº 13.675/2018',
  subtopic: 'Princípios da PNSPDS',
  difficulty: 'dificil',
  statement: 'São princípios da Política Nacional de Segurança Pública e Defesa Social (PNSPDS), segundo o art. 4º da Lei nº 13.675/2018, EXCETO:',
  options: [
    'uso comedido e proporcional da força pelos agentes da segurança pública',
    'proteção dos direitos humanos, respeito aos direitos fundamentais e promoção da cidadania e da dignidade da pessoa humana',
    'resolução pacífica de conflitos',
    'uso discricionário e ilimitado da força para a manutenção da ordem'
  ],
  correctIndex: 3,
  points: 2,
  explanation: 'O art. 4º da Lei nº 13.675/2018 lista os princípios da PNSPDS, entre os quais: direitos humanos (III), resolução pacífica de conflitos (VIII) e uso comedido e proporcional da força (IX, redação da Lei nº 14.751/2023). O uso ilimitado da força contraria frontalmente esses princípios.',
  optionExplanations: [
    'É princípio expresso do art. 4º, IX (redação da Lei nº 14.751/2023).',
    'É princípio expresso do art. 4º, III.',
    'É princípio expresso do art. 4º, VIII.',
    'Correto (é o EXCETO): o princípio é o uso comedido e proporcional da força, jamais ilimitado.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.675/2018)'
},
{
  id: 'ce-005',
  discipline: 'Conhecimentos Específicos',
  topic: 'SUSP — Lei nº 13.675/2018',
  subtopic: 'Sinesp',
  difficulty: 'intermediaria',
  statement: 'A sigla SINESP, prevista na Lei nº 13.675/2018, corresponde a:',
  options: [
    'Sistema Nacional de Segurança Pública e Proteção Social',
    'Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas',
    'Serviço Nacional de Inteligência e Segurança das Polícias',
    'Secretaria Nacional de Pesquisas em Segurança Pública'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 35 da Lei nº 13.675/2018 institui o Sinesp — Sistema Nacional de Informações de Segurança Pública, Prisionais, de Rastreabilidade de Armas e Munições, de Material Genético, de Digitais e de Drogas — com finalidade de armazenar, tratar e integrar dados para as políticas de segurança pública.',
  optionExplanations: [
    'A expansão não corresponde ao texto legal.',
    'Correto: é a expansão legal da sigla (art. 35 da Lei nº 13.675/2018).',
    'A sigla não corresponde a esse nome.',
    'A sigla não corresponde a esse nome.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.675/2018)'
},
{
  id: 'ce-006',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Disposição preliminar',
  difficulty: 'facil',
  statement: 'A Lei nº 13.022/2014 (Estatuto Geral das Guardas Municipais) institui normas gerais para as guardas municipais, disciplinando:',
  options: [
    'o art. 30, I, da Constituição Federal',
    'o § 8º do art. 144 da Constituição Federal',
    'o art. 227 da Constituição Federal',
    'o art. 149 da Constituição Federal'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 1º da Lei nº 13.022/2014: "Esta Lei institui normas gerais para as guardas municipais, disciplinando o § 8º do art. 144 da Constituição Federal" — dispositivo que autoriza os Municípios a instituírem Guarda Municipal para proteção de bens, serviços e instalações municipais.',
  optionExplanations: [
    'O art. 30 trata das competências do Município; não é o dispositivo disciplinado pela EGM.',
    'Correto: art. 1º da Lei nº 13.022/2014 — § 8º do art. 144 da CF/88.',
    'O art. 227 trata da proteção da criança e do adolescente.',
    'O art. 149 trata de competências tributárias dos Municípios.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-007',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Natureza da instituição',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 2º da Lei nº 13.022/2014, incumbe às guardas municipais, instituições de caráter civil, uniformizadas e armadas conforme previsto em lei, a função de:',
  options: [
    'policiamento ostensivo de rodovias federais',
    'proteção municipal preventiva, ressalvadas as competências da União, dos Estados e do Distrito Federal',
    'repressão a crimes dolosos com pena superior a 4 anos',
    'fiscalização federal de fronteiras'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 2º da Lei nº 13.022/2014: "Incumbe às guardas municipais, instituições de caráter civil, uniformizadas e armadas conforme previsto em lei, a função de proteção municipal preventiva, ressalvadas as competências da União, dos Estados e do Distrito Federal."',
  optionExplanations: [
    'O policiamento ostensivo de rodovias federais compete à Polícia Rodoviária Federal (art. 144, § 1º, da CF).',
    'Correto: é a redação do art. 2º da Lei nº 13.022/2014.',
    'A repressão a crimes dolosos compete às polícias judiciárias (Polícia Civil), no âmbito estadual.',
    'A fiscalização de fronteiras compete à Polícia Federal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-008',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Princípios mínimos de atuação',
  difficulty: 'intermediaria',
  statement: 'São princípios mínimos de atuação das guardas municipais, segundo o art. 3º da Lei nº 13.022/2014, EXCETO:',
  options: [
    'proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas',
    'preservação da vida, redução do sofrimento e diminuição das perdas',
    'uso progressivo da força',
    'uso imediato de armamento letal como regra de atuação'
  ],
  correctIndex: 3,
  points: 2,
  explanation: 'O art. 3º da Lei nº 13.022/2014 lista: I - proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas; II - preservação da vida, redução do sofrimento e diminuição das perdas; III - patrulhamento preventivo; IV - compromisso com a evolução social da comunidade; e V - uso progressivo da força. O uso imediato de armamento letal como regra contradiz esses princípios.',
  optionExplanations: [
    'É princípio expresso (art. 3º, I).',
    'É princípio expresso (art. 3º, II).',
    'É princípio expresso (art. 3º, V).',
    'Correto (é o EXCETO): a lei consagra o uso progressivo da força, não o uso imediato de armamento letal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-009',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Competência geral',
  difficulty: 'facil',
  statement: 'A competência geral das guardas municipais, prevista no art. 4º da Lei nº 13.022/2014, é a proteção de:',
  options: [
    'bens, serviços, logradouros públicos municipais e instalações do Município',
    'bens públicos de toda a Administração Pública direta e indireta da União',
    'rodovias federais e terminais de transporte coletivo',
    'fronteiras terrestres e marítimas do País'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'O art. 4º da Lei nº 13.022/2014: "É competência geral das guardas municipais a proteção de bens, serviços, logradouros públicos municipais e instalações do Município", abrangendo os bens de uso comum, de uso especial e dominiais (parágrafo único).',
  optionExplanations: [
    'Correto: art. 4º da Lei nº 13.022/2014.',
    'A competência alcança bens do Município, não os da União.',
    'A fiscalização de rodovias federais compete à PRF.',
    'A proteção de fronteiras compete à Polícia Federal e às forças armadas.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-010',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Criação e subordinação',
  difficulty: 'intermediaria',
  statement: 'Sobre a criação da guarda municipal (art. 6º da Lei nº 13.022/2014), é correto afirmar que:',
  options: [
    'a guarda municipal é criada por decreto do Governador do Estado',
    'o Município pode criar, por lei, sua guarda municipal, sendo a guarda subordinada ao chefe do Poder Executivo municipal',
    'a criação depende de autorização do Ministério da Justiça e Segurança Pública',
    'a guarda municipal é subordinada diretamente ao comando da Polícia Militar'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O art. 6º da Lei nº 13.022/2014: "O Município pode criar, por lei, sua guarda municipal. Parágrafo único. A guarda municipal é subordinada ao chefe do Poder Executivo municipal."',
  optionExplanations: [
    'A criação é municipal e por lei, não por decreto estadual.',
    'Correto: art. 6º da Lei nº 13.022/2014.',
    'Não há exigência de autorização federal para a criação.',
    'A guarda é subordinada ao chefe do Executivo municipal, não ao comando da Polícia Militar.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-011',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Vedações e disciplina',
  difficulty: 'dificil',
  statement: 'Nos termos do art. 14, parágrafo único, da Lei nº 13.022/2014:',
  options: [
    'as guardas municipais são sujeitas aos regulamentos disciplinares da Polícia Militar',
    'as guardas municipais não podem ficar sujeitas a regulamentos disciplinares de natureza militar',
    'a disciplina das guardas é aplicada exclusivamente pelo Poder Judiciário',
    'as guardas municipais adotam o Código de Disciplina Militar da União'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O parágrafo único do art. 14 da Lei nº 13.022/2014: "As guardas municipais não podem ficar sujeitas a regulamentos disciplinares de natureza militar." O EGM também veda que a estrutura hierárquica utilize denominações idênticas às das forças militares (art. 19).',
  optionExplanations: [
    'A lei veda expressamente a sujeição a regulamentos disciplinares militares.',
    'Correto: é a redação do parágrafo único do art. 14.',
    'A apuração disciplinar é feita por corregedoria própria (art. 13, I), não exclusivamente pelo Judiciário.',
    'As guardas são instituições civis e não adotam código disciplinar militar.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Conhecimentos Específicos (Lei nº 13.022/2014)'
},
{
  id: 'ce-012',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Natureza da instituição (art. 5º)',
  difficulty: 'facil',
  statement: 'A Guarda Municipal de São Gonçalo é órgão integrante da Administração Direta do Poder Executivo Municipal, instituição uniformizada, pautada na hierarquia e na disciplina, nos termos do art. 5º da Lei Municipal nº 1.625/2026. Entre as atribuições do cargo de Guarda Municipal II, consta:',
  options: [
    'conceder alvarás de funcionamento de estabelecimentos comerciais',
    'zelar pelos bens, equipamentos e prédios públicos do município',
    'processar e julgar infrações penais dolosas',
    'representar perante o Ministério Público como autoridade policial'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O Anexo IV da Lei Municipal nº 1.625/2026 (reproduzido no item 1.11 do edital) prevê, entre as 19 atribuições do Guarda Municipal II, a atribuição I: "Zelar pelos bens, equipamentos e prédios públicos do município".',
  optionExplanations: [
    'A concessão de alvarás compete a órgãos administrativos com essa competência, não é atribuição típica do guarda.',
    'Correto: é a atribuição I do Anexo IV da Lei nº 1.625/2026.',
    'O julgamento de infrações penais é privativo do Poder Judiciário.',
    'A autoridade policial é o delegado de polícia; a guarda não ostenta essa condição.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11 e Anexo III — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-013',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Grupamentos armados (art. 5º, § 1º)',
  difficulty: 'dificil',
  statement: 'Nos termos do art. 5º, § 1º, da Lei Municipal nº 1.625/2026, os grupamentos da Guarda Municipal de São Gonçalo serão armados de forma fracionada visando a:',
  options: [
    'garantir a avaliação psicológica prévia e a capacitação integral dos seus agentes, observada a manutenção das atividades ordinárias do Município',
    'substituir gradualmente a Polícia Militar no policiamento ostensivo',
    'reduzir o efetivo da Guarda a partir de 2027',
    'transferir a guarda municipal ao comando estadual de segurança'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'O item 1.11.1 do edital, citando o art. 5º, § 1º, da Lei Municipal nº 1.625/2026: "A Guarda Municipal terá seus grupamentos armados de forma fracionada, visando a garantir a avaliação psicológica prévia e capacitação integral dos seus agentes, observada a manutenção das atividades ordinárias do Município."',
  optionExplanations: [
    'Correto: é a redação do art. 5º, § 1º, da Lei nº 1.625/2026, citada no edital.',
    'A lei não prevê substituição da Polícia Militar; as instituições têm atribuições distintas.',
    'Não há previsão legal de redução de efetivo no dispositivo.',
    'A guarda é municipal; não há transferência ao comando estadual.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11.1 — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-014',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Dever funcional (art. 5º, § 2º)',
  difficulty: 'intermediaria',
  statement: 'Conforme o art. 5º, § 2º, da Lei Municipal nº 1.625/2026, é dever do servidor exercer as competências previstas no Anexo IV:',
  options: [
    'apenas no Grupamento em que estiver lotado, vedada a atuação em outro setor',
    'independentemente do Grupamento em que esteja lotado, desde que previamente capacitado para atuar, de acordo com a especificidade de cada setor',
    'somente mediante requisição da Polícia Militar',
    'exclusivamente durante o horário de expediente regular'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O item 1.11.2 do edital, citando o art. 5º, § 2º, da Lei nº 1.625/2026: "É dever do servidor exercer as competências previstas neste item, independentemente do Grupamento em que esteja lotado, desde que previamente capacitado para atuar, de acordo com a especificidade de cada setor."',
  optionExplanations: [
    'A lei expressamente autoriza o exercício independentemente do Grupamento de lotação.',
    'Correto: é a redação do art. 5º, § 2º, da Lei nº 1.625/2026.',
    'Não há exigência de requisição da Polícia Militar.',
    'O dispositivo não se restringe ao horário de expediente.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11.2 — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-015',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Lotação e planejamento operacional (art. 6º)',
  difficulty: 'intermediaria',
  statement: 'O art. 6º da Lei Municipal nº 1.625/2026 estabelece que os servidores da Guarda Municipal estão sujeitos a:',
  options: [
    'assumir serviço em qualquer parte do Município que demande a atuação da Guarda, mediante planejamento operacional prévio, podendo ser alterado a qualquer tempo',
    'atuar somente no bairro de sua residência',
    'servir exclusivamente no centro administrativo municipal',
    'assumir serviço fora do Município, sempre que requisitado pelo Estado'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'O item 1.11.3 do edital, citando o art. 6º da Lei nº 1.625/2026: os servidores estão sujeitos a assumir serviço em qualquer parte do Município que demande a atuação da Guarda, mediante planejamento operacional prévio, podendo ser alterado a qualquer tempo para melhor adequação do serviço ordinário.',
  optionExplanations: [
    'Correto: é a redação do art. 6º da Lei nº 1.625/2026.',
    'A lei não limita a atuação ao bairro de residência.',
    'A lei não restringe a atuação ao centro administrativo.',
    'O dispositivo trata de serviço no território municipal, não fora dele.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11.3 — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-016',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Vinculação e regulamentação (arts. 141 e 149)',
  difficulty: 'intermediaria',
  statement: 'A Guarda Municipal de São Gonçalo é vinculada à Secretaria Municipal de Ordem Pública, à qual compete regulamentar suas atividades por meio de Procedimento Operacional Padrão (POP), nos termos dos arts. 141, §§ 1º e 2º, e 149 da Lei Municipal nº 1.625/2026. Essa competência de regulamentar por POP cabe:',
  options: [
    'ao comando da Polícia Militar do Estado do Rio de Janeiro',
    'à Secretaria Municipal de Ordem Pública',
    'ao Conselho Municipal de Segurança Pública',
    'ao Instituto SELECON'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O item 1.12 do edital: "A Guarda Municipal de São Gonçalo é vinculada à Secretaria Municipal de Ordem Pública, à qual compete regulamentar suas atividades por meio de Procedimento Operacional Padrão - POP, nos termos dos arts. 141, §§ 1º e 2º, e 149 da Lei Municipal n.º 1.625/2026."',
  optionExplanations: [
    'A Polícia Militar não regulamenta as atividades da guarda municipal.',
    'Correto: a Secretaria Municipal de Ordem Pública (item 1.12 do edital).',
    'O Conselho Municipal não é o órgão regulamentador previsto nos arts. 141 e 149.',
    'O Instituto SELECON é a organizadora do concurso, sem ingerência na regulamentação interna.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.12 — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-017',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Atribuições (Anexo IV) — trânsito',
  difficulty: 'intermediaria',
  statement: 'Entre as atribuições do Guarda Municipal II (Anexo IV da Lei nº 1.625/2026) consta exercer as competências de trânsito que lhes forem conferidas nas vias e logradouros municipais:',
  options: [
    'apenas mediante concurso público específico de trânsito',
    'nos termos da Lei nº 9.503/1997 (CTB) ou de forma concorrente, mediante convênio celebrado com órgão de trânsito estadual ou municipal',
    'somente nas vias estaduais, por delegação do Governo do Estado',
    'vedada a atuação em feiras e eventos públicos'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'A atribuição VI do Anexo IV da Lei nº 1.625/2026: exercer as competências de trânsito que lhes forem conferidas, nas vias e logradouros municipais, nos termos da Lei nº 9.503/1997 (CTB), ou de forma concorrente, mediante convênio celebrado com órgão de trânsito estadual ou municipal.',
  optionExplanations: [
    'A lei não condiciona o exercício das competências de trânsito a concurso específico.',
    'Correto: é a redação da atribuição VI do Anexo IV da Lei nº 1.625/2026.',
    'A atuação prevista é nas vias e logradouros municipais, não nas estaduais por delegação.',
    'A lei não veda atuação em feiras e eventos; pelo contrário, prevê segurança de grandes eventos (atribuição XVII).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11, atribuição VI — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-018',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Atribuições (Anexo IV) — flagrante',
  difficulty: 'facil',
  statement: 'Diante de flagrante delito presenciado pelo guarda municipal, a atribuição XIV do Anexo IV da Lei nº 1.625/2026 determina que o servidor:',
  options: [
    'aplique imediatamente pena restritiva de liberdade ao autor',
    'encaminhe o autor da infração ao delegado de polícia, preservando o local do crime, quando possível e sempre que necessário',
    'conduza o autor diretamente ao juizado de plantão sem preservar o local',
    'libere o autor mediante termo circunstancial assinado pelo próprio guarda'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'A atribuição XIV do Anexo IV da Lei nº 1.625/2026: "Encaminhar ao delegado de polícia, diante de flagrante delito, o autor da infração, preservando o local do crime, quando possível e sempre que necessário."',
  optionExplanations: [
    'A aplicação de pena é privativa do Poder Judiciário.',
    'Correto: é a redação da atribuição XIV do Anexo IV.',
    'O encaminhamento é ao delegado de polícia, e a preservação do local é dever expresso.',
    'A liberação do autor não é atribuição do guarda; o flagrante é encaminhado à autoridade policial.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11, atribuição XIV — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-019',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Atribuições (Anexo IV) — policiamento',
  difficulty: 'dificil',
  statement: 'A atribuição XIX do Anexo IV da Lei nº 1.625/2026, que completa o rol de 19 atribuições do Guarda Municipal II, é:',
  options: [
    'realizar policiamento preventivo, ostensivo e comunitário',
    'representar como autoridade policial em inquéritos',
    'executar mandados de prisão expedidos pelo Poder Judiciário',
    'exercer o poder de polícia disciplinar sobre servidores de outros órgãos'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'A atribuição XIX do Anexo IV da Lei nº 1.625/2026: "Realizar policiamento preventivo, ostensivo e comunitário." As demais opções não constam do rol de atribuições do cargo.',
  optionExplanations: [
    'Correto: é a atribuição XIX do Anexo IV da Lei nº 1.625/2026.',
    'A representação em inquérito é titularidade do delegado de polícia.',
    'A execução de mandados de prisão compete à autoridade policial e agentes de segurança competentes nos termos da lei processual.',
    'A disciplina aplica-se aos servidores da própria Guarda, nos limites do Estatuto.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.11, atribuição XIX — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-020',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto da Guarda Municipal — Lei nº 1.625/2026',
  subtopic: 'Curso de Formação (art. 29)',
  difficulty: 'intermediaria',
  statement: 'Nos termos do art. 29, §§ 6º e 7º, da Lei Municipal nº 1.625/2026, o Curso de Formação da Guarda Municipal:',
  options: [
    'tem carga horária livre, a critério do candidato, e é dispensável para a posse',
    'consiste na aprovação em todas as matérias atinentes à função, com carga horária mínima estipulada pela grade curricular da Senasp ou equivalente, e sua conclusão é requisito indispensável para o ingresso no Quadro',
    'é ministrado pelo Instituto SELECON e não condiciona a posse',
    'substitui a prova objetiva do concurso para candidatos com ensino superior'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O edital (itens 14.3 e 14.5), citando o art. 29, §§ 6º e 7º, da Lei nº 1.625/2026: o Curso de Formação consiste na aprovação do candidato/aluno em todas as matérias atinentes à função de Guarda Municipal, com carga horária mínima estipulada pela grade curricular da Senasp ou equivalente; a conclusão é requisito indispensável para o ingresso no Quadro de servidores.',
  optionExplanations: [
    'Há carga horária mínima (grade Senasp) e a conclusão é indispensável.',
    'Correto: art. 29, §§ 6º e 7º, da Lei nº 1.625/2026, citados no edital.',
    'O Curso é organizado e ministrado pelo Município de São Gonçalo (item 14.1 do edital).',
    'O Curso não substitui a prova objetiva; é etapa posterior para classificados.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, itens 14.1, 14.3 e 14.5 — Conhecimentos Específicos (Lei nº 1.625/2026)'
},
{
  id: 'ce-021',
  discipline: 'Conhecimentos Específicos',
  topic: 'Regime jurídico aplicável',
  subtopic: 'Lei nº 1.625/2026 e Lei nº 1.416/2022',
  difficulty: 'facil',
  statement: 'Os candidatos aprovados que ingressarem no Quadro Permanente da Guarda Municipal de São Gonçalo pertencerão ao regime jurídico estatutário e reger-se-ão, conforme o item 1.9 do edital:',
  options: [
    'pela Consolidação das Leis do Trabalho, exclusivamente',
    'pelo Estatuto da Guarda Municipal (Lei Municipal nº 1.625/2026), aplicando-se subsidiariamente o Estatuto dos Servidores do Município (Lei Municipal nº 1.416/2022)',
    'apenas pela Lei Municipal nº 1.416/2022, em caráter prioritário',
    'pelo regime celetista da Lei nº 8.112/1990'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O item 1.9 do edital: os candidatos reger-se-ão pelo Estatuto da Guarda Municipal, Lei Municipal nº 1.625, de 28 de maio de 2026, aplicando-se subsidiariamente o Estatuto dos Servidores do Município, Lei Municipal nº 1.416/2022, e respectivas alterações, bem como as demais normas legais específicas pertinentes ao cargo.',
  optionExplanations: [
    'A CLT aplica-se a relações de trabalho privadas; o cargo é regime estatutário público.',
    'Correto: Lei nº 1.625/2026 regente, com aplicação subsidiária da Lei nº 1.416/2022 (item 1.9 do edital).',
    'A subsidiariedade inverte a ordem: a Lei nº 1.625/2026 é a norma especial.',
    'A Lei nº 8.112/1990 é o Estatuto federal dos servidores; aplica-se ao Município apenas de forma subsidiária, quando houver omissão (art. 42), não por opção do edital.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.9 — Conhecimentos Específicos'
},
{
  id: 'ce-022',
  discipline: 'Conhecimentos Específicos',
  topic: 'Requisitos do cargo — Lei nº 1.625/2026 (Anexo IV)',
  subtopic: 'Idade',
  difficulty: 'intermediaria',
  statement: 'Conforme o item 2.1, "e", do edital, ciente do Anexo IV da Lei Municipal nº 1.625/2026, a idade mínima é de 18 anos completos e a idade máxima é de 35 anos, até o último dia do período de inscrição, considerando-se, para o limite de 35 anos:',
  options: [
    'a idade compreendida até a véspera do trigésimo quinto aniversário',
    'a idade compreendida até o dia do trigésimo quinto aniversário',
    'a idade completada até a data da posse',
    'a idade completada até a data da prova objetiva'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'O item 2.1, "e.1", do edital: "Considera-se, para efeito do limite de idade de 35 (trinta e cinco) anos, aquela idade compreendida até à véspera do trigésimo quinto aniversário." Ou seja, o candidato ainda é apto enquanto não atinge 35 anos completos.',
  optionExplanations: [
    'Correto: o limite é a véspera do 35º aniversário (item 2.1, "e.1", do edital).',
    'No dia do aniversário já se completam 35 anos, o que ultrapassa o limite.',
    'A aferição é feita até o último dia do período de inscrição, não na posse.',
    'A aferição é feita até o último dia do período de inscrição, não na prova.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 2.1, "e" e "e.1" — Anexo IV da Lei nº 1.625/2026'
},
{
  id: 'ce-023',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto dos Servidores — Lei nº 1.416/2022',
  subtopic: 'Identificação da norma',
  difficulty: 'facil',
  statement: 'A Lei Municipal nº 1.416, de 21 de dezembro de 2022, citada no edital, corresponde a:',
  options: [
    'o Estatuto da Guarda Municipal de São Gonçalo',
    'o Estatuto dos Servidores Públicos do Município de São Gonçalo',
    'a Lei Orgânica do Município de São Gonçalo',
    'a Lei de Regimento Interno da Câmara Municipal'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O edital (linha introdutória e item 1.9) identifica a Lei Municipal nº 1.416, de 21 de dezembro de 2022, como o Estatuto dos Servidores Públicos do Município de São Gonçalo — norma que se aplica subsidiariamente aos guardas municipais.',
  optionExplanations: [
    'O Estatuto da Guarda Municipal é a Lei Municipal nº 1.625/2026.',
    'Correto: a Lei nº 1.416/2022 é o Estatuto dos Servidores Públicos do Município.',
    'A Lei Orgânica é a norma institucional do Município, de natureza diversa.',
    'A Lei de Regimento Interno da Câmara trata do funcionamento do Legislativo.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026 — Conhecimentos Específicos (Lei nº 1.416/2022)'
},
{
  id: 'ce-024',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto dos Servidores — Lei nº 1.416/2022',
  subtopic: 'Aplicação subsidiária',
  difficulty: 'intermediaria',
  statement: 'Sobre a relação entre a Lei Municipal nº 1.625/2026 e a Lei Municipal nº 1.416/2022, é correto afirmar que:',
  options: [
    'a Lei nº 1.416/2022 revogou integralmente o Estatuto da Guarda Municipal',
    'o Estatuto da Guarda Municipal é a norma especial e o Estatuto dos Servidores aplica-se subsidiariamente, nas lacunas daquele',
    'as duas leis são incompatíveis e não podem ser aplicadas conjuntamente',
    'a Lei nº 1.625/2026 aplica-se apenas aos cargos em comissão'
  ],
  correctIndex: 1,
  points: 2,
  explanation: 'O item 1.9 do edital: aplica-se o Estatuto da Guarda Municipal (Lei nº 1.625/2026) e, subsidiariamente, o Estatuto dos Servidores do Município (Lei nº 1.416/2022). A subsidiariedade significa aplicação supletiva, quando houver omissão da norma especial.',
  optionExplanations: [
    'A Lei nº 1.416/2022 não revoga a Lei nº 1.625/2026; relacionam-se por subsidiariedade.',
    'Correto: norma especial regente + aplicação supletiva do estatuto geral (item 1.9 do edital).',
    'As normas são compatíveis e se complementam.',
    'A Lei nº 1.625/2026 aplica-se a todo o Quadro Permanente da Guarda Municipal.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, item 1.9 — Conhecimentos Específicos'
},
{
  id: 'ce-025',
  discipline: 'Conhecimentos Específicos',
  topic: 'Estatuto dos Servidores — Lei nº 1.416/2022',
  subtopic: 'Reserva de vagas para PcD (art. 21, § 2º)',
  difficulty: 'dificil',
  statement: 'O edital (item 5.1.2) determina que, se a aplicação do percentual mínimo de reserva de vagas para PcD resultar em número fracionado, desde que superior a um inteiro, este será elevado até o primeiro número inteiro subsequente, nos termos do art. 21, § 2º, da Lei Municipal nº 1.416/2022. Com 100 vagas (5%), a reserva de vagas PcD correspondente é de:',
  options: [
    'vaga única, pois o fracionamento é desprezado',
    '5 vagas, exatamente',
    '6 vagas, pela elevação do fracionamento ao inteiro subsequente',
    'não há reserva, pois o percentual não é obrigatório'
  ],
  correctIndex: 2,
  points: 2,
  explanation: '5% de 100 vagas = 5 (inteiro). Se o resultado fosse fracionado e superior a um inteiro (ex.: 5,5), ele seria elevado ao primeiro inteiro subsequente (6), nos termos do art. 21, § 2º, da Lei nº 1.416/2022, citado no item 5.1.2 do edital. No caso de 5,0 — número inteiro — não há fracionamento a elevar; a reserva é de 5 vagas.',
  optionExplanations: [
    'O edital admite a elevação quando houver fracionamento superior a um inteiro.',
    'Correto: 5% de 100 vagas resulta em 5 vagas exatas, sem fracionamento a elevar.',
    'Não há fracionamento em 5,0; a elevação só se dá quando o resultado é fracionado (ex.: 5,5 → 6).',
    'A reserva de 5% é obrigatória (item 5.1.1 do edital).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, itens 5.1.1 e 5.1.2 — art. 21, § 2º, da Lei nº 1.416/2022'
},
/* =========================================================================
   5. INFORMÁTICA (25 questões) — 1 ponto cada
   ========================================================================= */
{
  id: 'in-001',
  discipline: 'Informática',
  topic: 'Conceitos de informática — hardware e software',
  subtopic: 'Hardware x software',
  difficulty: 'facil',
  statement: 'Considerando a divisão básica de elementos de um sistema computacional, é correto afirmar:',
  options: [
    'hardware corresponde aos componentes físicos (processador, memória, periféricos) e software aos programas e dados que os utilizam',
    'hardware e software são sinônimos e designam a parte lógica do computador',
    'software corresponde aos cabos e periféricos e hardware aos programas instalados',
    'somente o hardware existe em computadores; o software é apenas um conceito teórico'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Hardware é o conjunto dos componentes físicos e materiais do computador (CPU, memória, discos, monitor, teclado). Software é o conjunto de programas, instruções e dados que fazem o hardware executar tarefas (sistemas operacionais e aplicativos).',
  optionExplanations: [
    'Correto: é a definição clássica de hardware (físico) e software (lógico).',
    'Os termos designam realidades distintas: material x programático.',
    'A afirmação inverte os conceitos: cabos e periféricos são hardware.',
    'Sem software, o hardware não executa tarefas; ambos são indispensáveis.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-002',
  discipline: 'Informática',
  topic: 'Conceitos de informática — hardware e software',
  subtopic: 'Componentes e periféricos',
  difficulty: 'facil',
  statement: 'Entre os componentes indicados, o que classifica corretamente um periférico de ENTRADA e um de SAÍDA?',
  options: [
    'entrada: monitor; saída: teclado',
    'entrada: teclado e mouse; saída: monitor e impressora',
    'entrada: impressora; saída: teclado',
    'entradas e saídas são a mesma coisa: qualquer periférico serve para ambos'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Periféricos de entrada enviam dados ao computador (teclado, mouse, scanner, microfone). Periféricos de saída devolvem dados processados ao usuário (monitor, impressora, caixas de som). Alguns são de entrada E saída (impressora multifuncional com scanner).',
  optionExplanations: [
    'O monitor é de saída e o teclado é de entrada: a classificação está invertida.',
    'Correto: teclado/mouse entram dados; monitor/impressora retornam resultados.',
    'A impressora é de saída e o teclado é de entrada: a classificação está invertida.',
    'Há diferença conceitual clara entre entrada (dados ao sistema) e saída (resultado ao usuário).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-003',
  discipline: 'Informática',
  topic: 'Sistemas operacionais — Windows, Linux e software livre',
  subtopic: 'Software livre',
  difficulty: 'intermediaria',
  statement: 'Sobre software livre (e o sistema operacional Linux, de código aberto), é correto afirmar:',
  options: [
    'software livre é necessariamente gratuito; se houver cobrança, deixa de ser livre',
    'software livre pode ser gratuito ou não; o essencial é a liberdade de usar, estudar, modificar e distribuir o programa',
    'software livre não permite o estudo do código-fonte',
    'o Linux é software proprietário, de uso restrito à iniciativa privada'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O conceito de software livre (Free Software Foundation) gira em torno de 4 liberdades: usar para qualquer propósito, estudar e adaptar, redistribuir cópias e distribuir versões modificadas. Gratuidade é efeito possível, não a definição: licenças comerciais de software livre existem.',
  optionExplanations: [
    'Gratuidade x cobrança não define a liberdade; há software livre pago.',
    'Correto: liberdade de uso, estudo, modificação e distribuição é o critério central.',
    'A liberdade de estudar (e adaptar) o código-fonte é justamente uma das liberdades essenciais.',
    'O Linux é software livre de código aberto, distribuído sob licenças livres (ex.: GPL).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-004',
  discipline: 'Informática',
  topic: 'Sistemas operacionais — Windows, Linux e software livre',
  subtopic: 'Função do sistema operacional',
  difficulty: 'facil',
  statement: 'A principal função de um sistema operacional (Windows, Linux etc.) é:',
  options: [
    'substituir o processador na execução de cálculos matemáticos',
    'gerenciar os recursos do computador (processador, memória, discos, periféricos) e servir de interface entre hardware e aplicativos',
    'criar conteúdo gráfico para sites institucionais',
    'bloquear o acesso do usuário aos arquivos do sistema'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O sistema operacional é o software básico que administra os recursos de hardware (escalonamento de processos, memória, armazenamento, dispositivos) e oferece a interface e os serviços (APIs) sobre os quais rodam os demais aplicativos.',
  optionExplanations: [
    'Os cálculos são executados pelo processador, comandado pelo software.',
    'Correto: gerenciamento de recursos e mediação hardware x aplicativos.',
    'Criação de conteúdo gráfico é tarefa de aplicativos (ex.: editores gráficos).',
    'O SO protege áreas do sistema, mas seu papel principal é gerenciar recursos, não bloquear o usuário.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-005',
  discipline: 'Informática',
  topic: 'Tecnologias multimídia',
  subtopic: 'Formatos de arquivos',
  difficulty: 'intermediaria',
  statement: 'Sobre formatos de arquivos multimídia, é correto afirmar que:',
  options: [
    'todos os formatos de imagem, áudio e vídeo são intercompatíveis entre si',
    'extensões como .png e .jpg designam arquivos de imagem, .mp3 e .wav designam áudio, e .mp4 designam vídeo',
    '.mp3 é um formato de planilha eletrônica',
    '.pdf é o padrão de navegador da Internet'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Cada tipo de mídia possui extensões características: imagens (.png, .jpg, .gif, .bmp), áudio (.mp3, .wav, .ogg) e vídeo (.mp4, .avi, .mkv). A extensão indica o formato (codificação) do arquivo e o aplicativo compatível com ele.',
  optionExplanations: [
    'Os formatos são específicos por tipo de mídia, com codificações distintas.',
    'Correto: cada extensão corresponde a uma categoria de mídia.',
    '.mp3 é formato de áudio, não de planilha (planilhas: .xlsx, .ods).',
    '.pdf é formato de documento portátil; o navegador não tem extensão ".pdf".'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-006',
  discipline: 'Informática',
  topic: 'Processadores de texto — Word e LibreOffice Writer',
  subtopic: 'Finalidade do aplicativo',
  difficulty: 'facil',
  statement: 'O processador de texto (Microsoft Word ou LibreOffice Writer) é indicado para:',
  options: [
    'criar, editar e formatar documentos de texto, com controle de revisão e composição de páginas',
    'apresentar slides em seminários ao vivo',
    'fazer contas e fórmulas financeiras em grade de células',
    'navegar na Internet e baixar arquivos'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O processador de texto é o aplicativo de edição de documentos (digitação, formatação, parágrafos, tabelas, imagens, sumários, revisão ortográfica). Planilhas (Excel/Calc) tratam de dados e fórmulas; navegadores acessam a web; apresentadores (PowerPoint/Impress) exibem slides.',
  optionExplanations: [
    'Correto: é a finalidade típica do processador de texto.',
    'Apresentar slides é função do editor de apresentações.',
    'Fórmulas em grade de células é função da planilha eletrônica.',
    'Navegar na Internet é função do navegador.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-007',
  discipline: 'Informática',
  topic: 'Processadores de texto — Word e LibreOffice Writer',
  subtopic: 'Recursos de composição',
  difficulty: 'intermediaria',
  statement: 'Entre os recursos de composição de documentos, o sumário automático gerado pelo processador de texto:',
  options: [
    'é digitado manualmente pelo autor, sem vínculo com o texto',
    'é construído a partir dos estilos de título aplicados ao documento e atualiza-se conforme a numeração das páginas',
    'substitui a necessidade de parágrafos e quebras de página',
    'só pode ser criado em editor de imagem'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O sumário automático é gerado pelos estilos de título (Título 1, Título 2 etc.) e pelas referências cruzadas; ao alterar o texto ou a paginação, basta atualizar o sumário para que títulos e números de página sejam corrigidos.',
  optionExplanations: [
    'Um sumário digitado à mão é manual e não acompanha alterações — justamente o que o automático evita.',
    'Correto: o sumário automático deriva dos estilos de título e se atualiza.',
    'O sumário não substitui a estrutura do documento; ele a reflete.',
    'Sumário é recurso do processador de texto, não de editor de imagem.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-008',
  discipline: 'Informática',
  topic: 'Editores de apresentação — PowerPoint e LibreOffice Impress',
  subtopic: 'Finalidade do aplicativo',
  difficulty: 'facil',
  statement: 'O editor de apresentações (Microsoft PowerPoint ou LibreOffice Impress) tem como finalidade:',
  options: [
    'elaborar documentos textuais extensos com notas de rodapé jurídicas',
    'criar sequências de slides com texto, imagens e recursos visuais para exibição em telas e projetores',
    'substituir o sistema operacional do computador',
    'monitorar o tráfego de rede da empresa'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O editor de apresentações organiza o conteúdo em slides e oferece recursos de layout, transições, animações e modo de exibição em tela cheia, ideal para seminários e treinamentos.',
  optionExplanations: [
    'Documentos textuais são papel do processador de texto.',
    'Correto: é a finalidade do editor de apresentações.',
    'Aplicativos não substituem o sistema operacional.',
    'Monitoramento de rede é tarefa de software de gerenciamento de redes.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-009',
  discipline: 'Informática',
  topic: 'Editores de apresentação — PowerPoint e LibreOffice Impress',
  subtopic: 'Estrutura da apresentação',
  difficulty: 'intermediaria',
  statement: 'Sobre a estrutura de uma apresentação em slides, é correto afirmar que:',
  options: [
    'cada slide deve conter o máximo de texto possível, para dispensar a fala do apresentador',
    'o conteúdo deve ser sintetizado em tópicos curtos, com apoio visual, cabendo ao apresentador detalhar oralmente',
    'apresentações profissionais não admitem imagens',
    'o número de slides é irrelevante; a boa prática recomenda centenas de slides por sessão'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Boas práticas de apresentação recomendam slides enxutos: ideias em tópicos, fonte legível e apoio visual, com o detalhamento cabendo à exposição oral do apresentador. Excesso de texto e excesso de slides prejudicam a comunicação.',
  optionExplanations: [
    'Slides com blocos densos de texto cansam a plateia e inviabilizam a leitura à distância.',
    'Correto: síntese em tópicos + apoio visual + explicação oral.',
    'Imagens e gráficos são recursos recomendados para apoiar a mensagem.',
    'A boa prática é limitar a quantidade de slides e o texto de cada um.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-010',
  discipline: 'Informática',
  topic: 'Planilhas eletrônicas — Excel e LibreOffice Calc',
  subtopic: 'Conceitos básicos',
  difficulty: 'facil',
  statement: 'Em uma planilha eletrônica (Excel/LibreOffice Calc), a interseção de uma linha com uma coluna corresponde a:',
  options: [
    'uma célula, identificada pela letra da coluna e o número da linha (ex.: B3)',
    'uma pasta de trabalho',
    'um gráfico',
    'uma quebra de página'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A unidade básica da planilha é a célula, referenciada pelo cruzamento de coluna (letra) e linha (número), como B3. O conjunto de células forma a planilha (aba); o arquivo, com várias abas, é a pasta de trabalho.',
  optionExplanations: [
    'Correto: célula = coluna + linha (referência ex.: B3).',
    'A pasta de trabalho é o arquivo, que contém uma ou mais planilhas.',
    'O gráfico é um objeto gerado a partir dos dados.',
    'A quebra de página é recurso de impressão, não unidade da planilha.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-011',
  discipline: 'Informática',
  topic: 'Planilhas eletrônicas — Excel e LibreOffice Calc',
  subtopic: 'Referências relativas e absolutas',
  difficulty: 'dificil',
  statement: 'Ao copiar e arrastar uma fórmula em planilha eletrônica, a referência $A$1 (com cifrões):',
  options: [
    'é uma referência relativa, que se altera conforme a célula de destino',
    'é uma referência absoluta, que permanece fixa em A1 ao ser copiada para outras células',
    'indica erro de digitação na fórmula',
    'se refere a uma célula excluída da planilha'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Os cifrões ($) tornam a referência absoluta: $A$1 permanece sempre apontando para a célula A1, seja qual for a célula de destino da cópia. Sem cifrões (A1), a referência é relativa e se ajusta automaticamente.',
  optionExplanations: [
    'Referência relativa é A1 (sem cifrões); com $ é absoluta.',
    'Correto: $A$1 é referência absoluta, fixa ao copiar a fórmula.',
    'Os cifrões são a sintaxe correta de referência absoluta, não erro.',
    'O cifrão não indica exclusão de célula.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-012',
  discipline: 'Informática',
  topic: 'Planilhas eletrônicas — Excel e LibreOffice Calc',
  subtopic: 'Funções e fórmulas',
  difficulty: 'intermediaria',
  statement: 'Em planilha eletrônica, uma função embutida como =SOMA(B2:B10) tem a finalidade de:',
  options: [
    'somar os valores das células do intervalo B2 a B10 e exibir o resultado na célula atual',
    'ordenar as células em ordem alfabética',
    'proteger a planilha contra vírus',
    'inserir um gráfico automaticamente'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Funções são fórmulas prontas fornecidas pelo aplicativo: SOMA(intervalo) calcula a soma dos valores; outras comuns incluem MÉDIA, MÁXIMO, MÍNIMO, CONT.SE. O resultado é exibido na célula onde a fórmula foi digitada.',
  optionExplanations: [
    'Correto: =SOMA(B2:B10) soma o intervalo indicado.',
    'Ordenação é feita pelo recurso de ordem/filtro, não pela função SOMA.',
    'Proteção de planilha usa senhas e permissões, não fórmulas.',
    'A inserção de gráficos é recurso próprio do aplicativo.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-013',
  discipline: 'Informática',
  topic: 'Redes de computadores',
  subtopic: 'Topologias',
  difficulty: 'intermediaria',
  statement: 'Na topologia de REDE em estrela, todos os dispositivos conectam-se:',
  options: [
    'a um único cabo linear, sem ponto central',
    'a um ponto central (switch, concentrador ou roteador), de onde partem os enlaces',
    'cada um ao próximo, formando um anel fechado',
    'aleatoriamente, sem padrão físico definido'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Na topologia em estrela, cada nó possui ligação individual a um equipamento central; se um cabo falha, apenas aquele nó é afetado — vantagem sobre o barramento (em que a falha do cabo principal derruba a rede toda). Topologias comuns: estrela, anel, barramento, malha.',
  optionExplanations: [
    'Esse descreve a topologia em barramento (bus).',
    'Correto: topologia em estrela com ponto central.',
    'Esse descreve a topologia em anel.',
    'Topologias seguem padrões físicos/lógicos definidos.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-014',
  discipline: 'Informática',
  topic: 'Redes de computadores',
  subtopic: 'Equipamentos e conectores',
  difficulty: 'intermediaria',
  statement: 'O equipamento responsável por interconectar dispositivos de uma rede local e encaminhar dados entre eles com base no endereço MAC é o:',
  options: [
    'modem',
    'switch (ou concentrador inteligente)',
    'monitor',
    'impressora em rede'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O switch trabalha na camada de enlace e direciona os quadros de dados para o porto correto usando endereços MAC, conectando computadores, impressoras e outros dispositivos via cabos com conector RJ45. O roteador, por sua vez, encaminha pacotes entre redes distintas usando endereços IP.',
  optionExplanations: [
    'O modem modula/demodula o sinal para acesso à Internet (ex.: fibra), não comuta quadros na LAN.',
    'Correto: o switch encaminha com base no endereço MAC.',
    'O monitor é periférico de saída, sem função de rede.',
    'A impressora em rede é um dispositivo da rede, não o equipamento que a interconecta.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-015',
  discipline: 'Informática',
  topic: 'Redes de computadores',
  subtopic: 'Endereçamento',
  difficulty: 'intermediaria',
  statement: 'Sobre endereçamento em redes, é correto afirmar que:',
  options: [
    'o endereço IP identifica o dispositivo na rede lógica e pode ser atribuído automaticamente (DHCP) ou manualmente; o endereço MAC é fixo, gravado no fabricante do adaptador',
    'o endereço IP é sempre fixo e o endereço MAC muda a cada reinicialização',
    'IP e MAC são o mesmo conceito, com siglas diferentes',
    'o endereço MAC é usado apenas para acessar sites na Internet'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O IP (Internet Protocol) é o endereço lógico do dispositivo na rede, configurável (estático ou por DHCP). O MAC (Media Access Control) é o endereço físico gravado na placa de rede pelo fabricante, usado localmente pelos switches.',
  optionExplanations: [
    'Correto: IP lógico/atribuível x MAC físico/fixo.',
    'Na prática, o inverso: o IP pode variar (DHCP) e o MAC é fixo.',
    'São endereços de camadas diferentes (rede x enlace) com funções distintas.',
    'O MAC atua no escopo local da rede, não na navegação web.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-016',
  discipline: 'Informática',
  topic: 'Redes de computadores',
  subtopic: 'Transmissão sem fio',
  difficulty: 'facil',
  statement: 'A tecnologia que permite a conexão de dispositivos sem fio no padrão IEEE 802.11 (Wi-Fi) é:',
  options: [
    'a utilizada em redes locais sem fio, com uso de roteador/access point e cobertura limitada ao alcance do sinal',
    'a mesma usada em controle remoto de TV, sem finalidade em informática',
    'uma tecnologia de impressão cabeada',
    'um protocolo de correio eletrônico'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'O padrão IEEE 802.11 (Wi-Fi) define redes locais sem fio; o sinal é emitido por access point/roteador e depende de alcance e interferências. O Bluetooth (IEEE 802.15) é usado em conexões de curto alcance entre dispositivos; o e-mail usa protocolos como SMTP/POP3/IMAP.',
  optionExplanations: [
    'Correto: Wi-Fi = IEEE 802.11, rede local sem fio.',
    'Controle remoto usa infravermelho/outros protocolos; o Wi-Fi é padrão de informática.',
    'A impressão em rede é um serviço, não a tecnologia 802.11.',
    'Correio eletrônico é serviço de rede, não tecnologia de transmissão sem fio.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-017',
  discipline: 'Informática',
  topic: 'Redes de computadores',
  subtopic: 'Protocolos',
  difficulty: 'dificil',
  statement: 'Sobre protocolos de rede, é correto afirmar que o HTTPS diferencia-se do HTTP por:',
  options: [
    'transmitir apenas texto simples, sem possibilidade de anexos',
    'usar camada de segurança (TLS/SSL), cifrando a comunicação entre navegador e servidor',
    'ser exclusivo de redes locais, sem uso na Internet',
    'não utilizar endereço IP nos servidores'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'HTTPS = HTTP + camada TLS/SSL, que autentica o servidor (certificado digital) e cifra o tráfego, protegendo dados como senhas e formulários. HTTP trafega em texto claro. Outros protocolos comuns: TCP/IP (base da Internet), FTP (transferência de arquivos), SMTP/POP3/IMAP (e-mail).',
  optionExplanations: [
    'O HTTPS transporta o mesmo conteúdo do HTTP, apenas cifrado.',
    'Correto: HTTPS = HTTP sobre TLS/SSL.',
    'O HTTPS é amplamente utilizado na Internet.',
    'O HTTPS usa endereços IP normalmente (resolvidos via DNS).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-018',
  discipline: 'Informática',
  topic: 'Internet e Intranet',
  subtopic: 'Navegador x ferramenta de busca',
  difficulty: 'facil',
  statement: 'A diferença essencial entre um navegador da Internet (Chrome, Firefox, Edge) e uma ferramenta de busca na Web (Google, Bing) é que:',
  options: [
    'ambas são a mesma coisa, com nomes comerciais diferentes',
    'o navegador é o programa que acessa e exibe páginas; a ferramenta de busca é um serviço que indexa e localiza conteúdos na Web, geralmente acessado pelo navegador',
    'a ferramenta de busca substitui o sistema operacional',
    'o navegador só funciona em Intranet, jamais na Internet'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'O navegador é o software cliente que interpreta HTML e mostra páginas (sites, intranet). A ferramenta de busca é um serviço online que rastreia (indexa) páginas e devolve resultados relevantes para as palavras pesquisadas; para usá-la, abre-se o navegador.',
  optionExplanations: [
    'São funções distintas: exibir páginas x localizar conteúdos.',
    'Correto: navegador = programa de navegação; busca = serviço de indexação.',
    'O serviço de busca não substitui o sistema operacional.',
    'Navegadores acessam tanto a Internet quanto redes internas (Intranet).'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-019',
  discipline: 'Informática',
  topic: 'Internet e Intranet — web 2.0 e web 3.0',
  subtopic: 'Web 2.0',
  difficulty: 'intermediaria',
  statement: 'A chamada Web 2.0 caracteriza-se principalmente por:',
  options: [
    'páginas estáticas, somente para leitura, sem participação do usuário',
    'a participação ativa dos usuários na produção e compartilhamento de conteúdos (blogs, wikis, redes sociais, vídeos colaborativos)',
    'a substituição total da Internet por redes fechadas',
    'a ausência de conexão com bancos de dados'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'A Web 2.0 (a partir dos anos 2000) transformou o usuário de consumidor em produtor de conteúdo: wikis, blogs, redes sociais, compartilhamento de vídeos e colaboração em tempo real são seus marcos. A Web 1.0 era de páginas estáticas.',
  optionExplanations: [
    'Essa é a característica da Web 1.0 (sites estáticos).',
    'Correto: autoria e colaboração dos usuários.',
    'A Web 2.0 é uma evolução da Internet, não sua substituição.',
    'Aplicações 2.0 apoiam-se fortemente em serviços e bancos de dados na nuvem.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-020',
  discipline: 'Informática',
  topic: 'Internet e Intranet — web 2.0 e web 3.0',
  subtopic: 'Web 3.0',
  difficulty: 'dificil',
  statement: 'Em termos gerais, costuma-se associar à Web 3.0:',
  options: [
    'a descentralização dos dados (com tecnologias como blockchain), maior privacidade do usuário e uso de inteligência artificial para interpretar conteúdos de forma mais inteligente',
    'o retorno às páginas estáticas da década de 1990',
    'a eliminação de navegadores e a navegação apenas por aplicativos de mensagem',
    'a proibição de uso de redes sociais'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'A Web 3.0 é conceitualmente associada à web semântica (máquinas interpretando significado dos dados), à descentralização e ao controle do usuário sobre seus dados (blockchain, redes peer-to-peer) e à integração de inteligência artificial. O tema evolui e aparece no edital como conceito de interesse.',
  optionExplanations: [
    'Correto: descentralização, privacidade/controle do usuário e inteligência artificial.',
    'A Web 3.0 é uma evolução, não um retorno à Web 1.0.',
    'Navegadores continuam sendo o meio de acesso; a evolução é de arquitetura e propriedades.',
    'Nada na concepção de Web 3.0 veda redes sociais; elas tendem a evoluir para modelos descentralizados.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-021',
  discipline: 'Informática',
  topic: 'Tecnologias e ferramentas de colaboração',
  subtopic: 'Correio eletrônico',
  difficulty: 'facil',
  statement: 'No correio eletrônico, o campo CCO (ou Cco/BCC) tem a função de:',
  options: [
    'exibir o endereço de todos os destinatários para cada um ver os demais',
    'ocultar o endereço do destinatário em cópia carbono oculta dos demais destinatários',
    'anexar arquivos à mensagem',
    'marcar a mensagem como não lida'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'CC (com cópia) mostra os endereços a todos; CCO/CCO (carbon copy oculta / blind copy) envia a cópia sem revelar o endereço aos outros destinatários — útil para proteger a privacidade de listas grandes.',
  optionExplanations: [
    'Esse é o comportamento do campo CC, não do CCO.',
    'Correto: cópia oculta — endereço não visível aos demais.',
    'Anexos usam o recurso de anexar/adicionar arquivos.',
    'Marcar como não lida é recurso da caixa de entrada, não do campo CCO.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-022',
  discipline: 'Informática',
  topic: 'Tecnologias e ferramentas de colaboração',
  subtopic: 'Wikis, fóruns e redes sociais',
  difficulty: 'intermediaria',
  statement: 'Uma WIKI, no contexto de ferramentas de colaboração, é:',
  options: [
    'um tipo de vírus que se disfarça de página da Web',
    'um site cujo conteúdo pode ser criado e editado coletivamente pelos seus usuários',
    'um programa de planilha eletrônica',
    'um protocolo de transferência de arquivos'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Wiki (do havaiano "rápido") é uma plataforma de edição colaborativa — o exemplo clássico é a Wikipédia. Fóruns organizam discussões por tópicos; grupos de discussão e listas de e-mail comunicam membros; redes sociais conectam perfis e conteúdos.',
  optionExplanations: [
    'Wiki é ferramenta de colaboração, não ameaça.',
    'Correto: conteúdo editável coletivamente.',
    'Planilhas eletrônicas são Excel/Calc.',
    'Protocolos de transferência incluem FTP/SFTP; a wiki é um tipo de site.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-023',
  discipline: 'Informática',
  topic: 'Segurança da informação',
  subtopic: 'Ameaças e vulnerabilidades',
  difficulty: 'intermediaria',
  statement: 'Sobre ameaças à segurança da informação, é correto afirmar que:',
  options: [
    'phishing é uma técnica de fraude que se passa por instituição confiável para induzir a vítima a informar dados (senhas, cartões), frequentemente por e-mail ou sites falsos',
    'vírus é qualquer arquivo salvo em pen drive',
    'antivírus serve para aumentar a velocidade da Internet',
    'engenharia social é a montagem de servidores em rack'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Phishing é fraude por suplantação de identidade (bancos, órgãos públicos) com apoio de engenharia social. Malware é o termo geral (vírus, worms, trojans, ransomware). Antivírus detecta e remove códigos maliciosos; a engenharia social manipula o usuário, não a rede.',
  optionExplanations: [
    'Correto: é a definição de phishing.',
    'Vírus é código malicioso que se replica; pen drive apenas pode ser vetor de contaminação.',
    'Antivíus protege contra malware, sem relação com velocidade de conexão.',
    'Engenharia social é manipulação humana para obter informações ou acesso.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-024',
  discipline: 'Informática',
  topic: 'Segurança da informação',
  subtopic: 'Cópias de segurança (backup)',
  difficulty: 'facil',
  statement: 'A cópia de segurança (backup) tem por finalidade:',
  options: [
    'substituir o antivírus na proteção contra intrusos',
    'manter cópias de dados para permitir a recuperação em caso de falha, perda ou ransomware',
    'aumentar a capacidade de processamento do computador',
    'impedir que usuários acessem a rede'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Backup é a cópia adicional dos dados, guardada em local separado (disco externo, nuvem, fita), permitindo restauração após apagamento, falha de disco, roubo ou ataque de ransomware. Boa prática: manter mais de uma cópia, em meios diferentes e fora do local original.',
  optionExplanations: [
    'Backup não substitui antivírus; são funções complementares.',
    'Correto: preservação e recuperação de dados.',
    'Backup não tem relação com capacidade de processamento.',
    'Controle de acesso é função de permissões e firewalls.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
{
  id: 'in-025',
  discipline: 'Informática',
  topic: 'Segurança da informação',
  subtopic: 'Criptografia e assinatura digital',
  difficulty: 'dificil',
  statement: 'Sobre criptografia e assinatura digital, é correto afirmar que:',
  options: [
    'criptografia simétrica usa a mesma chave para cifrar e decifrar; a assimétrica usa um par de chaves (pública e privada), base também da assinatura digital',
    'assinatura digital é a digitalização de uma assinatura manuscrita em papel',
    'a chave privada deve ser divulgada publicamente para garantir a segurança',
    'criptografia torna os arquivos permanentemente irrecuperáveis, mesmo para o autor'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Na criptografia simétrica, cifra e descifra usam a mesma chave (rápida, ex.: AES). Na assimétrica, existe par de chaves: a privada assina/cifra, a pública verifica/decifra — é o fundamento da assinatura digital (certificados ICP-Brasil), que garante autenticidade, integridade e não repúdio.',
  optionExplanations: [
    'Correto: simétrica = uma chave; assimétrica = par público/privado.',
    'Assinatura digital é feita com certificado digital e criptografia, não com digitalização manuscrita.',
    'A chave privada NUNCA é divulgada; apenas a pública é compartilhada.',
    'O autor com a chave adequada recupera o conteúdo normalmente.'
  ],
  sourceType: 'autoral',
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — Informática'
},
/* =========================================================================
   6. QUESTÕES TRANSCRITAS DA PROVA ANTERIOR (2020) — 7 questões
   Fonte: Prova objetiva do Concurso Público de 2020 (PROVA-Guarda-Municipal-SG.pdf).
   NÃO existe gabarito oficial desta prova: as respostas foram fundamentadas
   na legislação consolidada e são indicadas como tales na interface.
   ========================================================================= */
{
  id: 'le-2020-46',
  discipline: 'Legislação Extravagante',
  topic: 'Crimes ambientais (Lei nº 9.605/1998)',
  subtopic: 'Prova anterior (2020) — questão 46',
  difficulty: 'intermediaria',
  statement: 'P. Caju é proprietário rural e defensor do meio ambiente, tendo orgulho das fontes de água e riachos que cortam sua fazenda, dedicada à produção de vegetais orgânicos. Por informações de vizinhos, soube da destruição de floresta próxima e comunica o fato às autoridades competentes. Nos termos da Lei nº 9.605/1998, destruir floresta considerada de preservação permanente constitui crime contra a:',
  options: [
    'terra',
    'lavra',
    'flora',
    'regeneração'
  ],
  correctIndex: 2,
  points: 1,
  explanation: 'Transcrição da questão 46 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). Pela legislação consolidada, o art. 38 da Lei nº 9.605/1998 tipifica o crime contra a FLORA: destruir, total ou parcialmente, floresta considerada de preservação permanente, sem autorização. "Terra", "lavra" e "regeneração" não são categorias de crimes previstas no diploma.',
  optionExplanations: [
    'Não é categoria de crime prevista na Lei nº 9.605/1998.',
    'Lavra relaciona-se a atividade mineratória, não ao tipo do art. 38.',
    'Correto: art. 38 da Lei nº 9.605/1998 — crime contra a flora.',
    'Não é categoria de crime prevista na Lei nº 9.605/1998.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 46 — transcrita; sem gabarito oficial; resposta fundamentada na Lei nº 9.605/1998'
},
{
  id: 'le-2020-47',
  discipline: 'Legislação Extravagante',
  topic: 'Lei Maria da Penha (Lei nº 11.340/2006)',
  subtopic: 'Prova anterior (2020) — questão 47',
  difficulty: 'facil',
  statement: 'F. é casada com E.R., tendo o casal vivido em harmonia durante dez anos e gerado dois filhos. Após esse período, o varão caiu no vício das bebidas alcoólicas, com nefastas consequências para o núcleo familiar. Em determinado evento social ocorrido na vizinhança do casal, a esposa foi submetida pelo marido a sucessivas difamações. Nos termos da Lei nº 11.340/2006, ocorre violência doméstica e familiar contra a mulher, entendida como qualquer conduta que configure difamação, o que caracteriza violência:',
  options: [
    'psíquica',
    'moral',
    'física',
    'humilhante'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Transcrição da questão 47 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). O art. 5º, IV, da Lei nº 11.340/2006 define violência MORAL: "a que se configura mediante difamação, calúnia e injúria". "Humilhante" não é modalidade de violência tipificada na lei.',
  optionExplanations: [
    'A violência psíquica é o art. 5º, II (ameaça, constrangimento, humilhação, manipulação etc.).',
    'Correto: difamação = violência moral (art. 5º, IV, da Lei nº 11.340/2006).',
    'A violência física é o art. 5º, I (dor, lesão, sofrimento físico).',
    '"Humilhante" não é modalidade autônoma na lei; a conduta é enquadrada como violência moral.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 47 — transcrita; sem gabarito oficial; resposta fundamentada na Lei nº 11.340/2006'
},
{
  id: 'ce-2020-58',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Prova anterior (2020) — questão 58',
  difficulty: 'intermediaria',
  statement: 'Susana Bach é estudante de Educação Física e pretende realizar concurso para a Guarda Municipal. Ao estudar a estrutura da Guarda, verifica suas principais características que constam na lei de normas gerais sobre o tema. Nos termos da Lei Federal nº 13.022/2014, as guardas municipais são instituições uniformizadas e armadas conforme previsto em lei, com a função de proteção municipal preventiva, de caráter:',
  options: [
    'especial',
    'próprio',
    'civil',
    'militar'
  ],
  correctIndex: 2,
  points: 2,
  explanation: 'Transcrição da questão 58 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). O art. 2º da Lei nº 13.022/2014 (EGM): "Incumbe às guardas municipais, instituições de CARÁTER CIVIL, uniformizadas e armadas conforme previsto em lei, a função de proteção municipal preventiva, ressalvadas as competências da União, dos Estados e do Distrito Federal." O EGM ainda veda a sujeição a regulamentos disciplinares de natureza militar (art. 14, parágrafo único).',
  optionExplanations: [
    '"Caráter especial" não consta da definição legal.',
    '"Caráter próprio" não consta da definição legal; a qualificação é civil.',
    'Correto: "instituições de caráter civil" (art. 2º da Lei nº 13.022/2014).',
    'O caráter é civil; a lei veda a disciplina de natureza militar.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 58 — transcrita; sem gabarito oficial; resposta fundamentada na Lei nº 13.022/2014'
},
{
  id: 'ce-2020-59',
  discipline: 'Conhecimentos Específicos',
  topic: 'EGM — Lei nº 13.022/2014',
  subtopic: 'Prova anterior (2020) — questão 59',
  difficulty: 'intermediaria',
  statement: 'Dan Blois é estudante de Direito e cultor dos direitos humanos e busca sua inserção profissional para apurar seus conhecimentos e realizar de forma prática seus estudos teóricos. Para isso, pretende ingressar nos quadros da Guarda Municipal. Nos termos da Lei Federal nº 13.022/2014, são princípios mínimos de atuação das guardas municipais a proteção dos direitos humanos fundamentais, do exercício da cidadania e das liberdades públicas, bem como a preservação da vida, redução do sofrimento e diminuição das:',
  options: [
    'perdas',
    'tristezas',
    'necessidades',
    'calamidades'
  ],
  correctIndex: 0,
  points: 2,
  explanation: 'Transcrição da questão 59 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). O art. 3º, II, da Lei nº 13.022/2014: princípios mínimos de atuação — "a preservação da vida, redução do sofrimento e diminuição das perdas".',
  optionExplanations: [
    'Correto: art. 3º, II, da Lei nº 13.022/2014 — "diminuição das perdas".',
    '"Tristezas" não consta do rol legal de princípios.',
    '"Necessidades" não consta do rol legal de princípios.',
    '"Calamidades" não consta do rol legal de princípios.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 59 — transcrita; sem gabarito oficial; resposta fundamentada na Lei nº 13.022/2014'
},
{
  id: 'in-2020-71',
  discipline: 'Informática',
  topic: 'Hardware e interfaces',
  subtopic: 'Prova anterior (2020) — questão 71',
  difficulty: 'intermediaria',
  statement: 'No que diz respeito ao hardware dos computadores atuais, duas características são descritas a seguir. I. A tecnologia empregada nos discos rígidos possibilitam capacidades de armazenamento na faixa de 1 TBytes e até mais. II. Os dispositivos de entrada e saída de dados são integrados à configuração dos microcomputadores e notebooks por meio de conexões USB versão 3.0. A sigla utilizada para referenciar a tecnologia dos discos rígidos e a taxa nominal de transferência do USB v3.0 são, respectivamente:',
  options: [
    'PCI-E e 4.8 Gbps',
    'SATA e 4.8 Gbps',
    'PCI-E e 480 Mbps',
    'SATA e 480 Mbps'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Transcrição da questão 71 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). A tecnologia de discos rígidos é a SATA; o USB 3.0 tem taxa nominal de 5 Gbps (efetiva na faixa de 4,8 Gbps), enquanto 480 Mbps é a taxa do USB 2.0. Portanto, a combinação correta é SATA e 4.8 Gbps.',
  optionExplanations: [
    'PCI-E é interface de barramento interno (placas de vídeo etc.), não a tecnologia de discos rígidos de referência; e 4,8 Gbps não combina com a alternativa A pela sigla incorreta.',
    'Correto: SATA (discos rígidos) e 4.8 Gbps (taxa do USB 3.0).',
    'PCI-E não é a sigla dos discos rígidos e 480 Mbps é a taxa do USB 2.0.',
    'SATA está correto, mas 480 Mbps é a taxa do USB 2.0, não do 3.0.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 71 — transcrita; sem gabarito oficial; resposta fundamentada em conceitos consolidados de hardware'
},
{
  id: 'in-2020-76',
  discipline: 'Informática',
  topic: 'Apresentações — PowerPoint e LibreOffice Impress',
  subtopic: 'Prova anterior (2020) — questão 76',
  difficulty: 'intermediaria',
  statement: 'Tendo por referência os softwares de apresentação de slides, dois recursos são destacados a seguir. I. No Powerpoint 2016 BR, um atalho de teclado deve ser executado para salvar o trabalho feito em um arquivo com formato PPTX. II. No Impress da suíte LibreOffice 6.3, versão em português, uma tecla de função deve ser acionada para executar a verificação e correção ortográfica. O atalho de teclado e a tecla de função são, respectivamente:',
  options: [
    'Ctrl+B e F7',
    'Ctrl+S e F7',
    'Ctrl+B e F11',
    'Ctrl+S e F11'
  ],
  correctIndex: 1,
  points: 1,
  explanation: 'Transcrição da questão 76 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). O atalho de salvar em aplicativos (Ctrl+S) grava o arquivo PPTX; a tecla F7 executa a verificação ortográfica no LibreOffice (Word e Impress). Ctrl+B aplica negrito e F11 inicia a apresentação de slides.',
  optionExplanations: [
    'Ctrl+B aplica negrito; F7 é verificação ortográfica — a primeira alternativa estaria correta apenas se o item I pedisse negrito.',
    'Correto: Ctrl+S (salvar) e F7 (verificação ortográfica).',
    'Ctrl+B aplica negrito e F11 inicia a apresentação; não correspondem aos itens.',
    'Ctrl+S salva corretamente, mas F11 não executa a verificação ortográfica (inicia a apresentação).'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 76 — transcrita; sem gabarito oficial; resposta fundamentada em atalhos consolidados de Word/Impress'
},
{
  id: 'in-2020-78',
  discipline: 'Informática',
  topic: 'Segurança da informação',
  subtopic: 'Prova anterior (2020) — questão 78',
  difficulty: 'facil',
  statement: 'No que diz respeito à segurança da informação, a Microsoft recomenda o emprego de determinados critérios para criação de senhas consideradas fortes para uso no ambiente de informática, incluindo a internet. Com esse objetivo, um critério a ser adotado é criar senhas formadas com:',
  options: [
    'letras maiúsculas, minúsculas e algarismos',
    'o próprio nome, data ou ano de nascimento',
    'siglas, termos ou palavras em idiomas estrangeiros',
    'nomes de pai, filhos ou palavras de fácil memorização'
  ],
  correctIndex: 0,
  points: 1,
  explanation: 'Transcrição da questão 78 da prova objetiva de 2020. Sem gabarito oficial disponível (limitação documentada em FONTES_E_LIMITACOES.md). Critérios clássicos de senha forte: combinação de letras maiúsculas e minúsculas, algarismos e caracteres especiais, sem dados pessoais previsíveis — nomes, datas de nascimento e termos fáceis de memorizar facilitam ataques de dicionário e social engineering.',
  optionExplanations: [
    'Correto: combinação de maiúsculas, minúsculas e algarismos (critério de senha forte).',
    'Nome e data de nascimento são dados previsíveis e desaconselhados.',
    'Termos em idiomas estrangeiros não garantem força; podem constar de dicionários de ataque.',
    'Nomes de familiares e palavras fáceis são justamente o que se deve evitar.'
  ],
  sourceType: 'prova-anterior',
  sourceReference: 'Prova objetiva — Concurso Público Guarda Municipal de São Gonçalo/RJ (2020), questão 78 — transcrita; sem gabarito oficial; resposta fundamentada em critérios consolidados de segurança'
},
// __FIM_BANCO__
];

/* Validação rápida executada no carregamento (não interrompe o aplicativo):
   garante 4 alternativas, gabarito válido e explicação por alternativa. */
if (typeof console !== 'undefined') {
  const problemas = [];
  for (const q of QUESTOES) {
    if (!q.options || q.options.length !== 4) problemas.push(q.id + ': número de alternativas != 4');
    if (!q.optionExplanations || q.optionExplanations.length !== 4) problemas.push(q.id + ': optionExplanations != 4');
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) problemas.push(q.id + ': correctIndex inválido');
    if (!q.explanation) problemas.push(q.id + ': sem explicação');
    if (!q.statement) problemas.push(q.id + ': sem enunciado');
  }
  if (problemas.length) console.warn('[banco de questões] problemas encontrados:', problemas);
}
