let pokemonList= [
    {name: 'Starmie', height: 30, types: ['grass', 'poison']},
    {name: 'Mew', height: 50, types: ['psychic', 'water']},
    {name: 'Onyx', height: 100, types: ['rock', 'ground']},

];

for (let i=0; i<PokemonList.length; i++) {
    document.write(`${PokemonList[i].name} (height: ${PokemonList[i].height})`);

    if (PokemonList[i].height >55 ){
    document.write (" - Wow, that's a big one!");
    }

    document.write('<br>');
}
