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


let submit = document.querySelector(".main form .submit");
let signin = document.querySelector("nav .nav-bar.sign-in");
let xyz = document.querySelector(".xyz");

submit.addEventListener("click", ()=>{
    xyz.innerHTML="log out";
    btn.innerHTML="working";
})
