async function getAPI() {
    let API = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281') //tất cả pokemon
    let list = await API.json()
    let results = list.results
    input.addEventListener('input', async function () {
        let i = 1
        for (const result of results) {
            if (result.name.toLowerCase().includes(value) == true) {
                let poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`) //thông tin chi tiết
                let pokemon = await poke.json()

                console.log(pokemon.name);
                console.log(pokemon.types[0].type.name);
                console.log(pokemon.height);
                console.log(pokemon.weight);

                pokename.innerText = pokemon.name
                poketype.innerText = pokemon.types[0].type.name
                pokeheight.innerText = pokemon.height
                pokeweight.innerText = pokemon.weight
                
                if (i == 1011) {
                    i = 10001 //vì trong API nhảy từ số 1010 sang 10001
                }
            }
        }
    })
}
getAPI()
let pokename = document.getElementById('name')
let poketype = document.getElementById('type')
let pokeheight = document.getElementById('height')
let pokeweight = document.getElementById('weight')

let input = document.getElementById('input')
let value = input.value
console.log(input);