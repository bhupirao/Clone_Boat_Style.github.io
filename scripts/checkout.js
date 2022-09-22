let arr=JSON.parse(localStorage.getItem("items"))||[];
let main_div=document.getElementById('total_amount')
arr.map(function(el){
    
    let div1=document.createElement('div')
        div1.setAttribute('class','div1')
    let div2=document.createElement('div')
    let div3=document.createElement('div')
        div3.setAttribute('class','div3')
    let image=document.createElement('img')
    image.src=el.image
    let title=document.createElement('p')
        title.innerText=el.title
    div2.append(image,title)
    let price=document.createElement('p')
    price.innerText=`Price: ₹ ${el.price}`
    let strickedOffPrice=document.createElement('p')
        strickedOffPrice.innerText=`₹ ${Number(el.price) + 30 % Number(el.price)} `
    div3.append(price,strickedOffPrice)
    div1.append(div2,div3)
    main_div.append(div1)
    
})
let total=arr.reduce(function (sum,el,index,arr1){
    return sum + Number(el.price)
},0)
let divPrice=document.createElement('div')
    divPrice.setAttribute('class','sub_total')
let p1=document.createElement('p')
    p1.innerText='Subtotal'
let p2=document.createElement('p')
    p2.innerText=`₹ ${total}`
let divShipment=document.createElement('div')
    divShipment.setAttribute('class','sub_total')
let p3=document.createElement('p')
    p3.innerText='Shipping'
let p4=document.createElement('p')
    p4.innerText=`Free`
    divPrice.append(p1,p2)
    divShipment.append(p3,p4)
let div_total=document.createElement('div')
    div_total.setAttribute('id','G-total')
let G_total=document.createElement('p')
    G_total.innerText='Total'
let G_price=document.createElement('p')
    G_price.setAttribute('id','G_price')
    G_price.innerText=`₹ ${total}`
    div_total.append(G_total,G_price)

main_div.append(divPrice,divShipment,div_total)
function Countinue_to_payment(){
    document.getElementById("panel").style.display = "block";
}
