
export function addHomeHTML() {
    const content = document.querySelector("#content");

    const descriptionDIV = document.createElement("div");
    descriptionDIV.id = "description";

    const descriptionHeader = document.createElement("h2");
    descriptionHeader.textContent = "What We Offer";

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = `Modern American cuisine with a focus on seasonal ingredients and elevated comfort food. Gourmet
                                burgers, pan-seared fish with creative sauces, artisanal pasta dishes, and decadent desserts. We also
                                have a curated wine and craft cocktail menu.`;

    descriptionDIV.appendChild(descriptionHeader);
    descriptionDIV.appendChild(descriptionParagraph);

    const hoursDIV = document.createElement("div");
    hoursDIV.id = "hours";

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";

    // TODO bulletpoints are not aligned on left
    const hoursList = document.createElement("ul");
    const hoursListItems = [
        "Monday: 5 PM - 10 PM",
        "Tuesday: 5 PM - 10 PM",
        "Wednesday: 5 PM - 10 PM",
        "Thursday: 5 PM - 10 PM",
        "Friday: 5 PM - 11 PM",
        "Saturday: 5 PM - 11 PM",
        "Sunday: Closed"
    ];

    hoursListItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        hoursList.appendChild(listItem);
    });

    hoursDIV.appendChild(hoursHeader);
    hoursDIV.appendChild(hoursList);

    content.appendChild(descriptionDIV);
    content.appendChild(hoursDIV);
};