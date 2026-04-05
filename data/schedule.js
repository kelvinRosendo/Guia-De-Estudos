const FUVEST_DATE = new Date('2026-11-08T08:00:00');
const ENEM_DATE   = new Date('2026-11-01T08:00:00');

const LINKS = {
  quimica: {
    videos: [
      { label: 'Química do Monstro', url: 'https://www.youtube.com/@quimicadomonstro/videos' },
      { label: 'Professor Michel',   url: 'https://www.youtube.com/@ProfessorMichel/videos' },
      { label: 'Me Salva',           url: 'https://www.youtube.com/@MeSalva/videos' },
    ],
    questoes: [
      { label: 'Estuda.com',   url: 'https://app.estuda.com/questoes_categorias/?onboarding=questoes' },
      { label: 'Qconcursos',  url: 'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/quimica' },
      { label: 'Provas FUVEST', url: 'https://acervo.fuvest.br/' },
    ],
  },
  portugues: {
    videos: [
      { label: 'Noslen',                url: 'https://www.youtube.com/@noslen/videos' },
      { label: 'Português c/ Letícia', url: 'https://www.youtube.com/@portuguescomleticia/videos' },
      { label: 'Me Salva',              url: 'https://www.youtube.com/@MeSalva/videos' },
    ],
    questoes: [
      { label: 'Estuda.com',  url: 'https://app.estuda.com/questoes_categorias/?onboarding=questoes' },
      { label: 'Qconcursos', url: 'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues' },
      { label: 'Provas FUVEST', url: 'https://acervo.fuvest.br/' },
    ],
  },
  matematica: {
    videos: [
      { label: 'Professor Ferretto',       url: 'https://www.youtube.com/@professorferretto/videos' },
      { label: 'Matemática em Exercícios', url: 'https://www.youtube.com/@matematicaemexercicios/videos' },
      { label: 'Me Salva',                 url: 'https://www.youtube.com/@MeSalva/videos' },
    ],
    questoes: [
      { label: 'Estuda.com',  url: 'https://app.estuda.com/questoes_categorias/?onboarding=questoes' },
      { label: 'Qconcursos', url: 'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/matematica' },
      { label: 'Provas FUVEST', url: 'https://acervo.fuvest.br/' },
    ],
  },
  historia: {
    videos: [
      { label: 'Parabólica',           url: 'https://www.youtube.com/@parabolica/videos' },
      { label: 'Se Liga Nessa História', url: 'https://www.youtube.com/@SeLigaNessaHistoria/videos' },
    ],
    questoes: [
      { label: 'Estuda.com',  url: 'https://app.estuda.com/questoes_categorias/?onboarding=questoes' },
      { label: 'Qconcursos', url: 'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/historia' },
    ],
  },
  geografia: {
    videos: [
      { label: 'Geo Brasil',  url: 'https://www.youtube.com/@geobrasil/videos' },
      { label: 'Parabólica', url: 'https://www.youtube.com/@parabolica/videos' },
    ],
    questoes: [
      { label: 'Estuda.com',  url: 'https://app.estuda.com/questoes_categorias/?onboarding=questoes' },
      { label: 'Qconcursos', url: 'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/geografia' },
    ],
  },
  fuvest: {
    provas: [
      { label: 'Acervo FUVEST (oficial)', url: 'https://acervo.fuvest.br/' },
    ],
  },
};

const SCHEDULE = [
  { day: 'Segunda', tasks: [
    { label: 'Química · videoaula',    dot: 'q' },
    { label: 'Química · questões',     dot: 'q' },
    { label: 'Matemática · questões',  dot: 'm' },
  ]},
  { day: 'Terça', tasks: [
    { label: 'Química · videoaula',    dot: 'q' },
    { label: 'Português · videoaula',  dot: 'p' },
    { label: 'Português · questões',   dot: 'p' },
  ]},
  { day: 'Quarta', tasks: [
    { label: 'Química · questões',     dot: 'q' },
    { label: 'Matemática · videoaula', dot: 'm' },
    { label: 'Matemática · questões',  dot: 'm' },
  ]},
  { day: 'Quinta', tasks: [
    { label: 'Química · videoaula',    dot: 'q' },
    { label: 'Português · questões',   dot: 'p' },
    { label: 'História · videoaula',   dot: 'h' },
  ]},
  { day: 'Sexta', tasks: [
    { label: 'Química · questões',     dot: 'q' },
    { label: 'Matemática · questões',  dot: 'm' },
    { label: 'Geografia · videoaula',  dot: 'g' },
  ]},
  { day: 'Sábado', tasks: [
    { label: 'Revisão FUVEST · provas antigas',  dot: 'q' },
    { label: 'Português · interpretação',        dot: 'p' },
    { label: 'História + Geo · questões',        dot: 'h' },
  ]},
];

