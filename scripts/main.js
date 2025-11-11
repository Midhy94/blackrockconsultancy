// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (navToggle && nav) {
    // Prevent event bubbling issues
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      const isOpen = nav.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen ? '✕' : '☰';
    });
    
    // Close nav when clicking outside (only if menu is open)
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          !navToggle.contains(e.target)) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '☰';
      }
    });
    
    // Close nav when clicking a link (mobile only)
    const navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          nav.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.innerHTML = '☰';
        }
      });
    });
    
    // Close nav on window resize if switching to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '☰';
      }
    });
  }
  
  // Sticky header with pill glass morphism effect (only when scrolling)
  const header = document.querySelector('.header');
  
  if (header) {
    let ticking = false;
    let isScrolled = false;
    const scrollThreshold = 50; // Scroll distance before header becomes sticky pill
    
    function updateHeader() {
      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
      
      // Add scrolled class when scrolling past threshold
      if (scrollY > scrollThreshold) {
        if (!isScrolled) {
          isScrolled = true;
          header.classList.add('scrolled');
          
          // Force a reflow to ensure styles apply
          void header.offsetHeight;
          
          // Add padding to body to prevent content jump
          if (window.innerWidth >= 768) {
            document.body.style.paddingTop = '90px';
          } else {
            const headerHeight = header.offsetHeight;
            document.body.style.paddingTop = headerHeight + 'px';
          }
        }
      } else {
        if (isScrolled) {
          isScrolled = false;
          header.classList.remove('scrolled');
          // Remove padding from body
          document.body.style.paddingTop = '0';
        }
      }
      
      ticking = false;
    }
    
    // Use scroll event with throttling
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
    
    // Handle resize - recalculate padding if header is scrolled
    window.addEventListener('resize', function() {
      if (isScrolled) {
        if (window.innerWidth >= 768) {
          document.body.style.paddingTop = '90px';
        } else {
          const headerHeight = header.offsetHeight;
          document.body.style.paddingTop = headerHeight + 'px';
        }
      }
      updateHeader();
    }, { passive: true });
    
    // Initial check on load
    updateHeader();
    
    // Also check after a short delay to ensure DOM is ready
    setTimeout(updateHeader, 100);
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

