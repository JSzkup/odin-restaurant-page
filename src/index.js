import "./styles.css";
import { addHomeHTML } from "./home.js";
import { addMenuHTML } from "./menu.js";
import { addAboutHTML } from "./about.js";

function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

function addNavEvents() {
    const homeButton = document.querySelector("#home-btn");
    const menuButton = document.querySelector("#menu-btn");
    const aboutButton = document.querySelector("#about-btn");

    homeButton.addEventListener("click", () => {
        clearContent();
        addHomeHTML();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        addMenuHTML();
    });

    aboutButton.addEventListener("click", () => {
        clearContent();
        addAboutHTML();
    });
}

addHomeHTML();
addNavEvents();
console.log("Hello, world!");