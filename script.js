// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            const progress = bar.querySelector('.progress');
            progress.style.width = `${percentage}%`;
        });
    }

    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    });

    observer.observe(skillsSection);
});
