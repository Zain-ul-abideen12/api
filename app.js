fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()
})
.then(function(cards){
    var cardsWraper = document.getElementById("cards")
    for( let i= 0; i< cards.length; i++){
        const card = cards[i]
        const h1= `<h1>${card.title}</h1>`
        const p = `<p>${card.body}</p>`
        const div=`<div class= "product-wrapper">${h1 + p}</div>` 
        cardsWraper.innerHTML += div
    }
}) 