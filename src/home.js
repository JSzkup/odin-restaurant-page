
export function addHomeHTML() {
    const content = document.querySelector("#content");

    const descriptionDIV = document.createElement("div");

    const subHeader = document.createElement("h2");
    subHeader.textContent = "Our Mission";

    const descriptionP = document.createElement("p");
    descriptionP.textContent = `Modern American cuisine with a focus on seasonal ingredients and elevated comfort food. Gourmet
                                burgers, pan-seared fish with creative sauces, artisanal pasta dishes, and decadent desserts. We also
                                have a curated wine and craft cocktail menu.`;

    descriptionDIV.appendChild(subHeader);
    descriptionDIV.appendChild(descriptionP);

    content.appendChild(descriptionDIV);
};