function headline () {
    const restDesc = `Joel's Pizza Restaurant`;
    const h1 = document.createElement('h1');
    h1.textContent = restDesc;
    return h1;
}

function photo () {
    const string = './src/logo.png';
    const img = document.createElement('img');
    img.src = string;
    return img;
}

function paragraph () {
    const paraDesc = `Here at Joel's pizza we use the freshest ingredients 
                      prepared daily to ensure your pizza tastes great.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    return p;
}


export {headline, photo, paragraph};