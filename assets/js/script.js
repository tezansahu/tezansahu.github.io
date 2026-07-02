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
    
    // Speaking modal functionality
    initSpeakingModal();
    
    // Innovation (patents & papers) section + modal
    initInnovationSection();
    
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
let currentYear = 'all';
let currentForum = 'all';
let currentFormat = 'all';
let currentSearchTerm = '';
let visibleItems = 6;
let allSpeakingData = [];

// Initialize speaking section
document.addEventListener('DOMContentLoaded', function() {
    loadSpeakingData();
});

// Strip // line comments and /* ... */ block comments from a JSONC string,
// while preserving comment-like sequences that appear inside string literals.
function stripJsonComments(text) {
    var out = '';
    var i = 0;
    var len = text.length;
    var inString = false;
    var inLineComment = false;
    var inBlockComment = false;
    while (i < len) {
        var ch = text[i];
        var next = i + 1 < len ? text[i + 1] : '';
        if (inLineComment) {
            if (ch === '\n') { inLineComment = false; out += ch; }
            i++;
        } else if (inBlockComment) {
            if (ch === '*' && next === '/') { inBlockComment = false; i += 2; }
            else { i++; }
        } else if (inString) {
            out += ch;
            if (ch === '\\' && i + 1 < len) { out += text[i + 1]; i += 2; continue; }
            if (ch === '"') inString = false;
            i++;
        } else {
            if (ch === '"') { inString = true; out += ch; i++; }
            else if (ch === '/' && next === '/') { inLineComment = true; i += 2; }
            else if (ch === '/' && next === '*') { inBlockComment = true; i += 2; }
            else { out += ch; i++; }
        }
    }
    // Remove trailing commas before } or ] (also allowed by JSONC)
    return out.replace(/,(\s*[}\]])/g, '$1');
}

function loadSpeakingData() {
    fetch('./assets/data/speaking-engagements.jsonc')
        .then(function(response) { return response.text(); })
        .then(function(text) {
            var data = JSON.parse(stripJsonComments(text));
            // Separate upcoming from past
            var upcoming = data.filter(function(item) { return item.upcoming === true; });
            allSpeakingData = data.filter(function(item) { return !item.upcoming; });
            // Sort past by date descending (newest first)
            allSpeakingData.sort(function(a, b) {
                return (b.sortDate || '0000-00').localeCompare(a.sortDate || '0000-00');
            });
            // Sort upcoming by date ascending (soonest first)
            upcoming.sort(function(a, b) {
                return (a.sortDate || '9999-99').localeCompare(b.sortDate || '9999-99');
            });
            renderUpcomingEngagements(upcoming);
            initializeSpeakingSection();
        });
}

function renderUpcomingEngagements(upcoming) {
    var container = document.getElementById('upcoming-engagements');
    var grid = document.getElementById('upcoming-grid');
    if (!container || !grid || upcoming.length === 0) return;

    grid.innerHTML = '';
    upcoming.forEach(function(item) {
        var card = document.createElement('div');
        card.className = 'upcoming-card';

        var linkHTML = '';
        if (item.links && item.links.length > 0) {
            var link = item.links[0];
            linkHTML = '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer" class="upcoming-link"><i class="' + link.icon + '"></i> ' + link.label + ' →</a>';
        }

        card.innerHTML =
            '<span class="upcoming-badge">' + item.type + '</span>' +
            '<h4>' + item.title + '</h4>' +
            '<div class="upcoming-venue">' + item.venue + '</div>' +
            '<div class="upcoming-date"><i class="far fa-calendar"></i> ' + item.date + '</div>' +
            linkHTML;

        grid.appendChild(card);
    });

    // Clone all cards for seamless infinite loop
    var origCards = Array.from(grid.children);
    origCards.forEach(function(c) {
        grid.appendChild(c.cloneNode(true));
    });

    // Adjust animation speed based on item count (~5s per card)
    grid.style.animationDuration = (upcoming.length * 5) + 's';

    container.style.display = 'block';
}

function createSpeakingCard(item, index) {
    var card = document.createElement('div');
    card.className = 'speaking-card';
    card.dataset.category = item.category;
    card.dataset.sortDate = item.sortDate;
    card.dataset.index = index;

    var imageHTML;
    if (item.image) {
        imageHTML = '<img src="' + item.image + '" loading="lazy" alt="' + item.title + '">';
    } else {
        imageHTML = '<div class="image-coming-soon"></div>';
    }

    card.innerHTML =
        '<div class="speaking-image">' +
            imageHTML +
            '<div class="speaking-category">' + item.type + '</div>' +
        '</div>' +
        '<div class="speaking-content">' +
            '<h4>' + item.title + '</h4>' +
            '<div class="speaking-venue">' + item.venue + '</div>' +
            '<div class="speaking-date">' + item.date + '</div>' +
        '</div>';

    return card;
}

