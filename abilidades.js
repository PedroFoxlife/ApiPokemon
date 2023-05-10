var inputValue = localStorage.getItem("inputValue");
var nome = document.getElementById("nomeInf")
var height = document.getElementById("height")
var base_experience = document.getElementById("base_experience")
var weight = document.getElementById("weight")
var hp = document.getElementById("hp")
var box2 = document.getElementById("box2")
var movesTela = document.getElementById("movesTela")
var next = document.getElementById("nextPage")
var prev = document.getElementById("prevPage")
var someVar = 50;




const fetchPokemon = async (pokemon) => {
    return  (await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
          
}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
  
    let perPage = 10
    const state = {
        page: 1,
        perPage,
        totalPage: Math.ceil(data.moves.length / perPage)
    }
    const controls ={
        next(){
            state.page ++
            const lastPage = state.page > state.totalPage
            if(lastPage){
                state.page--
            }
        },
        prev(){
            state.page --
            const fristPage = state.page < 1
            if(fristPage){
                state.page++
            }
        },
      
    }
    const list = {
        create(item){
            const div = document.createElement('div')
            div.classList.add('item')
            div.innerHTML = item
            movesTela.appendChild(div)

        },
        update(){
            movesTela.innerHTML = ''
            let page =state.page - 1
            let start = page * state.perPage
            let end = start + state.perPage
            
            const paginedItems = data.moves.slice(start,end)
            
            // paginedItems.forEach(list.create);
            for(let i = 0; i < paginedItems.length ;i++){
                console.log(paginedItems[i].move.name)
                if(paginedItems){
                    const div = document.createElement('div')
                    div.classList.add('moves')
                    div.innerHTML = ` ° ${paginedItems[i].move.name}`
                    movesTela.appendChild(div)
                }
                
            }
        }
    }

    
function   createListeners(){
    next.addEventListener('click',() => {
            controls.next()
            list.update()
            console.log(state.page)
            
    })
    prev.addEventListener('click',() => {
        controls.prev()
        list.update()
        console.log(state.page)
      
})

}
list.update()
createListeners()




//  CHAMA AS INFORMAÇÕES DA BOX INF BASICAS
    nome.innerHTML = `Nome:  ${data.name}`
    height.innerHTML = `Altura:  ${data.height}`
    weight.innerHTML = `Peso:  ${data.weight}`
    base_experience.innerHTML = `Experiencia Base:  ${data.base_experience}`
    hp.innerHTML = `HP:  ${data.stats[0].base_stat}`
    

    
    console.log('DATA : ',data.moves.slice(0,5))
    
   
}


renderPokemon(inputValue)




