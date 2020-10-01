const showSunflowers = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <p id="description">
        Roses are the most popular flower as far as flower language goes, even going so far as to have different meanings depending on the number of roses given during courting.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../sunflowers/sunflower.png'
}


export default showSunflowers