let pokemonRepository = (function() {
let pokemonList= [
    {name: 'Starmie', height: 30, types: ['grass', 'poison']},
    {name: 'Mew', height: 50, types: ['psychic', 'water']},
    {name: 'Onyx', height: 100, types: ['rock', 'ground']},

];

function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach( pokemon => {
    document.write(pokemon.name)
        if (pokemon.height > 55) {
                document.write(" - Wow, that\'s Big!");
                }
    document.write('<br>');
} );
