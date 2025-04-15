// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });

  // Pricing toggle functionality
  const billingToggle = document.getElementById('billing-toggle');
  const monthlyOption = document.getElementById('monthly');
  const annualOption = document.getElementById('annual');
  const proPrice = document.getElementById('pro-price');
  const enterprisePrice = document.getElementById('enterprise-price');
  const proAnnualNote = document.getElementById('pro-annual-note');
  const enterpriseAnnualNote = document.getElementById('enterprise-annual-note');

  billingToggle.addEventListener('change', function() {
    if (this.checked) {
      // Annual pricing
      monthlyOption.classList.remove('active');
      annualOption.classList.add('active');
      proPrice.textContent = '$24';
      enterprisePrice.textContent = '$83';
      proAnnualNote.textContent = 'Billed annually ($290/year)';
      enterpriseAnnualNote.textContent = 'Billed annually ($990/year)';
    } else {
      // Monthly pricing
      monthlyOption.classList.add('active');
      annualOption.classList.remove('active');
      proPrice.textContent = '$29';
      enterprisePrice.textContent = '$99';
      proAnnualNote.textContent = '';
      enterpriseAnnualNote.textContent = '';
    }
  });

  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.section-header, .feature-box, .ai-matching-card, .portfolio-comparison, .course-card, .learning-path-card, .blockchain-feature, .smart-contract-card, .pricing-card, .mentors-card, .career-accelerator, .community-card, .testimonial, .event-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  animateElements.forEach(element => {
    observer.observe(element);
    element.classList.add('fade-in');
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize animation for hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('animate');
  }

  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .hero-content {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .hero-content.animate {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
});
