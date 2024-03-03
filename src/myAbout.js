function headline () {
    const restDesc = `Our History`;
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
    const paraDesc = `Our pizza restaurant was established in 2024 under the Odin initiative.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    return p;
}


export {headline, photo, paragraph};