// ============================================
// RWDI & CNP Partnership Website
// Main JavaScript
// ============================================

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = 'ko';
        this.init();
    }

    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            this.currentLang = savedLang;
            this.updateLanguage();
        }

        // Set up language toggle button
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
        localStorage.setItem('preferredLanguage', this.currentLang);
        this.updateLanguage();
    }

    updateLanguage() {
        // Update all elements with data-ko and data-en attributes
        const elements = document.querySelectorAll('[data-ko][data-en]');
        elements.forEach(element => {
            const text = this.currentLang === 'ko' ? element.getAttribute('data-ko') : element.getAttribute('data-en');
            
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'OPTION') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        });

        // Update language toggle button
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.classList.remove('active');
            if ((option.textContent.includes('KOR') && this.currentLang === 'ko') ||
                (option.textContent.includes('ENG') && this.currentLang === 'en')) {
                option.classList.add('active');
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        // Scroll behavior for navbar
        window.addEventListener('scroll', () => this.handleScroll());

        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            this.navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        const icon = this.mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Contact Form Management
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company') || 'N/A';
        const service = formData.get('service') || 'N/A';
        const message = formData.get('message');

        // Create email body
        const emailBody = `
이름: ${name}
이메일: ${email}
회사: ${company}
관심 서비스: ${service}

메시지:
${message}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:snkim@cnpgroup.co.kr?subject=RWDI-CNP 웹사이트 문의 - ${name}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        this.showMessage('success', '이메일 클라이언트가 열립니다. 메시지를 전송해주세요.', 'Email client will open. Please send the message.');

        // Reset form after delay
        setTimeout(() => {
            this.form.reset();
        }, 1000);
    }

    showMessage(type, messageKo, messageEn) {
        const langManager = window.languageManager;
        const message = langManager.currentLang === 'ko' ? messageKo : messageEn;
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 10px;
            text-align: center;
            font-weight: 600;
            background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
            color: ${type === 'success' ? '#155724' : '#721c24'};
            animation: fadeIn 0.3s ease;
        `;

        // Insert message after form
        this.form.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Observe elements for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe service cards and feature cards
        const animatedElements = document.querySelectorAll('.service-card, .featured-card, .stat-card, .about-feature');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth scroll to element
    scrollToElement(selector, offset = 80) {
        const element = document.querySelector(selector);
        if (element) {
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    },

    // Get query parameter
    getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.languageManager = new LanguageManager();
    window.navigationManager = new NavigationManager();
    window.contactFormManager = new ContactFormManager();
    window.scrollAnimations = new ScrollAnimations();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Handle service parameter in URL
    const service = utils.getQueryParam('service');
    if (service) {
        setTimeout(() => {
            utils.scrollToElement(`[data-service="${service}"]`, 100);
        }, 500);
    }

    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Press Escape to close mobile menu
        if (e.key === 'Escape' && window.innerWidth <= 768) {
            window.navigationManager.closeMobileMenu();
        }
    });

    // Window resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Close mobile menu on desktop
            if (window.innerWidth > 768) {
                window.navigationManager.closeMobileMenu();
            }
        }, 250);
    });

    console.log('🏗️ RWDI & CNP Partnership Website Initialized');
});

// Service Worker Registration (for PWA support - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

// Export for use in other scripts
window.RWDIWebsite = {
    utils,
    LanguageManager,
    NavigationManager,
    ContactFormManager,
    ScrollAnimations
};