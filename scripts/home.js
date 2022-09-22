var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);
    document.querySelector(".line1").style.border="1px solid red"
    document.querySelector(".one").style.color="red"
    fetch("./smartwatch.json").then(function(res){
      return res.json()
      
    }).then(function(res){
      fix(res)
      
    }).catch(function(err){
      console.log(err)
    })

   const fix=(data)=>{
      let data1=data.smartwatch
      data1.map((ele,i)=>{
        
        let div=document.createElement("div")
        div.setAttribute("class","watch-box")

        let imagediv=document.createElement("div")
        imagediv.setAttribute("class","imagediv")
        let image=document.createElement("img")
        
        image.src=ele.image
         
        imagediv.append(image)

         let rating=document.createElement("p")
         
         rating.innerText=ele.rating 

         let div2=document.createElement("div")
         
         div2.setAttribute("class","pricediv")

          let btn=document.createElement("button")
          btn.innerHTML="ADD +"
          btn.setAttribute("class","button1")

         let price=document.createElement("h3")
         price.setAttribute("class","price")
         price.innerText=ele.price

         let strikeoff=document.createElement("p")
         strikeoff.setAttribute("class","strikeoff")
         strikeoff.innerText=ele.strikeoff
         div2.append(price,strikeoff,btn)

         let title=document.createElement("h2")
         title.innerText=ele.title

         let list=document.createElement("ul")

         
         let order1=document.createElement("li")
         order1.innerText="Colour variants for every style"
         let span1=document.createElement("span")
         span1.setAttribute("class","span")
          span1.append(order1)
        
         let order2=document.createElement("li")
         order2.innerText="Fast Charge in just 15 minutes"
         let span2=document.createElement("span")
         span2.setAttribute("class","span")
         span2.append(order2)

         
         let order3=document.createElement("li")
         order3.innerText="Ace your workouts with IPX5 rating"
         let span3=document.createElement("span")
         span3.setAttribute("class","span")
         span3.append(order3)

         list.append(span1,span2,span3)
        
        div.append(imagediv,rating,title,div2,list)
        document.querySelector("#watches").append(div)
        
      })
   }

    
    function fun1(){
      document.querySelector(".one").style.color="red"
      document.querySelector(".two").style.color="white"
      document.querySelector("#watches").innerHTML=null
      document.querySelector(".line1").style.border="1px solid red"
      document.querySelector(".line2").style.border=null
      
    fetch("./smartwatch.json").then(function(res){
      return res.json()
      
    }).then(function(res){
      fix(res)
      
    }).catch(function(err){
      console.log(err)
    })

   const fix=(data)=>{
      let data1=data.smartwatch
      data1.map((ele,i)=>{
        
        let div=document.createElement("div")
        div.setAttribute("class","watch-box")
        

        let imagediv=document.createElement("div")
        imagediv.setAttribute("class","imagediv")
        let image=document.createElement("img")
        
        image.src=ele.image
         
        imagediv.append(image)

         let rating=document.createElement("p")
         
         rating.innerText=ele.rating 

         let div2=document.createElement("div")
         
         div2.setAttribute("class","pricediv")

          let btn=document.createElement("button")
          btn.innerHTML="ADD +"
          btn.setAttribute("class","button1")

         let price=document.createElement("h3")
         price.setAttribute("class","price")
         price.innerText=ele.price

         let strikeoff=document.createElement("p")
         strikeoff.setAttribute("class","strikeoff")
         strikeoff.innerText=ele.strikeoff
         div2.append(price,strikeoff,btn)

         let title=document.createElement("h2")
         title.innerText=ele.title

         let list=document.createElement("ul")

         
         let order1=document.createElement("li")
         order1.innerText="Colour variants for every style"
         let span1=document.createElement("span")
         span1.setAttribute("class","span")
          span1.append(order1)
        
         let order2=document.createElement("li")
         order2.innerText="Fast Charge in just 15 minutes"
         let span2=document.createElement("span")
         span2.setAttribute("class","span")
         span2.append(order2)

         
         let order3=document.createElement("li")
         order3.innerText="Ace your workouts with IPX5 rating"
         let span3=document.createElement("span")
         span3.setAttribute("class","span")
         span3.append(order3)

         list.append(span1,span2,span3)
        
        div.append(imagediv,rating,title,div2,list)
        document.querySelector("#watches").append(div)
        
      })
   }

  }

  function fun2(){
    document.querySelector(".two").style.color="red"
    document.querySelector(".one").style.color="white"
    document.querySelector(".line2").style.border="1px solid red"
    document.querySelector(".line1").style.border=null
      document.querySelector("#watches").innerHTML=null

  fetch("./data.json").then(function(res){
    return res.json()
    
  }).then(function(res){
    fix(res)
    
  }).catch(function(err){
    console.log(err)
  })

 const fix=(data)=>{
    let data1=data.smartwatch
    data1.map((ele,i)=>{
      
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")

      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)

       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 

       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")

        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")

       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price

       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)

       let title=document.createElement("h2")
       title.innerText=ele.title

       let list=document.createElement("ul")

       
       let order1=document.createElement("li")
       order1.innerText="Colour variants for every style"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Fast Charge in just 15 minutes"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)

       
       let order3=document.createElement("li")
       order3.innerText="Ace your workouts with IPX5 rating"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)

       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#watches").append(div)
      
    })
 }

}
document.querySelector("#line1").style.border="1px solid red"
document.querySelector(".ear").style.color="red"
fetch("./airpods.json").then(function(res){
  return res.json()
}).then(function(res){
  airpods(res)
})