function initializeSpeakingSection() {
    // Set up year pills
    var yearPills = document.querySelectorAll('.year-pill');
    yearPills.forEach(function(pill) {
        pill.addEventListener('click', function() {
            yearPills.forEach(function(p) { p.classList.remove('active'); });
            this.classList.add('active');
            currentYear = this.dataset.year || 'all';
            visibleItems = 6;
            filterSpeakingItems();
        });
    });

    // Set up forum dropdown
    var forumSelect = document.getElementById('forum-filter');
    if (forumSelect) {
        forumSelect.addEventListener('change', function() {
            currentForum = this.value;
            visibleItems = 6;
            filterSpeakingItems();
        });
    }

    // Set up format dropdown
    var formatSelect = document.getElementById('format-filter');
    if (formatSelect) {
        formatSelect.addEventListener('change', function() {
            currentFormat = this.value;
            visibleItems = 6;
            filterSpeakingItems();
        });
    }

    // Set up search
    var searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchTerm = this.value.toLowerCase();
            visibleItems = 6;
            filterSpeakingItems();
        });
    }

    // Set up load more button
    var loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreItems);
    }

    // Initial render
    filterSpeakingItems();
}

function getFormatGroup(type) {
    if (type.includes('Talk')) return 'talk';
    if (type.includes('Workshop') || type.includes('Masterclass') || type.includes('Hands-on') || type.includes('Course')) return 'hands-on';
    if (type.includes('Podcast') || type.includes('Interview')) return 'podcast';
    if (type.includes('Panel')) return 'panel';
    return 'talk';
}

function getFilteredItems() {
    return allSpeakingData.filter(function(item) {
        // Year filter
        var itemYear = item.sortDate ? item.sortDate.substring(0, 4) : '';
        var yearMatch = currentYear === 'all' ||
            (currentYear === 'earlier' && parseInt(itemYear) < 2023) ||
            (currentYear !== 'earlier' && itemYear === currentYear);

        // Forum filter
        var forumMatch = currentForum === 'all' || item.category === currentForum;

        // Format filter
        var formatMatch = currentFormat === 'all' || getFormatGroup(item.type) === currentFormat;

        // Search filter
        var searchMatch = currentSearchTerm === '' ||
            item.title.toLowerCase().includes(currentSearchTerm) ||
            item.venue.toLowerCase().includes(currentSearchTerm) ||
            (item.description && item.description.toLowerCase().includes(currentSearchTerm));

        return yearMatch && forumMatch && formatMatch && searchMatch;
    });
}

function filterSpeakingItems() {
    var filtered = getFilteredItems();

    var speakingGrid = document.getElementById('speaking-grid');
    if (speakingGrid) {
        speakingGrid.innerHTML = '';
        filtered.slice(0, visibleItems).forEach(function(item) {
            // Use the original index in allSpeakingData so modal can look up details
            var originalIndex = allSpeakingData.indexOf(item);
            speakingGrid.appendChild(createSpeakingCard(item, originalIndex));
        });
    }

    updateLoadMoreButton(filtered.length);
}

function loadMoreItems() {
    visibleItems += 6;
    filterSpeakingItems();
}

