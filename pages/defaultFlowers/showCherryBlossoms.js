const showCherryBlossoms = (flowerData) => {
    changeImage(flowerData)
    return (`

    <nav id="flower-selection">
        <a id="home" href="/"> Home</a>
        <a id="choose-flower" href="#/flowers">Choose your flower</a>
    </nav>

        <p id="description">
        In Japan, the cherry blossom holds strong symbolism for spring and renewal, as well as the fleeting nature of life due to the short period of time cherry blossoms bloom. It also symbolizes kindness, gentleness, feminine beauty, and mono no aware.        
        </p>
    `)

}

function changeImage(flowerData){
    console.log(flowerData)
    const flowerImage = document.querySelector('img')
    flowerImage.src = '../cherry blossom/cherry-blossom.png'
}


export default showCherryBlossoms