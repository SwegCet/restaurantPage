import { loadHomePage } from "./pages/home";
import { loadMenuPage } from "./pages/menu";
import { loadAboutPage } from "./pages/about";
import './styles/style.css';

//Remove current content (if any)
function removeContent() {
    const content = document.querySelector('#content');
    content.textContent = '';
}

window.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});


const homeButton = document.querySelector('#home');

const menuButton = document.querySelector('#menu');

const aboutButton = document.querySelector('#about');


//Add event listener on click of the buttons

//Just do Home button for now
homeButton.addEventListener('click', () => {
    removeContent();
    loadHomePage();
});

//menu button 
menuButton.addEventListener('click', () => {
    removeContent();
    loadMenuPage();
});

//about button
aboutButton.addEventListener('click', () => {
    removeContent();
    loadAboutPage();
})
console.log('Prophet Save Me');