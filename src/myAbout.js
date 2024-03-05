import Icon from './logo.png';

function headline () {
    const restDesc = `Our History`;
    const h1 = document.createElement('h1');
    h1.textContent = restDesc;
    h1.classList.add("aboutHeadline")
    return h1;
}

function photo () {
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("logo");
    return myIcon;
}

function paragraph () {
    const paraDesc = `Our pizza restaurant was established in 2024 under the Odin initiative.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    p.classList.add("paraText");
    return p;
}


export {headline, photo, paragraph};