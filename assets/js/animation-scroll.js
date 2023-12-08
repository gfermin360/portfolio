
const progressbar = document.querySelector('#progress');

progressbar.animate(
  [
    { width: 0 },
    { width: "100%" },
  ],
  {
    fill: 'forwards',
    timeline: new ScrollTimeline({
      subject: document.documentElement,
    }),
  }
);

//animate header
const headerImg = document.querySelector('.header__img')
console.log(headerImg);
headerImg.animate(
  [
    { opacity: 1, transform: 'translateX(0)'/*, scale: 0.7 */},
    { opacity: 0.01, transform: 'translateX(50vw)'/*, scale: 1 */},
    { overflow: hidden}
  ],
  {
    fill: 'forwards',
    timeline: new ScrollTimeline({
      subject: document.documentElement,
    }),
  }
);


//animate sections

const sections = document.querySelectorAll('section');

for (const section of sections) {

  section.animate(
    [
      { opacity: 0.01, transform: 'translateY(70vh)'/*, scale: 0.7 */},
      { opacity: 1, transform: 'translateY(0)'/*, scale: 1 */}
    ],
    {
      fill: 'both',
      timeline: new ViewTimeline({
        subject: section,

      }),
      rangeStart: 'entry 10%',
      rangeEnd: 'cover 45%',
    }
  );
}


