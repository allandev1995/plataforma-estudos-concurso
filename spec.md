# SPEC.md — Plataforma de Estudos: Guarda Municipal de São Gonçalo/RJ

## 1. Objetivo do projeto

Desenvolver uma aplicação web completa, funcional, responsiva e minimalista para estudar para o concurso de **Guarda Municipal Nível II de São Gonçalo/RJ**, organizado pelo **Instituto SELECON**.

A aplicação deve priorizar aprendizagem por questões, correção imediata, explicações didáticas, revisão dos erros e simulados cronometrados. Não entregar apenas um protótipo visual ou um plano: implementar os arquivos reais, testar as funcionalidades e documentar como utilizar e editar o projeto.

## 2. Fontes e documentos do concurso

Antes de programar, examinar os documentos disponíveis no workspace, especialmente os que estiverem na pasta `referencias/`:

- `edital.pdf`: Edital nº 001/PMSG/2026 — Guarda Municipal Nível II.
- `prova-anterior.pdf`: prova anterior da Guarda Municipal de São Gonçalo, edital de 2020.
- `caderno-2026.pdf`: caderno informativo do concurso de 2026, caso esteja disponível.

Os nomes reais dos arquivos podem ser diferentes. Procurar arquivos equivalentes na pasta do projeto e nas subpastas.

### Hierarquia e uso das fontes

1. O edital atual e suas retificações oficiais são a referência principal para regras, matérias e distribuição da prova.
2. O Anexo III do edital define o conteúdo programático a cobrir.
3. A prova anterior deve ser usada como referência de estilo observável, formato, dificuldade e construção de enunciados; não presumir que o conteúdo ou as regras de 2020 são iguais aos de 2026/2027.
4. Não apresentar questões autorais como questões oficiais da SELECON.
5. Uma questão da prova anterior só pode ser rotulada como questão oficial histórica se o enunciado e sua origem estiverem legíveis e confirmados. Registrar ano e número da questão quando possível.
6. Para legislação, respeitar a referência temporal indicada no edital: considerar as atualizações vigentes até a data de publicação do edital, salvo retificação oficial aplicável.
7. Não inventar artigos, gabaritos, jurisprudência, número de página, citações ou referências que não foram confirmados.
8. Se um PDF estiver digitalizado ou sua extração de texto falhar, examinar as páginas como imagens e utilizar OCR apenas quando necessário. Não afirmar que analisou conteúdo ilegível ou inacessível.

Criar `FONTES_E_LIMITACOES.md`, listando documentos encontrados, informações extraídas e limitações de leitura/validação.

## 3. Tecnologias e execução

Usar exclusivamente:

- HTML5;
- CSS3;
- JavaScript puro;
- `localStorage` para o progresso local.

Não usar React, Vue, Angular, TypeScript, frameworks, bibliotecas externas, APIs pagas, autenticação, banco de dados remoto ou processo de compilação obrigatório.

A aplicação deve abrir ao carregar `index.html` diretamente no navegador do Windows, inclusive via `file://`. Não depender de `fetch()` para carregar JSON local; manter as questões em um arquivo JavaScript incluído por `<script>`.

### Estrutura esperada

```text
guarda-municipal-quiz/
├── index.html
├── README.md
├── FONTES_E_LIMITACOES.md
├── css/
│   └── style.css
└── js/
    ├── questions.js
    ├── app.js
    └── storage.js
```

A estrutura pode ser adaptada se necessário, desde que permaneça simples e funcione sem dependências externas.

Usar comentários em português nos pontos centrais, incluindo banco de questões, pontuação, correção, cronômetro, persistência e customização visual. Manter funções pequenas, nomes claros e código acessível a uma pessoa que está aprendendo programação.

## 4. Formato da prova objetiva

O modo “Simulado completo” deve seguir o edital nº 001/PMSG/2026:

| Disciplina | Quantidade de questões | Valor por questão | Pontuação máxima |
|---|---:|---:|---:|
| Língua Portuguesa | 15 | 1 ponto | 15 |
| Noções de Direito | 20 | 1 ponto | 20 |
| Legislação Extravagante | 15 | 1 ponto | 15 |
| Conhecimentos Específicos | 20 | 2 pontos | 40 |
| Informática | 10 | 1 ponto | 10 |
| **Total** | **80** | — | **100 pontos** |

