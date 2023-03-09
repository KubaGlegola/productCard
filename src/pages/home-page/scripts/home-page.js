/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'
import getPickedColor from './getPickedColor';
import changeProductImage from './changeProductImage';
import addToCart from './addToCart';

const imageHandler = document.querySelector('#productImage');
const formHandler = document.querySelector("#colorPickForm");
const buttonHandler = document.querySelector("#submitButton");

formHandler.addEventListener('change', () => {
    const pickedColor = getPickedColor();
    changeProductImage(pickedColor, imageHandler);
})


buttonHandler.addEventListener('click', ()=>{
    const pickedColor = getPickedColor();
    addToCart(pickedColor);
})
