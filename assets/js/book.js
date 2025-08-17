// Book page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initBookPageFunctionality();
});

function initBookPageFunctionality() {
    // Amazon buy links (replace with actual Amazon URLs)
    initAmazonLinks();
    
    // Book preview functionality
    initBookPreview();
    
    // Book statistics animation
    initBookStatsAnimation();
    
    // Chapter cards hover effects
    initChapterCardEffects();
    
    // Testimonials carousel (if needed)
    initTestimonialsCarousel();
    
    // Scroll indicator functionality
    initScrollIndicator();
    
    // Book testimonials marquee
    initBookTestimonialsMarquee();
}

function initAmazonLinks() {
    const amazonButtons = document.querySelectorAll('#buy-amazon, #buy-amazon-footer');
    
    amazonButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Replace this URL with the actual Amazon link for the book
            const amazonUrl = 'https://www.amazon.com/Beyond-Code-Strategies-Technical-Scientists-ebook/dp/B0BW8MJW6G';
            
            // Track click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Book',
                    'event_label': 'Amazon Purchase Click',
                    'value': 1
                });
            }
            
            // Open Amazon link
            window.open(amazonUrl, '_blank');
        });
    });
}

function initBookPreview() {
    const previewButton = document.getElementById('preview-book');
    
    if (previewButton) {
        previewButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create modal for book preview
            showBookPreview();
            
            // Track preview interaction
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Book',
                    'event_label': 'Preview Click',
                    'value': 1
                });
            }
        });
    }
}

