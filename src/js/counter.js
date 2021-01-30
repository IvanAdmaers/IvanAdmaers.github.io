const counter = (year) => {
  const countDate = new Date(`jan 1, ${year} 00:00:00`).getTime();
  const timeNow = new Date().getTime();
  const gap = countDate - timeNow;

  const seconds = 1000,
    minutes = seconds * 60,
    hours = minutes * 60,
    days = hours * 24;

  const d = Math.floor(gap / days),
        h = Math.floor((gap % days) / hours),
        m = Math.floor((gap % hours) / minutes),
        s = Math.floor((gap % minutes) / seconds);

  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;

  setInterval(() => counter(year), 1000);
};

export default counter;