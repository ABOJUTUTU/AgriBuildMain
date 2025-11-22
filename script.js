// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
}

// Initialize page navigation
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
        
        // Update URL hash
        window.location.hash = pageId;
    });
});

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.substring(1) || 'home';
    showPage(pageId);
});

// Initialize page based on URL hash
const initialPage = window.location.hash.substring(1) || 'home';
showPage(initialPage);

// Scanner Simulation
const scannerBtn = document.querySelector('.scanner-btn');
if (scannerBtn) {
    scannerBtn.addEventListener('click', () => {
        // Show loading state
        scannerBtn.innerHTML = '🔄 Scanning...';
        scannerBtn.disabled = true;
        
        // Simulate scanning process
        setTimeout(() => {
            // Show success message
            alert('✅ Product Verified!\n\nPremium Beef Cuts\nGreen Valley Farms\nHalal Certified ✓\nExpires: Dec 2024');
            
            // Reset button
            scannerBtn.innerHTML = 'Start Scanning';
            scannerBtn.disabled = false;
        }, 2000);
    });
}

// Add Farm Button
const addFarmBtn = document.querySelector('.add-farm-btn');
if (addFarmBtn) {
    addFarmBtn.addEventListener('click', () => {
        const farmName = prompt('Enter farm name:');
        if (farmName) {
            alert(`🏠 Farm "${farmName}" added successfully!\n\nYou can now manage your new farm.`);
        }
    });
}

// Marketplace Filter
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Here you would filter products based on the category
        // For demo, we'll just show a message
        const category = btn.textContent.toLowerCase();
        console.log(`Filtering by: ${category}`);
    });
});

// Add Livestock Action
const addLivestockBtn = document.querySelector('.action-btn:nth-child(1)');
if (addLivestockBtn) {
    addLivestockBtn.addEventListener('click', () => {
        alert('🐄 Add Livestock form would open here!\n\nYou can add new animals to your farm.');
    });
}

// Smooth Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .stat-card, .farm-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Initialize animation styles
document.querySelectorAll('.feature-card, .stat-card, .farm-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check
animateOnScroll();

// Demo Data Updates (simulate real-time updates)
function updateDemoData() {
    // Randomly update some stats for demo purposes
    const stats = document.querySelectorAll('.stat-info h3');
    if (stats.length > 0) {
        const livestockStat = stats[0];
        const currentValue = parseInt(livestockStat.textContent.replace(/,/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 3);
        livestockStat.textContent = newValue.toLocaleString();
    }
}

// Update demo data every 30 seconds
setInterval(updateDemoData, 30000);

// Add some interactive hover effects
document.querySelectorAll('.card, .feature-card, .stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Loading animation for better UX
function showLoading() {
    // This would show a loading spinner in a real app
    console.log('Loading...');
}

function hideLoading() {
    // This would hide the loading spinner
    console.log('Loading complete!');
}

// Simulate API calls with loading states
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.textContent.includes('Get Started') || this.textContent.includes('Watch Demo')) {
            e.preventDefault();
            showLoading();
            
            setTimeout(() => {
                hideLoading();
                alert('🚀 Welcome to AgriBuild!\n\nThis is a demo version. In a real app, this would redirect to the signup/demo page.');
            }, 1000);
        }
    });
});

// Add some console welcome message
console.log(`
🌱 Welcome to AgriBuild! 
🚀 Professional Agritech Platform
📱 Mobile-First Design
💫 Built with modern web technologies

Enjoy exploring the demo! 
You can simulate farm management, livestock tracking, halal verification, and more.
`);

// Touch device optimizations
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Add touch feedback
    document.querySelectorAll('.btn, .nav-link, .action-btn').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Performance optimization: Lazy load images (if we had any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for better user experience
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    // In a real app, you might show a user-friendly error message
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
    // Additional floating animation for hero elements
function floatingAnimation() {
    const floatingElements = document.querySelectorAll('.graphic-item, .feature-icon');
    floatingElements.forEach((el, index) => {
        el.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

// Pulse animation for important buttons
function addPulseAnimation() {
    const pulseBtns = document.querySelectorAll('.btn-primary, .scanner-btn');
    pulseBtns.forEach(btn => {
        btn.style.animation = 'pulse 2s infinite';
    });
}

// Add to CSS for pulse:
// @keyframes pulse {
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// }

// Call these functions at the bottom of script.js:
floatingAnimation();
addPulseAnimation();
}