
let mainlogin = document.querySelector(".main-login");
let main = document.querySelector(".main");
let signin = document.querySelector("nav .nav-bar .sign-in");
let nav = document.querySelector("nav");

signin.addEventListener("click",()=>{
   mainlogin.style.opacity=1;
   main.style.opacity=0;
   nav.style.opacity=0;
})


let btn = document.querySelector(".main #switch");
let alreadyacc = document.querySelector(".login");
let create = document.querySelector(".create");

btn.addEventListener("click",function(){
    alreadyacc.style.opacity=1;
    create.style.opacity=0;
    btn.innerHTML="New account";
    alreadyacc.style.zIndex=99;
    create.style.zIndex=-1;
});
btn.addEventListener("dblclick",function(){
    alreadyacc.style.opacity=0;
    create.style.opacity=1;
    btn.innerHTML="Already account";
})
