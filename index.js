const textoPesquisa = document.getElementById("text")
const pesquisar = document.getElementById("pesquisar")
const pokemonName = document.getElementById("pokemon__name");
const pokemonImg = document.querySelector(".pokemon__img");
const pokemonJogosL1 = document.getElementById("jogo__linha1")
const pokemonJogosL2 = document.getElementById("jogo__linha2")
const pokemonTipoL1 = document.getElementById("tipo__linha1")
const pokemonTipoL2 = document.getElementById("tipo__linha2")
const pokemonAbilidadeL1 = document.getElementById("abilidade__linha1")
const pokemonAbilidadeL2 = document.getElementById("abilidade__linha2")
const fetchPokemon = async (pokemon) => {
    return (await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()

}




const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    const types = []
    types.push(Object.values(data.types))


    pokemonName.innerHTML = 'NOME : ' + data.name;
    pokemonImg.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
    pokemonAbilidadeL1.innerHTML = data.abilities[0].ability.name
    pokemonAbilidadeL1.innerHTML += '\n___________'
    pokemonAbilidadeL1.innerHTML += "\n" + data.abilities[1].ability.name
    pokemonJogosL1.innerHTML = 'Está presente no pokemon: ' + data.game_indices[0].version.name
    pokemonJogosL1.innerHTML += '\n_____________'
    pokemonJogosL1.innerHTML += '\nEstá presente no pokemon: ' + data.game_indices[1].version.name
    for (let i = 0; i < types[0].length; i++) {
        pokemonTipoL1.innerHTML = `Pokemon Tipo: ${types[0][i].type.name}`
        console.log(types[0][i].type.name)
        if (types[0].length <= 1) {

            pokemonTipoL1.innerHTML += '\n_____________'
            pokemonTipoL1.innerHTML += `\nSo ha 1 tipo neste pokemon`
        } else {
            pokemonTipoL1.innerHTML += '\n_____________'
            pokemonTipoL1.innerHTML += `\nPokemon Tipo: ${types[0][i + 1].type.name}`
            break
        }
    }



    console.log('DATA : ', data)
    console.log('array', types[0])

}


pesquisar.addEventListener('click', (e) => {
    localStorage.setItem("inputValue", textoPesquisa.value);
    e.preventDefault()
    renderPokemon(textoPesquisa.value)
    document.getElementById('tabela').style.display = "block";
    console.log(textoPesquisa.value)
})



// renderPokemon(52)