function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = "&#x2744;";
    return snowflake;
  }

  function animateSnowflake(snowflake) {
    const duration = getRandom(4, 8); 
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.left = `${getRandom(0, 100)}vw`; 
    document.getElementById('snowfall-container').appendChild(snowflake);
    snowflake.addEventListener('animationiteration', () => {
      document.getElementById('snowfall-container').removeChild(snowflake);
      animateSnowflake(createSnowflake());
    });
  }

  const numSnowflakes = 50;
  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = createSnowflake();
    animateSnowflake(snowflake);
  }

  function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-button');
    const snowfallContainer = document.getElementById('snowfall-container');
    const snowflakes = document.querySelectorAll('.snowflake');
    const icon = button.querySelector('img');
  
    body.classList.toggle('light-mode');
  
    const isLightMode = body.classList.contains('light-mode');
    button.style.backgroundColor = isLightMode ? '#000' : '#fff';
    button.style.color = isLightMode ? '#fff' : '#000';   

    if (isLightMode) {
      icon.src = 'img/lightbulb-fill-white.png';
    } else {
      icon.src = 'img/lightbulb-fill.png';
    }

    snowflakes.forEach((snowflake) => {
        snowfallContainer.removeChild(snowflake);
      });

    const numSnowflakes = 50;
    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = createSnowflake(isLightMode);
      animateSnowflake(snowflake);
    }

    function createSnowflake(isLightMode) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = "&#x2744;"; 
      
        snowflake.style.color = isLightMode ? '#000' : '#fff';
      
        snowflake.addEventListener('animationiteration', () => {
          const newSnowflake = createSnowflake(isLightMode);
          animateSnowflake(newSnowflake);
          snowfallContainer.removeChild(snowflake);
        });
      
        return snowflake;
      }
  }
  
  