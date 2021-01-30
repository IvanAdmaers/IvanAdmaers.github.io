import getYearFromHTML from './getYearFromHTML.js';

const getNextYear = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      let year = 0;

      try {
        year = await getYearFromHTML('https://jsonplaceholder.typicode.com', 'body > footer > div:nth-child(2)');
      } catch (e) {
        console.log(`Cannot get year from site. ${e}`);
        year = new Date().getFullYear();
      }

      if (year) {
        return resolve(year + 1);
      } else {
        return reject(new Error('Something wrong'));
      }
    })();
  });
};

export default getNextYear;
