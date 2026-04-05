function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown(targetDate, ids) {
  const diff = targetDate - new Date();
  if (diff <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  const days  = Math.floor(diff / 864e5);
  const hours = Math.floor((diff % 864e5) / 36e5);
  const mins  = Math.floor((diff % 36e5)  / 6e4);
  const secs  = Math.floor((diff % 6e4)   / 1e3);
  const [dEl, hEl, mEl, sEl] = ids.map(id => document.getElementById(id));
  dEl.textContent = days;
  hEl.textContent = pad(hours);
  mEl.textContent = pad(mins);
  sEl.textContent = pad(secs);
}

function tickCountdowns() {
  updateCountdown(FUVEST_DATE, ['fv-days','fv-hours','fv-mins','fv-secs']);
  updateCountdown(ENEM_DATE,   ['en-days','en-hours','en-mins','en-secs']);
}

tickCountdowns();
setInterval(tickCountdowns, 1000);
