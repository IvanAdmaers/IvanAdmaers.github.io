const getRandomArrElem = arr => arr[Math.floor(Math.random() * arr.length)];

const setPageImg = (imgSelector) => {
  const imgArr = ['newyear1.webp', 'newyear2.webp', 'newyear3.webp', 'newyear4.webp', 'newyear5.webp'];
  const path = './src/img/';
  const imgSection = document.querySelector(imgSelector);

  imgSection.style.backgroundImage = `url("${path}${getRandomArrElem(imgArr)}")`;
};

export default setPageImg;
