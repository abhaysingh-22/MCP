// ============== SMOOTH SCROLL ============== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============== NAVBAR SCROLL EFFECT ==============
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============== BUTTON HOVER ANIMATION ==============
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.02)';
});

ctaButton.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

// ============== PARALLAX EFFECT FOR SHAPES ==============
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const shapes = document.querySelectorAll('.shape');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    shapes.forEach((shape, index) => {
        // Get the shape's current position
        const shapeRect = shape.getBoundingClientRect();
        const shapeCenterX = shapeRect.left + shapeRect.width / 2;
        const shapeCenterY = shapeRect.top + shapeRect.height / 2;

        // Calculate distance from cursor to shape
        const distX = shapeCenterX - mouseX;
        const distY = shapeCenterY - mouseY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // Only affect shapes within 300px of cursor
        if (distance < 300) {
            // Calculate push direction (away from cursor)
            const angle = Math.atan2(distY, distX);
            const force = (300 - distance) / 300;

            // Apply transformation
            const moveX = Math.cos(angle) * force * 40;
            const moveY = Math.sin(angle) * force * 40;

            // Add rotation based on cursor distance
            const rotationX = (distY / window.innerHeight) * 20;
            const rotationY = (distX / window.innerWidth) * 20;

            shape.style.transform = `
                translate(${moveX}px, ${moveY}px) 
                rotateX(${rotationX}deg) 
                rotateY(${rotationY}deg)
                scale(${1 + force * 0.1})
            `;
        } else {
            // Reset to default animation when far from cursor
            shape.style.transform = '';
        }
    });
});

// Reset shapes when mouse leaves window
document.addEventListener('mouseleave', () => {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.transform = '';
    });
});

// ============== INTERSECTION OBSERVER FOR FADE IN ==============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-content').forEach(el => {
    observer.observe(el);
});

// ============== KEYBOARD NAVIGATION ==============
document.addEventListener('keydown', (e) => {
    // Escape key to clear any active elements
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }

    // Tab key navigation
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        
        const focusableArray = Array.from(focusableElements);
        const currentIndex = focusableArray.indexOf(document.activeElement);
        
        if (e.shiftKey) {
            if (currentIndex > 0) {
                focusableArray[currentIndex - 1].focus();
            }
        } else {
            if (currentIndex < focusableArray.length - 1) {
                focusableArray[currentIndex + 1].focus();
            }
        }
    }
});

// ============== CLICK ANIMATIONS ==============
document.querySelectorAll('.nav-link, .login-btn, .get-started-btn, .banner-link').forEach(el => {
    el.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============== STYLE INJECTION FOR ANIMATIONS ==============
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) rotateX(0deg) rotateY(0deg);
        }
        50% {
            transform: translate(20px, -30px) rotateX(10deg) rotateY(10deg);
        }
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ============== PERFORMANCE OPTIMIZATION ==============
// Reduce animation frame rate on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.shape, .cta-button, .hero-title').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ============== DARK MODE DETECTION ==============
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log('Light mode detected - using light theme');
} else {
    console.log('Dark mode detected - using dark theme');
}

// ============== CONSOLE MESSAGE ==============
console.log('%cWelcome to Spline! 🎨', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cDesign and collaborate in 3D', 'color: #a78bfa; font-size: 14px;');
