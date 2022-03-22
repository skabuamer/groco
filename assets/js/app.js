// let searchForm = document.querySelector('.search-form');


// document.querySelector('#search-btn').onclick = () => {
//     searchForm.classList.toggle('active')
// }


// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () => {
//     shoppingCart.classList.toggle('active')
// }

let clicked = (clas, id, toRemove1, toRemove2, toRemove3) => {
    let comeOut = document.querySelector(clas);
    let goIn1 = document.querySelector(toRemove1)
    let goIn2 = document.querySelector(toRemove2)
    let goIn3 = document.querySelector(toRemove3)

    document.querySelector(id).onclick = () => {
            comeOut.classList.toggle('active')
            goIn1.classList.remove('active')
            goIn2.classList.remove('active')
            goIn3.classList.remove('active')
    }
}
window.onscroll = (toRemove1, toRemove2, toRemove3) => {
    document.querySelector(toRemove1).classList.remove('active')
    document.querySelector(toRemove2).classList.remove('active')
    document.querySelector(toRemove3).classList.remove('active')
}


clicked('.search-form', '#search-btn', '.shopping-cart', '.login-form', '.navbar')

clicked('.shopping-cart', '#cart-btn', '.search-form', '.login-form', '.navbar')

clicked('.login-form', '#login-btn', '.search-form', '.shopping-cart', '.navbar')

clicked('.navbar', '#menu-btn','.search-form', '.shopping-cart', '.login-form')