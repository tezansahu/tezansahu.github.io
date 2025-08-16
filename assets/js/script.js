// Main JavaScript for Tezan Sahu's Website

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Navbar scroll effect
    initNavbarScrollEffect();
    
    // Role rotation animation
    initRoleRotation();
    
    // Marquee animations
    initMarqueeAnimations();
    
    // Testimonial modal functionality
    initTestimonialModal();
    
    // Creative section functionality
    initCreativeSection();
    
    // Form handling (if any)
    initFormHandling();
    
    // Lazy loading for images
    initLazyLoading();
    
    // Scroll indicator functionality
    initScrollIndicator();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Role rotation animation
function initRoleRotation() {
    const roles = document.querySelectorAll('.role');
    if (roles.length === 0) return;
    
    let currentRole = 0;
    
    function showNextRole() {
        roles.forEach(role => role.classList.remove('active'));
        roles[currentRole].classList.add('active');
        currentRole = (currentRole + 1) % roles.length;
    }
    
    // Initialize first role
    showNextRole();
    
    // Rotate roles every 2 seconds
    setInterval(showNextRole, 2000);
}

// Marquee animations
function initMarqueeAnimations() {
    const marqueeContents = document.querySelectorAll('.marquee-content');
    
    marqueeContents.forEach(content => {
        // Clone content for infinite scroll effect
        const items = Array.from(content.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            content.appendChild(clone);
        });
        
        // Pause animation on hover
        content.addEventListener('mouseenter', () => {
            content.style.animationPlayState = 'paused';
        });
        
        content.addEventListener('mouseleave', () => {
            content.style.animationPlayState = 'running';
        });
    });
}

// Form handling
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form handling logic here
            console.log('Form submitted:', new FormData(form));
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
        });
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll reveal animation
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => revealObserver.observe(el));
    }
}

// Initialize scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollReveal);

// Add reveal classes to elements that should animate in
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = [
        '.hero-content',
        '.about-content',
        '.timeline-item',
        '.service-card',
        '.research-card',
        '.testimonial-card'
    ];
    
    animateElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.animationDelay = `${index * 0.1}s`;
        });
    });
});

// Theme toggle functionality (for future use)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Add any scroll-based functionality here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Photo Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    if (slides.length === 0) return;
    
    // Ensure index is within bounds
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Move carousel track
    const track = document.querySelector('.carousel-track');
    if (track) {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    
    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlideIndex);
    });
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1); // Convert from 1-based to 0-based index
}

// Auto-advance carousel every 5 seconds
let carouselInterval;

function startCarouselAutoplay() {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopCarouselAutoplay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0);
        startCarouselAutoplay();
        
        // Pause autoplay on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopCarouselAutoplay);
            carouselContainer.addEventListener('mouseleave', startCarouselAutoplay);
        }
    }
});

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50) {
        nextSlide();
    } else if (endX - startX > 50) {
        prevSlide();
    }
}

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Accordion functionality for Experience & Education section
function toggleAccordion(accordionId) {
    const content = document.getElementById(accordionId);
    const arrow = document.getElementById(accordionId.replace('-accordion', '-arrow'));
    
    if (!content || !arrow) {
        console.log('Element not found:', accordionId);
        return;
    }
    
    const isCurrentlyActive = content.classList.contains('active');
    
    // Close ALL accordions first - be very specific
    const experienceAccordion = document.getElementById('experience-accordion');
    const educationAccordion = document.getElementById('education-accordion');
    const experienceArrow = document.getElementById('experience-arrow');
    const educationArrow = document.getElementById('education-arrow');
    
    // Remove active class from all accordions
    if (experienceAccordion) experienceAccordion.classList.remove('active');
    if (educationAccordion) educationAccordion.classList.remove('active');
    if (experienceArrow) experienceArrow.classList.remove('rotated');
    if (educationArrow) educationArrow.classList.remove('rotated');
    
    // If the clicked accordion wasn't active, open it
    if (!isCurrentlyActive) {
        content.classList.add('active');
        arrow.classList.add('rotated');
    }
}

// Timeline item expansion functionality
function toggleTimelineItem(header) {
    const details = header.nextElementSibling;
    const icon = header.querySelector('.timeline-expand-icon');
    
    if (!details || !icon) return;
    
    const isExpanded = details.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse the item
        details.classList.remove('expanded');
        icon.classList.remove('rotated');
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        // Expand the item
        details.classList.add('expanded');
        icon.classList.add('rotated');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}

// Speaking Section Functionality
let currentCategory = 'all';
let currentSearchTerm = '';
let visibleItems = 6;
let allSpeakingItems = [];

// Initialize speaking section
document.addEventListener('DOMContentLoaded', function() {
    initializeSpeakingSection();
});

