import getSiteHTML from './getSiteHTML.js';

const getYearFromHTML = (url, selector) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const pageHTML = await getSiteHTML(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(pageHTML, 'text/html');
        const year = doc.querySelector(selector).textContent.replace(/[^+\d]/g, '');

        return resolve(+year);
      } catch (e) {
        return reject(new Error(e));
      }
    })();
  });
};

export default getYearFromHTML;
