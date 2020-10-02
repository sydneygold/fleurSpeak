const showRoses = (flowerData) => {
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
        <a href="#/roses?color=red">red</a>
        <a href="#/roses?color=black">black</a>
        <a href="#/roses?color=white">white</a>
        <a href="#/roses?color=orange">orange</a>
        <a href="#/roses?color=pink">pink</a>
        <a href="#/roses?color=yellow">yellow</a>
        </nav>

    <p id="description">
        Roses are the most popular flower as far as flower language goes, even going so far as to have different meanings depending on the number of roses given during courting.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        red: '../roses/rose-red.png',
        black: '../roses/rose-black.png',
        white: '../roses/rose-white.png',
        orange: '../roses/rose-orange.png',
        pink: '../roses/rose-pink.png',
        yellow: '../roses/rose-yellow.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.red
    flowerData.find(flowers => {
        if(flowers.name === "Rose" && flowers.color.toLowerCase() === color)
        return info.textContent = "-" + flowers.color_description
    })
    
}


export default showRoses