const CRONOGRAMA = [
  { id: 'seg', label: 'Segunda', slots: [
    { cls: 'sq', icon: '🧪', materia: 'Química',    tipo: 'Videoaula',  tempo: '~20 min',
      aulas: [{ num: 'A1', label: 'Aula 1 · adicionar link', url: null }] },
    { cls: 'sq', icon: '🧪', materia: 'Química',    tipo: 'Questões',   tempo: '~20 min',
      aulas: [{ num: 'Q1', label: 'Questões de Química · Estuda.com', url: LINKS.quimica.questoes[0].url }] },
    { cls: 'sm', icon: '📐', materia: 'Matemática', tipo: 'Questões',   tempo: '~20 min',
      aulas: [{ num: 'Q1', label: 'Questões de Matemática · Estuda.com', url: LINKS.matematica.questoes[0].url }] },
  ]},
  { id: 'ter', label: 'Terça', slots: [
    { cls: 'sq', icon: '🧪', materia: 'Química',   tipo: 'Videoaula', tempo: '~20 min',
      aulas: [{ num: 'A2', label: 'Aula 2 · adicionar link', url: null }] },
    { cls: 'sp', icon: '📖', materia: 'Português', tipo: 'Videoaula', tempo: '~20 min',
      aulas: [{ num: 'A1', label: 'Aula 1 · adicionar link', url: null }] },
    { cls: 'sp', icon: '📖', materia: 'Português', tipo: 'Questões',  tempo: '~20 min',
      aulas: [{ num: 'Q1', label: 'Questões de Português · Qconcursos', url: LINKS.portugues.questoes[1].url }] },
  ]},
  { id: 'qua', label: 'Quarta', slots: [
    { cls: 'sq', icon: '🧪', materia: 'Química',    tipo: 'Questões',   tempo: '~20 min',
      aulas: [{ num: 'Q2', label: 'Questões de Química · Qconcursos', url: LINKS.quimica.questoes[1].url }] },
    { cls: 'sm', icon: '📐', materia: 'Matemática', tipo: 'Videoaula',  tempo: '~20 min',
      aulas: [{ num: 'A1', label: 'Aula 1 · adicionar link', url: null }] },
    { cls: 'sm', icon: '📐', materia: 'Matemática', tipo: 'Questões',   tempo: '~20 min',
      aulas: [{ num: 'Q2', label: 'Questões de Matemática · Qconcursos', url: LINKS.matematica.questoes[1].url }] },
  ]},
  { id: 'qui', label: 'Quinta', slots: [
    { cls: 'sq', icon: '🧪', materia: 'Química',   tipo: 'Videoaula', tempo: '~20 min',
      aulas: [{ num: 'A3', label: 'Aula 3 · adicionar link', url: null }] },
    { cls: 'sp', icon: '📖', materia: 'Português', tipo: 'Questões',  tempo: '~20 min',
      aulas: [{ num: 'Q2', label: 'Questões de Português · Estuda.com', url: LINKS.portugues.questoes[0].url }] },
    { cls: 'sh', icon: '🏛️', materia: 'História',  tipo: 'Videoaula', tempo: '~20 min',
      aulas: [{ num: 'A1', label: 'Aula 1 · adicionar link', url: null }] },
  ]},
  { id: 'sex', label: 'Sexta', slots: [
    { cls: 'sq', icon: '🧪', materia: 'Química',    tipo: 'Questões',  tempo: '~20 min',
      aulas: [{ num: 'Q3', label: 'Provas FUVEST · Química', url: LINKS.fuvest.provas[0].url }] },
    { cls: 'sm', icon: '📐', materia: 'Matemática', tipo: 'Questões',  tempo: '~20 min',
      aulas: [{ num: 'Q3', label: 'Provas FUVEST · Matemática', url: LINKS.fuvest.provas[0].url }] },
    { cls: 'sg', icon: '🌎', materia: 'Geografia',  tipo: 'Videoaula', tempo: '~20 min',
      aulas: [{ num: 'A1', label: 'Aula 1 · adicionar link', url: null }] },
  ]},
  { id: 'sab', label: 'Sábado', slots: [
    { cls: 'sr', icon: '🎯', materia: 'Revisão FUVEST', tipo: 'Provas antigas',        tempo: '~40 min',
      aulas: [{ num: 'P1', label: 'Acervo FUVEST (oficial)', url: LINKS.fuvest.provas[0].url }] },
    { cls: 'sp', icon: '📖', materia: 'Português',       tipo: 'Interpretação de texto', tempo: '~20 min',
      aulas: [{ num: 'Q3', label: 'Interpretação de texto · Estuda.com', url: LINKS.portugues.questoes[0].url }] },
    { cls: 'sh', icon: '🏛️', materia: 'História + Geografia', tipo: 'Questões',        tempo: '~20 min',
      aulas: [
        { num: 'Q1', label: 'Questões de História · Qconcursos',  url: LINKS.historia.questoes[1].url },
        { num: 'Q1', label: 'Questões de Geografia · Qconcursos', url: LINKS.geografia.questoes[1].url },
      ]},
  ]},
];

const LEITURAS = [
  { titulo: 'Opúsculo Humanitário',          ano: '1853', autor: 'Nísia Floresta' },
  { titulo: 'Nebulosas',                      ano: '1872', autor: 'Narcisa Amália' },
  { titulo: 'Memórias de Martha',             ano: '1899', autor: 'Julia Lopes de Almeida' },
  { titulo: 'Caminho de pedras',              ano: '1937', autor: 'Rachel de Queiroz' },
  { titulo: 'A paixão segundo G. H.',         ano: '1964', autor: 'Clarice Lispector' },
  { titulo: 'Geografia',                      ano: '1967', autor: 'Sophia de Mello Breyner Andresen' },
  { titulo: 'Balada de amor ao vento',        ano: '1990', autor: 'Paulina Chiziane' },
  { titulo: 'Canção para ninar menino grande', ano: '2018', autor: 'Conceição Evaristo' },
  { titulo: 'A visão das plantas',            ano: '2019', autor: 'Djaimilia Pereira de Almeida' },
];
