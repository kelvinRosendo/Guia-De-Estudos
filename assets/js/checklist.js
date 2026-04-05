const STORAGE_KEY = 'fuvest-checklist-v1';
const DATE_KEY    = 'fuvest-checklist-date';

function getTodayDow() {
  const d = new Date().getDay();
  return d === 0 ? -1 : d - 1;
}

function loadState() {
  const savedDate = localStorage.getItem(DATE_KEY);
  const today = new Date().toDateString();
  if (savedDate !== today) {
    localStorage.setItem(DATE_KEY, today);
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderWeek() {
  const grid = document.getElementById('weekGrid');
  grid.innerHTML = '';
  const state = loadState();
  const todayDow = getTodayDow();

  SCHEDULE.forEach((dayObj, di) => {
    const isToday = di === todayDow;
    const total = dayObj.tasks.length;
    const done  = dayObj.tasks.filter((_, ti) => state[`${di}-${ti}`]).length;

    const card = document.createElement('div');
    card.className = 'day-card' + (isToday ? ' today' : '');

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `
      <span class="day-name">${dayObj.day}</span>
      <span class="today-badge">hoje</span>
      <span class="day-progress">${done}/${total}</span>
    `;
    card.appendChild(header);

    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'day-tasks';

    dayObj.tasks.forEach((task, ti) => {
      const isDone = !!state[`${di}-${ti}`];
      const item = document.createElement('div');
      item.className = 'task-item' + (isDone ? ' done' : '');
      item.innerHTML = `
        <div class="task-check">
          <svg class="task-check-svg" viewBox="0 0 10 8" fill="none">
            <polyline points="1,4 3.5,6.5 9,1" stroke="#F5F0E8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="task-dot ${task.dot}"></div>
        <span class="task-label">${task.label}</span>
      `;
      item.addEventListener('click', () => {
        const s = loadState();
        const key = `${di}-${ti}`;
        s[key] = !s[key];
        saveState(s);
        renderWeek();
      });
      tasksDiv.appendChild(item);
    });

    card.appendChild(tasksDiv);
    grid.appendChild(card);
  });
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  renderWeek();
}

renderWeek();
