// ---------- CRONOGRAMA ----------

function buildCronograma() {
  const tabsEl = document.getElementById('cronoTabs');
  const daysEl = document.getElementById('cronoDays');

  CRONOGRAMA.forEach((day, i) => {
    // tab
    const btn = document.createElement('button');
    btn.className = 'crono-tab' + (i === 0 ? ' active' : '');
    btn.textContent = day.label;
    btn.dataset.id = day.id;
    btn.addEventListener('click', () => switchDay(day.id));
    tabsEl.appendChild(btn);

    // day panel
    const panel = document.createElement('div');
    panel.className = 'crono-day' + (i === 0 ? ' active' : '');
    panel.id = 'crono-' + day.id;

    day.slots.forEach(slot => {
      const slotEl = document.createElement('div');
      slotEl.className = 'crono-slot ' + slot.cls;

      const aulaItems = slot.aulas.map(a => {
        const isPlaceholder = !a.url;
        return `
          <div class="crono-aula-item">
            <span class="crono-aula-num">${a.num}</span>
            <a href="${a.url || '#'}"
               class="crono-aula-link${isPlaceholder ? ' placeholder' : ''}"
               ${!isPlaceholder ? 'target="_blank"' : ''}
            >
              <span class="arr">↗</span> ${a.label}
            </a>
          </div>`;
      }).join('');

      slotEl.innerHTML = `
        <div class="crono-slot-header">
          <div class="crono-slot-icon">${slot.icon}</div>
          <div class="crono-slot-info">
            <span class="crono-slot-materia">${slot.materia}</span>
            <span class="crono-slot-tipo">${slot.tipo}</span>
          </div>
          <span class="crono-slot-tempo">${slot.tempo}</span>
        </div>
        <div class="crono-slot-body">${aulaItems}</div>
      `;
      panel.appendChild(slotEl);
    });

    daysEl.appendChild(panel);
  });

  // abre o dia atual automaticamente
  const DAY_MAP = ['sab', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
  const todayKey = DAY_MAP[new Date().getDay()];
  switchDay(todayKey);
}

function switchDay(id) {
  document.querySelectorAll('.crono-day').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.crono-tab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('crono-' + id);
  const btn   = document.querySelector(`.crono-tab[data-id="${id}"]`);
  if (panel) panel.classList.add('active');
  if (btn)   btn.classList.add('active');
}

// ---------- LEITURAS ----------

function buildLeituras() {
  const list = document.getElementById('livroList');
  LEITURAS.forEach((livro, i) => {
    const li = document.createElement('li');
    li.className = 'livro-item';
    li.innerHTML = `
      <span class="livro-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="livro-titulo">${livro.titulo} <span class="livro-ano">(${livro.ano})</span></span>
      <span class="livro-autor">${livro.autor}</span>
    `;
    list.appendChild(li);
  });
}

// ---------- MATÉRIAS (toggle) ----------

function toggle(card) {
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.materia-card.open').forEach(c => c.classList.remove('open'));
  if (!isOpen) card.classList.add('open');
}

// ---------- INIT ----------

buildCronograma();
buildLeituras();