function showBookPreview() {
    const modal = document.createElement('div');
    modal.className = 'book-preview-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Skills you will learn in Beyond Code</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="skills-grid">
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-user-cog"></i>
                            </div>
                            <h4>How to Develop a T-Shaped Skillset</h4>
                            <p>(Chapter 1)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <h4>How to Cultivate a Data-Driven Outlook</h4>
                            <p>(Chapter 2)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-lightbulb"></i>
                            </div>
                            <h4>How to Foster a Creative Mindset for Data Science</h4>
                            <p>(Chapter 2)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-bullseye"></i>
                            </div>
                            <h4>How to Measure Outcomes that Drive Impact</h4>
                            <p>(Chapter 3)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <h4>How to Embrace a Growth Mindset</h4>
                            <p>(Chapter 4)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h4>How to Continue Learning Amidst Daily Work</h4>
                            <p>(Chapter 4)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <h4>How to Influence Others through Data Storytelling</h4>
                            <p>(Chapter 5)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <h4>How to Manage Conflict at Work</h4>
                            <p>(Chapter 5)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-atom"></i>
                            </div>
                            <h4>How to Thrive in a Dynamic Environment</h4>
                            <p>(Chapter 6)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <h4>How to Boost Productivity & Combat Procrastination</h4>
                            <p>(Chapter 8)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h4>How to Build a Compelling Personal Brand</h4>
                            <p>(Chapter 9)</p>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-icon">
                                <i class="fas fa-users-cog"></i>
                            </div>
                            <h4>How to Practice Adaptive Leadership in Data Science</h4>
                            <p>(Chapter 10)</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="window.open('https://www.amazon.com/Beyond-Code-Strategies-Technical-Scientists-ebook/dp/B0BW8MJW6G?asin=9356483345&revisionId=&format=4&depth=2', '_blank')">
                        <i class="fab fa-amazon"></i> Read Sample on Amazon
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .book-preview-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
        }
        
        .modal-overlay {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
            border-radius: 24px;
            max-width: 1000px;
            width: 100%;
            height: 80vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2.5rem 1rem;
            flex-shrink: 0;
        }
        
        .modal-header h3 {
            color: #133155;
            margin: 0;
            font-size: 1.8rem;
            font-weight: 700;
            text-align: center;
            flex: 1;
        }
        
        .modal-close {
            background: rgba(107, 114, 128, 0.1);
            border: none;
            font-size: 1.5rem;
            color: #6b7280;
            cursor: pointer;
            line-height: 1;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            margin-left: 1rem;
        }
        
        .modal-close:hover {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            transform: scale(1.1);
        }
        
        .modal-body {
            padding: 0 2.5rem 1rem;
            flex: 1;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(107, 114, 128, 0.3) transparent;
        }
        
        .modal-body::-webkit-scrollbar {
            width: 6px;
        }
        
        .modal-body::-webkit-scrollbar-track {
            background: transparent;
        }
        
        .modal-body::-webkit-scrollbar-thumb {
            background: rgba(107, 114, 128, 0.3);
            border-radius: 3px;
        }
        
        .modal-body::-webkit-scrollbar-thumb:hover {
            background: rgba(107, 114, 128, 0.5);
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .skill-item {
            background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(107, 114, 128, 0.1);
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }
        
        .skill-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #2172A9, #133155);
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .skill-item::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: linear-gradient(135deg, #133155, #2172A9);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 0 0 16px 16px;
        }
        
        .skill-item:hover::before {
            opacity: 1;
        }
        
        .skill-item:hover::after {
            opacity: 1;
        }
        
        .skill-item:hover {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .skill-icon {
            font-size: 2.5rem;
            color: #2172A9;
            margin-bottom: 1rem;
        }
        
        .skill-item h4 {
            color: #133155;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }
        
        .skill-item p {
            color: #133155;
            background: #FFC444;
            font-size: 0.85rem;
            margin: 0;
            font-weight: 600;
            padding: 0.3rem 0.8rem;
            border-radius: 12px;
            display: inline-block;
            margin-top: 0.5rem;
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
        }
        
        .modal-footer {
            padding: 1.5rem 2.5rem 2rem;
            border-top: 1px solid rgba(107, 114, 128, 0.1);
            text-align: center;
            flex-shrink: 0;
        }
        
        .modal-footer .btn-primary {
            background: linear-gradient(135deg, #2172A9, #133155);
            color: white;
            border: none;
            padding: 0.875rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: 0 4px 15px rgba(33, 114, 169, 0.3);
        }
        
        .modal-footer .btn-primary:hover {
            background: linear-gradient(135deg, #133155, #1D1E20);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(33, 114, 169, 0.4);
        }
        
        @media (max-width: 768px) {
            .modal-content {
                max-width: 95%;
                height: 85vh;
                margin: 1rem;
            }
            
            .modal-header {
                padding: 1.5rem;
            }
            
            .modal-header h3 {
                font-size: 1.5rem;
            }
            
            .modal-body {
                padding: 0 1.5rem 1rem;
            }
            
            .skills-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .skill-item {
                padding: 1.25rem;
            }
            
            .skill-icon {
                font-size: 2rem;
            }
            
            .modal-footer {
                padding: 1.5rem;
            }
        }
        
        @media (max-width: 480px) {
            .modal-content {
                height: 90vh;
                border-radius: 16px;
            }
            
            .modal-header h3 {
                font-size: 1.3rem;
            }
            
            .skill-item h4 {
                font-size: 0.9rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeButton.addEventListener('click', () => closeModal(modal, style));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(modal, style);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeModal(modal, style);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function closeModal(modal, style) {
    document.body.removeChild(modal);
    document.head.removeChild(style);
}

function initBookStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if ('IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statNumbers.forEach(stat => statsObserver.observe(stat));
    }
}

function animateNumber(element) {
    const text = element.textContent;
    const hasHash = text.includes('#');
    const hasPlus = text.includes('+');
    const number = parseFloat(text.replace(/[^\d.]/g, ''));
    
    if (isNaN(number)) return;
    
    const duration = 2000;
    const start = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentNumber = Math.floor(number * easeOut);
        
        let displayText = currentNumber.toString();
        if (hasHash) displayText = '#' + displayText;
        if (hasPlus) displayText += '+';
        if (text.includes('.')) displayText = (number * easeOut).toFixed(1);
        
        element.textContent = displayText;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = text; // Ensure final value is correct
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function initChapterCardEffects() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach((card, index) => {
        // Add stagger animation
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', () => {
            if (typeof playHoverSound === 'function') {
                playHoverSound();
            }
        });
    });
}

function initTestimonialsCarousel() {
    const testimonialCards = document.querySelectorAll('.book-testimonials .testimonial-card');
    
    if (testimonialCards.length <= 3) return; // No need for carousel if 3 or fewer items
    
    let currentIndex = 0;
    const cardsToShow = window.innerWidth > 768 ? 3 : 1;
    
    // Create carousel controls
    const testimonialsGrid = document.querySelector('.book-testimonials .testimonials-grid');
    if (!testimonialsGrid) return;
    
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'testimonials-carousel';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-btn prev-btn';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-btn next-btn';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    // Wrap testimonials grid
    testimonialsGrid.parentNode.insertBefore(carouselContainer, testimonialsGrid);
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(testimonialsGrid);
    carouselContainer.appendChild(nextButton);
    
    // Add carousel styles
    const carouselStyle = document.createElement('style');
    carouselStyle.textContent = `
        .testimonials-carousel {
            position: relative;
            overflow: hidden;
        }
        
        .testimonials-carousel .testimonials-grid {
            display: flex;
            transition: transform 0.3s ease;
            gap: 2rem;
        }
        
        .testimonials-carousel .testimonial-card {
            flex: 0 0 calc((100% - 4rem) / 3);
            min-width: 300px;
        }
        
        .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #667eea;
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            z-index: 2;
        }
        
        .carousel-btn:hover {
            background: #764ba2;
            transform: translateY(-50%) scale(1.1);
        }
        
        .prev-btn {
            left: -25px;
        }
        
        .next-btn {
            right: -25px;
        }
        
        @media (max-width: 768px) {
            .testimonials-carousel .testimonial-card {
                flex: 0 0 100%;
                min-width: auto;
            }
            
            .carousel-btn {
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }
            
            .prev-btn {
                left: -20px;
            }
            
            .next-btn {
                right: -20px;
            }
        }
    `;
    
    document.head.appendChild(carouselStyle);
    
    // Carousel functionality
    function updateCarousel() {
        const translateX = -(currentIndex * (100 / cardsToShow));
        testimonialsGrid.style.transform = `translateX(${translateX}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });
    
    nextButton.addEventListener('click', () => {
        const maxIndex = Math.max(0, testimonialCards.length - cardsToShow);
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateCarousel();
    });
    
    // Auto-play (optional)
    setInterval(() => {
        const maxIndex = Math.max(0, testimonialCards.length - cardsToShow);
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    }, 5000);
}

// Scroll indicator functionality
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('.bestseller-showcase');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Book testimonials marquee functionality
function initBookTestimonialsMarquee() {
    const marqueeContainer = document.getElementById('book-testimonials-marquee');
    
    if (marqueeContainer) {
        // Clone the testimonials for seamless infinite loop
        const testimonialCards = Array.from(marqueeContainer.children);
        const testimonialCount = testimonialCards.length;
        
        // Clone each testimonial card to create seamless loop
        testimonialCards.forEach(card => {
            const clone = card.cloneNode(true);
            marqueeContainer.appendChild(clone);
        });
        
        // Add click event listeners to all testimonial cards (original and cloned)
        const allTestimonialCards = marqueeContainer.querySelectorAll('.testimonial-card');
        
        allTestimonialCards.forEach((card, index) => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const fullText = this.getAttribute('data-full-text');
                const authorNameElement = this.querySelector('.author-info h4');
                const authorTitleElement = this.querySelector('.author-info span');
                
                if (authorNameElement && authorTitleElement && fullText) {
                    const authorName = authorNameElement.textContent;
                    const authorTitle = authorTitleElement.textContent;
                    showTestimonialModal(fullText, authorName, authorTitle);
                } else {
                    console.error('Missing elements:', { authorNameElement, authorTitleElement, fullText });
                }
            });
        });
    } else {
        console.error('Marquee container not found!');
    }
}

// Show testimonial modal
function showTestimonialModal(fullText, authorName, authorTitle) {
    // Remove any existing testimonial modals first
    const existingModal = document.querySelector('.book-testimonial-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'book-testimonial-modal'; // Changed class name to avoid conflicts
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Reader Testimonial</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <blockquote>"${fullText}"</blockquote>
                    <div class="testimonial-author">
                        <strong>${authorName}</strong>
                        <span>${authorTitle}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .book-testimonial-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10001;
        }
        
        .book-testimonial-modal .modal-overlay {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .book-testimonial-modal .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 600px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        
        .book-testimonial-modal .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .book-testimonial-modal .modal-header h3 {
            color: #133155;
            margin: 0;
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .book-testimonial-modal .modal-close {
            background: rgba(107, 114, 128, 0.1);
            border: none;
            font-size: 1.5rem;
            color: #6b7280;
            cursor: pointer;
            line-height: 1;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .book-testimonial-modal .modal-close:hover {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            transform: scale(1.1);
        }
        
        .book-testimonial-modal .modal-body {
            padding: 2rem;
        }
        
        .book-testimonial-modal .testimonial-rating {
            display: flex;
            gap: 0.25rem;
            margin-bottom: 1.5rem;
            justify-content: center;
        }
        
        .book-testimonial-modal .testimonial-rating .fas {
            color: #FFC444;
            font-size: 1.2rem;
        }
        
        .book-testimonial-modal blockquote {
            background: #f8fafc;
            padding: 2rem;
            border-left: 4px solid #2172A9;
            font-style: italic;
            color: #374151;
            margin: 0 0 2rem 0;
            border-radius: 0 12px 12px 0;
            line-height: 1.7;
            font-size: 1.1rem;
        }
        
        .book-testimonial-modal .testimonial-author {
            text-align: center;
        }
        
        .book-testimonial-modal .testimonial-author strong {
            display: block;
            color: #133155;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .book-testimonial-modal .testimonial-author span {
            color: #6b7280;
            font-size: 1rem;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .book-testimonial-modal .modal-content {
                max-width: 95%;
                margin: 1rem;
            }
            
            .book-testimonial-modal .modal-header {
                padding: 1.5rem 1.5rem 1rem;
            }
            
            .book-testimonial-modal .modal-body {
                padding: 1.5rem;
            }
            
            .book-testimonial-modal blockquote {
                padding: 1.5rem;
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeButton.addEventListener('click', () => closeBookTestimonialModal(modal, style));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeBookTestimonialModal(modal, style);
        }
    });
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeBookTestimonialModal(modal, style);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    console.log('Book testimonial modal created successfully');
}

function closeBookTestimonialModal(modal, style) {
    modal.remove();
    style.remove();
    console.log('Book testimonial modal closed');
}
