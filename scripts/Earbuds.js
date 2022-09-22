import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();
//<------------------------------------------------------navigation funcationality--------------------------------------->
document.getElementById("shop").addEventListener("click", () => {
    event.preventDefault()
    let menu = document.querySelectorAll("#menu");

    if (menu[0].style.display == "grid") {
        menu[0].style.display = "none"
    } else {
        menu[0].style.display = "grid"
    }

})
document.getElementById("other").addEventListener("click", () => {
    event.preventDefault();
    let more = document.getElementById("more");
    let da = more.children
    console.log(da[0])
    if (da[0].style.display == "none") {

        da[0].style.display = "block"
    } else {

        da[0].style.display = "none"
    }

})


let container = document.getElementById('container')

let poster = document.createElement('img')
poster.setAttribute('id', 'poster')
poster.src = 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734'
let h1 = document.createElement('h1')
h1.innerText = 'Wireless Earbuds'
container.append(poster, h1)
fetch("./Data/airpods.json").then(res => res.json()).then(data => {
    main(data.airpods)
    console.log(data.airpods)
})

function main(data) {
    document.getElementById('items').innerText = `${data.length} products`
    data.forEach(function (el) {
        let container2 = document.getElementById('main')
        let product = document.createElement('div')


        product.addEventListener("click", () => {
            let arr = [];
            arr.push(el)
            localStorage.setItem("details1", JSON.stringify(arr))
            window.location.href = "product.html";
        })

        let image = document.createElement('img')
        image.src = el.image
        let detailBox = document.createElement('div')
        let rating = document.createElement('p')

        rating.setAttribute('id', 'rating')
        rating.innerHTML = `<i class="fa-solid fa-star "></i> ${el.rating}`



        let title = document.createElement('h4')
        title.innerText = el.title
        let priceBoxMain = document.createElement('div')
        priceBoxMain.setAttribute('id', 'priceBoxMain')
        let priceBox = document.createElement('div')
        priceBox.setAttribute('id', 'priceBox')
        let btn = document.createElement('button')
        btn.innerText = 'ADD+'
          btn.setAttribute("class","btnadd")
        let price = document.createElement('p')
        price.innerText = `₹ ${el.price}`


        let strikedOffPrice = document.createElement('p')
        strikedOffPrice.innerText = ` ₹ ${Number(el.price) + 30 % Number(el.price)} `
        priceBox.append(price, strikedOffPrice)


        priceBoxMain.append(priceBox, btn)
        detailBox.append(rating, title, priceBoxMain)
        product.append(image, detailBox)

        container2.append(product)
    })
}

import { slidebox } from "../components/carticon.js";
document.querySelector(".backdrop").innerHTML = slidebox();

import { show_data } from "./cart.js";
show_data();

let user = document.getElementsByClassName("fa-user");
user[0].addEventListener("click",()=>{
    window.location.href="signUp.html"
})
let gifts = document.getElementsByClassName("fa-gifts");
gifts[0].addEventListener("click",()=>{
    window.location.href="giftcard.html"
})

let logo = document.getElementById("logo");
logo.addEventListener("click",()=>{
    window.location.href = "index.html"
    
})