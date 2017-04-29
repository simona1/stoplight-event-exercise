
(function() {
  'use strict';
  const buttons = document.querySelectorAll('div.button');

  buttons.forEach(button => {
    button.addEventListener('click', toggleColor);
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);
  });

  function toggleColor(event) {
    const text = event.target.textContent;
    const name = text.toLowerCase();
    const turnedOn =
      document.getElementById(name + 'Light').classList.toggle(name);
    console.log(text + ' bulb ' + (turnedOn ? 'on' : 'off'));
  }

  function onMouseEnter(event) {
    console.log('Entered ' + event.target.textContent + ' button');
  }

  function onMouseLeave(event) {
    console.log('Left ' + event.target.textContent + ' button');
  }
})();
