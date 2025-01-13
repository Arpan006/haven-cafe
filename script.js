function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll-to-top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '⬆';
  scrollToTopButton.className = 'scroll-to-top';
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  
  window.addEventListener('scroll', () => {
    let current = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Adjust for header height
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
    