const fullPage = document.querySelector('body');
const classes = [   "orange-blue", 
                    "blue-orange", 
                    "blue-orange-bottom", 
                    "blue-white", 
                    "white-blue", 
                    "orange-white", 
                    "blue-white-bottom", 
                    "two-borders"];

const landing = document.querySelector('body > section.landing-page-wrapper');
const about = document.querySelector('body > section.about-wrapper');
const projects = document.querySelector('body > section.projects1-wrapper');
const contact = document.querySelector('body > section.contact-wrapper');

const addRemoveClasses = function() {

    const landingDivs = document.querySelectorAll('.landing-page-wrapper > div');
    const aboutDivs = document.querySelectorAll('.about-wrapper > div');
    const projectsDivs = document.querySelectorAll('.projects1-wrapper > div');
    const contactDivs = document.querySelectorAll('.contact-wrapper > div');

    if (window.innerWidth < 900) {

        if (landing.getBoundingClientRect()["y"] == 0){
            landing.classList.add('blue-orange');
            [about, projects, contact].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }

        if (about.getBoundingClientRect()["y"] == 0){
            about.classList.add('blue-orange');

            [landing, projects, contact].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }

        if (projects.getBoundingClientRect()["y"] == 0){
            projects.classList.add('orange-white');

            [landing, about, contact].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }

        if (contact.getBoundingClientRect()["y"] == 0){
            contact.classList.add('white-blue');

            [landing, about, projects].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }
    }

    if (window.innerWidth >= 900) {

        if (landing.getBoundingClientRect()["y"] == 0) {
            document.querySelector('.landing:nth-child(1)').classList.add('orange-blue');
            document.querySelector('.landing:nth-child(3)').classList.add('orange-blue');
            document.querySelector('.landing:nth-child(2)').classList.add('blue-orange-bottom');
            document.querySelector('.landing:nth-child(4)').classList.add('blue-orange-bottom');

            [...aboutDivs, ...projectsDivs, ...contactDivs].forEach(borderClass => {
                    for (let i = 0; i < classes.length; i++){
                        borderClass.classList.remove(classes[i]);
                    }
                });
        }

        if (about.getBoundingClientRect()["y"] == 0){
            document.querySelector('.about:nth-child(1)').classList.add('orange-blue');
            document.querySelector('.about:nth-child(4)').classList.add('blue-white');
            document.querySelector('.about:nth-child(2)').classList.add('blue-orange-bottom');

            [...landingDivs, ...projectsDivs, ...contactDivs].forEach(borderClass => {
                    for (let i = 0; i < classes.length; i++){
                        borderClass.classList.remove(classes[i]);
                    }
                });
        }

        if (projects.getBoundingClientRect()["y"] == 0){
            document.querySelector('.projects:nth-child(1)').classList.add('orange-blue');
            document.querySelector('.projects:nth-child(4)').classList.add('orange-white');
            document.querySelector('.projects:nth-child(2)').classList.add('two-borders');

            [...landingDivs, ...aboutDivs, ...contactDivs].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }

        if (contact.getBoundingClientRect()["y"] == 0){
            document.querySelector('.contact:nth-child(1)').classList.add('blue-white-bottom');
            document.querySelector('.contact:nth-child(3)').classList.add('blue-white-bottom');
            document.querySelector('.contact:nth-child(2)').classList.add('white-blue');
            document.querySelector('.contact:nth-child(4)').classList.add('white-blue');

            [...landingDivs, ...aboutDivs, ...projectsDivs].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }
    }
};

const resizeFunction = function() {
    document.querySelectorAll('div, section').forEach(borderClass => {
        borderClass.removeAttribute('style');
        for (let i = 0; i < classes.length; i++) {
            borderClass.classList.remove(classes[i]);
        }
    });
    addRemoveClasses();
};

const transitionColor = function() {
    let aboutTop = about.getBoundingClientRect()["y"];
    let aboutVal = aboutTop / window.innerHeight * 100 - 1.5;

    let projectsTop = projects.getBoundingClientRect()["y"];
    let projectsVal = projectsTop / window.innerHeight * 100 - 1.5;

    if (window.innerWidth < 900){
        if (aboutVal < 0) {
            about.setAttribute('style', `background:linear-gradient(180deg, #293241, ${100 - Math.abs(aboutVal)}%, #ee6c4d)`);
        }

        if (projectsVal < 0) {
            projects.setAttribute('style', `background:linear-gradient(180deg, #ee6c4d, ${100 - Math.abs(projectsVal)}%, #e0fbfc)`)
        }
    }
}


addRemoveClasses();
fullPage.addEventListener('scroll', addRemoveClasses);
fullPage.addEventListener('scroll', transitionColor);
window.addEventListener('resize', resizeFunction);