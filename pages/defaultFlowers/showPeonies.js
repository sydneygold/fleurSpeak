const showPeonies = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/peony?color=red">red</a>
            <a href="#/peony?color=pink">pink</a>
            <a href="#/peony?color=white">white</a>
            </nav>

        <p id="description">
            Peonies are considered one of the most popular flowers for weddings, symbolizing happiness in marriage, good fortune, and compassion. In China and Japan, red peonies specifically are associated with nobility, honor and wealth.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../peonies/peony-white.png'
}


export default showPeonies