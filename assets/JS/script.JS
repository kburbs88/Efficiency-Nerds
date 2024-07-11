const themeSwitcher = document.querySelector('#toggle');
const body = document.querySelector('#body');

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
    document.documentElement.style.setProperty('background', '#fff')
  }
  else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
document.documentElement.style.setProperty('background', '#000');    
  }
});

