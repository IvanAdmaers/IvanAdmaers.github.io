'use strict';
const year = 2021;

const yearBlock = document.getElementById('year');
yearBlock.textContent = year;

const countDate = new Date(`jan 1, ${year} 00:00:00`).getTime();

const counter = ()=>{
  const timeNow = new Date().getTime(),
        gap = countDate - timeNow;
  
  const seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60,
        days = hours * 24;

  const d = Math.floor(gap / days),
        h = Math.floor((gap % days) / hours),
        m = Math.floor((gap % hours) / minutes),
        s = Math.floor((gap % minutes) / seconds);

  document.getElementById('day').textContent = d;
  document.getElementById('hour').textContent = h;
  document.getElementById('minute').textContent = m;
  document.getElementById('second').textContent = s;
};

counter();
setInterval(()=>counter(), 1000);

console.log('%c Waiting...', 'padding: 20px 0;color:#fff;text-transform:capitalize;font-size:3em;');