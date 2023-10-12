/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = ""; // Clear existing temple cards
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = () => {
    reset();
    const filter = document.getElementById("sortBy").value;
    let filteredTemples = [];

    switch (filter) {
        case "utah":
            filteredTemples = templeList.filter(temple => temple.location.toLowerCase().includes("utah"));
            break;
        case "notutah":
            filteredTemples = templeList.filter(temple => !temple.location.toLowerCase().includes("utah"));
            break;
        case "older":
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case "all":
            filteredTemples = templeList;
            break;
    }

    displayTemples(filteredTemples);
};

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", sortBy);

getTemples();
