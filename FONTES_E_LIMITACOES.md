# Fontes e Limitações

Este documento registra os documentos analisados, o que foi extraído de cada um e quais
limitações de leitura ou de validação existem. Ele acompanha o aplicativo para que o
candidato saiba exatamente em que base o banco de questões foi construído.

## 1. Documentos encontrados (pasta `referencias/`)

| Arquivo | Identificação | Como foi lido |
|---|---|---|
| `edital.pdf` | Edital nº 001/PMSG/2026 — Concurso Público para o cargo de Guarda Municipal Nível II de São Gonçalo (RJ), executado pelo Instituto SELECON. 58 páginas. | Extração de texto completa com `pdftotext` (camada de texto presente). |
| `777160d3-643c-4f84-8712-935841198d0d.pdf` | Caderno especial institucional do Município de São Gonçalo (Caderno Especial 2026) sobre o concurso da Guarda Municipal. | Extração de texto completa com `pdftotext`. |
| `PROVA-Guarda-Municipal-SG.pdf` | Caderno de questões da Prova Objetiva — Guarda Municipal Nível II, Edital nº 003/PMSG/2020 (prova anterior). 12 páginas. | PDF digitalizado/ vetorizado **sem camada de texto** (texto convertido em curvas) e com **tabela xref danificada**. Foi necessário escrever um rasterizador vetorial próprio em JavaScript (Node.js puro, sem dependências) para transformar cada página em imagem e ler o conteúdo visualmente. |

## 2. Informações confirmadas pelo Edital nº 001/PMSG/2026

Extraídas diretamente do texto do edital (fonte principal, conforme a hierarquia de fontes):

- **Prova Objetiva (item 9.5):** 80 questões de múltipla escolha, 4 alternativas (A a D),
  apenas uma correta; tempo de prova de 4 horas (item 8.21).
- **Distribuição e pontuação (item 9.5):**
  - Língua Portuguesa — 15 questões × 1 ponto = 15 pontos;
  - Noções de Direito (Constitucional, Penal, Processual Penal e Administrativo) — 20 × 1 = 20;
  - Legislação Extravagante — 15 × 1 = 15;
  - Conhecimentos Específicos (Legislação da Guarda Municipal de São Gonçalo) — 20 × 2 = 40;
  - Informática — 10 × 1 = 10. Total: 80 questões e 100 pontos.
- **Critério de aprovação (item 9.6):** é eliminado o candidato com pontuação inferior a
  50% (50 pontos) ou com nota 0,0 em qualquer disciplina.
- **Conteúdo programático (Anexo III):** confirmado integralmente; a redação do Anexo III
  do edital de 2026 corresponde ao conteúdo reproduzido neste projeto, item por item.
  O edital orienta que a legislação citada considera as **atualizações vigentes até a data
  de publicação do edital**.
- **Legislação de Conhecimentos Específicos (Anexo III):** Lei Federal nº 13.675/2018
  (SUSP); Lei Federal nº 13.022/2014 e alterações (Estatuto Geral das Guardas Municipais);
  Lei Municipal nº 1.416/2022 (Estatuto dos Servidores Públicos de São Gonçalo); Lei
  Municipal nº 1.625, de 28/05/2026 (Estatuto da Guarda Municipal de São Gonçalo).
- **Cargo de Guarda Municipal II:** atribuições do Anexo IV da Lei Municipal nº 1.625/2026
  reproduzidas integralmente no item 1.11 do edital (19 incisos, de I a XIX), incluindo
  policiamento preventivo, ostensivo e comunitário; competências de trânsito no âmbito do
  CTB (Lei nº 9.503/1997) ou por convênio; encaminhamento do autor de flagrante ao delegado
  de polícia preservando o local; atuação na segurança escolar; proteção do patrimônio
  ecológico, histórico, cultural e ambiental; entre outras.
