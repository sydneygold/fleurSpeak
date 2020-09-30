import getFlowerInfo from './pages/flowers.js'

const routes = {
    '/': "Home",
    '/colors': "Colors"
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


window.addEventListener('hashchange', routeChange)
window.addEventListener('load', routeChange)