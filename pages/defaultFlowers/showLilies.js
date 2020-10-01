const showLilies = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/lilies?color=red">red</a>
            <a href="#/lilies?color=orange">orange</a>
            <a href="#/lilies?color=pink">pink</a>
            <a href="#/lilies?color=white">white</a>
            <a href="#/lilies?color=yellow">yellow</a>
            </nav>

        <p id="description">
            In Greece, lilies represent motherhood and rebirth. In China, lilies symbolize 100 years of love and good luck, hence why they're often used at weddings.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../lilies/lily-pink.png'
}


export default showLilies