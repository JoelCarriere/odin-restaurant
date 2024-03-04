import Icon from './logo.png';

function headline () {
    const restDesc = `Joel's Pizza Menu`;
    const h1 = document.createElement('h1');
    h1.textContent = restDesc;
    return h1;
}

function photo () {
    const myIcon = new Image();
    myIcon.src = Icon;
    return myIcon;
}

function paragraph () {
    const paraDesc = `All of our menu items are medium sized pan pizzas cooked to well done.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    return p;
}


export {headline, photo, paragraph};