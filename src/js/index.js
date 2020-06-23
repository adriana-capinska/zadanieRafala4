import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */


const add = document.querySelector('.bike__add');
const remove = document.querySelector('.bike__remove');
const bike = document.querySelector('.bike__number');
const distance = document.querySelector('.distance__number');
const key = new Date().toISOString().slice(0, 10);

console.log(key);


if (localStorage.getItem(key)) {
   distance.innerHTML = localStorage.getItem(key);
} else {
    localStorage.setItem(key, 0);
}

add.addEventListener('click', () => {
    distance.innerHTML = parseFloat(bike.value) + parseFloat(distance.innerHTML);
    localStorage.setItem(key, distance.innerHTML);
})

remove.addEventListener('click', () => {
    distance.innerHTML = parseFloat(distance.innerHTML) - parseFloat(bike.value);
    if (distance.innerHTML > 0) {
        localStorage.setItem(key, distance.innerHTML);
    } else {
        distance.innerHTML = 0;
        localStorage.setItem(key, distance.innerHTML);
    }
})
  