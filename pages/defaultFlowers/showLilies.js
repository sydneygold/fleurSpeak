const showLilies = (flowerData) => {
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
        <a href="#/lilies?color=red">red</a>
        <a href="#/lilies?color=orange">orange</a>
        <a href="#/lilies?color=pink">pink</a>
        <a href="#/lilies?color=white">white</a>
        <a href="#/lilies?color=yellow">yellow</a>
        </nav>

    <p id="description">
        In Greece, lilies represent motherhood and rebirth. In China, lilies symbolize 100 years of love and good luck, hence why they're often used at weddings.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        red: '../lilies/lily-red.png',
        orange: '../lilies/lily-orange.png',
        pink: '../lilies/lily-pink.png',
        yellow: '../lilies/lily-yellow.png',
        white: '../lilies/lily-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.pink
    flowerData.find(flowers => {
        if(flowers.name === "Lily" && flowers.color.toLowerCase() === color)
        return info.textContent = flowers.color_description
    })
    
}


export default showLilies