Regras:

- 80 questões de múltipla escolha.
- Quatro alternativas por questão, A, B, C e D.
- Apenas uma resposta correta.
- Tempo de prova: quatro horas.
- Pontuação máxima: 100 pontos.
- Cada questão de Conhecimentos Específicos vale dois pontos; as demais valem um ponto.
- Critério da simulação: pelo menos 50 pontos no total e nenhuma disciplina zerada, conforme a regra indicada no edital.

Validar automaticamente quantidade de questões, distribuição por disciplina, valor de cada questão e soma de pontos. Bloquear o início de um simulado completo se não houver questões suficientes para montar a distribuição exata. Mostrar uma mensagem clara, sem repetir questões silenciosamente ou alterar a regra do concurso para completar a prova.

Deixar claro que o resultado é uma simulação da prova objetiva, não uma previsão ou garantia de aprovação no concurso real.

## 5. Conteúdo programático completo — Anexo III

O banco de questões e os filtros devem cobrir os temas abaixo. Organizar por disciplina, tópico e subtópico. Não reduzir as matérias a uma lista genérica.

### 5.1. Língua Portuguesa

- Compreensão e interpretação de textos de gêneros variados.
- Reconhecimento de tipos e gêneros textuais.
- Domínio da ortografia oficial.
- Emprego das letras.
- Emprego da acentuação gráfica.
- Mecanismos de coesão textual.
- Emprego de elementos de referenciação, substituição e repetição.
- Conectores e demais elementos de sequenciação textual.
- Emprego e correlação de tempos e modos verbais.
- Estrutura morfossintática do período.
- Classes de palavras.
- Relações de coordenação entre orações e entre termos da oração.
- Relações de subordinação entre orações e entre termos da oração.
- Sinais de pontuação.
- Concordância verbal e nominal.
- Emprego do sinal indicativo de crase.
- Colocação dos pronomes átonos.
- Reescrita de textos de diferentes gêneros e níveis de formalidade.
- Correspondência oficial conforme o Manual de Redação da Presidência da República.
- Adequação da linguagem ao tipo de documento.
- Adequação do formato do texto ao gênero.

### 5.2. Noções de Direito

Separar a disciplina em Direito Constitucional, Direito Penal, Direito Processual Penal e Direito Administrativo, mantendo todas dentro da categoria oficial “Noções de Direito” para a distribuição da prova.

#### Direito Constitucional

- Princípios fundamentais da Constituição da República (arts. 1º a 4º da CF/88).
- Direitos e garantias fundamentais: direitos e deveres individuais e coletivos, direitos sociais, nacionalidade e direitos políticos (arts. 5º a 16 da CF/88).
- Organização político-administrativa (arts. 18 e 19 da CF/88).
- União (arts. 20 a 24 da CF/88).
- Estados federados (arts. 25 a 28 da CF/88).
- Municípios (arts. 29 a 31 da CF/88).
- Normas constitucionais relativas à Administração Pública e ao servidor público (arts. 37 a 41 da CF/88).
- Princípios constitucionais da Administração Pública (art. 37 da CF/88).
- Princípios constitucionais de natureza ética: moralidade, impessoalidade, probidade, motivação e publicidade (art. 37 da CF/88 e art. 77 da Constituição do Estado do Rio de Janeiro).
- Organização dos Poderes (arts. 44 a 135 da CF/88).
- Segurança Pública (art. 144 da CF/88).

#### Direito Penal

