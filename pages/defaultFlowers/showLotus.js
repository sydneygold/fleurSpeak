const showLotus = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/lotus?color=blue">blue</a>
            <a href="#/lotus?color=pink">pink</a>
            <a href="#/lotus?color=white">white</a>
            <a href="#/lotus?color=yellow">yellow</a>
            </nav>

        <p id="description">
            Symbolizing rebirth and triumph over obstacles, lotus flowers are common in religions for divinity and virtues. In Buddhisim, the lotus flower symbolizes the journey of life, it's struggles, and practicing non-attachment. In Hinduism, it symbolizes divinity, purity, enlightment, and the disconnect with worldly things.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../lotus/lotus-pink.png'
}


export default showLotus