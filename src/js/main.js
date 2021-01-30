import setPageImg from './setPageImg.js';
import outputYearInHTML from './outputYearInHTML.js';
import getNextYear from './getNextYear.js';
import counter from './counter.js';
import 'https://cdn.jsdelivr.net/npm/just-snow/dist/just-snow.min.js';

(async () => {
  try {
    const year = await getNextYear();

    setPageImg('.container .img');
    outputYearInHTML(year, '#year');
    counter(year);
  } catch (e) {
    console.log(e);
    alert('Something wrong');
  }
})();

console.log('%c Waiting...', 'padding: 20px 0;color:#fff;text-transform:capitalize;font-size:3em;');