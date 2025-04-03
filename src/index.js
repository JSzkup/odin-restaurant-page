import "./styles.css";
import { addHomeHTML } from "./home.js";
import { addMenuHTML } from "./menu.js";
import { addAboutHTML } from "./about.js";

addHomeHTML();
// addMenuHTML();
// addAboutHTML();

function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

function addNavEvents() {
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

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

console.log("Hello, world!");