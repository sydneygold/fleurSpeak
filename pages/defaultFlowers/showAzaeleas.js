const showAzaeleas = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

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
    let azaeleas = flowerData.find(flowers => {
        return flowers.name === "Azaelea" && flowers.color.toLowerCase() === color
    })
    info.textContent = azaeleas.color_description
    
    console.log(info)
}


export default showAzaeleas

