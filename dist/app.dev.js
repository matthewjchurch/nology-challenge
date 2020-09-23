"use strict";

var body = document.querySelector("body");
var projects = document.querySelectorAll("figure");
var modalButton = document.querySelectorAll(".modal-container button, .modal-container");

var projectsFade = function projectsFade() {
  var projectsSection = document.querySelector(".projects-intro");
  var projectsHeader = document.querySelector(".projects-intro h2");
  var position = projectsSection.getBoundingClientRect()["y"];
  var percent = 100 - position / window.innerHeight * 100;

  if (window.innerWidth <= 992) {
    if (percent > 0 && percent <= 100) {
      projectsHeader.setAttribute("style", "position: sticky; top: ".concat(window.innerHeight / 2 - 20, "px; opacity: ").concat(Math.round(percent), "%;"));
    }
  } else {
    if (percent > 0 && percent <= 100) {
      projectsHeader.setAttribute("style", "position: sticky; top: 10px; opacity: ".concat(Math.round(percent), "%;"));
    }
  }
};

var openModal = function openModal(e) {
  console.log(e.target);
  var classes = ["project-one", "project-two", "project-three"];
  var givenClass;
  var modal;
  classes.forEach(function (x) {
    if (e.target.classList.contains(x)) {
      givenClass = x;
    }
  });

  if (window.innerWidth < 992) {
    modal = document.querySelector(".".concat(givenClass, " div.mobile.modal-container"));
  } else if (window.innerWidth >= 992) {
    modal = document.querySelector(".".concat(givenClass, " div.desktop.modal-container"));
  }

  modal.style.visibility = "visible";
};

var closeModal = function closeModal() {
  var modals;

  if (window.innerWidth < 992) {
    modals = document.querySelectorAll("div.mobile.modal-container");
  } else if (window.innerWidth >= 992) {
    modals = document.querySelectorAll("div.desktop.modal-container");
  }

  modals.forEach(function (modal) {
    modal.style.visibility = "hidden";
  });
};

body.addEventListener("scroll", projectsFade);
projects.forEach(function (link) {
  link.addEventListener("click", openModal);
});
modalButton.forEach(function (button) {
  button.addEventListener("click", closeModal);
});