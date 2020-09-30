
// function unique(flowers){
//     let returnArray = []
//     array.forEach((item) => {
//         if(!returnArray.includes(item)){
//         returnArray.push(item)
//         }
//     })
//     return returnArray
// }

// function unique( array ){	return [...new Set( array )]}


function listFlowers(flowers){
    const flowerSet = flowers.map(flower => 
    `<li><a href="${flower.id}">${flower.name}</a></li>
    `)
    const list = document.querySelector('#flower-list')
    return(`
    <ul id="flower-list"></ul>`)
}


export default listFlowers