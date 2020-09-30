import clearContent from './helperFunctions/clearContent.js'
import listFlowers from './pages/flowers.js'


const main = document.querySelector('#content')
const flowerURL = 'http://localhost:3000/flowers'

const routes = {
    '/flowers': listFlowers,
    '/': clearContent
    // '/:flower': flowerList
}

let appData

function routeChange(event){
    const path = window.location.hash.split('#')[1] || '/'
    const page = routes[path]

    main.innerHTML = page(appData)
}

function getData(){
    fetch(flowerURL)
    .then(response => response.json())
    .then(results => appData = results)
    .then(routeChange)
}




window.addEventListener('load', getData)
window.addEventListener('hashchange', routeChange)