- Princípios básicos do Direito Penal.
- Aplicação da lei penal.
- Lei penal no tempo e no espaço.
- Tempo e lugar do crime.
- Territorialidade e extraterritorialidade.
- Conflito aparente de normas penais.
- Fato típico, ilicitude e culpabilidade.
- Consumação e tentativa.
- Concurso de pessoas.
- Concurso de crimes.
- Crimes contra a pessoa.
- Crimes contra o patrimônio.
- Crimes contra a dignidade sexual.
- Crimes contra a fé pública.
- Crimes contra a Administração Pública.
- Crimes contra a Administração da Justiça.
- Crimes hediondos (Lei nº 8.072/1990).
- Abuso de Autoridade (Lei nº 13.869/2019).
- Crime de Tortura (Lei nº 9.455/1997).
- Crimes previstos no Estatuto da Criança e do Adolescente (Lei nº 8.069/1990).
- Estatuto do Desarmamento (Lei nº 10.826/2003).
- Crimes Ambientais (Lei nº 9.605/1998).
- Lei Maria da Penha (Lei nº 11.340/2006).
- Lei de Drogas (Lei nº 11.343/2006).
- Lavagem de Dinheiro (Lei nº 9.613/1998 e alterações posteriores, respeitando a referência temporal do edital).
- Disposições constitucionais aplicáveis ao Direito Penal.

#### Direito Processual Penal

- Disposições preliminares do Código de Processo Penal.
- Inquérito policial.
- Notícia do crime.
- Formas de instauração.
- Investigação criminal.
- Indiciamento.
- Direitos e garantias do investigado.
- Prisão em flagrante.
- Prisão preventiva.
- Prisão temporária.
- Liberdade provisória.
- Garantias constitucionais aplicáveis ao Direito Processual Penal.
- Lei nº 9.099/1995 e suas alterações (Juizados Especiais Criminais).

#### Direito Administrativo

- Atos administrativos: conceito, elementos, atributos, classificação, espécies, formação e efeitos.
- Extinção, anulação e revogação dos atos administrativos.
- Poderes da Administração Pública.
- Poder hierárquico.
- Poder disciplinar.
- Poder regulamentar.
- Uso e abuso de poder.
- Poder de polícia: conceito, competências, fundamentos, limites, características e sanções.
- Responsabilidade civil, administrativa e penal dos agentes públicos.
- Responsabilidade civil do Estado.
- Agentes públicos.
- Servidores públicos.
- Regime jurídico dos servidores públicos.
- Direitos, deveres e responsabilidades.
- Concurso público.
- Provimento, acessibilidade, estabilidade e remuneração.
- Acumulação de cargos públicos.
- Processo Administrativo Disciplinar.
- Improbidade Administrativa — Lei Federal nº 8.429/1992 e alterações posteriores.

### 5.3. Legislação Extravagante

Manter como disciplina separada, com 15 questões no simulado. Incluir:

- Crimes Hediondos — Lei nº 8.072/1990.
- Abuso de Autoridade — Lei nº 13.869/2019.
- Lei de Tortura — Lei nº 9.455/1997.
- Crimes no Estatuto da Criança e do Adolescente — Lei nº 8.069/1990.
- Estatuto do Desarmamento — Lei nº 10.826/2003.
- Crimes contra o Meio Ambiente — Lei nº 9.605/1998.
- Lei Maria da Penha — Lei nº 11.340/2006.
- Lei de Drogas — Lei nº 11.343/2006.
- Organizações Criminosas — Lei nº 12.850/2013.
- Código de Trânsito Brasileiro — Lei nº 9.503/1997.

Algumas normas também aparecem no tópico de Direito Penal, conforme o Anexo III. Manter a organização oficial do edital para estudo e estatísticas, mas não contar uma mesma questão duas vezes dentro do mesmo simulado.

### 5.4. Conhecimentos Específicos

- Lei Federal nº 13.675, de 11 de junho de 2018 — Sistema Único de Segurança Pública (SUSP).
- Lei Federal nº 13.022, de 8 de agosto de 2014, e alterações — Estatuto Geral das Guardas Municipais.
- Lei Municipal nº 1.416/2022 — Estatuto dos Servidores Públicos do Município de São Gonçalo.
- Lei Municipal nº 1.625, de 28 de maio de 2026 — Estatuto da Guarda Municipal de São Gonçalo.

Priorizar os assuntos previstos no edital: princípios, conceitos, competências, atribuições, organização, deveres e responsabilidades, sempre com fundamentação verificável. Não atribuir à Guarda Municipal competências não previstas na legislação aplicável.

Esta disciplina tem peso maior na nota; permitir filtros e estatísticas específicos para ela.

### 5.5. Informática

