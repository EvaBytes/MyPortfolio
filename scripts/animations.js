// Activar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from("#hero h1", {
  duration: 1,
  y: -30,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#hero p", {
  duration: 1,
  delay: 0.3,
  y: 30,
  opacity: 0,
  ease: "power2.out"
});

gsap.fromTo("#hero a.btn",
  { scale: 1, opacity: 0 },
  { scale: 1.05, opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" }
);

gsap.to("#hero a.btn", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  duration: 1.5,
  delay: 1.5
});

// SCROLL: About y Skills
gsap.utils.toArray("#about p, #skills figure").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// PROJECTS - Entrada y stagger de íconos
gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  const icons = card.querySelectorAll(".project-icons a");
  if (icons.length) {
    gsap.from(icons, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    });
  }
});

// HOVER en tarjetas de proyecto
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});
