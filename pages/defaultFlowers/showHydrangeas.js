const showHydrangeas = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

    <nav id="color-select">
        <a href="#/hydrangea?color=blue">blue</a>
        <a href="#/hydrangea?color=pink">pink</a>
        <a href="#/hydrangea?color=purple">purple</a>
        <a href="#/hydrangea?color=yellow">yellow</a>
    </nav>

        <p id="description">
            Hydrangeas have connections to strong emotions in their symbolism, such as giving them to love interests when rejected to show that they are cold hearted. The Victorians specifically associated the flower with vanity and boastfulness. However, the Japanese use this flower to convey a heartfelt apology and gratitude for understanding.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../hydrangeas/hydran-blue.png'
}


export default showHydrangeas