- **Organização institucional:** a Guarda Municipal de São Gonçalo é órgão da Administração
  Direta do Poder Executivo, vinculado à Secretaria Municipal de Ordem Pública, que
  regulamenta suas atividades por meio de POP (arts. 141, §§ 1º e 2º, e 149 da Lei
  nº 1.625/2026). Art. 5º da Lei nº 1.625/2026: instituição uniformizada, pautada na
  hierarquia e na disciplina; grupamentos armados de forma fracionada, com avaliação
  psicológica prévia e capacitação integral (§ 1º); dever de exercer as competências
  independentemente do grupamento, desde que previamente capacitado (§ 2º). Art. 6º:
  sujeição a serviço em qualquer parte do município, mediante planejamento operacional
  prévio.
- **Regime jurídico (item 1.9):** os aprovados ingressam no regime estatutário regidos
  pelo Estatuto da Guarda Municipal (Lei nº 1.625/2026), aplicando-se **subsidiariamente**
  o Estatuto dos Servidores do Município (Lei nº 1.416/2022).
- **Requisitos do cargo (item 2):** idade mínima de 18 e máxima de 35 anos (até a véspera
  do 35º aniversário), altura mínima de 1,60 m (masculino) e 1,55 m (feminino), ensino
  médio completo, CNH categorias AB ou superior, entre outros, conforme o Anexo IV da Lei
  nº 1.625/2026.
- **Cronograma (Anexo II, resumo no caderno informativo):** publicação dos editais em
  23/09/2026; inscrições de 28/09 a 18/11/2026; aplicação da Prova Objetiva em 24/01/2027
  (manhã).
- **Vagas e remuneração (Anexo I, resumo no caderno informativo):** 100 vagas imediatas
  (95 de ampla concorrência e 5 para PcD) e cadastro de reserva de até 500 candidatos;
  vencimento inicial de R$ 3.172,96, com adicional de 30% de periculosidade e gratificação
  por porte de arma de R$ 1.000,00, quando couber; jornada de 40 horas semanais ou carga
  mensal de até 200 horas em regime de plantão.
- **Desempate (item 17.1):** empate na Prova Objetiva é desempatado, em primeiro lugar,
  pela maior pontuação em Conhecimentos Específicos da Legislação da GM/SG e, em seguida,
  pela maior pontuação em Língua Portuguesa.

## 3. Prova anterior (Edital nº 003/PMSG/2020)

- A prova de 2020 também tinha 80 questões com a mesma distribuição de disciplinas
  (Língua Portuguesa 1–15; Noções de Direito 16–35; Legislação Extravagante 36–50;
  Conhecimentos Específicos 51–70; Informática 71–80) e duração de 3h30 (a do edital de
  2026 é de 4 horas).
- **Estilo observável:** enunciados em formato de situação-problema com nomes fictícios e
  a expressão recorrente "Nos termos do Código Penal e da doutrina…"; questões de
  Conhecimentos Específicos citando SUSP, Estatuto Geral das Guardas Municipais e o
  Estatuto dos Servidores municipal da época; Informática cobrando Office/LibreOffice,
  redes, formatos de arquivo e segurança.
- **Diferença importante:** em 2020, os Conhecimentos Específicos cobraram a Lei Municipal
  nº 050/1991 (Estatuto dos Servidores da época). Em 2026, o edital exige a Lei Municipal
  nº 1.416/2022 e a Lei Municipal nº 1.625/2026. O conteúdo de 2020 **não** deve ser
  presumido como vigente para 2026/2027.
- **Uso neste projeto:** 7 questões da prova de 2020 foram transcritas para o banco com o
  rótulo `sourceType: "prova-anterior"` e aparecem na interface com o selo âmbar
  "Prova anterior (2020) — transcrita; sem gabarito oficial". São elas: questão 46
  (crime contra a flora, Lei nº 9.605/1998), 47 (violência moral, Lei nº 11.340/2006),
  58 (caráter civil das guardas municipais, Lei nº 13.022/2014), 59 (princípios
  mínimos de atuação — "diminuição das perdas"), 71 (SATA e taxa do USB 3.0),
  76 (atalho Ctrl+S e tecla F7) e 78 (critérios de senha forte). O enunciado e as
  alternativas foram lidos com clareza nas páginas renderizadas; como não há gabarito
  oficial, cada explicação declara a fundamentação legal ou técnica utilizada.

