// ─── DATAS ───────────────────────────────────────────────────────────
const FUVEST_DATE = new Date('2026-11-08T08:00:00');
const ENEM_DATE   = new Date('2026-11-01T08:00:00');
const INICIO      = new Date('2026-04-13T00:00:00'); // início semana 2

// ─── LEITURAS ────────────────────────────────────────────────────────
const LEITURAS = [
  { titulo: 'Opúsculo Humanitário',           ano: '1853', autor: 'Nísia Floresta' },
  { titulo: 'Nebulosas',                       ano: '1872', autor: 'Narcisa Amália' },
  { titulo: 'Memórias de Martha',              ano: '1899', autor: 'Julia Lopes de Almeida' },
  { titulo: 'Caminho de pedras',               ano: '1937', autor: 'Rachel de Queiroz' },
  { titulo: 'A paixão segundo G. H.',          ano: '1964', autor: 'Clarice Lispector' },
  { titulo: 'Geografia',                       ano: '1967', autor: 'Sophia de Mello Breyner Andresen' },
  { titulo: 'Balada de amor ao vento',         ano: '1990', autor: 'Paulina Chiziane' },
  { titulo: 'Canção para ninar menino grande', ano: '2018', autor: 'Conceição Evaristo' },
  { titulo: 'A visão das plantas',             ano: '2019', autor: 'Djaimilia Pereira de Almeida' },
];

// ─── CRONOGRAMA ───────────────────────────────────────────────────────
// Estrutura: semanas indexadas a partir de 2 (semana 2 = início)
// Cada semana tem dias: seg, ter, qua, qui, sex, sab, dom
// Cada dia tem slots: { cls, icon, materia, tipo, tema, tempo, questoes, aulas }

