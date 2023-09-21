/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Rhett Poole";
let currentYear = "2023";
let profilePicture = "images/engagement.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile picture for ${fullName}`;
imageElement.setAttribute('alt', altText);


/* Step 5 - Array */
var favoriteFoods = ["Blueberries", " My mom's cherry pie", " My wife's Tortellini Soup"];
foodElement.innerHTML = favoriteFoods + ('<br>');

var favoriteMeal = " Hamburger Pie";
favoriteFoods.push(favoriteMeal);
foodElement.innerHTML += favoriteFoods +('<br>');

favoriteFoods.shift();
foodElement.innerHTML += favoriteFoods + ('<br>');

favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods;


