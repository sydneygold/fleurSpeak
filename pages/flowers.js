const list = document.querySelector('#flower-list')
const flowerURL = 'http://localhost:3000/flowers'



export default function flowerList(){
    function getFlowers(){
        fetch(flowerURL)
            .then(response => response.json())
            .then(flowers => flowers.forEach(flower => {
                const name = document.createElement('li')
                name.textContent = flower.name
                console.log(name)
                name.appendChild(list)
            }))
    }
    
} 


// function getFlowers(){
//     fetch(flowerURL)
//         .then(response => response.json())
//         .then(flowers => flowers.forEach(flower => {
//             const name = document.createElement('li')
//             name.textContent = flower.name
//             console.log(name)
//             name.appendChild(list)
//         }))
// }