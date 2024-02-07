window.onload = function() {

  const button = document.getElementById('headerButton');
  button.addEventListener('click', intro, false);

  let master = new TimelineMax();

  function intro() {
      master.to(".header-overlay--intro", 1, {
              y: -100,
              opacity: 0
             })
             .to(".header-overlay--text, .header-overlay--sub", 0.3, {
              opacity: 0
              })
            .to(".header-overlay", 1.7, {
              x: -2000,
              ease: Power2.easeOut,
              delay: 1
            })
            .to(".header-overlaySecondary", 1.7, {
              x: -2000,
              ease: Power2.easeOut,
              delay: -1.3
            })
            .to(".landing", 0.7, {
              x: 0,
              display:'inline-block',
              ease: Power2.ease,
              delay: -1.7
            })
            .to(".header", .1, {
              display: "none",
              delay: -1.1
            })
            .to(".aboutme, .projects", .1, {
              display: 'flex',
              delay: -1
            })
            .to(".landing__content--logo", 0.5, {
              opacity: 1,
              delay: -1
            })
            .to(".navwrap-navigation", 0.5, {
              opacity: 1,
              y: 0,
              delay: -1
            });
  }
};
