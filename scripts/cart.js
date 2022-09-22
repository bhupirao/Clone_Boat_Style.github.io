let data=JSON.parse(localStorage.getItem("items"));
console.log("data",data);
// let count=1;

function show_data(){
data.map((el,index)=>{
    let count=1;
    
    let box=document.createElement("div");
    let img=document.createElement("img");
    let price=document.createElement("h3");
    let title=document.createElement("h4");
   let box2=document.createElement("div");
   box.setAttribute("id","scroll_product")

    title.innerText=el.title;
    img.src=el.image;
    price.innerText=`₹ ${el.price}`;
    let strike=document.createElement("p");
    strike.innerText=`₹ ${Number(el.price)*2}`
    strike.setAttribute("id","strike_not")
    let buttoninc=document.createElement("button");
    buttoninc.innerText="+"
    buttoninc.addEventListener("click",function(){
        increase(count++)
    })
    let buttondec=document.createElement("button");
    buttondec.innerText="-"
    buttondec.addEventListener("click",function(){
        decrease(count--)
    })
    
    //  sum=sum+Number(el.price)
    let totalprice=JSON.parse(localStorage.getItem("price"))
    document.getElementById("amount").innerText=totalprice;

    let but_box=document.createElement("div")
    but_box.setAttribute("id","but_box")
    let count_value=document.createElement("h4");
    count_value.innerText=count
    let removebtn=document.createElement("div");
    removebtn.addEventListener("click",()=>{
        remove(el,index)
    })
    removebtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
     let price_box=document.createElement("div");
     price_box.setAttribute("id","price_box")
     price_box.append(price,strike);
    let remove_box=document.createElement("div");
    but_box.append(buttoninc,count_value,buttondec)
    remove_box.append(but_box,removebtn)
    remove_box.setAttribute("id","remove_box")
    box2.append(title,price_box,remove_box)
    box.append(img,box2);
    document.getElementById("not_main_scroll").append(box)
    function increase(count){
    // count_value.innerHTML=null;
  
       count_value.innerText=count
     
      }
      function decrease(count){
        //   count--
          if(count<=0){
              count=1;
              count_value.innerText=count
          }
          else{
        count_value.innerText=count
       
          }
        }
      })
    }
    // document.getElementById("god").addEventListener("scroll")

    // let count=1;

 function showas_data(el){
     let index = data.length-1
   let count=1;
 
    let box=document.createElement("div");
    let img=document.createElement("img");
    let price=document.createElement("h3");
    let title=document.createElement("h4");
   let box2=document.createElement("div");
   box.setAttribute("id","scroll_product")

    title.innerText=el.title;
    img.src=el.image;
    price.innerText=`${el.price}`;
    let strike=document.createElement("p");
    strike.innerText=`₹ ${Number(el.price)*2}`
    strike.setAttribute("id","strike_not")
    let buttoninc=document.createElement("button");
    buttoninc.innerText="+"
    buttoninc.addEventListener("click",function(){
        increase(count++)
    })
    let buttondec=document.createElement("button");
    buttondec.innerText="-"
    buttondec.addEventListener("click",function(){
        decrease(count--)
    })
    let but_box=document.createElement("div")
    but_box.setAttribute("id","but_box")
    let count_value=document.createElement("h4");
    count_value.innerText=count
    let removebtn=document.createElement("div");
    removebtn.addEventListener("click",()=>{
        remove(el,index)
    })
    removebtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
     let price_box=document.createElement("div");
     price_box.setAttribute("id","price_box")
     price_box.append(price,strike);
    let remove_box=document.createElement("div");
    but_box.append(buttoninc,count_value,buttondec)
    remove_box.append(but_box,removebtn)
    remove_box.setAttribute("id","remove_box")
    box2.append(title,price_box,remove_box)
    box.append(img,box2);
    document.getElementById("not_main_scroll").append(box)
    function increase(count){
    // count_value.innerHTML=null;
  
       count_value.innerText=count
       
      }
      function decrease(count){
          if(count<=0){
              count=1;
              count_value.innerText=count;
          }
          else{
        count_value.innerText=count
       
        }
    }
      }
    //   function remove1(el,index){
         
    //       data.splice(index,1);
    //       localStorage.setItem("items",JSON.stringify(data));
    //       window.location.reload();
    //   }
      function remove(el,index){
         
        data.splice(index,1);
        localStorage.setItem("items",JSON.stringify(data));
        window.location.reload();
    }
      
export {show_data,showas_data}