#  O Que Vai Fazer Você Passar

> Guia de estudos interativo para FUVEST e ENEM — com checklist semanal, contagem regressiva e links organizados por matéria.

<p align="center">
  <a href="https://kelvinrosendo.github.io/Guia-De-Estudos/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Acessar%20o%20Site-Estudar%20Agora-blue?style=for-the-badge" />
  </a>
</p>

---

## 🎯 O que é isso

Um site de estudos feito pra quem quer parar de enrolar e começar a executar.

Nada de app complicado, nada de cadastro, nada de mensalidade. Abre no navegador e já funciona.  
👉 **Acesse direto aqui:** https://kelvinrosendo.github.io/Guia-De-Estudos/

O foco é simples: **você estuda, você marca, você acompanha**.

---

## ✨ Funcionalidades

### 📚 Cards de matérias
Cinco matérias organizadas por prioridade, cada uma com:
- Links diretos para **videoaulas** no YouTube
- Links diretos para **bancos de questões** (Estuda.com, Qconcursos)
- Acesso rápido às **provas antigas da FUVEST**
- Accordion interativo — clica pra abrir, clica pra fechar

| Matéria | Prioridade |
|---|---|
| 🧪 Química | Máxima |
| 📖 Português | Alta |
| 📐 Matemática | Manutenção estratégica |
| 🌎 Geografia | Suporte |
| 🏛️ História | Suporte |

---

### ✅ Checklist semanal (seg–sáb)
- Grade de estudos de segunda a sábado com tarefas pré-definidas
- Matérias prioritárias (Química e Matemática) **repetidas múltiplas vezes** na semana
- Clica na tarefa pra marcar como feita
- **Salva automaticamente** no `localStorage` do navegador
- **Reseta sozinha à meia-noite** todo dia — sem precisar fazer nada
- O dia de hoje fica destacado com borda e badge **"hoje"**
- Botão de reset manual pra zerar a semana quando quiser

---

### ⏱️ Contagem regressiva em tempo real
Dois contadores rodando simultaneamente, atualizando **a cada segundo**:

```
FUVEST 2026 → 8 de novembro de 2026
ENEM 2026   → 1 de novembro de 2026
```

Exibe dias · horas · minutos · segundos restantes.

---

### 🧠 Seção "Como usar"
Método de estudo embutido direto no site:

```
1. Assiste a aula     → 20 min, sem celular do lado
2. Faz questão        → 20 min logo depois, sem consultar
3. Errou?             → volta na aula, anota o padrão do erro
```

> **Dica que muda o jogo:** FUVEST não é sobre saber tudo — é sobre reconhecer padrão de questão.

---

## 🗂️ Estrutura do projeto

```
📄 guia-fuvest.html     → arquivo único, abre direto no navegador
📄 README.md            → você está aqui
```

Sem dependências. Sem build. Sem npm install. **Um arquivo HTML e acabou.**

---

## 🚀 Como usar

### Opção 1 — Local (mais simples)
```bash
# Clona o repositório
git clone https://github.com/seu-usuario/guia-fuvest.git

# Abre o arquivo no navegador
open guia-fuvest.html
```

### Opção 2 — GitHub Pages (recomendado)
1. Sobe o repositório no GitHub
2. Vai em **Settings → Pages**
3. Seleciona a branch `main` e a pasta `/ (root)`
4. Pronto — seu site fica em `https://seu-usuario.github.io/guia-fuvest`

### Opção 3 — Netlify (drag and drop)
1. Acessa [netlify.com/drop](https://app.netlify.com/drop)
2. Arrasta o arquivo `guia-fuvest.html` pra página
3. Recebe um link público na hora

---

## 🎨 Design

- **Estética:** caderno/papel — orgânico, sem exagero, fácil de ler
- **Fontes:** `Fraunces` (display serif) + `Instrument Sans` (corpo)
- **Textura de fundo:** linhas horizontais simulando papel pautado
- **Cores por matéria:** cada disciplina tem sua paleta própria
- **Responsivo:** funciona em celular e desktop

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | estrutura da página |
| CSS3 | layout, animações, responsividade |
| JavaScript vanilla | checklist, contagem regressiva, localStorage |
| Google Fonts | Fraunces + Instrument Sans |

Zero frameworks. Zero bibliotecas externas. Zero dependências.

---

## 📅 Cronograma de estudos embutido

A checklist já vem com uma grade montada priorizando as matérias certas:

| Dia | Foco principal |
|---|---|
| Segunda | Química (aula + questão) · Matemática |
| Terça | Química · Português (aula + questão) |
| Quarta | Química · Matemática (aula + questão) |
| Quinta | Química · Português · História |
| Sexta | Química · Matemática · Geografia |
| Sábado | Provas FUVEST · Português · História + Geo |

---

## 🔧 Customizações fáceis

Quer adaptar pro seu cronograma? Tudo fica no array `SCHEDULE` dentro do `<script>`:

```js
const SCHEDULE = [
  { day: 'Segunda', tasks: [
    { label: 'Química · videoaula', dot: 'q' },
    { label: 'Química · questões',  dot: 'q' },
    { label: 'Matemática · questões', dot: 'm' },
  ]},
  // ...
];
```

Cores disponíveis para o `dot`: `q` (química) · `p` (português) · `m` (matemática) · `g` (geo) · `h` (história)

---

## 📌 Links úteis já incluídos

**Videoaulas**
- [Química do Monstro](https://www.youtube.com/@quimicadomonstro)
- [Professor Michel](https://www.youtube.com/@ProfessorMichel)
- [Noslen](https://www.youtube.com/@noslen) · [Português com Letícia](https://www.youtube.com/@portuguescomleticia)
- [Professor Ferretto](https://www.youtube.com/@professorferretto)
- [Me Salva!](https://www.youtube.com/@MeSalva) *(todas as matérias)*

**Questões**
- [Estuda.com](https://www.estuda.com) — separado por categoria
- [Qconcursos](https://www.qconcursos.com) — vestibular por disciplina
- [Provas FUVEST](https://vestibulares.fuvest.br/provas) — banco oficial

---

## 📝 Licença

Feito pra uso pessoal. Usa, adapta, compartilha à vontade.

---

<p align="center">
  Feito pra quem vai passar de verdade. 💥
</p>
