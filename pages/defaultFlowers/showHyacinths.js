const showHyacinths = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

    <nav id="color-select">
        <a href="#/hyacinth?color=blue">blue</a>
        <a href="#/hyacinth?color=pink">pink</a>
        <a href="#/hyacinth?color=purple">purple</a>
        <a href="#/hyacinth?color=white">white</a>
        <a href="#/hyacinth?color=yellow">yellow</a>
    </nav>

        <p id="description">
        These flower clusters represent sincerity, rebirth, spring, and athleticism, specifically associated with sports by the Victorians based on the Greek myth of Hyacinthus.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../hyacinths/hyacinth-blue.png'
}


export default showHyacinths