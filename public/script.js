// ========================================
// Portfolio JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initScrollToTop();
  initCurrentYear();
  initScrollAnimations();
});

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMobile = document.getElementById('nav-mobile');
  const mobileLinks = navMobile.querySelectorAll('.nav-link-mobile');
  
  menuBtn.addEventListener('click', function() {
    const isOpen = menuBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
  
  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuBtn.classList.remove('active');
      navMobile.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && !navMobile.contains(e.target)) {
      menuBtn.classList.remove('active');
      navMobile.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const target = document.querySelector(targetId);
      if (target) {
        const navbarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// Contact Form (mailto)
// ========================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Create mailto link
    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:peremoboweirobert@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Opening your email client...', 'success');
    
    // Reset form
    form.reset();
  });
}

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close" aria-label="Close notification">&times;</button>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#22C55E' : type === 'error' ? '#EF4444' : '#60A5FA'};
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  // Close button
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.remove();
  });
  
  // Auto remove
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  .notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
`;
document.head.appendChild(style);

// ========================================
// Scroll to Top
// ========================================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// Current Year
// ========================================
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  const animatedElements = document.querySelectorAll(
    '.section-header, .highlight-card, .skill-category, .project-card, .writing-card, .github-stat-card, .case-study-section'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}
