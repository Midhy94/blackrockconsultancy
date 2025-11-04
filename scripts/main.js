// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      const isOpen = nav.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen ? '✕' : '☰';
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '☰';
      }
    });
    
    // Close nav when clicking a link
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '☰';
      });
    });
  }
  
  // Sticky header shadow
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