- Conceitos de informática, hardware e software.
- Sistemas operacionais Windows XP, Vista, 7, 8.1 e 10 BR.
- Linux e software livre.
- Processador de texto: Word 2007/2010/2013/2016 BR e LibreOffice Writer 6.x.x ou superior; conceitos e uso dos recursos.
- Planilhas eletrônicas: Excel 2007/2010/2013/2016 BR e LibreOffice Calc 6.x.x ou superior; conceitos e uso dos recursos.
- Editor de apresentações: PowerPoint 2007/2010/2013/2016 BR e LibreOffice Impress 6.x.x ou superior; conceitos e uso dos recursos.
- Redes de computadores: conceitos, características, equipamentos, transmissão de sinal, topologias, conectores, cabeamento, protocolos e redes sem fio.
- Internet, intranet, Web 2.0 e Web 3.0.
- Navegadores: Internet Explorer 11 BR, Google Chrome e Mozilla Firefox; conceitos e recursos.
- Ferramentas de busca e pesquisa na Web.
- Tecnologias e ferramentas de colaboração.
- Correio eletrônico e webmail.
- Grupos de discussão, fóruns, wikis e redes sociais.
- Segurança da informação, de sistemas, de equipamentos, em redes e na internet: conceitos, aplicativos, proteção, ameaças e vulnerabilidades.
- Cópias de segurança (backup), vírus e antivírus.
- Criptografia e assinatura digital.
- Tecnologias e ferramentas multimídia, reprodução de áudio e vídeo e formatos de arquivos, imagens e figuras.

Não reduzir Informática a hardware, sistemas operacionais e pacote Office. Incluir também segurança, redes, backup, criptografia, assinatura digital, multimídia e formatos de arquivos. Considerar as versões citadas pelo edital, sem pressupor que todos os recursos de versões recentes sejam cobrados.

## 6. Banco inicial de questões

Criar um banco inicial de pelo menos 150 questões utilizáveis, desde que seja possível manter a qualidade e fundamentar corretamente as respostas. Distribuição de referência:

- 30 de Língua Portuguesa;
- 40 de Noções de Direito;
- 30 de Legislação Extravagante;
- 25 de Conhecimentos Específicos;
- 25 de Informática.

Este banco é para estudo; a distribuição do simulado completo continua sendo exatamente 80 questões e conforme a tabela da seção 4. Se necessário, produzir o banco em etapas, priorizando a correção e a variedade em vez de perguntas artificiais ou repetidas.

Estrutura de dados recomendada:

```javascript
{
  id: "const-001",
  discipline: "Noções de Direito",
  topic: "Direito Constitucional",
  subtopic: "Direitos e garantias fundamentais",
  difficulty: "intermediaria",
  statement: "Enunciado completo da questão.",
  options: [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D"
  ],
  correctIndex: 0,
  points: 1,
  explanation: "Explicação didática do gabarito.",
  optionExplanations: [
    "Explicação da alternativa A.",
    "Explicação da alternativa B.",
    "Explicação da alternativa C.",
    "Explicação da alternativa D."
  ],
  sourceType: "autoral",
  sourceReference: "Edital nº 001/PMSG/2026, Anexo III"
}
```

O exemplo é apenas o formato. Substituir todos os textos demonstrativos por questões reais, enunciados e explicações completos. `correctIndex` deve ser um índice de zero a três. As questões de Conhecimentos Específicos valem dois pontos; as demais, um ponto.

Os tipos de origem devem distinguir questões autorais de questões da prova anterior efetivamente identificadas. Referências legais ou artigos só devem ser incluídos quando confirmados.

Cada questão deve ter uma única resposta correta, distratores plausíveis, explicação coerente e linguagem clara. Não criar perguntas ambíguas, alternativas duplicadas ou mais de uma resposta defensável.

## 7. Modo Estudar — correção imediata

Este é o recurso prioritário para aprendizagem.

Permitir selecionar disciplina, tópico, dificuldade e quantidade de perguntas: 5, 10, 15 ou 20.

Apresentar uma questão por vez, com quatro alternativas. Assim que o usuário selecionar uma alternativa:

