// ─── CRONOGRAMA ──────────────────────────────────────────────────────
let semanaAtiva = null;
let diaAtivo    = null;

function renderSemana(numSemana) {
  const semana = SEMANAS.find(s => s.num == numSemana);
  if (!semana) return;
  semanaAtiva = semana;

  const atualNum = getSemanaAtual();
  document.getElementById('semanaAtualBadge').style.display = (semana.num === atualNum) ? 'inline-block' : 'none';

  // Tabs de dias
  const tabsEl = document.getElementById('cronoTabs');
  tabsEl.innerHTML = '';
  semana.dias.forEach(dia => {
    const btn = document.createElement('button');
    btn.className = 'crono-tab';
    btn.textContent = dia.label;
    btn.dataset.id = dia.id;
    btn.addEventListener('click', () => renderDia(semana, dia.id));
    tabsEl.appendChild(btn);
  });

  // Determina dia a abrir
  const diaHoje = getDiaSemana();
  const diaExiste = semana.dias.find(d => d.id === diaHoje);
  const diaParaAbrir = semana.num === atualNum && diaExiste ? diaHoje : semana.dias[0].id;
  renderDia(semana, diaParaAbrir);
}

function renderDia(semana, diaId) {
  diaAtivo = diaId;
  document.querySelectorAll('.crono-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.id === diaId);
  });

  const dia = semana.dias.find(d => d.id === diaId);
  const daysEl = document.getElementById('cronoDays');
  daysEl.innerHTML = '';

  const panel = document.createElement('div');
  panel.className = 'crono-day active';

  dia.slots.forEach(slot => {
    const slotEl = document.createElement('div');
    slotEl.className = 'crono-slot ' + slot.cls;

    const questoesInfo = slot.questoes > 0 ? ` · ${slot.questoes} questões` : '';

    const aulaItems = slot.aulas.map(a => {
      const isPH = !a.url;
      return `<div class="crono-aula-item">
        <span class="crono-aula-num">${a.num}</span>
        <a href="${a.url || '#'}" class="crono-aula-link${isPH?' placeholder':''}" ${!isPH?'target="_blank"':''}>
          <span class="arr">↗</span> ${a.label}
        </a>
      </div>`;
    }).join('');

    slotEl.innerHTML = `
      <div class="crono-slot-header">
        <div class="crono-slot-icon">${slot.icon}</div>
        <div class="crono-slot-info">
          <span class="crono-slot-materia">${slot.materia}</span>
          <span class="crono-slot-tipo">${slot.tipo}${questoesInfo}</span>
        </div>
        <span class="crono-slot-tempo">${slot.tempo}</span>
      </div>
      <div class="crono-tema">
        <span class="crono-tema-label">Tema</span>
        ${slot.tema}
      </div>
      <div class="crono-slot-body">${aulaItems}</div>`;
    panel.appendChild(slotEl);
  });

  daysEl.appendChild(panel);
  renderChecklist(semana, dia);
}

// ─── CHECKLIST ───────────────────────────────────────────────────────
const CL_KEY   = 'fuvest-cl-v2';
const CL_DATE  = 'fuvest-cl-date';

function loadCL() {
  const saved = localStorage.getItem(CL_DATE);
  const today = new Date().toDateString();
  if (saved !== today) { localStorage.setItem(CL_DATE, today); localStorage.removeItem(CL_KEY); return {}; }
  try { return JSON.parse(localStorage.getItem(CL_KEY)) || {}; } catch { return {}; }
}

function saveCL(state) { localStorage.setItem(CL_KEY, JSON.stringify(state)); }

function renderChecklist(semana, dia) {
  const container = document.getElementById('checklistContainer');
  const state = loadCL();

  // Gera tarefas a partir dos slots do dia
  const tasks = [];
  dia.slots.forEach((slot, si) => {
    const dotCls = slot.cls === 'sq' ? 'q' : slot.cls === 'sp' ? 'p' : slot.cls === 'sm' ? 'm' : slot.cls === 'sg' ? 'g' : slot.cls === 'sh' ? 'h' : 'r';
    tasks.push({ id:`${semana.num}-${dia.id}-${si}-aula`, label:`${slot.materia} · ${slot.tipo}`, sub: slot.tema, tempo: slot.tempo, dot: dotCls });
    if (slot.questoes > 0) {
      tasks.push({ id:`${semana.num}-${dia.id}-${si}-q`, label:`${slot.materia} · Resolver ${slot.questoes} questões`, sub: '', tempo: '~20 min', dot: dotCls });
    }
  });

  const done  = tasks.filter(t => state[t.id]).length;
  const total = tasks.length;
  const pct   = total > 0 ? Math.round((done/total)*100) : 0;

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem">
      <span style="font-family:'Fraunces',serif;font-size:15px;font-weight:700;color:var(--ink)">${dia.label} · ${semana.label.split('·')[0].trim()}</span>
      <span style="font-size:12px;color:var(--ink-faint)">${done}/${total} concluídos</span>
    </div>
    <div class="checklist-progress-bar"><div class="checklist-progress-fill" style="width:${pct}%"></div></div>
    <div class="checklist-list" id="clList"></div>`;

  const list = document.getElementById('clList');
  tasks.forEach(task => {
    const isDone = !!state[task.id];
    const item = document.createElement('div');
    item.className = 'cl-item' + (isDone ? ' done' : '');
    item.innerHTML = `
      <div class="cl-check">
        <svg class="cl-check-svg" viewBox="0 0 10 8" fill="none">
          <polyline points="1,4 3.5,6.5 9,1" stroke="#F5F0E8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="cl-dot ${task.dot}"></div>
      <span class="cl-label">${task.label}${task.sub ? `<br><span style="font-size:11px;color:var(--ink-faint)">${task.sub}</span>` : ''}</span>
      <span class="cl-tempo">${task.tempo}</span>`;
    item.addEventListener('click', () => {
      const s = loadCL();
      s[task.id] = !s[task.id];
      saveCL(s);
      renderChecklist(semana, dia);
    });
    list.appendChild(item);
  });
}

function resetChecklist() {
  localStorage.removeItem(CL_KEY);
  if (semanaAtiva && diaAtivo) {
    const dia = semanaAtiva.dias.find(d => d.id === diaAtivo);
    if (dia) renderChecklist(semanaAtiva, dia);
  }
}

// ─── INIT ────────────────────────────────────────────────────────────
buildSemanaSelect();
buildLeituras();