import Icon from './logo.png';

function headline () {
    const restDesc = `Our History`;
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
    const paraDesc = `Our pizza restaurant was established in 2024 under the Odin initiative.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    return p;
}


export {headline, photo, paragraph};