const  airpods=(data)=>{
  let data1=data.airpods
  
  data1.map((ele,i)=>{
      
    let div=document.createElement("div")
    div.setAttribute("class","watch-box")

    let imagediv=document.createElement("div")
    imagediv.setAttribute("class","imagediv")
    let image=document.createElement("img")
    
    image.src=ele.image
     
    imagediv.append(image)

     let rating=document.createElement("p")
     
     rating.innerText=ele.rating 

     let div2=document.createElement("div")
     
     div2.setAttribute("class","pricediv")

      let btn=document.createElement("button")
      btn.innerHTML="ADD +"
      btn.setAttribute("class","button1")

     let price=document.createElement("h3")
     price.setAttribute("class","price")
     price.innerText=ele.price

     let strikeoff=document.createElement("p")
     strikeoff.setAttribute("class","strikeoff")
     strikeoff.innerText=ele.strikeoff
     div2.append(price,strikeoff,btn)

     let title=document.createElement("h2")
     title.innerText=ele.title

     let list=document.createElement("ul")

     
     let order1=document.createElement("li")
     order1.innerText="Thumping bass & immersive sound"
     let span1=document.createElement("span")
     span1.setAttribute("class","span")
      span1.append(order1)
    
     let order2=document.createElement("li")
     order2.innerText="Playback of 5H with each charge"
     let span2=document.createElement("span")
     span2.setAttribute("class","span")
     span2.append(order2)

     
     let order3=document.createElement("li")
     order3.innerText="IPX7 rated for complete sweat & water resistance"
     let span3=document.createElement("span")
     span3.setAttribute("class","span")
     span3.append(order3)

     list.append(span1,span2,span3)
    
    div.append(imagediv,rating,title,div2,list)
    document.querySelector("#airpods").append(div)
    
  })
}

function wireless(){
  document.querySelector(".wire").style.color="red"
  document.querySelector(".ear").style.color="white"
  document.querySelector(".wired").style.color="white"
  document.querySelector("#airpods").innerHTML=null
  document.querySelector("#line1").style.border=null
  document.querySelector("#line2").style.border="1px solid red"
  document.querySelector("#line3").style.border=null
  fetch("./rocerzdata.json").then(function(res){
    return res.json()
  }).then(function(res){
    airpods(res)
  })
  
  const  airpods=(data)=>{
    let data1=data.rocerz
    
    data1.map((ele,i)=>{
        
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")
  
      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)
  
       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 
  
       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")
  
        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")
  
       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price
  
       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)
  
       let title=document.createElement("h2")
       title.innerText=ele.title
  
       let list=document.createElement("ul")
  
       
       let order1=document.createElement("li")
       order1.innerText="Thumping bass & immersive sound"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Playback of 5H with each charge"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)
  
       
       let order3=document.createElement("li")
       order3.innerText="IPX7 rated for complete sweat & water resistance"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)
  
       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#airpods").append(div)
      
    })
  }
}

