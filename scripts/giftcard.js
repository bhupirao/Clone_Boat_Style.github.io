import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();
// <--------------------------------------navbar navigation function ------------------------------------------------->
document.getElementById("shop").addEventListener("click", () => {
    event.preventDefault()
    let menu = document.querySelectorAll("#menu");
    console.log(menu)
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
     if(da[0].style.display == "none"){
         
         da[0].style.display = "block"
        }else{
            
            da[0].style.display  = "none"
     }
    })
    
let mainbox=document.getElementById("mainwork");

let box1=document.createElement("div");
    box1.setAttribute("id","box1")
         let imagebox=document.createElement("div")
         imagebox.setAttribute("id","imagebox");
                 let img=document.createElement("img");
                 img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-500_612x.png?v=1615270910";
                 img.setAttribute("id","giftimg")
         imagebox.append(img);

         let contentbox=document.createElement("div");
         contentbox.setAttribute("id","contentbox")
                let gifthead=document.createElement("h2")
                gifthead.innerText="Gift Card";
                gifthead.setAttribute("id","gifthead");

         let stardiv=document.createElement("div");
         stardiv.setAttribute("id","stardiv");
                let star=document.createElement("i");
                star.setAttribute("id","star")
                for(let i=0;i<5;i++){
                    stardiv.innerHTML+=`<i class="fa-solid fa-star">`;
                }
                let view=document.createElement("p");
                view.setAttribute("id","view");
                view.innerText="5(9 reviews)";
        stardiv.append(star,view);

        let pricediv=document.createElement("div");
                let price=document.createElement("div");
                price.setAttribute("id","cardprice");
                price.innerText="₹ 500.00";
        pricediv.append(price);

        let info=document.createElement("div");
        info.setAttribute("id","info");
                let tax_info=document.createElement("p");
                tax_info.innerText="inclusive of all taxes Or 3 interest-free payment of 167 with"
                let tax_img=document.createElement("img");
                tax_img.setAttribute("id","tax_img");
                tax_img.src="https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg"
        info.append(tax_info,tax_img);

        let discount=document.createElement("div")
        discount.setAttribute("id","discount");
               let cashback=document.createElement("p");
               cashback.innerText="Get 20% cashback upto Rs.500 using";
               cashback.setAttribute("id","cashback")
               let cashback_image=document.createElement("img");
               cashback_image.setAttribute("id","cashback_img");
               cashback_image.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Pay-with-rewards_1.png?v=1643270888";
        discount.append(cashback,cashback_image);

        let price_image=document.createElement("div");
        price_image.setAttribute("id","price_image") ;    
        let price_image1=document.createElement("button")
               price_image1.innerText="₹500.00"
               price_image1.addEventListener("click",()=>{
                img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-500_612x.png?v=1615270910"
                price.innerText="₹500.00"
               })
               let price_image2=document.createElement("button")
               price_image2.innerText="₹1000.00"
               price_image2.addEventListener("click",()=>{
                img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-1000_612x.png?v=1615270910"
                price.innerText="₹1000.00"
               })
               let price_image3=document.createElement("button")
               price_image3.innerText="₹2000.00"
               price_image3.addEventListener("click",()=>{
                img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-Card-2000_612x.png?v=1615270911"
                price.innerText="₹2000.00"
               })
               let price_image4=document.createElement("button")
               price_image4.innerText="₹5000.00"
               price_image4.addEventListener("click",()=>{
                img.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Gift-card-5000_612x.png?v=1615270911"
                price.innerText="₹5000.00"
               })
        price_image.append(price_image1,price_image2,price_image3,price_image4);

        let notify=document.createElement("div");
        notify.setAttribute("id","notify");
               let notify1=document.createElement("button");
               notify1.setAttribute("id","notify1");
               notify1.innerText="SOLD OUT"
               let notify2=document.createElement("button");
               notify2.setAttribute("id","notify2");
               notify2.innerText="NOTIFY ME";
        notify.append(notify1,notify2)

    contentbox.append(gifthead,stardiv,pricediv,info,discount,price_image,notify);
     box1.append(imagebox,contentbox);


    // -------------------- box2------------------------------------------------------------------------------
    let box2=document.createElement("div");
    box2.setAttribute("id","box2")
     let btnbox=document.createElement("div");
        btnbox.setAttribute("class","btnbox")
             let btn1=document.createElement("div");
             btn1.innerText="Description"
             let btn2=document.createElement("div");
             btn2.innerText="9 Reviews";
        btnbox.append(btn1,btn2);

      let descbox=document.createElement("div");
        descbox.setAttribute("class","alldiv1")
            let h2=document.createElement("h2");
            h2.innerText="Let Music Be the Best Gift";
            let para=document.createElement("p");
            para.setAttribute("class","para1")
            para.innerText="Whether fitness or groove sessions, gift your friends and family something that fits one and all! The classist, chic, and fiesty collection of headphones, earphones, speakers and so much more! Let them rule the world with a gift that becomes a fashion statement. "
        descbox.append(h2,para);
     box2.append(btnbox,descbox);


    // --------------------------------Box 3-------------------------------------------------
    let box3=document.createElement("div");
    box3.setAttribute("id","box3")
        let imagediv=document.createElement("div");
        let Gimage=document.createElement("img");
        Gimage.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Image-BK-2.png?v=1604672941";
        Gimage.setAttribute("id","allimage")
        imagediv.append(Gimage);
        let Gdiv=document.createElement("div");
        Gdiv.setAttribute("class","alldiv")
        let heading=document.createElement("h2");
        heading.innerText="Things You Should Know"
        let Gpara=document.createElement("ul");
        Gpara.setAttribute("class","para")
        Gpara.innerText="Gift Card can be redeemed only on www.boat-lifestyle.comboAt Gift Cards are valid for 12 months from the date purchase Once purchased, a gift card cannot be cancelled boAt products bought using boAt gift card cannot be cancelled or returned Products can only be exchanged with another piece of the same product in case a defective item is received"
        Gdiv.append(heading,Gpara);
    box3.append(imagediv,Gdiv)
        


