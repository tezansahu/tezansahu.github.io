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
                    <h3>Book Preview</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="preview-content">
                        <h4>Table of Contents</h4>
                        <ul class="preview-toc">
                            <li><strong>Chapter 1:</strong> Foundation Building - Understanding the Data Science Landscape</li>
                            <li><strong>Chapter 2:</strong> Professional Skills - Communication and Business Acumen</li>
                            <li><strong>Chapter 3:</strong> Career Strategy - Job Hunting and Interview Success</li>
                            <li><strong>Chapter 4:</strong> Growth Mindset - Continuous Learning in a Fast-Evolving Field</li>
                            <li><strong>Chapter 5:</strong> Leadership - From Individual Contributor to Team Lead</li>
                            <li><strong>Chapter 6:</strong> Industry Insights - Real Stories and Case Studies</li>
                        </ul>
                        
                        <div class="preview-excerpt">
                            <h4>Sample Excerpt</h4>
                            <blockquote>
                                "In the rapidly evolving world of data science, technical skills alone aren't enough. 
                                The most successful data scientists are those who can bridge the gap between complex 
                                algorithms and business value, communicate insights effectively, and adapt to the 
                                changing landscape of technology and industry needs..."
                            </blockquote>
                        </div>
                        
                        <div class="preview-features">
                            <h4>What You'll Learn</h4>
                            <ul>
                                <li>How to communicate complex technical concepts to non-technical stakeholders</li>
                                <li>Strategies for building a compelling professional brand in data science</li>
                                <li>Interview techniques that set you apart from other candidates</li>
                                <li>Leadership skills for advancing in your data science career</li>
                                <li>Real-world case studies from successful data science professionals</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="document.querySelector('#buy-amazon').click()">
                        <i class="fab fa-amazon"></i> Buy Now on Amazon
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
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            width: 100%;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h3 {
            color: #333;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            color: #999;
            cursor: pointer;
            line-height: 1;
        }
        
        .modal-close:hover {
            color: #333;
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .preview-content h4 {
            color: #667eea;
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        
        .preview-content h4:first-child {
            margin-top: 0;
        }
        
        .preview-toc {
            list-style: none;
            padding: 0;
        }
        
        .preview-toc li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .preview-excerpt blockquote {
            background: #f8fafc;
            padding: 1.5rem;
            border-left: 4px solid #667eea;
            font-style: italic;
            color: #555;
            margin: 1rem 0;
        }
        
        .preview-features ul {
            list-style: none;
            padding: 0;
        }
        
        .preview-features li {
            padding: 0.5rem 0;
            position: relative;
            padding-left: 1.5rem;
        }
        
        .preview-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #4caf50;
            font-weight: bold;
        }
        
        .modal-footer {
            padding: 2rem;
            border-top: 1px solid #eee;
            text-align: center;
        }
        
        @media (max-width: 768px) {
            .modal-overlay {
                padding: 1rem;
            }
            
            .modal-header,
            .modal-body,
            .modal-footer {
                padding: 1.5rem;
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
