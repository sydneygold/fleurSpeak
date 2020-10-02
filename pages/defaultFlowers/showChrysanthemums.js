const showChrysanthemums = (flowerData) => {
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
        <a href="#/mums?color=yellow">yellow</a>
        <a href="#/mums?color=red">red</a>
        <a href="#/mums?color=purple">purple</a>
        <a href="#/mums?color=white">white</a>
    </nav>

    <p id="description">
        Generally symbolizes longevity, fidelity, joy, and optimism, many cultures had different symbolism associated with Chrysanthemums. The Victorians believed this flower conveyed friendship and well-wishing. The Buddhists used chrysanthemums as an offering due to their powerful Yang energy. The Chinese offered these flowers to the elderly to promote a long life and good luck in the home and Belgium and Austria almost exclusively use them as a memorial flower to honor loved ones who've passed.        
    </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        yellow: '../chrysanthemums/chrys-yellow.png',
        red: '../chrysanthemums/chrys-red.png',
        purple: '../chrysanthemums/chrys-purple.png',
        white: '../chrysanthemums/chrys-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.yellow
    flowerData.find(flowers => {
        if(flowers.name === "Chyrsanthemum" && flowers.color.toLowerCase() === color)
        return info.textContent = flowers.color_description
    })
    
}


export default showChrysanthemums