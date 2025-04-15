const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        section.querySelector('.about, .projects, .contact').style.animation = 'fadeInUp 1s forwards';
      }
    });
  });