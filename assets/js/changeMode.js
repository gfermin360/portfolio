document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('#modeText');
  const body = document.querySelector('body')
  const navImg = document.querySelector('.nav__img')


  changeMode.addEventListener('click', function (e) {

    // Obtener el contenido actual eliminando espacios en blanco al principio y al final
    const currentMode = modeText.textContent.trim();
    // console.log(currentMode);

    // Cambiar entre dark_mode y light_mode
    if (currentMode === 'light_mode') {
      modeText.textContent = 'dark_mode';
      body.classList.remove('body--dark')
      navImg.setAttribute('src', './assets/img/logo.svg')
    } else {
      modeText.textContent = 'light_mode';
      body.classList.add('body--dark')
      navImg.setAttribute('src', './assets/img/logo2.svg')

    }

    // window.alert('Cambio de modo realizado');
  });

})