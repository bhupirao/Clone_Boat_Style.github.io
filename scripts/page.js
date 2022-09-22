function getdata(){
    fetch("./data/airpods.json").then(res => res.json()).then(data =>{
      
        return data;
    })
}

function main(data){
data.forEach(function(el){
    let container2=document.getElementById('main')
    let product=document.createElement('div')

    let image=document.createElement('img')
        image.src=el.image
    let detailBox=document.createElement('div')
    let rating=document.createElement('p')
        rating.innerText=`* ${el.rating}`
    let title=document.createElement('h4')
        title.innerText=el.title
    let price=document.createElement('p')
        price.innerText=` ₹ ${el.price}`    
        detailBox.append(rating,title,price)    
        product.append(image,detailBox)

        container2.append(product)
})
   

    
}

export {main , getdata}