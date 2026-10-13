# Preparatório Guarda Municipal de São Gonçalo

Aplicação web de estudo para o concurso de **Guarda Municipal Nível II de São Gonçalo (RJ)** —
Edital nº 001/PMSG/2026, organizado pelo **Instituto SELECON**. Feita apenas com
**HTML5 + CSS3 + JavaScript puro + localStorage**: abre direto no navegador, sem servidor,
sem internet e sem bibliotecas externas.

> **Aviso:** projeto de estudo particular, sem qualquer vínculo oficial com o Instituto
> SELECON ou o Município de São Gonçalo. As questões **autorais** não são questões oficiais
> da banca, e as questões da prova de 2020 foram transcritas **sem gabarito oficial**
> disponível. Veja `FONTES_E_LIMITACOES.md` para a base documental completa.

---

## 1. Como abrir no Windows

1. Abra a pasta do projeto no Explorador de Arquivos.
2. Dê dois cliques em **`index.html`**. Ele abre no navegador padrão (Edge, Chrome, Firefox).
3. Pronto — não há instalação, compilação ou servidor.

> O progresso fica salvo no próprio navegador (`localStorage`), neste computador apenas.
> Use o mesmo navegador (e o mesmo perfil) nas próximas sessões para ver seu histórico.
> Se o navegador bloquear o armazenamento em modo restrito, um aviso aparece no topo da
> página e o aplicativo continua funcionando (sem persistir entre sessões).

## 2. Recursos

- **Início** — atalhos e indicadores reais do seu progresso (nada é estimado).
- **Estudar por matéria** — filtros por disciplina, tópico e dificuldade; 5, 10, 15 ou 20
  questões; **correção imediata** com destaque verde/vermelho, gabarito comentado,
  explicação alternativa a alternativa, metadados da questão e marcação para revisão.
  A mesma questão não é contada duas vezes na mesma tentativa.
- **Simulado completo** — 80 questões na distribuição oficial (15 PT / 20 ND / 15 LE /
  20 CE / 10 IN), 100 pontos, **4 horas** com cronômetro por horário-limite absoluto
  (continua correto ao trocar de aba ou recarregar), questões e alternativas embaralhadas,
  sem gabarito antes da entrega, entrega com confirmação e **entrega automática ao fim do
  tempo**. O estado do simulado em andamento é salvo e retomado.
- **Resultados** — nota 0–100 calculada pelo valor de cada questão (CE vale 2), acertos,
  erros, em branco, aproveitamento, tempo utilizado, desempenho por disciplina, verificação
  dos critérios do edital (mínimo de 50 pontos e nenhuma disciplina zerada) e
  **gabarito comentado** só após a entrega.
- **Caderno de erros** — erros registrados automaticamente do estudo e dos simulados;
  filtros por disciplina/tópico, refazer questão individualmente, sessão de estudo só com
  erros, marcação para revisão; acertar a questão retira-a dos pendentes **preservando o
  histórico** de tentativas.
- **Painel de desempenho** — questões respondidas, acertos/erros, aproveitamento, evolução
  entre simulados, desempenho por disciplina, assuntos com mais erros, questões ainda não
  estudadas e resumo da última sessão — tudo em barras HTML/CSS, sem bibliotecas.
- **Limpar meu progresso** — no rodapé, com confirmação.

## 3. Como funciona a pontuação

| Disciplina | Questões | Valor | Máximo |
|---|---:|---:|---:|
| Língua Portuguesa | 15 | 1 | 15 |
| Noções de Direito | 20 | 1 | 20 |
| Legislação Extravagante | 15 | 1 | 15 |
| Conhecimentos Específicos | 20 | **2** | 40 |
| Informática | 10 | 1 | 10 |
| **Total** | **80** | — | **100** |

A nota é a soma do valor de cada questão correta (não basta contar acertos). Critérios
simulados do edital (item 9.6): **pelo menos 50 pontos** e **nenhuma disciplina zerada**.
Atingir os critérios na simulação **não garante aprovação** no concurso real.

## 4. Como adicionar ou editar questões

Edite **`js/questions.js`**. Cada questão é um objeto da lista `QUESTOES`; insira novas
antes do marcador `// __FIM_BANCO__` (mantenha a disciplina correta):

```javascript
{
  id: 'lp-031',                          // único no banco
  discipline: 'Língua Portuguesa',       // uma das 5 disciplinas oficiais
  topic: 'Concordância verbal',
  subtopic: 'Sujeito e verbo',
  difficulty: 'facil',                   // facil | intermediaria | dificil
  statement: 'Enunciado completo da questão.',
  options: ['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D'],
  correctIndex: 0,                       // 0 = A ... 3 = D (única resposta correta)
  points: 1,                             // 2 somente em Conhecimentos Específicos
  explanation: 'Explicação didática do gabarito.',
  optionExplanations: ['Explicação da A.', 'Explicação da B.', 'Explicação da C.', 'Explicação da D.'],
  sourceType: 'autoral',                 // ou 'prova-anterior' (comprovadamente transcrita)
  sourceReference: 'Edital nº 001/PMSG/2026, Anexo III — ...'
}
```

