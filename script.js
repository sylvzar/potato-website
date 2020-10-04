const header = document.querySelector('.header');
const headertext = document.querySelector('#header-text');
const headerimg = document.querySelector('#header-img');
const nav = document.querySelector('#nav');

const tl = new TimelineMax();

tl.fromTo(
  header,
  1.5,
  { padding: '0' },
  { padding: '100px 0', ease: Power2.easeOut }
)
  .fromTo(
    headerimg,
    1.5,
    { width: '50%', left: '1000px' },
    { width: '50%', left: '0px', ease: Power2.easeInOut },
    '-=0.5'
  )
  .fromTo(
    headertext,
    1.5,
    { x: '-200%' },
    { x: '0%', ease: Power2.easeInOut },
    '-=1.5'
  )
  .fromTo(
    nav,
    1.5,
    { opacity: '0%' },
    { opacity: '100%', ease: Power2.easeInOut },
    '-=1.5'
  );

// Burger menu
const burgermenu = document.querySelector('.burgermenu');
const burgericon = document.querySelector('.burgericon');

// Bar animation toggle
function burgerToggle(x) {
  x.classList.toggle('change');
}

// Menu display toggle on/off
burgericon.addEventListener('click', (e) => {
  e.preventDefault();
  if (window.getComputedStyle(burgermenu).display === 'block') {
    burgermenu.style.display = 'none';
  } else {
    burgermenu.style.display = 'block';
  }
});

// Media query for navbar visibility in desktop mode
var x = window.matchMedia('(min-width: 800px)');
mediaQuery(x); // Call listener function at run time
x.addListener(mediaQuery); // Attach listener function on state changes

function mediaQuery(x) {
  if (x.matches) {
    // If larger than 700px
    burgermenu.style.display = 'flex';
  } else {
    burgermenu.style.display = 'none';
  }
}
