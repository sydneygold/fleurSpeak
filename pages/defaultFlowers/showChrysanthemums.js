const showChrysanthemums = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

    <nav id="color-select">
        <a href="#/chrysanthemum?color=yellow">yellow</a>
        <a href="#/chrysanthemum?color=red">red</a>
        <a href="#/chrysanthemum?color=purple">purple</a>
        <a href="#/chrysanthemum?color=white">white</a>
    </nav>

        <p id="description">
            Generally symbolizes longevity, fidelity, joy, and optimism, many cultures had different symbolism associated with Chrysanthemums. The Victorians believed this flower conveyed friendship and well-wishing. The Buddhists used chrysanthemums as an offering due to their powerful Yang energy. The Chinese offered these flowers to the elderly to promote a long life and good luck in the home and Belgium and Austria almost exclusively use them as a memorial flower to honor loved ones who've passed.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../chrysanthemums/chrys-yellow.png'
}


export default showChrysanthemums