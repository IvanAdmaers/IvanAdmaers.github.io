'use strict';
//Page img
const setPageImg = (imgSelector=>{
  if(!imgSelector) return;

  //Random arr elem
  const randomElem = arr=>{
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const imgArr = ['newyear1.webp', 'newyear2.webp', 'newyear3.webp', 'newyear4.webp', 'newyear5.webp'],
        path = './src/img/';
  const imgArea = document.querySelector(imgSelector);
  
  imgArea.style.backgroundImage = `url("${path}${randomElem(imgArr)}")`;;
})('.container .img');

//Get next year
const getNextYear = ()=>{
  return new Promise(async (resolve, reject)=>{
    
    //Get year from some site
    const getSiteHTML = async site=>{
      return new Promise(async (resolve, reject)=>{
        try{
          const req = await fetch(site);
          const res = req.ok ? await req.text() : reject(e);
  
          return resolve(res);
        } catch(e){
          reject(e);
        }
      });
    };

    const getYearFromHTML = (site, selector)=>{
      return new Promise(async (resolve, reject)=>{
        try{
          const pageHTML = await getSiteHTML(site);
          const parser = new DOMParser();
          const doc = parser.parseFromString(pageHTML, 'text/html');
          const year = doc.querySelector(selector).textContent.replace(/[^+\d]/g, '');
          
          return resolve(+year);
        } catch(e){
          reject(new Error(e));
        }
      });
    };

    //Calc next year
    let year = 0;
    try{
      year = await getYearFromHTML('https://jsonplaceholder.typicode.com', 'body > footer > div:nth-child(2)');
    } catch(e){
      console.log(`Cannot get year from site. ${e}`);
      year = new Date().getFullYear();
    }

    if(year){
      return resolve(year + 1);
    } else {
      return reject('Something wrong');
    }
    
  });
};

(async ()=>{
  let year = 0;
  try{
    year = +await getNextYear();
  } catch(e){
    console.log(`Something wrong. ${e}`);
    year = new Date.getFullYear() + 1;
  }

  const yearBlock = document.getElementById('year');
  yearBlock.textContent = year;

  const countDate = new Date(`jan 1, ${year} 00:00:00`).getTime();

  const counter = () => {
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

    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
  };

  counter();
  setInterval(() => counter(), 1000);
})();

console.log('%c Waiting...', 'padding: 20px 0;color:#fff;text-transform:capitalize;font-size:3em;');