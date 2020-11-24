'use strict';

const snow = ()=>{
  //Create an area for snow
  const createSnowArea = ()=>{
    const div = document.createElement('div');
    div.setAttribute('id', 'snow');
    div.style.cssText = 'position: fixed; top: 0; left: 0; z-index: -1; width: 100%; height: 100%;';
    document.body.appendChild(div);

    return div;
  };

  //Add css
  const addCss = ()=>{
    const styles = document.createElement('style');
    styles.textContent = `
    .snowflake{
      position: absolute; z-index: 1; top: -20px; -webkit-animation: fall linear forwards; animation: fall linear forwards;
    }
    @-webkit-keyframes fall{
      0%{
        -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
                transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
      }
      100%{
        -webkit-transform: translate3d(15px, 105vh, 0px) rotate(360deg) scale(0.6);
                transform: translate3d(15px, 105vh, 0px) rotate(360deg) scale(0.6);
      }
    }
    @keyframes fall{
      0%{
        -webkit-transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
                transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
      }
      100%{
        -webkit-transform: translate3d(15px, 105vh, 0px) rotate(360deg) scale(0.6);
                transform: translate3d(15px, 105vh, 0px) rotate(360deg) scale(0.6);
      }
    }
    `;

    document.head.appendChild(styles);
  };
  addCss();

  const snowArea = createSnowArea();

  const snowflakeAnim = ()=>{
    const snowflake = document.createElement('i');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '\&#10052;';
	  snowflake.style.left = Math.random() * window.innerWidth + 'px';
	  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
	  snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

    snowArea.appendChild(snowflake);

	  setTimeout(()=>snowflake.remove(), 5000);
    requestAnimationFrame(snowflakeAnim);
  };

  requestAnimationFrame(snowflakeAnim);
  


};

snow();