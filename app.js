import flowerList from './pages/flowers.js'


const flowerURL = 'https://fleur-speak-backend.herokuapp.com/flowers'
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

function getData(){
    fetch(flowerURL)
    .then(response => response.json())
    .then(flowers => console.log(flowers))
}


window.addEventListener('hashchange', routeChange)
window.addEventListener('load', getData)