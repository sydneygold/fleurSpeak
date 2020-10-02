const showTulips = (flowerData) => {
    window.addEventListener('hashchange', changeImage(flowerData))
    
    return(`
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
    <a href="#/tulips?color=red">red</a>
    <a href="#/tulips?color=white">white</a>
    <a href="#/tulips?color=purple">purple</a>
    <a href="#/tulips?color=pink">pink</a>
    <a href="#/tulips?color=yellow">yellow</a>
    </nav>
    
    <p id="description">
    Due to it's beautiful yet simple appearance, tulips are considered the symbol for perfect love, originating in Turkey.        
    </p>

    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        yellow: '../tulips/tulip-yellow.png',
        red: '../tulips/tulip-red.png',
        pink: '../tulips/tulip-pink.png',
        purple: '../tulips/tulip-purple.png',
        white: '../tulips/tulip-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.yellow
    flowerData.find(flowers => {
        if(flowers.name === "Tulip" && flowers.color.toLowerCase() === color)
        return info.textContent = "-" + flowers.color_description
    })
    
}




export default showTulips