function earbuds(){
  document.querySelector(".wire").style.color="white"
  document.querySelector(".ear").style.color="red"
  document.querySelector(".wired").style.color="white"
  document.querySelector("#airpods").innerHTML=null
  document.querySelector("#line1").style.border="1px solid red"
  document.querySelector("#line2").style.border=null
  document.querySelector("#line3").style.border=null
  fetch("./airpods.json").then(function(res){
    return res.json()
  }).then(function(res){
    airpods(res)
  })
  
  const  airpods=(data)=>{
    let data1=data.airpods
    
    data1.map((ele,i)=>{
        
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")
  
      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)
  
       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 
  
       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")
  
        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")
  
       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price
  
       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)
  
       let title=document.createElement("h2")
       title.innerText=ele.title
  
       let list=document.createElement("ul")
  
       
       let order1=document.createElement("li")
       order1.innerText="Thumping bass & immersive sound"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Playback of 5H with each charge"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)
  
       
       let order3=document.createElement("li")
       order3.innerText="IPX7 rated for complete sweat & water resistance`"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)
  
       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#airpods").append(div)
      
    })
  }
}

function wired(){
  document.querySelector(".wire").style.color="white"
  document.querySelector(".ear").style.color="white"
  document.querySelector(".wired").style.color="red"
  document.querySelector("#airpods").innerHTML=null
  document.querySelector("#line1").style.border=null
  document.querySelector("#line2").style.border=null
  document.querySelector("#line3").style.border="1px solid red"
  
  fetch("./BassHeads.json").then(function(res){
    return res.json()
  }).then(function(res){
    airpods(res)
  })
  
  const  airpods=(data)=>{
    let data1=data.bassheads
    
    data1.map((ele,i)=>{
        
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")
  
      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)
  
       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 
  
       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")
  
        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")
  
       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price
  
       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)
  
       let title=document.createElement("h2")
       title.innerText=ele.title
  
       let list=document.createElement("ul")
  
       
       let order1=document.createElement("li")
       order1.innerText="Thumping bass & immersive sound"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Playback of 5H with each charge"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)
  
       
       let order3=document.createElement("li")
       order3.innerText="IPX7 rated for complete sweat & water resistance"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)
  
       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#airpods").append(div)
      
    })
  }
}


