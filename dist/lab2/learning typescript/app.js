"use strict";
let poke;
let pokemons = [];
function shuffle() {
    for (let i = 0; i < pokemons.length; i++) {
        let j = Math.round(Math.random() * pokemons.length);
        let temp = pokemons[i];
        pokemons[i] = pokemons[j];
        pokemons[j] = temp;
    }
}
function template2(pokeItem) {
    return `
    <div class="pokemon">
        <div>#$${pokeItem.id}</div>
        <img src="${pokeItem.image}" alt="${pokeItem.type}">
    </div>
    `;
}
async function fetchData2(root2) {
    for (let i = 1; i <= 20; i++) {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemon = await data.json();
        let { name: pokename, url } = pokemon.abilities[0].ability;
        let { front_default: imageUrl } = pokemon.sprites;
        let { name: type } = pokemon.types[0].type;
        poke = {
            id: i,
            name: pokename,
            image: imageUrl,
            type: type
        };
        pokemons.push(poke);
    }
    console.log(pokemons);
    shuffle();
    pokemons.forEach(Element => {
        root2.innerHTML += template2(Element);
    });
}
let root2 = document.getElementById('app');
if (root2) {
    fetchData2(root2);
}
