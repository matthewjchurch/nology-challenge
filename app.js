const fullPage = document.querySelector('#full-page-wrapper');
const classes = [   "orange-blue", 
                    "blue-orange", 
                    "blue-orange-bottom", 
                    "blue-white", 
                    "white-blue", 
                    "orange-white", 
                    "blue-white-bottom", 
                    "two-borders"];

const landing = document.querySelector('#full-page-wrapper > section.landing-page-wrapper');
const about = document.querySelector('#full-page-wrapper > section.about-wrapper');
const projects = document.querySelector('#full-page-wrapper > section.projects1-wrapper');
const contact = document.querySelector('#full-page-wrapper > section.contact-wrapper');

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
            document.querySelector('.landing.top.left').classList.add('orange-blue');
            document.querySelector('.landing.middle.left').classList.add('orange-blue');
            document.querySelector('.landing.top.right').classList.add('blue-orange-bottom');
            document.querySelector('.landing.middle.right').classList.add('blue-orange-bottom');

            [...aboutDivs, ...projectsDivs, ...contactDivs].forEach(borderClass => {
                    for (let i = 0; i < classes.length; i++){
                        borderClass.classList.remove(classes[i]);
                    }
                });
        }

        if (about.getBoundingClientRect()["y"] == 0){
            document.querySelector('.about.top.left').classList.add('orange-blue');
            document.querySelector('.about.middle.right').classList.add('blue-white');
            document.querySelector('.about.top.right').classList.add('blue-orange-bottom');

            [...landingDivs, ...projectsDivs, ...contactDivs].forEach(borderClass => {
                    for (let i = 0; i < classes.length; i++){
                        borderClass.classList.remove(classes[i]);
                    }
                });
        }

        if (projects.getBoundingClientRect()["y"] == 0){
            document.querySelector('.projects.top.left').classList.add('orange-blue');
            document.querySelector('.projects.middle.right').classList.add('orange-white');
            document.querySelector('.projects.top.right').classList.add('two-borders');

            [...landingDivs, ...aboutDivs, ...contactDivs].forEach(borderClass => {
                for (let i = 0; i < classes.length; i++){
                    borderClass.classList.remove(classes[i]);
                }
            });
        }

        if (contact.getBoundingClientRect()["y"] == 0){
            document.querySelector('.contact.top.left').classList.add('blue-white-bottom');
            document.querySelector('.contact.middle.left').classList.add('blue-white-bottom');
            document.querySelector('.contact.top.right').classList.add('white-blue');
            document.querySelector('.contact.middle.right').classList.add('white-blue');

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
        console.log(aboutVal);
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