1. Corrigir imediatamente, sem recarregar a página.
2. Destacar a alternativa correta em verde.
3. Se a resposta escolhida estiver errada, destacá-la em vermelho.
4. Exibir uma explicação didática do gabarito.
5. Explicar o erro quando houver informações suficientes.
6. Mostrar disciplina, tópico e referência da questão.
7. Impedir que a mesma questão seja respondida e contabilizada repetidamente na mesma tentativa.
8. Mostrar o botão “Próxima questão”.
9. Permitir marcar uma questão para revisão.

Não revelar o gabarito antes da resposta. O feedback deve fazer parte da própria interface, sem depender de `alert()` do navegador. Permitir navegar nas questões já respondidas sem contar a mesma resposta duas vezes.

## 8. Modo Simulado — prova sem gabarito antecipado

Implementar um simulado completo com 80 questões, distribuição oficial e tempo total de quatro horas.

Durante a prova:

- Selecionar questões sem duplicação dentro do mesmo simulado.
- Embaralhar questões e alternativas preservando a correspondência correta do gabarito.
- Não mostrar resposta correta nem explicações antes da entrega.
- Mostrar o número da questão atual, a progressão e o cronômetro.
- Permitir navegar para frente e para trás.
- Diferenciar questões respondidas, em branco e marcadas para revisão.
- Permitir revisar tudo antes de entregar.
- Pedir confirmação para entrega definitiva.
- Finalizar automaticamente quando o tempo chegar a zero.

O cronômetro deve usar um horário-limite confiável, e não depender exclusivamente de diminuir um número a cada segundo. Ao alternar de aba ou recarregar a página, o tempo deve continuar correto.

Salvar o estado do simulado em andamento — respostas, questões, marcações, navegação e horário-limite — em `localStorage`. Ao retornar à aplicação, restaurar o estado e calcular o tempo restante. Evitar que reiniciar ou avançar contabilize respostas duplicadas.

## 9. Tela de resultados

Após a entrega, mostrar:

- Pontuação total de 0 a 100.
- Quantidade de acertos, erros e questões em branco.
- Percentual de aproveitamento.
- Tempo utilizado.
- Pontos e desempenho por disciplina.
- Questões erradas e não respondidas.
- Gabarito comentado, disponível apenas após a entrega.

Calcular a nota pelo valor de cada questão, não apenas pelo total de acertos. Aplicar dois pontos por questão de Conhecimentos Específicos.

Informar se os critérios simulados foram atingidos: mínimo de 50 pontos e nenhuma disciplina zerada. Se não forem, apontar claramente quais critérios ficaram pendentes. Se forem atingidos, dizer apenas que os parâmetros da prova objetiva simulada foram alcançados, sem garantir aprovação real.

Oferecer “Revisar minhas respostas” e “Fazer novo simulado”. A revisão não pode alterar a nota já concluída.

## 10. Caderno de Erros

Criar seção própria com as questões erradas. Registrar disciplina, tópico, questão, alternativa escolhida, gabarito e explicação.

Permitir:

- Filtrar erros por disciplina e tópico.
- Refazer individualmente uma questão.
- Começar uma sessão formada por questões erradas.
- Marcar questões para revisão posterior.
- Mostrar a quantidade de erros ainda pendentes.
- Retirar uma questão da lista de erros pendentes quando o candidato demonstrar domínio, preservando o histórico de tentativas.

Apenas visualizar uma explicação não equivale a acertar uma questão.

## 11. Painel de desempenho

Mostrar:

- Quantidade de questões respondidas.
- Acertos, erros e aproveitamento.
- Evolução entre simulados concluídos.
- Desempenho por disciplina.
- Assuntos com maior índice de erros.
- Questões ainda não estudadas.
- Resumo da última sessão.

Utilizar gráficos simples em HTML e CSS, sem bibliotecas externas. Não inventar dados nem gerar conclusões estatísticas quando ainda não houver tentativas suficientes.

## 12. Design e acessibilidade

Criar uma interface simples, minimalista, profissional e confortável para períodos longos de estudo.

- Fundo branco ou cinza muito claro.
- Azul-marinho como cor principal.
- Texto escuro com contraste adequado.
- Bordas discretas e sombras suaves.
- Tipografia legível e espaçamento confortável.
- Poucas animações e ausência de enfeites desnecessários.
- Layout responsivo para desktop, tablet e celular.
- Interface em português brasileiro.
- Navegação por teclado e foco visível.
- Alternativas com áreas de clique confortáveis.
- Feedback visual e textual para as respostas.

