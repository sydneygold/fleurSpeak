const showPoppies = (flowerData) => {
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
        <a href="#/poppies?color=red">red</a>
        <a href="#/poppies?color=blue">blue</a>
        <a href="#/poppies?color=white">white</a>
        </nav>

    <p id="description">
        Poppies convey contrasting meanings in different cultures. In Egyptian and Greek cultures, poppies symbolize restful sleep and recovery due to the medicinal properties that assist in sleeping. similarly, the Victorians poppies conveyed consolation for a loss in the family, deep sleep, and extravagance. For East Asia, red poppies symbolize success, beauty, and love while white poppies mean death. In contrast, Western cultures use red poppies symbolize death, specifically remembrance for veterans who've passed and white poppies convey peaceful rest.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        red: '../poppies/poppy-red.png',
        blue: '../poppies/poppy-blue.png',
        white: '../poppies/poppy-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.red
    flowerData.find(flowers => {
        if(flowers.name === "Poppy" && flowers.color.toLowerCase() === color)
        return info.textContent = "-" + flowers.color_description
    })
    
}


export default showPoppies