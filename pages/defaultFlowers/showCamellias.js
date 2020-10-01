const showCamellias = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/camellia?color=red">red</a>
            <a href="#/camellia?color=pink">pink</a>
            <a href="#/camellia?color=white">white</a>
        </nav>

        <p id="description">
            In China, camellias are lucky symbols for the Chinese New Year. Often seen as symbols of love, affection, and admiration.
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../camellias/camellia-pink.png'
}


export default showCamellias