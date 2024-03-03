import './style.css';
import Icon from './logo.png';
import {headline as homeHeadline, photo as homePhoto, paragraph as homeParagraph} from './myHome';
import {headline as aboutHeadline, photo as aboutPhoto, paragraph as aboutParagraph} from './myAbout';
import {headline as menuHeadline, photo as menuPhoto, paragraph as menuParagraph} from './myMenu';
import _ from 'lodash';

function clearContent () {
    const content = document.querySelector('#content');
    content.textContent="";
}

function showHomeContent () {
    clearContent();
    content.appendChild(homeHeadline());
    content.appendChild(homePhoto());
    content.appendChild(homeParagraph());
}

function showAboutContent () {
    clearContent();
    content.appendChild(aboutHeadline());
    content.appendChild(aboutPhoto());
    content.appendChild(aboutParagraph());
}

function showMenuContent () {
    clearContent();
    content.appendChild(menuHeadline());
    content.appendChild(menuPhoto());
    content.appendChild(menuParagraph());
}


function switchContent () {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const aboutButton = document.querySelector('#about');

    homeButton.addEventListener("click", showHomeContent);
    menuButton.addEventListener("click", showMenuContent);
    aboutButton.addEventListener("click", showAboutContent);
}

const restaurant = document.querySelector('#content');
restaurant.appendChild(homeHeadline());
restaurant.appendChild(homePhoto());
restaurant.appendChild(homeParagraph());

switchContent();