### Fontes complementares consultadas (textos legais)

Para garantir precisão nas questões de Conhecimentos Específicos, os textos integrais
das leis federais foram conferidos no site oficial do Presidência da República
(Planalto): Lei nº 13.022/2014 (EGM — arts. 1º, 2º, 3º, 4º, 6º e 14) e Lei nº
13.675/2018 (SUSP — ementa, arts. 1º, 2º, 4º, 9º e 35). As leis municipais
(1.416/2022 e 1.625/2026) continuam restritas ao que o edital reproduz (limitação 4
abaixo).

## 4. Limitações de leitura e de validação

1. **Página 3 da prova de 2020 (questões 1 a 12) está perdida.** O stream de conteúdo
   dessa página no PDF está fisicamente danificado (checksum Adler-32 inválido e corrupção
   no meio dos dados). Foi tentada recuperação por descompressão tolerante a falhas
   (zlib com flush forçado e inflação raw sem cabeçalho/rodapé); foi possível recuperar
   apenas o cabeçalho gráfico da página (linhas e rodapé), sem nenhum operador de texto.
   Por isso, **as questões 1 a 12 da prova de 2020 não estão disponíveis** e nenhuma
   questão delas foi citada ou reproduzida neste projeto.
2. **Gabarito oficial de 2020 indisponível.** O caderno de questões de 2020 não contém o
   gabarito. As questões históricas incluídas no banco trazem explicação elaborada com
   base na legislação e na doutrina consolidadas, e isso está declarado no próprio campo
   `explanation` de cada questão histórica. Não há nenhuma afirmação de conferência com o
   gabarito oficial da banca de 2020.
3. **Tipos de erro no próprio caderno de 2020.** A prova de 2020 contém lapsos (exemplo:
   a questão 48 cita "Lei nº 11.340/2006" para a Lei de Drogas, cujo número correto é
   11.343/2006). As questões históricas transcritas foram ajustadas nesses pontos apenas
   quando a correção é inequívoca, sem alterar o conteúdo cobrado.
4. **Texto integral da Lei Municipal nº 1.416/2022 e da Lei Municipal nº 1.625/2026 não
   está no workspace.** As únicas informações verificáveis sobre essas leis são as
   reproduzidas e citadas no próprio edital (arts. 5º e 6º, arts. 141 e 149, Anexo IV com
   as atribuições do Guarda Municipal II e os requisitos do cargo). As questões do banco
   sobre essas leis limitam-se ao que o edital confirma. **Conteúdo adicional dessas leis
   precisa ser verificado no texto integral antes de estudar apenas por este banco.**
5. **Legislação federal sujeita a alterações.** Conforme o Anexo III, vale a legislação
   com atualizações vigentes até a publicação do edital (23/09/2026). As questões do banco
   usam dispositivos consolidados e de ampla difusão doutrinária; ainda assim, recomenda-se
   conferir eventuais retificações do edital e alterações posteriores das leis federais.
6. **Questões autorais.** Salvo as questões rotuladas `sourceType: "prova-anterior"`,
   todas as demais são autorais, escritas no estilo observado na prova anterior e no
   conteúdo do Anexo III, e **não** devem ser confundidas com questões oficiais do
   Instituto SELECON.
7. **Cobertura do Anexo III.** O banco inicial cobre todos os tópicos das cinco
   disciplinas, com profundidade desigual: os itens de maior peso (Conhecimentos
   Específicos) e os blocos clássicos (Constitucional, Penal, Processual Penal,
   Administrativo, Português e Informática) têm boa quantidade de questões; alguns
   subtópicos específicos (por exemplo, "lavagem de dinheiro", "conflito aparente de
   normas penais" e "web 3.0") têm apenas 1 ou 2 questões e constam como **pendentes de
   ampliação** no README.
