const showAzaeleas = (flowerData) => {
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
            <a href="#/azaeleas?color=yellow">yellow</a>
            <a href="#/azaeleas?color=red">red</a>
            <a href="#/azaeleas?color=purple">purple</a>
            <a href="#/azaeleas?color=white">white</a>
        </nav>

        <p id="description">
            In Japan and China, azaeleas symbolize remembrance of home and the desire to return and family. Victorians saw these flowers as a symbol of temperance and elegance. Though due to their toxicity, azaeleas delivered in a black vase once symbolized a death threat.
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    const info = document.querySelector('#color-info')
    const colors = {
        yellow: '../azaeleas/azaelea-yellow.png',
        red: '../azaeleas/azaelea-red.png',
        purple: '../azaeleas/azaelea-purple.png',
        white: '../azaeleas/azaelea-white.png'
    }
    let color = window.location.hash.split('=')[1]
    console.log('this', color)

    flowerImage.src = colors[color] || colors.yellow
    flowerData.find(flowers => {
        if(flowers.name === "Azaelea" && flowers.color.toLowerCase() === color)
        return info.textContent = flowers.color_description
    })
    
}


export default showAzaeleas

