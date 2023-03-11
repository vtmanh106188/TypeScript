"use strict";
class Pokemon {
    constructor(id, name, image, type) {
        this.id = id;
        this.name = name;
        this.url = image;
        this.type = type;
    }
}
async function getPKM() {
    try {
        const url = "http://localhost:3000/results";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
async () => {
    var poke = [];
    poke = await getPKM();
    console.log(poke);
    poke.forEach((e, index) => {
        var pokemon = {
            id: e.id,
            name: e.name,
            url: e.url,
            type: e.type
        };
        var app = document.querySelector('#app');
        var newPoke = `<div class="pokemon">
                <div>#$${e.id}</div>
                <img src="${e.url}" alt="${e.type}">
                </div>`;
        if (app)
            app.innerHTML += newPoke;
    });
};
