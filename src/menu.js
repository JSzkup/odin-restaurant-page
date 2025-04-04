export function addMenuHTML() {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Dinner Menu";

    const menuSubtitle = document.createElement("h2");
    menuSubtitle.textContent = "Modern American Cuisine | Seasonal | Elevated Comfort Food";

    // TODO use css to make a long thin line, maybe make in between every flexbox item in body

    const startersSubtitle = document.createElement("h2");
    startersSubtitle.textContent = "Starters";

    const startersList = document.createElement("ul");
    const startersListItems = [
        "Crispy Burrata - Heirloom tomato jam, basil oil, toasted sourdough",
        "Lobster Mac & Cheese Bites - White cheddar, smoked paprika aioli",
        "Roasted Beet Salad - Citrus segments, whipped goat cheese, hazelnuts, sherry vinaigrette",
        "Short Rib Sliders - Pickled onion, horseradish cream, brioche mini buns"
    ]

    makeList(startersList, startersListItems);

    const entreeSubtitle = document.createElement("h2");
    entreeSubtitle.textContent = "Entree";

    const entreeList = document.createElement("ul");
    const entreeListItems = [
        "The Gilded Burger - Dry-aged beef, truffle aioli, smoked cheddar, caramelized onion, hand-cut fries",
        "Pan-Seared Atlantic Halibut - Sweet corn purée, charred scallions, chili-lime beurre blanc",
        "Wild Mushroom Pappardelle - Housemade pasta, porcini cream, shaved parmesan, black truffle",
        "Buttermilk Fried Chicken Breast - Honey-hot glaze, cheddar grits, braised greens",
        "Heritage Pork Chop - Apple cider reduction, roasted root vegetables, crispy shallots"
    ]

    makeList(entreeList, entreeListItems);

    const dessertSubtitle = document.createElement("h2");
    dessertSubtitle.textContent = "Dessert";

    const dessertList = document.createElement("ul");
    const dessertListItems = [
        "Salted Caramel Bread Pudding - Vanilla bean anglaise, bourbon whip",
        "Flourless Chocolate Torte - Raspberry coulis, candied cocoa nibs",
        "Seasonal Fruit Crostata - Lemon thyme gelato",
        "Gilded Cheesecake - Graham cracker crust, brûléed top, passionfruit drizzle"
    ]

    makeList(dessertList, dessertListItems);

    const drinkSubtitle = document.createElement("h2");
    drinkSubtitle.textContent = "Cocktails";

    const drinkList = document.createElement("ul");
    const drinkListItems = [
        "The Golden Hour - Bourbon, honey-thyme syrup, orange bitters",
        "Velvet Fork - Gin, elderflower, cucumber, lemon foam",
        "Smoke & Petals - Mezcal, rose syrup, grapefruit, smoked salt rim",
        "Pear Pressure - Vodka, pear purée, cardamom, prosecco topper"
    ]

    makeList(drinkList, drinkListItems);

    content.appendChild(menuTitle);
    content.appendChild(menuSubtitle);

    content.appendChild(startersSubtitle);
    content.appendChild(startersList);

    content.appendChild(entreeSubtitle);
    content.appendChild(entreeList);

    content.appendChild(dessertSubtitle);
    content.appendChild(dessertList);

    content.appendChild(drinkSubtitle);
    content.appendChild(drinkList);

}

function makeList(list, listItems) {
    listItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    return list;
}