const SEMANAS = [
  {
    num: 2, label: 'Semana 2 · 13/04',
    dias: [
      { id:'seg', label:'Segunda', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Estequiometria (parte 2)', tempo:'40 min', questoes:15, aulas:[{num:'A1',label:'Adicionar link da aula',url:null}] },
      ]},
      { id:'ter', label:'Terça', slots:[
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Classes gramaticais (substantivo + verbo)', tempo:'30 min', questoes:10, aulas:[{num:'A1',label:'Adicionar link da aula',url:null}] },
      ]},
      { id:'qua', label:'Quarta', slots:[
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Função quadrática', tempo:'40 min', questoes:15, aulas:[{num:'A1',label:'Adicionar link da aula',url:null}] },
      ]},
      { id:'qui', label:'Quinta', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Ligações químicas', tempo:'30 min', questoes:10, aulas:[{num:'A2',label:'Adicionar link da aula',url:null}] },
      ]},
      { id:'sex', label:'Sexta', slots:[
        { cls:'sg', icon:'🌎', materia:'Geografia', tipo:'Videoaula + Exercícios', tema:'Geografia física', tempo:'30 min', questoes:10, aulas:[{num:'A1',label:'Adicionar link da aula',url:null}] },
      ]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão + Lista', tema:'Estequiometria · revisão geral', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões de Química · Estuda.com',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Classes gramaticais', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Português · Qconcursos',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Função quadrática', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Matemática · Estuda.com',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[
        { cls:'sr', icon:'🎯', materia:'Simulado completo', tipo:'Simulado + correção', tema:'Todas as matérias da semana', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Provas FUVEST · Acervo oficial',url:'https://acervo.fuvest.br/'}] },
      ]},
    ],
  },
  {
    num: 3, label: 'Semana 3 · 20/04',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Ligações químicas (continuação)', tempo:'40 min', questoes:15, aulas:[{num:'A3',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Classes gramaticais (pronomes)', tempo:'30 min', questoes:10, aulas:[{num:'A2',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Função quadrática (problemas)', tempo:'40 min', questoes:15, aulas:[{num:'A2',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Soluções', tempo:'30 min', questoes:10, aulas:[{num:'A4',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sh', icon:'🏛️', materia:'História', tipo:'Videoaula + Exercícios', tema:'Brasil Império', tempo:'30 min', questoes:10, aulas:[{num:'A1',label:'Adicionar link da aula',url:null}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão + Lista', tema:'Ligações + Soluções', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Pronomes e classes gramaticais', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Função quadrática', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 4, label: 'Semana 4 · 27/04',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Soluções (continuação)', tempo:'40 min', questoes:15, aulas:[{num:'A5',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Concordância verbal', tempo:'30 min', questoes:10, aulas:[{num:'A3',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Trigonometria (introdução)', tempo:'40 min', questoes:15, aulas:[{num:'A3',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Termoquímica', tempo:'30 min', questoes:10, aulas:[{num:'A6',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sg', icon:'🌎', materia:'Geografia', tipo:'Videoaula + Exercícios', tema:'População', tempo:'30 min', questoes:10, aulas:[{num:'A2',label:'Adicionar link da aula',url:null}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Lista pesada', tema:'Soluções + Termoquímica', tempo:'50 min', questoes:25, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Concordância verbal', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Trigonometria', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 5, label: 'Semana 5 · 04/05',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Termoquímica (continuação)', tempo:'40 min', questoes:15, aulas:[{num:'A7',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Concordância nominal', tempo:'30 min', questoes:10, aulas:[{num:'A4',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Trigonometria', tempo:'40 min', questoes:15, aulas:[{num:'A4',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sh', icon:'🏛️', materia:'História', tipo:'Videoaula + Exercícios', tema:'República', tempo:'30 min', questoes:10, aulas:[{num:'A2',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios + revisão', tema:'Termoquímica', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Termoquímica', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Concordância', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Trigonometria', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 6, label: 'Semana 6 · 11/05',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Equilíbrio químico', tempo:'40 min', questoes:15, aulas:[{num:'A8',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Regência', tempo:'30 min', questoes:10, aulas:[{num:'A5',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Trigonometria (problemas)', tempo:'40 min', questoes:15, aulas:[{num:'A5',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sg', icon:'🌎', materia:'Geografia', tipo:'Videoaula + Exercícios', tema:'Geopolítica', tempo:'30 min', questoes:10, aulas:[{num:'A3',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios', tema:'Equilíbrio químico', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Equilíbrio', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Regência', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Trigonometria', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 7, label: 'Semana 7 · 18/05',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Equilíbrio (continuação)', tempo:'40 min', questoes:15, aulas:[{num:'A9',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Regência (continuação)', tempo:'30 min', questoes:10, aulas:[{num:'A6',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Geometria plana', tempo:'40 min', questoes:15, aulas:[{num:'A6',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sh', icon:'🏛️', materia:'História', tipo:'Videoaula + Exercícios', tema:'História geral', tempo:'30 min', questoes:10, aulas:[{num:'A3',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios', tema:'Equilíbrio', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Equilíbrio', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Regência', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Geometria plana', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 8, label: 'Semana 8 · 25/05',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Química orgânica (introdução)', tempo:'40 min', questoes:15, aulas:[{num:'A10',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Sintaxe', tempo:'30 min', questoes:10, aulas:[{num:'A7',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Geometria plana (problemas)', tempo:'40 min', questoes:15, aulas:[{num:'A7',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sg', icon:'🌎', materia:'Geografia', tipo:'Videoaula + Exercícios', tema:'Brasil', tempo:'30 min', questoes:10, aulas:[{num:'A4',label:'Adicionar link da aula',url:null}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios', tema:'Orgânica', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Orgânica (intro)', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Sintaxe', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Geometria plana', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 9, label: 'Semana 9 · 01/06',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Orgânica (funções orgânicas)', tempo:'40 min', questoes:15, aulas:[{num:'A11',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Videoaula + Exercícios', tema:'Sintaxe (continuação)', tempo:'30 min', questoes:10, aulas:[{num:'A8',label:'Adicionar link da aula',url:null}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Geometria espacial', tempo:'40 min', questoes:15, aulas:[{num:'A8',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios', tema:'Funções orgânicas', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Exercícios', tema:'Geometria espacial', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Funções orgânicas', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Sintaxe', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Geometria espacial', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 10, label: 'Semana 10 · 08/06',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Videoaula + Exercícios', tema:'Orgânica (reações)', tempo:'40 min', questoes:15, aulas:[{num:'A12',label:'Adicionar link da aula',url:null}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão geral', tema:'Revisão completa de gramática', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Videoaula + Exercícios', tema:'Geometria espacial (problemas)', tempo:'40 min', questoes:15, aulas:[{num:'A9',label:'Adicionar link da aula',url:null}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Exercícios', tema:'Reações orgânicas', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Química',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Exercícios', tema:'Geometria espacial', tempo:'30 min', questoes:10, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão', tema:'Orgânica (reações)', tempo:'40 min', questoes:20, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
        { cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão', tema:'Revisão geral', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] },
        { cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão', tema:'Geometria espacial', tempo:'25 min', questoes:0, aulas:[{num:'Q',label:'Questões',url:'https://app.estuda.com/questoes_categorias/?onboarding=questoes'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado', tipo:'Simulado + correção', tema:'Todas as matérias', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 11, label: 'Semana 11 · REVISÃO',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sq', icon:'🧪', materia:'Química', tipo:'Revisão geral', tema:'Todos os temas de Química', tempo:'60 min', questoes:20, aulas:[{num:'Q',label:'Questões de Química · Qconcursos',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/quimica'}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sp', icon:'📖', materia:'Português', tipo:'Revisão geral', tema:'Interpretação + gramática completa', tempo:'45 min', questoes:15, aulas:[{num:'Q',label:'Questões de Português',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/letras-portugues'}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sm', icon:'📐', materia:'Matemática', tipo:'Revisão geral', tema:'Revisão completa', tempo:'60 min', questoes:20, aulas:[{num:'Q',label:'Questões de Matemática',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/matematica'}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sg', icon:'🌎', materia:'Geografia + História', tipo:'Revisão geral', tema:'Todos os temas', tempo:'45 min', questoes:15, aulas:[{num:'Q',label:'Questões de Geografia',url:'https://www.qconcursos.com/questoes-de-vestibular/disciplinas/geografia'}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Provas antigas', tema:'Resolver prova completa', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'sab', label:'Sábado', slots:[
        { cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Provas antigas', tema:'Resolver + corrigir prova completa', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] },
      ]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Simulado final', tipo:'Simulado + correção profunda', tema:'Todas as matérias', tempo:'4h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
  {
    num: 12, label: 'Semana 12 · FUVEST',
    dias: [
      { id:'seg', label:'Segunda', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Prova completa', tema:'Resolver prova antiga completa', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'ter', label:'Terça', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Correção', tema:'Corrigir erros da prova de ontem', tempo:'2h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'qua', label:'Quarta', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Prova completa', tema:'Resolver nova prova completa', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'qui', label:'Quinta', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Revisão de pontos fracos', tema:'Focar nos erros recorrentes', tempo:'2h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'sex', label:'Sexta', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Prova completa', tema:'Mais uma prova antiga', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'sab', label:'Sábado', slots:[{ cls:'sr', icon:'🎯', materia:'FUVEST', tipo:'Revisão final da semana', tema:'Consolidar o que errou', tempo:'3h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
      { id:'dom', label:'Domingo', slots:[{ cls:'sr', icon:'🎯', materia:'Descanso + revisão leve', tipo:'Revisão leve', tema:'Ler anotações, sem prova nova', tempo:'1h', questoes:0, aulas:[{num:'P',label:'Acervo FUVEST',url:'https://acervo.fuvest.br/'}] }]},
    ],
  },
];