A página inicial deve incluir:

- Título “Preparatório Guarda Municipal de São Gonçalo”.
- Texto curto de apresentação.
- Botão “Iniciar simulado completo”.
- Botão “Estudar por matéria”.
- Botão “Revisar meus erros”.
- Botão “Ver meu desempenho”.
- Indicadores do progresso real, sem inventar dados antes de haver atividade.

Organizar cores, fontes, espaçamentos e tamanhos como variáveis CSS em `:root`, no início de `style.css`, para facilitar futuras mudanças.

## 13. Persistência e privacidade

Utilizar `localStorage` para salvar:

- Progresso de estudo.
- Histórico de respostas.
- Caderno de erros.
- Preferências do usuário.
- Simulados concluídos.
- Simulado em andamento.

Tratar falhas de leitura/gravação, dados inválidos e formatos antigos sem derrubar toda a aplicação. Incluir “Limpar meu progresso”, com confirmação. Não exigir conta, login ou dados pessoais. Não transmitir respostas ou histórico a serviços externos.

## 14. Validações e testes obrigatórios

Antes de declarar o projeto concluído, verificar:

1. Todos os arquivos existem e estão conectados corretamente.
2. O HTML e o JavaScript não apresentam erros de sintaxe.
3. A página abre diretamente no navegador, sem servidor obrigatório.
4. O banco possui questões reais e utilizáveis, não apenas exemplos.
5. Cada questão tem exatamente quatro alternativas e um único gabarito válido.
6. Índices de respostas e explicações estão corretos.
7. Não há duplicações indevidas no mesmo simulado.
8. A distribuição completa é 15/20/15/20/10 e totaliza 80 questões.
9. A pontuação máxima é 100, com dois pontos por questão específica.
10. O simulado bloqueia o início caso não haja perguntas suficientes para cumprir a distribuição.
11. O modo Estudar corrige imediatamente e evita contagem duplicada.
12. O modo Simulado não revela gabaritos antes da entrega.
13. O cronômetro continua correto ao alternar de aba ou recarregar a página.
14. A entrega automática ao fim do tempo funciona.
15. O cálculo por disciplina e o resultado geral estão corretos.
16. O caderno de erros funciona.
17. O progresso persiste após atualizar a página.
18. Todos os botões executam as ações correspondentes.
19. O layout funciona em telas pequenas.
20. A aplicação não depende de internet nem de bibliotecas externas.
21. A cobertura do Anexo III foi verificada; assuntos que não tenham questões suficientes devem ser identificados como pendentes, sem alegar cobertura inexistente.
22. Não há perguntas fora do edital apresentadas como cobradas, gabaritos sem sustentação ou referências legais inventadas.

Corrigir os problemas identificados antes da entrega.

## 15. README e entrega final

Criar `README.md`, em português, explicando:

- Como abrir a aplicação no Windows.
- Como adicionar e editar questões.
- Onde alterar cores, fontes e espaçamentos.
- Como funciona a pontuação.
- Como limpar o progresso.
- Como os arquivos estão organizados.
- Quais documentos foram analisados.
- Quais conteúdos ou referências ainda precisam de confirmação.

Ao finalizar, apresentar resumo dos arquivos criados, funcionalidades entregues, testes realizados e limitações encontradas.

## 16. Ordem de execução

1. Inspecionar o workspace e localizar os PDFs.
2. Analisar edital, Anexo III e prova anterior.
3. Registrar fontes e limitações.
4. Montar o banco inicial de questões por disciplina.
5. Implementar a estrutura HTML e os estilos.
6. Implementar banco, estudo, correção, simulado, pontuação, cronômetro, erros, estatísticas e armazenamento.
7. Executar os testes e corrigir falhas.
8. Completar o README e documentar a entrega.

**Não parar depois de apresentar um plano. Criar e validar uma aplicação realmente utilizável. Priorizar primeiro a fidelidade ao edital e a correção das questões, depois as funcionalidades, e finalmente o refinamento visual.**
