window.addEventListener('scroll', () => {
    const slideIns = document.querySelectorAll('.slide-in');
    const header = document.querySelector('header');
    const triggerBottom = window.innerHeight / 5 * 4;

    // Slide-in effect for articles
    slideIns.forEach(slideIn => {
        const slideInTop = slideIn.getBoundingClientRect().top;
        if (slideInTop < triggerBottom) {
            slideIn.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            slideIn.style.transform = 'translateX(0)';
            slideIn.style.opacity = '1';
        }
    });

    // Magnification effect for header
    if (window.scrollY > 50) {
        header.style.transform = 'scale(1.05)';
    } else {
        header.style.transform = 'scale(1)';
    }
});

// Ensure boxes are visible on page load
window.addEventListener('load', () => {
    const slideIns = document.querySelectorAll('.slide-in');
    const triggerBottom = window.innerHeight / 5 * 4;

    slideIns.forEach(slideIn => {
        const slideInTop = slideIn.getBoundingClientRect().top;
        if (slideInTop < triggerBottom) {
            slideIn.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            slideIn.style.transform = 'translateX(0)';
            slideIn.style.opacity = '1';
        }
    });
});

