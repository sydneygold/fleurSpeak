const showCarnations = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/carnations?color=yellow">yellow</a>
            <a href="#/carnations?color=red">red</a>
            <a href="#/carnations?color=purple">purple</a>
            <a href="#/carnations?color=pink">pink</a>
            <a href="#/carnations?color=white">white</a>
        </nav>

        <p id="description">
        A popular wedding flower, carnations symbolize fascination, distinction, and love.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../carnations/carnation-red.png'
}


export default showCarnations