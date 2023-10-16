const myBirthDate = new Date(1993, 3, 12);
const now = Date.now();
const myAge = Math.floor((now - myBirthDate) / (1000 * 60 * 60 * 24 * 365.25));
document.querySelector('.my_age').innerText = myAge;
