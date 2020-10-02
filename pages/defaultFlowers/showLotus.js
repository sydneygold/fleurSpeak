const showLotus = (flowerData) => {
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
        <a href="#/lotus?color=blue">blue</a>
        <a href="#/lotus?color=pink">pink</a>
        <a href="#/lotus?color=white">white</a>
        <a href="#/lotus?color=yellow">yellow</a>
        </nav>

    <p id="description">
        Symbolizing rebirth and triumph over obstacles, lotus flowers are common in religions for divinity and virtues. In Buddhisim, the lotus flower symbolizes the journey of life, it's struggles, and practicing non-attachment. In Hinduism, it symbolizes divinity, purity, enlightment, and the disconnect with worldly things.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        blue: '../lotus/lotus-blue.png',
        pink: '../lotus/lotus-pink.png',
        white: '../lotus/lotus-white.png',
        yellow: '../lotus/lotus-yellow.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.pink
    flowerData.find(flowers => {
        if(flowers.name === "Lotus" && flowers.color.toLowerCase() === color)
        return info.textContent = flowers.color_description
    })
    
}


export default showLotus