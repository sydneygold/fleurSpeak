import showAzaeleas from './pages/defaultFlowers/showAzaeleas.js'
// import coloredAzaelea from './pages/azaeleaShow/coloredAzaeleas.js'
import showCamellias from './pages/defaultFlowers/showCamellias.js'
import showCarnations from './pages/defaultFlowers/showCarnations.js'
import showCherryBlossoms from './pages/defaultFlowers/showCherryBlossoms.js'
import showChrysanthemums from './pages/defaultFlowers/showChrysanthemums.js'
import showHyacinths from './pages/defaultFlowers/showHyacinths.js'
import showHydrangeas from './pages/defaultFlowers/showHydrangeas.js'
import showLilies from './pages/defaultFlowers/showLilies.js'
import showLotus from './pages/defaultFlowers/showLotus.js'
import showPeonies from './pages/defaultFlowers/showPeonies.js'
import showPoppies from './pages/defaultFlowers/showPoppies.js'
import showRoses from './pages/defaultFlowers/showRoses.js'
import showTulips from './pages/defaultFlowers/showTulips.js'

import HomePage from './pages/homePage.js'
import FlowerPage from './pages/flowersPage.js'
import showSunflowers from './pages/defaultFlowers/showSunflowers.js'


let flowerData
const main = document.querySelector('#content')
const routes = {
    '/': HomePage,
    '/flowers': FlowerPage,
    '/azaeleas': showAzaeleas,
    '/camellias': showCamellias,
    '/carnations': showCarnations,
    '/cherryblossoms': showCherryBlossoms,
    '/mums': showChrysanthemums,
    '/hyacinths': showHyacinths,
    '/hydrangeas': showHydrangeas,
    '/lilies': showLilies,
    '/lotus': showLotus,
    '/peonies': showPeonies,
    '/poppies': showPoppies,
    '/roses': showRoses,
    '/sunflowers': showSunflowers,
    '/tulips': showTulips
}


const routeChanger = (event) => {
    let path = window.location.hash.split('#')[1] || '/' 
    if(path.includes('?')){
        path = path.split('?')[0]
    }


    const page = routes[path]

    main.innerHTML = page(flowerData)
}

const getData = () => {
    fetch('http://localhost:3000/flowers')
        .then(response => response.json())
        .then(results => flowerData = results)
        .then(routeChanger)
}

window.addEventListener('load', getData)
window.addEventListener('hashchange', routeChanger)
