import burgerBros from './BurgerBros.png';

export function addAboutHTML() {
    const content = document.querySelector("#content");

    const aboutDIV = document.createElement("div");
    aboutDIV.id = "about";

    const aboutTextDIV = document.createElement("div");
    aboutTextDIV.id = "about-text";

    const aboutImage = document.createElement("img");
    aboutImage.src = burgerBros;
    aboutImage.alt = "Burger Brothers";
    aboutImage.id = "about-img";

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "Who we are";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = `Nestled in the heart of New York City, The Gilded Fork was born from a passion for reinventing 
        comfort food through a modern, elevated lens. Founded by a team of chefs, sommeliers, and hospitality dreamers, we set out 
        to create a space that feels both familiar and indulgent—a place where a classic burger can be reimagined with truffle aioli, 
        and a pan-seared halibut can be served with a surprising twist of chili-lime beurre blanc. Every plate we serve celebrates 
        the season, the craft, and the story behind every ingredient.`;

    aboutDIV.appendChild(aboutImage);

    aboutTextDIV.appendChild(aboutHeader);
    aboutTextDIV.appendChild(aboutParagraph);

    aboutDIV.appendChild(aboutTextDIV);

    const missionHeader = document.createElement("h2");
    missionHeader.textContent = "Our Mission";

    const missionParagraph = document.createElement("p");
    missionParagraph.textContent = `At The Gilded Fork, our mission is simple: to bring joy through thoughtful food and exceptional
        experiences. We believe in sourcing locally, cooking with intention, and treating every guest like they're stepping into our 
        home. Whether you're here for a decadent date night, a celebratory toast, or just a damn good meal, we're committed to making 
        every visit memorable. Our team strives to honor the roots of American cuisine while pushing boundaries—one seasonal dish, one
        handcrafted cocktail, and one warm welcome at a time.`;


    content.appendChild(aboutDIV);

    content.appendChild(missionHeader);
    content.appendChild(missionParagraph);
}