Regras importantes:

- Exatamente **4 alternativas** e **4 explicações de alternativa**; apenas um gabarito.
- `points` deve ser **2** apenas para Conhecimentos Específicos; **1** para as demais.
- O simulado exige no mínimo 15/20/15/20/10 questões por disciplina; se faltarem, a
  aplicação **bloqueia o início** e diz o que falta — ela nunca repete questões em silêncio
  nem altera a regra do concurso.
- Ao final do arquivo há um **laço de validação** que imprime avisos no console (F12) se
  algo estiver fora do padrão.
- Questões de prova anterior só podem ser rotuladas `prova-anterior` quando enunciado e
  origem estiverem legíveis e confirmados; nunca apresente questões autorais como oficiais.

## 5. Onde alterar cores, fontes e espaçamentos

Em **`css/style.css`**, no bloco `:root` no início do arquivo: cores (`--cor-primaria`
é o azul-marinho; `--cor-fundo` é o fundo claro), fontes, tamanhos, espaçamentos, raio
das bordas e sombras. Alterar as variáveis muda a aparência inteira do site.

## 6. Como funciona o armazenamento (e a limpeza)

`js/storage.js` grava tudo em `localStorage` com chaves versionadas (`gmsg_*_v1`):
progresso de estudo, caderno de erros, simulado em andamento, histórico de simulados e
preferências. Nada sai do computador; não há login nem envio a serviços externos.
O botão **"Limpar meu progresso"** (rodapé) apaga tudo, após confirmação.

## 7. Estrutura dos arquivos

```text
├── index.html              → página única (todas as visões)
├── css/style.css           → estilos; variáveis em :root
├── js/questions.js         → banco de 157 questões + constantes do simulado
├── js/storage.js           → camada de persistência (localStorage)
├── js/app.js               → lógica: estudo, simulado, correção, erros, desempenho
├── FONTES_E_LIMITACOES.md  → fontes analisadas e limitações
├── README.md               → este arquivo
└── referencias/            → PDFs do concurso (edital, caderno e prova de 2020)
```

## 8. Documentos analisados

- `referencias/edital.pdf` — Edital nº 001/PMSG/2026 (fonte principal: formato da prova,
  distribuição, critérios, conteúdo do Anexo III, atribuições do Anexo IV da Lei
  nº 1.625/2026, requisitos e cronograma).
- `referencias/PROVA-Guarda-Municipal-SG.pdf` — prova objetiva de 2020 (estilo de
  enunciado; 7 questões transcritas; PDF sem camada de texto, lido via renderização de
  imagens; a página com as questões 1–12 está corrompida no arquivo e não foi usada).
- `referencias/777160d3-643c-4f84-8712-935841198d0d.pdf` — caderno informativo (cronograma,
  vagas e remuneração).
- Textos das leis federais (EGM e SUSP) conferidos no site do Planalto.
- Detalhes e limitações: **`FONTES_E_LIMITACOES.md`**.

## 9. Conteúdos que ainda precisam de confirmação/ampliação

- **Lei Municipal nº 1.625/2026 e Lei Municipal nº 1.416/2022:** o texto integral dessas
  leis não está no workspace; as questões cobrem apenas o que o edital reproduz e cita.
  Confirme no texto integral antes de estudar só por aqui.
- **Gabarito oficial da prova de 2020:** inexistente no material; as 7 questões históricas
  trazem explicação fundamentada na legislação consolidada, com essa ressalva declarada.
- **Subtópicos com cobertura fina:** lavagem de dinheiro (Lei nº 9.613/1998), conflito
  aparente de normas penais e web 3.0 têm poucas questões — pendentes de ampliação.
- Eventuais retificações do edital ou alterações legais posteriores a 23/09/2026.

## 10. Testes realizados na entrega

- Validação automática do banco (157 questões): distribuição por disciplina, 4
  alternativas, gabarito único, explicações e pontuação corretas.
- Testes de lógica em Node (73 verificações): montagem do simulado (15/20/15/20/10 = 80
  questões, 100 pontos, sem repetição, alternativas embaralhadas preservando o gabarito),
  bloqueio por falta de questões, cálculo de nota e critérios (máximo, mínimo, em branco,
  só-CE, respostas embaralhadas), cronômetro, filtros do Estudar, caderno de erros
  (pendência/domínio/histórico) e persistência.
- Teste fim-a-fim no Microsoft Edge (headless, via `file://`, 29 verificações): navegação,
  sessão de estudo com correção imediata, simulado completo com entrega, revelação do
  gabarito, caderno de erros, desempenho e persistência entre recargas.
