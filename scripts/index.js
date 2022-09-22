import { navbar, footer, menu, more } from "../components/navbar.js";
import {slidebox} from "../components/carticon.js";
document.querySelector(".backdrop").innerHTML=slidebox();
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();

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
     if(da[0].style.display == "none"){
         
         da[0].style.display = "block"
        }else{
            
            da[0].style.display  = "none"
     }

})
// experiment


    let home_last_div1=document.createElement("div");
    home_last_div1.setAttribute("id","homelast1")

         let image_last_div1=document.createElement("div");
         image_last_div1.setAttribute("id","imagelastdiv");
              let imgdiv=document.createElement("img");
              imgdiv.setAttribute("id","imgdiv");
              imgdiv.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fierce_-Flamboyant_-Fearless_jpg_563x.jpg?v=1651227694";
         image_last_div1.append(imgdiv);

         let content_last_div1=document.createElement("div");
         content_last_div1.setAttribute("id","contentdiv");


            let head_cont1=document.createElement("h1")
            head_cont1.setAttribute("id","head_cont1");
            head_cont1.innerHTML=`<u id="u">Meet the</u> bo<span id="span">A</span>theads`

            let head_cont2=document.createElement("h3")
            head_cont2.setAttribute("id","head_cont2")
            head_cont2.innerText="K L RAHUL"

            let head_cont3=document.createElement("h1")
            head_cont3.innerText="Fierce. Flamboyant.Fearless."

            let head_cont4=document.createElement("h3")
            head_cont4.innerText="When you hear the crowd roar,be assured that it's KL Rahul making his way to the field.Our hardcore boAthead,KL Rahul,hits it with his performance as well as his fashion statement.On or off field,Rahul always makes #MoveOfTheChampions. "
        content_last_div1.append(head_cont1,head_cont2,head_cont3,head_cont4);
        
        home_last_div1.append(image_last_div1,content_last_div1);



//  box2
    let home_last_div2=document.createElement("div");
    home_last_div2.setAttribute("id","homelast2")
       let upperhead=document.createElement("div");
       upperhead.setAttribute("id","upperhead")
       upperhead.innerText="What They Say About Us."

       let lowerhead=document.createElement("div");
        lowerhead.setAttribute("id","lowerhead");
           let lower1=document.createElement("div");
               let lowerimg=document.createElement("img");
               lowerimg.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testi-1200_284x.png?v=1649980899";
               let lowercont1=document.createElement("div");
               lowercont1.setAttribute("id","color")
                 let head1=document.createElement("p")
                 head1.setAttribute("id","head1")
                 head1.innerText="It is value for money,best sound especially bass";
                 let lowerbtn1=document.createElement("button");
                 lowerbtn1.setAttribute("class","lowerbtn1")
                 lowerbtn1.innerText="Shop Now";
               lowercont1.append(head1,lowerbtn1);

            lower1.append(lowerimg,lowercont1);


           let lower2=document.createElement("div");

           let lowerimg1=document.createElement("img");
               lowerimg1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-2_284x.png?v=1649668053";
               let lowercont2=document.createElement("div");
               lowercont2.setAttribute("id","color")
                 let head2=document.createElement("p");
                 head2.innerText="The battery backup is something unbelievable";
                 head2.setAttribute("id","head1")
                 let lowerbtn2=document.createElement("button");
                 lowerbtn2.setAttribute("class","lowerbtn1")
                 lowerbtn2.innerText="Shop Now";
               lowercont2.append( head2,lowerbtn2);
            lower2.append(lowerimg1,lowercont2);


           let lower3=document.createElement("div");
           let lowerimg2=document.createElement("img");
               lowerimg2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-3_284x.png?v=1649668053";
               let lowercont3=document.createElement("div");
               lowercont3.setAttribute("id","color1")
                 let head3=document.createElement("p");
                 head3.innerText="Amazing product great sound quality and the mic performance is also awesome";
                 head3.setAttribute("id","head1")
                 let lowerbtn3=document.createElement("button");
                 lowerbtn3.setAttribute("class","lowerbtn1")
                 lowerbtn3.innerText="Shop Now";
               lowercont3.append(head3,lowerbtn3);
            lower3.append(lowerimg2,lowercont3);


       lowerhead.append(lower1,lower2,lower3);

    home_last_div2.append(upperhead,lowerhead);







// box3
    let home_last_div3=document.createElement("div");
    home_last_div3.setAttribute("id","home_last_div3")
     let div1=document.createElement("div")
     div1.innerHTML="In the Press"
     div1.setAttribute("id","pdiv")
     let div2=document.createElement("div")
     div2.setAttribute("id","pdiv2")
     div2.innerHTML="Warburg invests $100 mn in boAt"
     let div3=document.createElement("div")
     div3.setAttribute("id","pdiv3")
        let presimg1=document.createElement("img");
        presimg1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_200x.png?v=1649066803";
        let presimg2=document.createElement("img");
        presimg2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Forbes_1_641a219a-af36-45ee-8d3b-90ca148056c1_200x.png?v=1649066820";
        let presimg3=document.createElement("img");
        presimg3.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_200x.png?v=1649066820";
        let presimg4=document.createElement("img");
        presimg4.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ET_1_9f80aa59-c905-4886-b75f-5b96808f2903_200x.png?v=1649066820"
        let presimg5=document.createElement("img");
        presimg5.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821"
    div3.append(presimg1,presimg2,presimg3,presimg4,presimg5);

    home_last_div3.append(div1,div2,div3);





    // box4
    let home_last_div4=document.createElement("div");
    home_last_div4.setAttribute("id","home_last_div4")
        let image4=document.createElement("img");
        image4.setAttribute("id","image4")
        image4.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter-Awards_11-02-2022_5d6a9e4a-d3d4-434b-8846-4403e92c3573_1400x.png?v=1651217615"
     home_last_div4.append(image4);



    //  box5
    let home_last_div5=document.createElement("div");
    home_last_div5.setAttribute("id","home_last_div5");
    let tophead=document.createElement("div");
    tophead.setAttribute("id","tophead");
    tophead.innerText="Brand Promice"

    let bottomhead=document.createElement("div");
    bottomhead.setAttribute("id","bottomhead");
    bottomhead.setAttribute("id","bottomhead")
           let bottom1=document.createElement("div");
           bottom1.setAttribute("id","bottom1")
               let bimg1=document.createElement("img");
               bimg1.setAttribute("id","bimg1")
               bimg1.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367";
               let bcontent1=document.createElement("p");
               bcontent1.innerText="Free Shipping"
            bottom1.append(bimg1,bcontent1)


           let bottom2=document.createElement("div");
           bottom2.setAttribute("id","bottom2")
           let bimg2=document.createElement("img");
           bimg2.setAttribute("id","bimg1")
               bimg2.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367";
               let bcontent2=document.createElement("p");
               bcontent2.innerText="Exclusive Deals"
            bottom2.append(bimg2,bcontent2)


           let  bottom3=document.createElement("div");
           bottom3.setAttribute("id","bottom3")

           let bimg3=document.createElement("img");
           bimg3.setAttribute("id","bimg1")
               bimg3.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367";
               let bcontent3=document.createElement("p");
               bcontent3.innerText="Secure Checkout"
            bottom3.append(bimg3,bcontent3)
   bottomhead.append(bottom1,bottom2,bottom3);

   home_last_div5.append(tophead,bottomhead)


    document.querySelector("#home_lst_part").append(home_last_div1,home_last_div2,home_last_div3,home_last_div4,home_last_div5);


import {show_data} from "./cart.js";
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
