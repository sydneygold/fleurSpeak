const showRoses = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/rose?color=red">red</a>
            <a href="#/rose?color=black">black</a>
            <a href="#/rose?color=white">white</a>
            <a href="#/rose?color=orange">orange</a>
            <a href="#/rose?color=pink">pink</a>
            <a href="#/rose?color=yellow">yellow</a>
            </nav>

        <p id="description">
        Roses are the most popular flower as far as flower language goes, even going so far as to have different meanings depending on the number of roses given during courting.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../roses/rose-red.png'
}


export default showRoses