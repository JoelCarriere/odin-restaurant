import Icon from './logo.png';

function headline () {
    const restDesc = `Joel's Pizza Restaurant`;
    const h1 = document.createElement('h1');
    h1.textContent = restDesc;
    h1.classList.add("homeHeadline")
    return h1;
}

function photo () {
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("logo");
    return myIcon;
}

function paragraph () {
    const paraDesc = `Here at Joel's pizza we use the freshest ingredients 
                      prepared daily to ensure your pizza tastes great.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    p.classList.add("paraText");
    return p;
}


export {headline, photo, paragraph};