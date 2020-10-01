const showPoppies = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <nav id="color-select">
            <a href="#/poppy?color=red">red</a>
            <a href="#/poppy?color=blue">blue</a>
            <a href="#/poppy?color=white">white</a>
            </nav>

        <p id="description">
        Poppies convey contrasting meanings in different cultures. In Egyptian and Greek cultures, poppies symbolize restful sleep and recovery due to the medicinal properties that assist in sleeping. similarly, the Victorians poppies conveyed consolation for a loss in the family, deep sleep, and extravagance. For East Asia, red poppies symbolize success, beauty, and love while white poppies mean death. In contrast, Western cultures use red poppies symbolize death, specifically remembrance for veterans who've passed and white poppies convey peaceful rest.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../poppies/poppy-red.png'
}


export default showPoppies