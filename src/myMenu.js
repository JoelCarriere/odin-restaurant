function headline () {
    const restDesc = `Joel's Pizza Menu`;
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
    const paraDesc = `All of our menu items are medium sized pan pizzas cooked to well done.`;
    const p = document.createElement('p');
    p.textContent = paraDesc;
    return p;
}


export {headline, photo, paragraph};