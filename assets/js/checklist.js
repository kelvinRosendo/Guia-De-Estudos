// ─── SEMANA SELECT ───────────────────────────────────────────────────
function buildSemanaSelect() {
  const sel = document.getElementById('semanaSelect');
  const atualNum = getSemanaAtual();
  SEMANAS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.num;
    opt.textContent = s.label;
    if (s.num === atualNum) opt.selected = true;
    sel.appendChild(opt);
  });
  renderSemana(atualNum);
}

// ─── LEITURAS ────────────────────────────────────────────────────────
function buildLeituras() {
  const list = document.getElementById('livroList');
  LEITURAS.forEach((l, i) => {
    const li = document.createElement('li');
    li.className = 'livro-item';
    li.innerHTML = `
      <span class="livro-num">${String(i+1).padStart(2,'0')}</span>
      <span class="livro-titulo">${l.titulo} <span class="livro-ano">(${l.ano})</span></span>
      <span class="livro-autor">${l.autor}</span>`;
    list.appendChild(li);
  });
}