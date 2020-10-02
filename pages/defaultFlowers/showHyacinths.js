const showHyacinths = (flowerData) => {
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
        <a href="#/hyacinths?color=blue">blue</a>
        <a href="#/hyacinths?color=pink">pink</a>
        <a href="#/hyacinths?color=purple">purple</a>
        <a href="#/hyacinths?color=white">white</a>
        <a href="#/hyacinths?color=yellow">yellow</a>
    </nav>

    <p id="description">
        These flower clusters represent sincerity, rebirth, spring, and athleticism, specifically associated with sports by the Victorians based on the Greek myth of Hyacinthus.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        blue: '../hyacinths/hyacinth-blue.png',
        pink: '../hyacinths/hyacinth-pink.png',
        purple: '../hyacinths/hyacinth-purple.png',
        white: '../hyacinths/hyacinth-white.png',
        yellow: '../hyacinths/hyacinth-yellow.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.pink
    flowerData.find(flowers => {
        if(flowers.name === "Hyacinth" && flowers.color.toLowerCase() === color)
        return info.textContent = "-" + flowers.color_description
    })
    
}


export default showHyacinths