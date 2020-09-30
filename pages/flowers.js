// const flowerURL = 'https://fleur-speak-backend.herokuapp.com/flowers'
const list = document.querySelector('#flower-list')
const nav = document.querySelector('#flower-selection')
const flowerURL = 'https://fleur-speak-backend.herokuapp.com/flowers'

export default function flowerList(){
    getFlowerNames
} 

nav.addEventListener('click', getFlowerNames)

function getFlowerNames(){
    event.preventDefault()
    fetch(flowerURL)
    .then(response => response.json())
    .then(flowers => listFlowers(flowers))
        
    function listFlowers(flowers){
        const flowerSet = new Set()
        flowers.forEach(flower => {
            flowerSet.add(flower.name)
        })
        flowerSet.forEach(flower => {
            const name = document.createElement('li')
            name.textContent = flower
            list.append(name)

            name.addEventListener('click', console.log('clicked'))
        })
    }
}

