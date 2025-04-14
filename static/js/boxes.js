document.querySelectorAll('.box-transition').forEach(box => {
    box.addEventListener('click', function(e) {
        e.preventDefault();

        const targetUrl = box.closest('a').getAttribute('href');
        const rect = box.getBoundingClientRect();

        // Store a flag so we can reset on the homepage
        sessionStorage.setItem('boxTransitionInProgress', 'true');

        // Freeze position
        box.style.position = 'fixed';
        box.style.top = `${rect.top}px`;
        box.style.left = `${rect.left}px`;
        box.style.width = `${rect.width}px`;
        box.style.height = `${rect.height}px`;
        box.style.margin = 0;

        // Trigger layout
        box.offsetHeight;

        // Grow animation
        box.classList.add('box-grow');

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600);
    });
});

// Reset boxes if transition was in progress
document.addEventListener('DOMContentLoaded', () => {
    const wasTransitioning = sessionStorage.getItem('boxTransitionInProgress');

    if (wasTransitioning) {
        // Remove the transition class from all boxes
        document.querySelectorAll('.box-transition').forEach(box => {
            box.classList.remove('box-grow');
            box.removeAttribute('style'); // remove inline styles
        });

        sessionStorage.removeItem('boxTransitionInProgress');
    }
});
