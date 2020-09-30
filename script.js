const header = document.querySelector('#header');
const headertext = document.querySelector('#header-text');
const headerimg = document.querySelector('#header-img');
const nav = document.querySelector('#nav');

const tl = new TimelineMax();

tl.fromTo(
  headerimg,
  1.5,
  { width: '30%', left: '500px' },
  { width: '50%', left: '0px', ease: Power2.easeInOut }
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
  )
  .fromTo(
    header,
    1.5,
    { padding: '0' },
    { padding: '100px 0', ease: Power2.easeInOut },
    '-=1.5'
  );
