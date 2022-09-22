import { navbar, footer, menu, more } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()
document.getElementById("menu").innerHTML = menu()
document.getElementById("more").innerHTML = more()
document.getElementById('footer').innerHTML = footer();

let data = JSON.parse(localStorage.getItem("credentials"))

let login =  () => {
  event.preventDefault();

    let  email= document.getElementById("email").value;
    let  password=document.getElementById("password").value;
    
    var check = false;
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i].email == email && data[i].password == password) {
            check = true;
         }
     }
     if (check) {
         alert("Login successfull")
         
         window.location.href = "index.html";
     }else{
         alert("login failed  ");
         document.getElementById("email").value;
         password=document.getElementById("password").value;
     }
     
};
document.getElementById("form").addEventListener("submit",login)

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