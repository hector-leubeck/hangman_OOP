const words = [
  {
    word: "paz",
    description:
      "estado de tranquilidade e ausência de conflito, caracterizado pela harmonia e coexistência pacífica.",
  },
  {
    word: "bem",
    description:
      "aquilo que contribui positivamente para o bem-estar e a prosperidade, abrangendo aspectos materiais, emocionais e sociais.",
  },
  {
    word: "vil",
    description:
      "aquilo que é moralmente condenável, caracterizado por maldade, perversidade ou comportamento malicioso.",
  },
  {
    word: "rude",
    description:
      "comportamento brusco, grosseiro ou desrespeitoso, que carece de consideração pelas normas sociais ou pela sensibilidade alheia.",
  },
  {
    word: "feto",
    description:
      "estágio de desenvolvimento do ser humano, geralmente a partir da 9ª semana de gestação até o nascimento, caracterizado pela formação de órgãos e sistemas corporais.",
  },
  {
    word: "coxo",
    description:
      "termo que descreve alguém que tem dificuldade ou incapacidade de andar normalmente devido a uma deficiência ou lesão nas pernas ou nos pés.",
  },
  {
    word: "sagaz",
    description:
      "pessoa astuta, perspicaz e inteligente, capaz de perceber e compreender rapidamente situações complexas.",
  },
  {
    word: "algoz",
    description:
      "aquele que inflige dor, sofrimento ou punição a outrem, muitas vezes desempenhando o papel de executor ou responsável por causar danos.",
  },
  {
    word: "justo",
    description:
      "aquilo que está em conformidade com os princípios da equidade, imparcialidade e moralidade",
  },
  {
    word: "teoria",
    description:
      "conjunto organizado de princípios, conceitos e hipóteses que busca explicar fenômenos observáveis, fornecendo um quadro conceitual para compreender determinado campo do conhecimento.",
  },
  {
    word: "turing",
    description:
      "sobrenome do renomado matemático, lógico e pioneiro da ciência da computação, cujos trabalhos fundamentais incluem o desenvolvimento do conceito da máquina que é um marco na teoria da computabilidade.",
  },
  {
    word: "string",
    description:
      "sequência de caracteres, como letras, números e símbolos, tratada como uma unidade de dados.",
  },
  {
    word: "empatia",
    description:
      "capacidade de compreender e compartilhar os sentimentos e perspectivas emocionais de outra pessoa",
  },
  {
    word: "orgulho",
    description:
      "sentimento de satisfação e valorização pessoal em relação às próprias realizações, características ou identidade.",
  },
  {
    word: "sucesso",
    description:
      "conquista de metas desejadas, alcançando realizações significativas e prosperidade em diferentes áreas da vida.",
  },
  {
    word: "hardware",
    description:
      "parte física e tangível de um sistema computacional, englobando todos os componentes eletrônicos, como processadores, memória, dispositivos de armazenamento e periféricos.",
  },
  {
    word: "software",
    description:
      "conjunto de programas e instruções que controlam as operações e funções de um computador, permitindo a execução de tarefas específicas.",
  },
  {
    word: "fracasso",
    description:
      "resultado negativo ou a não realização de metas e expectativas, muitas vezes acompanhado de dificuldades ou insucessos em alcançar objetivos desejados.",
  },
  {
    word: "paradigma",
    description:
      "modelo ou padrão estabelecido que serve como referência para compreender, interpretar ou abordar determinado fenômeno, conceito ou problema.",
  },
  {
    word: "persuadir",
    description:
      "ato de influenciar ou convencer alguém a adotar uma determinada opinião, comportamento ou ação por meio de argumentos, raciocínio lógico ou apelo emocional.",
  },
  {
    word: "ratificar",
    description:
      "confirmar ou aprovar oficialmente algo, reforçando ou validando uma decisão, acordo ou posição previamente estabelecida.",
  },
  {
    word: "maturidade",
    description:
      "qualidade de agir de maneira equilibrada, responsável e reflexiva, demonstrando um desenvolvimento emocional e comportamental que reflete compreensão das complexidades da vida.",
  },
  {
    word: "sororidade",
    description:
      "solidariedade e apoio mútuo entre mulheres, promovendo a união, empatia e colaboração para superar desafios e alcançar igualdade e respeito.",
  },
  {
    word: "democracia",
    description:
      "sistema de governo no qual o poder político é exercido pelo povo, geralmente por meio de representantes eleitos, assegurando a participação, a igualdade e a proteção dos direitos individuais.",
  },
  {
    word: "propriedade",
    description:
      "direito legal de posse, controle e uso de um bem ou recurso, conferindo ao proprietário autoridade sobre o objeto em questão.",
  },
  {
    word: "abreviatura",
    description:
      "forma mais curta de representar uma palavra ou expressão, geralmente formada pela eliminação de algumas letras ou sílabas, e é comumente utilizada para economizar espaço ou facilitar a escrita rápida.",
  },
  {
    word: "almiscarado",
    description:
      "aroma caracterizado pelo uso ou presença de almíscar, uma substância odorífera natural ou sintética associada a fragrâncias intensas e sensuais.",
  },
  {
    word: "remanescente",
    description:
      "aquilo que permanece ou subsiste após um evento ou processo, indicando o que resta ou perdura.",
  },
  {
    word: "independente",
    description:
      "algo ou alguém que age, decide ou existe de forma autônoma, sem depender excessivamente de outros, demonstrando autonomia e liberdade.",
  },
  {
    word: "compartilhar",
    description:
      "ato de dividir ou disponibilizar algo, como informações, recursos ou experiências, com outras pessoas, promovendo a colaboração e a troca entre indivíduos.",
  },
  {
    word: "heterossexual",
    description:
      "orientação sexual de indivíduos que sentem atração romântica, emocional e/ou sexual por pessoas do sexo oposto.",
  },
  {
    word: "inconveniente",
    description:
      "algo ou alguém que causa transtorno, desconforto ou perturbação, muitas vezes interferindo de maneira indesejada em uma situação ou ambiente.",
  },
  {
    word: "solidariedade",
    description:
      "ato de oferecer apoio, compaixão e assistência a outras pessoas em momentos de necessidade, demonstrando empatia e união em face de dificuldades.",
  },
  {
    word: "condescendente",
    description:
      "aquele que de maneira excessiva, tolera ou aceita comportamentos inadequados, muitas vezes demonstrando complacência ou indulgência.",
  },
  {
    word: "posteriormente",
    description:
      "momento ou evento que ocorre em seguida, após um intervalo de tempo ou uma ação específica.",
  },
  {
    word: "empreendimento",
    description:
      "esforço planejado e executado com o objetivo de realizar um projeto, negócio ou atividade, muitas vezes envolvendo riscos e recursos financeiros.",
  },
  {
    word: "intrinsecamente",
    description:
      "alquilo que é inerente, essencial ou intimamente ligado à natureza ou à essência de algo, sem depender de fatores externos.",
  },
  {
    word: "simultaneamente",
    description:
      "ocorrência ou realização de duas ou mais ações, eventos ou processos ao mesmo tempo, de maneira concomitante.",
  },
  {
    word: "desenvolvimento",
    description:
      "processo de crescimento, evolução ou aprimoramento em direção a um estado mais avançado, abrangendo diversos aspectos como econômico, social, tecnológico e pessoal.",
  },
  {
    word: "respectivamente",
    description:
      "expressão que indica que uma lista ou sequência de elementos está organizada na mesma ordem que foi mencionada anteriormente.",
  },
  {
    word: "constrangimento",
    description:
      "sensação de desconforto, embaraço ou vexame decorrente de uma situação socialmente delicada ou inadequada.",
  },
  {
    word: "otorrinolaringologia",
    description:
      "especialidade médica que trata das doenças relacionadas aos ouvidos, nariz, garganta e estruturas associadas, abrangendo diagnóstico, tratamento e prevenção de diversas condições nessas áreas.",
  },
  {
    word: "superdimensionamento",
    description:
      "prática de dimensionar ou projetar algo com capacidade ou tamanho além do necessário, muitas vezes resultando em excesso de recursos ou custos desnecessários.",
  },
  {
    word: "desproporcionalmente",
    description:
      "relação ou situação em que as partes envolvidas não estão equilibradas ou proporcionadas de acordo com o que seria esperado.",
  },
  {
    word: "antiprofissionalismo",
    description:
      "comportamentos, atitudes ou práticas que vão contra os padrões éticos, normas ou expectativas profissionais em uma determinada área de trabalho.",
  },
  {
    word: "inconstitucionalissimamente",
    description:
      "forma exagerada para enfatizar algo que seria extremamente inconstitucional de forma bem humorada.",
  },
  {
    word: "interdisciplinaridade",
    description:
      "abordagem que integra conhecimentos, métodos e perspectivas de diversas disciplinas ou campos de estudo, visando uma compreensão mais completa e holística de um determinado tema ou problema.",
  },
  {
    word: "pluridimensionalidade",
    description:
      "existência ou consideração de várias dimensões, aspectos ou perspectivas em relação a um objeto, conceito ou fenômeno.",
  },
  {
    word: "desasnado",
    description:
      "aquele que recebeu instruções, que perdeu a ignorancia sobre o tema.",
  },
  {
    word: "empedernido",
    description: "Aquele que não se deixa persuadir ou não se comove.",
  },
  { word: "filaucioso", description: "pessoa extremamente presunçosa." },
  {
    word: "iconoclasta",
    description: "aquele que contesta a veneração de simbolos religiosos.",
  },
  { word: "lancinante", description: "Pungente, agudo" },
  { word: "modorrento", description: "lento, apático, entediante." },
];

module.exports = { words };