function updateLoadMoreButton(totalFilteredItems) {
    var loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = (visibleItems >= totalFilteredItems) ? 'none' : 'inline-block';
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

// Speaking Modal functionality
function initSpeakingModal() {
    var modal = document.getElementById('speakingModal');
    var closeBtn = document.querySelector('.speaking-modal-close');

    if (!modal || !closeBtn) return;

    // Use event delegation on the speaking grid
    var speakingGrid = document.getElementById('speaking-grid');
    if (speakingGrid) {
        speakingGrid.addEventListener('click', function(e) {
            var card = e.target.closest('.speaking-card');
            if (!card) return;

            var index = parseInt(card.dataset.index, 10);
            var item = allSpeakingData[index];
            if (!item) return;

            // Image
            var modalImgContainer = document.getElementById('modalSpeakingImage');
            if (item.image) {
                modalImgContainer.innerHTML = '<img src="' + item.image + '" alt="' + item.title + '">';
            } else {
                modalImgContainer.innerHTML = '<div class="image-coming-soon"></div>';
            }

            // Info
            document.getElementById('modalSpeakingCategory').textContent = item.type;
            document.getElementById('modalSpeakingTitle').textContent = item.title;
            document.getElementById('modalSpeakingVenue').textContent = item.venue;
            document.getElementById('modalSpeakingDate').textContent = item.date;

            // Links
            var linksContainer = document.getElementById('modalSpeakingLinks');
            if (item.links && item.links.length > 0) {
                linksContainer.innerHTML = item.links.map(function(link) {
                    return '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer"><i class="' + link.icon + '"></i> ' + link.label + '</a>';
                }).join('');
                linksContainer.style.display = 'flex';
            } else {
                linksContainer.innerHTML = '';
                linksContainer.style.display = 'none';
            }

            // Description
            var descContainer = document.getElementById('modalSpeakingDescription');
            if (item.description) {
                descContainer.innerHTML = '<h4>About This Session</h4><div class="session-description">' + item.description + '</div>';
                descContainer.style.display = 'block';
            } else {
                descContainer.innerHTML = '';
                descContainer.style.display = 'none';
            }

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
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


// ==========================================================================
// Innovation Section (Patents & Research Papers)
// Loads data from assets/data/innovation.jsonc, renders slim single-row
// cards grouped by type, and opens a detail modal on click.
// ==========================================================================

var allInnovationData = [];
// Holds the currently-open item's { summary, abstract } so the description toggle can swap views.
var currentInnovationDescription = { summary: '', abstract: '' };

function initInnovationSection() {
    var patentsList = document.getElementById('patents-list');
    var papersList = document.getElementById('papers-list');
    if (!patentsList && !papersList) return;

    fetch('./assets/data/innovation.jsonc')
        .then(function(response) { return response.text(); })
        .then(function(text) {
            var data = JSON.parse(stripJsonComments(text));
            allInnovationData = data;
            renderInnovationLists();
            initInnovationModal();
        })
        .catch(function(err) {
            console.error('Failed to load innovation data:', err);
            if (patentsList) patentsList.innerHTML = '<div class="innovation-empty">Unable to load patents right now.</div>';
            if (papersList) papersList.innerHTML = '<div class="innovation-empty">Unable to load papers right now.</div>';
        });
}

function renderInnovationLists() {
    var patents = allInnovationData.filter(function(i) { return i.type === 'patent'; });
    var papers = allInnovationData.filter(function(i) { return i.type === 'paper'; });

    // Newest first
    var byDateDesc = function(a, b) {
        return (b.sortDate || '0000-00-00').localeCompare(a.sortDate || '0000-00-00');
    };
    patents.sort(byDateDesc);
    papers.sort(byDateDesc);

    renderInnovationGroup('patents-list', patents, 'No patents to show yet.');
    renderInnovationGroup('papers-list', papers, 'No papers to show yet.');

    var pc = document.getElementById('patents-count');
    if (pc) pc.textContent = patents.length;
    var rc = document.getElementById('papers-count');
    if (rc) rc.textContent = papers.length;
}

function renderInnovationGroup(containerId, items, emptyMessage) {
    var container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<div class="innovation-empty">' + emptyMessage + '</div>';
        return;
    }

    container.innerHTML = '';
    items.forEach(function(item) {
        var originalIndex = allInnovationData.indexOf(item);
        container.appendChild(createInnovationCard(item, originalIndex));
    });
}

function createInnovationCard(item, index) {
    var accent = getAccentSlug(item);
    var pillLabel = getPillLabel(item);

    var card = document.createElement('article');
    card.className = 'innovation-card accent-' + accent;
    card.dataset.index = index;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View details for ' + item.title);

    var venue = item.venue ? '<span class="innovation-card-venue"><i class="far fa-building"></i> ' + escapeHTML(item.venue) + '</span>' : '';
    var date = item.date ? '<span class="innovation-card-date"><i class="far fa-calendar"></i> ' + escapeHTML(item.date) + '</span>' : '';
    var identifier = item.identifier ? '<span class="innovation-card-identifier"><i class="fas fa-hashtag"></i> ' + escapeHTML(item.identifier) + '</span>' : '';

    card.innerHTML =
        '<span class="innovation-card-pill accent-' + accent + '">' + escapeHTML(pillLabel) + '</span>' +
        '<div class="innovation-card-body">' +
            '<h4 class="innovation-card-title">' + escapeHTML(item.title) + '</h4>' +
            '<div class="innovation-card-meta">' + venue + date + identifier + '</div>' +
        '</div>' +
        '<div class="innovation-card-arrow"><i class="fas fa-chevron-right"></i></div>';

    return card;
}

// Slug used for the colored left border + pill background.
// Patents map their `status` (granted/filed/under-review) to an accent class;
// papers map their `format` (long-paper/poster/journal-article/...) similarly.
function getAccentSlug(item) {
    if (item.type === 'patent') {
        return item.status || 'filed';
    }
    if (item.type === 'paper') {
        return item.format ? slugify(item.format) : 'unknown';
    }
    return 'unknown';
}

function getPillLabel(item) {
    if (item.type === 'patent') return getStatusLabel(item.status);
    if (item.type === 'paper') return item.format || 'Paper';
    return '';
}

function slugify(str) {
    return String(str)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function getStatusLabel(status) {
    switch (status) {
        case 'granted': return 'Granted';
        case 'filed': return 'Filed';
        case 'under-review': return 'Under Review';
        default: return status || '';
    }
}

function getTypeLabel(type) {
    if (type === 'patent') return 'Patent';
    if (type === 'paper') return 'Paper';
    return type || '';
}

function escapeHTML(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Render `text` into `container` as one <p> per blank-line-separated paragraph.
// Each paragraph's text is inserted via textContent, so any HTML in the source is safely escaped.
function renderParagraphs(container, text) {
    container.innerHTML = '';
    if (!text) return;
    var paragraphs = String(text).split(/\r?\n\s*\n/);
    paragraphs.forEach(function(p) {
        var trimmed = p.trim();
        if (!trimmed) return;
        var el = document.createElement('p');
        el.textContent = trimmed;
        container.appendChild(el);
    });
}

// Render the description section with a Plain-English / Technical toggle.
// The toggle only appears when BOTH `summary` and `abstract` are present.
function renderInnovationDescription(item) {
    var section = document.getElementById('modalInnovationDescriptionSection');
    var heading = document.getElementById('modalInnovationDescriptionHeading');
    var toggle = document.getElementById('modalInnovationDescriptionToggle');
    var desc = document.getElementById('modalInnovationDescription');
    if (!section || !heading || !toggle || !desc) return;

    var summary = item.summary || '';
    var abstract = item.abstract || '';
    currentInnovationDescription = { summary: summary, abstract: abstract };

    // Nothing to show — hide the whole section.
    if (!summary && !abstract) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';

    var hasBoth = !!summary && !!abstract;

    if (hasBoth) {
        // Show the toggle; default to Plain English.
        toggle.style.display = 'inline-flex';
        heading.style.display = 'none';
        var buttons = toggle.querySelectorAll('.innovation-toggle-btn');
        buttons.forEach(function(btn) {
            btn.disabled = false;
            var isActive = btn.dataset.view === 'summary';
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        renderParagraphs(desc, summary);
    } else {
        // Only one is present — no toggle, just a heading + text.
        toggle.style.display = 'none';
        heading.style.display = 'block';
        if (summary) {
            heading.textContent = 'Overview';
            renderParagraphs(desc, summary);
        } else {
            heading.textContent = 'Abstract';
            renderParagraphs(desc, abstract);
        }
    }
}

// Swap the currently-visible description view (invoked by the toggle buttons).
function switchDescriptionView(view) {
    var toggle = document.getElementById('modalInnovationDescriptionToggle');
    var desc = document.getElementById('modalInnovationDescription');
    if (!toggle || !desc) return;

    var buttons = toggle.querySelectorAll('.innovation-toggle-btn');
    buttons.forEach(function(btn) {
        var isActive = btn.dataset.view === view;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    var text = view === 'abstract'
        ? currentInnovationDescription.abstract
        : currentInnovationDescription.summary;

    // Subtle fade to make the swap feel intentional.
    desc.style.opacity = '0';
    setTimeout(function() {
        renderParagraphs(desc, text);
        desc.style.opacity = '1';
    }, 120);
}

function initInnovationModal() {
    var modal = document.getElementById('innovationModal');
    if (!modal) return;
    var closeBtn = modal.querySelector('.innovation-modal-close');

    // Event delegation on both lists
    ['patents-list', 'papers-list'].forEach(function(listId) {
        var list = document.getElementById(listId);
        if (!list) return;
        list.addEventListener('click', function(e) {
            var card = e.target.closest('.innovation-card');
            if (!card) return;
            openInnovationModal(parseInt(card.dataset.index, 10));
        });
        // Keyboard: Enter/Space activates a card
        list.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            var card = e.target.closest('.innovation-card');
            if (!card) return;
            e.preventDefault();
            openInnovationModal(parseInt(card.dataset.index, 10));
        });
    });

    // Description toggle: Plain English ⇄ Technical Abstract
    var toggle = document.getElementById('modalInnovationDescriptionToggle');
    if (toggle) {
        toggle.addEventListener('click', function(e) {
            var btn = e.target.closest('.innovation-toggle-btn');
            if (!btn || btn.classList.contains('active') || btn.disabled) return;
            switchDescriptionView(btn.dataset.view);
        });
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
}

function openInnovationModal(index) {
    var item = allInnovationData[index];
    if (!item) return;

    var modal = document.getElementById('innovationModal');

    // Type + primary pill (status for patents, format for papers) + archival (papers only)
    var typeEl = document.getElementById('modalInnovationType');
    typeEl.textContent = getTypeLabel(item.type);

    var pillLabel = getPillLabel(item);
    var accent = getAccentSlug(item);
    var statusEl = document.getElementById('modalInnovationStatus');
    if (pillLabel) {
        statusEl.textContent = pillLabel;
        statusEl.className = 'innovation-modal-status accent-' + accent;
        statusEl.style.display = '';
    } else {
        statusEl.textContent = '';
        statusEl.style.display = 'none';
    }

    var archivalEl = document.getElementById('modalInnovationArchival');
    if (archivalEl) {
        if (item.type === 'paper') {
            // Default archival=true if omitted.
            var isArchival = item.archival !== false;
            archivalEl.textContent = isArchival ? 'Archival' : 'Non-archival';
            archivalEl.className = 'innovation-modal-archival ' + (isArchival ? 'is-archival' : 'is-non-archival');
            archivalEl.style.display = '';
        } else {
            archivalEl.textContent = '';
            archivalEl.style.display = 'none';
        }
    }

    // Title + subtitle
    document.getElementById('modalInnovationTitle').textContent = item.title || '';
    document.getElementById('modalInnovationSubtitle').textContent = item.subtitle || '';

    // Meta line
    setMetaSpan('modalInnovationVenue', item.venue, 'far fa-building');
    setMetaSpan('modalInnovationDate', item.date, 'far fa-calendar');
    setMetaSpan('modalInnovationIdentifier', item.identifier, 'fas fa-hashtag');

    // Primary link
    var primaryContainer = document.getElementById('modalInnovationPrimaryLink');
    if (item.primaryLink && item.primaryLink.url) {
        var icon = item.primaryLink.icon || 'fas fa-external-link-alt';
        primaryContainer.innerHTML =
            '<a href="' + item.primaryLink.url + '" target="_blank" rel="noopener noreferrer">' +
                '<i class="' + icon + '"></i> ' + escapeHTML(item.primaryLink.label || 'Open') +
            '</a>';
    } else {
        primaryContainer.innerHTML = '';
    }

    // Description — Plain-English summary + optional Technical Abstract with a toggle
    renderInnovationDescription(item);

    // Authors
    setModalSection('modalInnovationAuthorsSection', 'modalInnovationAuthors', item.authors);

    // Tags
    var tagsSection = document.getElementById('modalInnovationTagsSection');
    var tagsEl = document.getElementById('modalInnovationTags');
    if (item.tags && item.tags.length > 0) {
        tagsEl.innerHTML = item.tags.map(function(t) {
            return '<span class="innovation-tag">' + escapeHTML(t) + '</span>';
        }).join('');
        tagsSection.style.display = 'block';
    } else {
        tagsEl.innerHTML = '';
        tagsSection.style.display = 'none';
    }

    // Extra links
    var linksSection = document.getElementById('modalInnovationLinksSection');
    var linksEl = document.getElementById('modalInnovationLinks');
    if (item.links && item.links.length > 0) {
        linksEl.innerHTML = item.links.map(function(link) {
            var icon = link.icon || 'fas fa-external-link-alt';
            return '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
                '<i class="' + icon + '"></i> ' + escapeHTML(link.label || 'Link') +
            '</a>';
        }).join('');
        linksSection.style.display = 'block';
    } else {
        linksEl.innerHTML = '';
        linksSection.style.display = 'none';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setMetaSpan(id, value, iconClass) {
    var el = document.getElementById(id);
    if (!el) return;
    if (value) {
        el.innerHTML = '<i class="' + iconClass + '"></i> ' + escapeHTML(value);
    } else {
        el.innerHTML = '';
    }
}

function setModalSection(sectionId, contentId, value) {
    var section = document.getElementById(sectionId);
    var content = document.getElementById(contentId);
    if (value) {
        content.textContent = value;
        section.style.display = 'block';
    } else {
        content.textContent = '';
        section.style.display = 'none';
    }
}

