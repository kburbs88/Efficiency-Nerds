const themeSwitcher = document.querySelector('#lighttoggle');
const themeSwitcher = document.querySelector('#darktoggle');
const body = document.querySelector('#body');


let mode = 'light';


themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    body.setAttribute('class', 'light');
    document.documentElement.style.setProperty('background', '#fff');
    document.documentElement.style.setProperty(#lighttoggle)
  }
  else {
    mode = 'dark';
    body.setAttribute('class', 'dark');
document.documentElement.style.setProperty('background', '#000');    
  }
});

