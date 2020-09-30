

    function listFlowers(flowers){
        const flowerSet = new Set()
        flowers.forEach(flower => {
            flowerSet.add(flower.name)
        })
        flowerSet.forEach(flower => {
            const name = document.querySelector('li')
            name.textContent = flower
            list.append(name)
            console.log(name)
            name.addEventListener('click', returnFlowerInfo)
            function returnFlowerInfo(event){
                const image = document.querySelector('img')
                console.log(name)
                if(name.className === 'azaelea'){
                    // image.src = "./flowerPics/Flowers/" + flower.image
                    console.log(flower)
                }
                if(name.className === 'camellia'){
                    // image.src = "./flowerPics/Flowers/" + flower.image
                }
                
            }
        // })
        //         if(name.className === '.azaelea'){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.id === 5){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             console.log(flower.image)
        //         }
        //         if(flower.name === "Carnation"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Cherry Blossom"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Chrysanthemum"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Hyacinth"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Hydrangea"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Lily"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Lotus"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //         //     console.log(flower.image)
        //         }
        //         if(flower.name === "Peony"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Poppy"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Rose"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Sunflower"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
        //         if(flower.name === "Tulip"){
        //             image.src = "./flowerPics/Flowers/" + flower.image
        //             // console.log(flower.image)
        //         }
}            
        



function changeFlowerPic(flowers){
    const image = document.querySelector('img')
    image.src = './flowerPics/Flowers/chrys-red.png'

}




