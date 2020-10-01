const showTulips = (flowerData) => {
    window.addEventListener('hashchange', changeImage)
    const defaultFlower = document.querySelector('img')
    defaultFlower.src = '../tulips/tulip-yellow.png'
    
    return(`
    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
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

function changeImage(flowerSet){
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
    let tulips = filterTulips()
    console.log(tulips)
    info.textContent = tulips.color_description

    function filterTulips(flowerData){
        console.log('why', flowerData)
        flowerData.find(flowers => {
            return flowers.name === "Tulip" && flowers.color.toLowerCase() === color
        })
    }
}


export default showTulips