document.querySelector(".wireless").style.color="red"
document.querySelector("#trendline1").style.border="1px solid red"
  fetch("./data/randomdata.json").then(function(res){
    return res.json()
  }).then(function(res){
  
    trending(res)
  })
  
  const trending =(data)=>{
    let data2=data.randomdata
    
    data2.map((ele,i)=>{
        
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")
    
      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)
  
       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 
  
       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")
  
        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")
  
       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price
  
       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)
  
       let title=document.createElement("h2")
       title.innerText=ele.title
  
       let list=document.createElement("ul")
  
       
       let order1=document.createElement("li")
       order1.innerText="Thumping bass & immersive sound"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Playback of 5H with each charge"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)
  
       
       let order3=document.createElement("li")
       order3.innerText="IPX7 rated for complete sweat & water resistance"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)
  
       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#trenddata").append(div)
      
    })
  } 

  function wireles(){
    
    document.querySelector(".wireless").style.color="red"
  document.querySelector(".anc").style.color="white"
  document.querySelector(".wired2").style.color="white"
    document.querySelector("#trenddata").innerHTML=null
  document.querySelector("#trendline1").style.border="1px solid red"
  document.querySelector("#trendline2").style.border=null
  document.querySelector("#trendline3").style.border=null
  
    fetch("./rocerzdata1.json").then(function(res){
      return res.json()
    }).then(function(res){
      console.log(res)
      trending(res)
    })
    
    const trending =(data)=>{
      let data1=data.rocerz
      
      data1.map((ele,i)=>{
          
        let div=document.createElement("div")
        div.setAttribute("class","watch-box")
    
        let imagediv=document.createElement("div")
        imagediv.setAttribute("class","imagediv")
        let image=document.createElement("img")
        
        image.src=ele.image
         
        imagediv.append(image)
    
         let rating=document.createElement("p")
         
         rating.innerText=ele.rating 
    
         let div2=document.createElement("div")
         
         div2.setAttribute("class","pricediv")
    
          let btn=document.createElement("button")
          btn.innerHTML="ADD +"
          btn.setAttribute("class","button1")
    
         let price=document.createElement("h3")
         price.setAttribute("class","price")
         price.innerText=ele.price
    
         let strikeoff=document.createElement("p")
         strikeoff.setAttribute("class","strikeoff")
         strikeoff.innerText=ele.strikeoff
         div2.append(price,strikeoff,btn)
    
         let title=document.createElement("h2")
         title.innerText=ele.title
    
         let list=document.createElement("ul")
    
         
         let order1=document.createElement("li")
         order1.innerText="Thumping bass & immersive sound"
         let span1=document.createElement("span")
         span1.setAttribute("class","span")
          span1.append(order1)
        
         let order2=document.createElement("li")
         order2.innerText="Playback of 5H with each charge"
         let span2=document.createElement("span")
         span2.setAttribute("class","span")
         span2.append(order2)
    
         
         let order3=document.createElement("li")
         order3.innerText="IPX7 rated for complete sweat & water resistance"
         let span3=document.createElement("span")
         span3.setAttribute("class","span")
         span3.append(order3)
    
         list.append(span1,span2,span3)
        
        div.append(imagediv,rating,title,div2,list)
        document.querySelector("#trenddata").append(div)
        
      })
    } 
  }

  function anc()
  { 
    document.querySelector("#trenddata").innerHTML=null
    document.querySelector(".wireless").style.color="white"
    document.querySelector(".anc").style.color="red"
    document.querySelector(".wired2").style.color="white"
    document.querySelector("#trendline1").style.border=null
    document.querySelector("#trendline2").style.border="1px solid red"
    document.querySelector("#trendline3").style.border=null
      fetch("./smartwatch.json").then(function(res){
        return res.json()
      }).then(function(res){
        console.log(res)
        trending(res)
      })
      
      const trending =(data)=>{
        let data1=data.smartwatch
        
        data1.map((ele,i)=>{
            
          let div=document.createElement("div")
          div.setAttribute("class","watch-box")
      
          let imagediv=document.createElement("div")
          imagediv.setAttribute("class","imagediv")
          let image=document.createElement("img")
          
          image.src=ele.image
           
          imagediv.append(image)
      
           let rating=document.createElement("p")
           
           rating.innerText=ele.rating 
      
           let div2=document.createElement("div")
           
           div2.setAttribute("class","pricediv")
      
            let btn=document.createElement("button")
            btn.innerHTML="ADD +"
            btn.setAttribute("class","button1")
      
           let price=document.createElement("h3")
           price.setAttribute("class","price")
           price.innerText=ele.price
      
           let strikeoff=document.createElement("p")
           strikeoff.setAttribute("class","strikeoff")
           strikeoff.innerText=ele.strikeoff
           div2.append(price,strikeoff,btn)
      
           let title=document.createElement("h2")
           title.innerText=ele.title
      
           let list=document.createElement("ul")
      
           
           let order1=document.createElement("li")
           order1.innerText="Thumping bass & immersive sound"
           let span1=document.createElement("span")
           span1.setAttribute("class","span")
            span1.append(order1)
          
           let order2=document.createElement("li")
           order2.innerText="Playback of 5H with each charge"
           let span2=document.createElement("span")
           span2.setAttribute("class","span")
           span2.append(order2)
      
           
           let order3=document.createElement("li")
           order3.innerText="IPX7 rated for complete sweat & water resistance"
           let span3=document.createElement("span")
           span3.setAttribute("class","span")
           span3.append(order3)
      
           list.append(span1,span2,span3)
          
          div.append(imagediv,rating,title,div2,list)
          document.querySelector("#trenddata").append(div)
          
        })
      } 
  }

  function wired2(){
    document.querySelector("#trenddata").innerHTML=null
    document.querySelector(".wireless").style.color="white"
    document.querySelector(".anc").style.color="white"
    document.querySelector(".wired2").style.color="red"
    document.querySelector("#trendline1").style.border=null
    document.querySelector("#trendline3").style.border="1px solid red"
    document.querySelector("#trendline2").style.border=null
    fetch("./BassHeads.json").then(function(res){
      return res.json()
    }).then(function(res){
      console.log(res)
      airpods(res)
    })
    
    const  airpods=(data)=>{
      let data1=data.bassheads
      
      data1.map((ele,i)=>{
          
        let div=document.createElement("div")
        div.setAttribute("class","watch-box")
    
        let imagediv=document.createElement("div")
        imagediv.setAttribute("class","imagediv")
        let image=document.createElement("img")
        
        image.src=ele.image
         
        imagediv.append(image)
    
         let rating=document.createElement("p")
         
         rating.innerText=ele.rating 
    
         let div2=document.createElement("div")
         
         div2.setAttribute("class","pricediv")
    
          let btn=document.createElement("button")
          btn.innerHTML="ADD +"
          btn.setAttribute("class","button1")
    
         let price=document.createElement("h3")
         price.setAttribute("class","price")
         price.innerText=ele.price
    
         let strikeoff=document.createElement("p")
         strikeoff.setAttribute("class","strikeoff")
         strikeoff.innerText=ele.strikeoff
         div2.append(price,strikeoff,btn)
    
         let title=document.createElement("h2")
         title.innerText=ele.title
    
         let list=document.createElement("ul")
    
         
         let order1=document.createElement("li")
         order1.innerText="Thumping bass & immersive sound"
         let span1=document.createElement("span")
         span1.setAttribute("class","span")
          span1.append(order1)
        
         let order2=document.createElement("li")
         order2.innerText="Playback of 5H with each charge"
         let span2=document.createElement("span")
         span2.setAttribute("class","span")
         span2.append(order2)
    
         
         let order3=document.createElement("li")
         order3.innerText="IPX7 rated for complete sweat & water resistance"
         let span3=document.createElement("span")
         span3.setAttribute("class","span")
         span3.append(order3)
    
         list.append(span1,span2,span3)
        
        div.append(imagediv,rating,title,div2,list)
        document.querySelector("#trenddata").append(div)
        
      })
    }
  }


  fetch("./Data/immortalGaming1.json").then(function(res){
    return res.json()
  }).then(function(res){
    console.log(res)
    gaming(res)
  })
  
  const  gaming=(data)=>{
    let data1=data.immortalGaming
    
    data1.map((ele,i)=>{
        
      let div=document.createElement("div")
      div.setAttribute("class","watch-box")
  
      let imagediv=document.createElement("div")
      imagediv.setAttribute("class","imagediv")
      let image=document.createElement("img")
      
      image.src=ele.image
       
      imagediv.append(image)
  
       let rating=document.createElement("p")
       
       rating.innerText=ele.rating 
  
       let div2=document.createElement("div")
       
       div2.setAttribute("class","pricediv")
  
        let btn=document.createElement("button")
        btn.innerHTML="ADD +"
        btn.setAttribute("class","button1")
  
       let price=document.createElement("h3")
       price.setAttribute("class","price")
       price.innerText=ele.price
  
       let strikeoff=document.createElement("p")
       strikeoff.setAttribute("class","strikeoff")
       strikeoff.innerText=ele.strikeoff
       div2.append(price,strikeoff,btn)
  
       let title=document.createElement("h2")
       title.innerText=ele.title
  
       let list=document.createElement("ul")
  
       
       let order1=document.createElement("li")
       order1.innerText="Thumping bass & immersive sound"
       let span1=document.createElement("span")
       span1.setAttribute("class","span")
        span1.append(order1)
      
       let order2=document.createElement("li")
       order2.innerText="Playback of 5H with each charge"
       let span2=document.createElement("span")
       span2.setAttribute("class","span")
       span2.append(order2)
  
       
       let order3=document.createElement("li")
       order3.innerText="IPX7 rated for complete sweat & water resistance"
       let span3=document.createElement("span")
       span3.setAttribute("class","span")
       span3.append(order3)
  
       list.append(span1,span2,span3)
      
      div.append(imagediv,rating,title,div2,list)
      document.querySelector("#gaming").append(div)
      
    })
  }
