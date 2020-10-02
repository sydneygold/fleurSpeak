const showHydrangeas = (flowerData) => {
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
        <a href="#/hydrangeas?color=blue">blue</a>
        <a href="#/hydrangeas?color=pink">pink</a>
        <a href="#/hydrangeas?color=purple">purple</a>
        <a href="#/hydrangeas?color=white">white</a>
    </nav>

    <p id="description">
        Hydrangeas have connections to strong emotions in their symbolism, such as giving them to love interests when rejected to show that they are cold hearted. The Victorians specifically associated the flower with vanity and boastfulness. However, the Japanese use this flower to convey a heartfelt apology and gratitude for understanding.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        blue: '../hydrangeas/hydran-blue.png',
        pink: '../hydrangeas/hydran-pink.png',
        purple: '../hydrangeas/hydran-purple.png',
        white: '../hydrangeas/hydran-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.blue
    flowerData.find(flowers => {
        if(flowers.name === "Hydrangea" && flowers.color.toLowerCase() === color)
        return info.textContent = flowers.color_description
    })
    
}


export default showHydrangeas