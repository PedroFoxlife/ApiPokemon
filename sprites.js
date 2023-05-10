const mainSprite1 = document.getElementById('sp1')
const mainSprite2 = document.getElementById('sp2')
var inputValue = localStorage.getItem("inputValue");


const fetchPokemon = async (pokemon) => {
    return (await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()

}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    var arrayAni = []
    var arrayAniShiny = []
    arrayAni.push(data.sprites.versions['generation-v']['black-white'].animated.front_default)
    arrayAni.push(data.sprites.versions['generation-v']['black-white'].animated.back_default)
    arrayAniShiny.push(data.sprites.versions['generation-v']['black-white'].animated.front_shiny)
    arrayAniShiny.push(data.sprites.versions['generation-v']['black-white'].animated.back_shiny)


    for (let i = 0; i < arrayAni.length; i++) {
        var compBase = mainSprite1
        var imgComp = document.createElement('img')
        imgComp.className = 'sprites'
        imgComp.src = arrayAni[i]
        document.body.appendChild(imgComp)
        compBase.appendChild(imgComp)
        console.log('caminho: ', arrayAni[i])
    }
    for (let i = 0; i < arrayAniShiny.length; i++) {
        var compBase = mainSprite2
        var imgComp = document.createElement('img')
        imgComp.className = 'sprites'
        imgComp.src = arrayAniShiny[i]
        document.body.appendChild(imgComp)
        compBase.appendChild(imgComp)

    }
    console.log('ARRAY: ', arrayAni)
    console.log('DATA : ', data)


}

renderPokemon(inputValue)