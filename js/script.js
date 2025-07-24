gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".parallax").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top top",
      scrub: true
    },
    backgroundPositionY: "50%",
    ease: "none"
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});