document.getElementById("menuBtn").addEventListener("click", navToggle);


var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function() {
  if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    nav.classList.add('nav-sticky');
    header.classList.add('pt-scroll');
  } else {
    nav.classList.remove('nav-sticky');
    header.classList.remove('pt-scroll');
  }
});

function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');
    
    btn.classList.toggle('open');
    nav.classList.toggle('closed');
    nav.addEventListener('transitionend', changedp);
    nav.classList.toggle('tray-open');
    console.log(btn)
    console.log(nav)
}

function changedp() {
  var nav = document.getElementById('menu');
  if(nav.classList.contains('closed'))
      {nav.style.display ='none';
        }
      else{
        nav.style.display ='flex';
      }  
}