function initializeSpeakingSection() {
    // Get all speaking cards and convert to array
    allSpeakingItems = Array.from(document.querySelectorAll('.speaking-card'));
    
    // Sort by date in reverse chronological order (newest first)
    allSpeakingItems.sort((a, b) => {
        const dateA = a.dataset.sortDate || '0000-00';
        const dateB = b.dataset.sortDate || '0000-00';
        return dateB.localeCompare(dateA); // Reverse order (newest first)
    });
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category
            currentCategory = this.dataset.category || 'all';
            
            // Filter items
            filterSpeakingItems();
        });
    });
    
    // Set up search
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            filterSpeakingItems();
        });
    }
    
    // Set up load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreItems);
    }
    
    // Initial filter
    filterSpeakingItems();
}

function filterSpeakingItems() {
    let filteredItems = [];
    
    allSpeakingItems.forEach(item => {
        const category = item.dataset.category;
        const title = item.querySelector('h4').textContent.toLowerCase();
        const venue = item.querySelector('.speaking-venue').textContent.toLowerCase();
        const tags = Array.from(item.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        // Check category filter
        const categoryMatch = currentCategory === 'all' || category === currentCategory;
        
        // Check search term
        const searchMatch = currentSearchTerm === '' || 
            title.includes(currentSearchTerm) ||
            venue.includes(currentSearchTerm) ||
            tags.some(tag => tag.includes(currentSearchTerm));
        
        if (categoryMatch && searchMatch) {
            filteredItems.push(item);
        }
    });
    
    // Sort filtered items by date (newest first) to maintain chronological order
    filteredItems.sort((a, b) => {
        const dateA = a.dataset.sortDate || '0000-00';
        const dateB = b.dataset.sortDate || '0000-00';
        return dateB.localeCompare(dateA);
    });
    
    // Get the speaking grid container
    const speakingGrid = document.getElementById('speaking-grid');
    if (speakingGrid) {
        // Clear the grid
        speakingGrid.innerHTML = '';
        
        // Add filtered items up to the visible limit in chronological order
        filteredItems.slice(0, visibleItems).forEach(item => {
            speakingGrid.appendChild(item);
        });
    }
    
    // Update load more button
    updateLoadMoreButton(filteredItems.length);
    
    // Reset visible items if new filter applied
    if (filteredItems.length <= visibleItems) {
        visibleItems = 6;
    }
}

function loadMoreItems() {
    visibleItems += 6;
    filterSpeakingItems();
}

function updateLoadMoreButton(totalFilteredItems) {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        if (visibleItems >= totalFilteredItems) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Testimonial Modal functionality
function initTestimonialModal() {
    const modal = document.getElementById('testimonialModal');
    const closeBtn = document.querySelector('.testimonial-modal-close');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Store full testimonial texts to ensure we don't lose content
    const fullTestimonials = {
        'Rob Kooper': `Tezan worked with me as part of Google Summer of Code. One thing that was clear from the beginning when he submitted his proposal was his attention to details. Out of the many proposals we received this year he was one of the top candidates and was selected to work with us.

The first month he designed an API with feedback from us, and also learned how build and work with the PEcAn system (a complex system that consists of many micro services that interact with each other). During this time he also learned how to work with the R programming language.

The second and third months he spend time on implementing all the features from his proposal, including a library that will interact with the PEcAn system. Many of the users of the PEcAn system have already shown interest in being able to use both the API and the library to do their research in the future.

I highly recommend Tezan for his ability to understand the problem, create a solution and implement the solution. His implementation skills and communications skills are excellent and he is a great person to be working with.`
    };
    
    // Add click event to all testimonial cards
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get testimonial data from the card
            const authorName = this.querySelector('.testimonial-author h4').textContent;
            const authorTitle = this.querySelector('.testimonial-author span').textContent;
            
            // Use full testimonial if available, otherwise use card text
            let testimonialText;
            if (fullTestimonials[authorName]) {
                testimonialText = fullTestimonials[authorName];
            } else {
                testimonialText = this.querySelector('.testimonial-content p').textContent;
            }
            
            // Populate modal with data
            document.getElementById('modalTestimonialText').textContent = testimonialText;
            document.getElementById('modalAuthorName').textContent = authorName;
            document.getElementById('modalAuthorTitle').textContent = authorTitle;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}

// Creative Section functionality
function initCreativeSection() {
    // This function can be expanded later for additional creative features
    console.log('Creative section initialized');
}

// Function to open Instagram reel in new tab
function openInstagramReel(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Artwork Modal functionality
function openArtworkModal(imageSrc, title, size, medium) {
    const modal = document.getElementById('artworkModal');
    const modalImage = document.getElementById('modalArtworkImage');
    const modalTitle = document.getElementById('modalArtworkTitle');
    const modalSize = document.getElementById('modalArtworkSize');
    const modalMedium = document.getElementById('modalArtworkMedium');
    const closeBtn = document.querySelector('.artwork-modal-close');
    
    // Set modal content
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalSize.textContent = size;
    modalMedium.textContent = medium;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Close modal when clicking the X
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}
