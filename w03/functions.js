let firstName = 'Antionia';
let lastName = 'Francesca';

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let fullname2 = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName3 = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);