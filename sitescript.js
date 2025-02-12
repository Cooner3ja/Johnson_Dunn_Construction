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
/*const images = document.querySelectorAll('.uniformImg');

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
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
};


const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

images.forEach(image => {
    observer.observe(image);
});*/

//Load in animations

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('enter');
            entry.target.classList.remove('exit');
        } else {
            entry.target.classList.remove('enter');
            entry.target.classList.add('exit')
        }
    });
});

const backgroundElement = document.querySelectorAll('.backgroundAnimation');
const headerElements = document.querySelectorAll('.headerAnimation');
const textElements = document.querySelectorAll('.textAnimation');
const imageElements = document.querySelectorAll('.imageAnimation');

backgroundElement.forEach((element) => observer.observe(element));
headerElements.forEach((element) => observer.observe(element));
textElements.forEach((element) => observer.observe(element));
imageElements.forEach((element) => observer.observe(element));