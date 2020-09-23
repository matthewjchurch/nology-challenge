const body = document.querySelector("body");
const projects = document.querySelectorAll("div.card-container");
const projectOverlays = document.querySelectorAll(".overlay");
const modalButton = document.querySelectorAll(".modal-container button, .modal-container");

const projectsFade = () => {
    const projectsSection = document.querySelector(".projects-intro");
    const projectsHeader = document.querySelector(".projects-intro h2");
    let position = projectsSection.getBoundingClientRect()["y"];
    let percent = 100 - (position / window.innerHeight * 100);

    if (window.innerWidth <= 992){
        if (percent > 0 && percent <= 100) {
            projectsHeader.setAttribute("style", `position: sticky; top: ${window.innerHeight / 2 - 20}px; opacity: ${Math.round(percent)}%;`);
        }
    }

    else {
        if (percent > 0 && percent <= 100) {
            projectsHeader.setAttribute("style", `position: sticky; top: 10px; opacity: ${Math.round(percent)}%;`);
        }
    }
}

const openModal = (e) => {
    const classes = ["project-one", "project-two", "project-three"];
    let givenClass;
    let modal;

    classes.forEach(x => {
        if (e.target.classList.contains(x)){
            givenClass = x;
        }
    });
    
    if (window.innerWidth < 768) {
        modal = document.querySelector(`.${givenClass} div.mobile.modal-container`);
    }

    else if (window.innerWidth >= 768) {
        modal = document.querySelector(`.${givenClass} div.desktop.modal-container`);
    }

    modal.style.visibility = "visible"; 
}

const closeModal = () => {
    let modals;
    if (window.innerWidth < 768) {
        modals = document.querySelectorAll("div.mobile.modal-container");
    }

    else if (window.innerWidth >= 768) {
        modals = document.querySelectorAll("div.desktop.modal-container");
    }
    modals.forEach(modal => {
        modal.style.visibility = "hidden";
    });
}

const resize = () => {
    let modals = document.querySelectorAll("div.mobile.modal-container");
    if (window.innerWidth >= 768) {
        modals.forEach(modal => {
            modal.style.visibility = "visible";
        });
    }

    if (window.innerWidth < 768) {
        modals.forEach(modal => {
            modal.style.visibility = "hidden";
        });
    }
}


window.addEventListener("scroll",  projectsFade);
window.addEventListener("resize", resize);
projects.forEach(link => {
    link.addEventListener("click", openModal)
});
projectOverlays.forEach(link => {
    link.addEventListener("click", openModal)
});
modalButton.forEach(button => {
    button.addEventListener("click", closeModal)
});