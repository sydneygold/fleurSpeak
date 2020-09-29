import flowerList from './pages/flowers.js'

fetch('http://localhost:3000/flowers')
    .then(response => response.json())
    .then(flowers => console.log(flowers))

const main = document.querySelector('#page')
const routes = {
    '/': "Home",
    '/flowers': flowerList
}

function routeChange(event){
    const path = window.location.hash.split('#')[1] || '/'
    const page = routes[path]
    console.log(page)
    
    if(page){
    }
    else {
        `<h1>404 ERROR</h1>`
    }
}

// function getData(){
//     fetch('http://fleur-speak-backend.herokuapp.com/flowers/')
//         .then(response => response.json())
//         .then(result => console.log(result))
// }


window.addEventListener('hashchange', routeChange)
window.addEventListener('load', routeChange)