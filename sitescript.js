//Nav Bar functionality
document.addEventListener('DOMContentLoaded', function () {
    function scrollTo(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Section with ID ' + sectionId + ' not found!')
        }
    }

    const navButtons = document.querySelectorAll('.btn');
    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            scrollTo(targetId);
        })
    })

});


//image load in animation test
const images = document.querySelectorAll('.uniformImg');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};


const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
};


const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

images.forEach(image => {
    observer.observe(image);
});