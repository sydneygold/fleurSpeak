const showCarnations = (flowerData) => {
    window.addEventListener('hashchange', changeImage(flowerData))
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

    <ul id="flower-list">
        <li><a href="#/azaeleas">Azaelea</a></li>
        <li><a href="#/camellias">Camellia</a></li>
        <li><a href="#/carnations">Carnation</a></li>
        <li><a href="#/cherryblossoms">Cherry Blossom</a></li>
        <li><a href="#/mums">Chrysanthemum</a></li>
        <li><a href="#/hyacinths">Hyacinth</a></li>
        <li><a href="#/hydrangeas">Hydrangea</a></li>
        <li><a href="#/lilies">Lily</a></li>
        <li><a href="#/lotus">Lotus</a></li>
        <li><a href="#/peonies">Peony</a></li>
        <li><a href="#/poppies">Poppy</a></li>
        <li><a href="#/roses">Rose</a></li>
        <li><a href="#/sunflowers">Sunflower</a></li>
        <li><a href="#/tulips">Tulip</a></li>
    </ul>

    <nav id="color-select">
        <p id="choose-color">Choose a color</p>
        <a href="#/carnations?color=yellow">yellow</a>
        <a href="#/carnations?color=red">red</a>
        <a href="#/carnations?color=purple">purple</a>
        <a href="#/carnations?color=pink">pink</a>
        <a href="#/carnations?color=white">white</a>
    </nav>

    <p id="description">
    A popular wedding flower, carnations symbolize fascination, distinction, and love.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        yellow: '../carnations/carnation-yellow.png',
        red: '../carnations/carnation-red.png',
        purple: '../carnations/carnation-purple.png',
        pink: '../carnations/carnation-pink.png',
        white: '../carnations/carnation-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.red
    flowerData.find(flowers => {
        if(flowers.name === "Carnation" && flowers.color.toLowerCase() === color)
        return info.textContent = "-" + flowers.color_description
    })
    
}


export default showCarnations