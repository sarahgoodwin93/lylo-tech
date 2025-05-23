document.addEventListener('DOMContentLoaded', () => {
    console.log('ScrollReveal script loaded'); // ✅ See this in console?

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Observed:', entry.target); // ✅ See this firing?
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
});
