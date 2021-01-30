const getSiteHTML = (url) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const req = await fetch(url);
        const res = req.ok ? await req.text() : reject(new Error(req));

        return resolve(res);
      } catch (e) {
        return reject(e);
      }
    })();
  });
};

export default getSiteHTML;