// ----------------------------------------box4-------------------------------------------
    let box4=document.createElement("div");
    box4.setAttribute("id","box4")
    let Gimage1=document.createElement("img");
        Gimage1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/158535011131407578939490airdopes-481-2.png?v=1604672765";
        // Gimage1.setAttribute("class","allimage")
        let Gdiv1=document.createElement("div");
        Gdiv1.setAttribute("class","alldiv")
        let heading1=document.createElement("h2");
        heading1.innerText="A Gift To Get The Party Started"
        let Gpara1=document.createElement("ul");
        Gpara1.setAttribute("class","para")
        Gpara1.innerText="Who doesn’t love speakers? Or something to power their dance sessions? The dopest collection of fitness, travel, and even WFH friendly headphones! All gifts are special, some just get remembered more."
        Gdiv1.append(heading1,Gpara1);
    box4.append(Gdiv1,Gimage1)
        

// ---------------------------------------box5------------------------------------------------
    let box5=document.createElement("div");
    box5.setAttribute("id","box5")
    let Gimage2=document.createElement("img");
        Gimage2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner1_3.png?v=1604671811";
        // Gimage2.setAttribute("class","allimage")
        let Gdiv2=document.createElement("div");
        Gdiv2.setAttribute("class","alldiv")
        let heading2=document.createElement("h2");
        heading2.innerText="The Only Rule Is To Be Limitless"
        let Gpara2=document.createElement("ul");
        Gpara2.setAttribute("class","para")
        Gpara2.innerText="Classy, casual, chic, or funky. Headphones and earphones that speak to every fashion. Let your gift be your friends' style statement."
        Gdiv2.append(heading2,Gpara2);
    box5.append(Gimage2,Gdiv2)
   
//------------------------------- box6----------------------------------------------------------
    let box6=document.createElement("div");
    box6.setAttribute("id","box6")
        let lastdiv=document.createElement("div");
        lastdiv.innerText="You may also like"
        lastdiv.setAttribute("id","lastdiv")
        let lastdiv2=document.createElement("div");
        lastdiv2.setAttribute("id","lastdiv2");
        fetch("./Data/randomdata.json").then(res => res.json()).then(data =>{
          
            // console.log(data.randomdata)
            main(data.randomdata)
            // console.log(data.airpods)
        })
       
        function main(data){
            for(let i =0;i<4;i++){
               
                    let product=document.createElement('div')
                    product.setAttribute("id","allproduct")
                     product.addEventListener("click",()=>{
                        let arr=[];
                        arr.push(data[i])
                        localStorage.setItem("details1",JSON.stringify(arr))
                        window.location.href="product.html";
                    })
                       let last_img_div=document.createElement("div");
                       let lastimage=document.createElement("img");
                       lastimage.src=data[i].image;
                       lastimage.setAttribute("id","lastimage")
                       last_img_div.append(lastimage);

                       let last_info=document.createElement("div");
                       last_info.setAttribute("id","last_info")
                           let last_rating=document.createElement("p");
                           last_rating.setAttribute("id","lastrating");
                           last_rating.innerHTML=`<i class="fa-solid fa-star "id="rate"></i>${data[i].rating}`;

                       let last_title=document.createElement("p");
                       last_title.setAttribute("id","title");
                       last_title.innerText=data[i].title;

                       let last_price_div=document.createElement("div");
                       last_price_div.setAttribute("id","lastprice");
                            let last_price=document.createElement("p")
                            last_price.setAttribute("id","lastprice1")
                            last_price.innerText=`₹${data[i].price}`;
                            let last_btn=document.createElement("button");
                            last_btn.innerText="ADD+"
                            last_btn.setAttribute("id","last_btn");
                       last_price_div.append(last_price,last_btn);

                       last_info.append(last_rating,last_title,last_price_div)
                       product.append(last_img_div,last_info);
         lastdiv2.append(product)
       
                   
    
                    // console.log(data.randomdata[i])
                    box6.append(lastdiv,lastdiv2,lastdiv3)
mainbox.append(box1,box2,box3,box4,box5,box6);
        }
    }
    let lastdiv3=document.createElement("div");
    lastdiv3.setAttribute("id","end")
    lastdiv3.innerText="India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!"
    
    box6.append(lastdiv,lastdiv2)
    mainbox.append(box1,box2,box3,box4,box5,box6);

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
