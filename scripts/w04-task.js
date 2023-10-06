/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rhett Poole",
    photo: "images/engagement.jpg",
    favoriteFoods: [
        'pizza',
        'burgers',
        'hotdogs',
        'chicken noodle soup',
        'peanuts'
    ],
    hobbies: [
        'video games',
        'reading',
        'concerts',
        'baseball',
        'backpacking',
        'fly fishing'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Sterling, Virginia',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Boise, Idaho',
        length: '19 years'
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.push(
    {
        place: 'Sterling, Virginia',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Boise, Idaho',
        length: '19 years'
    }
);

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

