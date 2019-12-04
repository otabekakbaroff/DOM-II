// Your code goes here
// document.body.style.backgroundColor="black";
let logo=document.querySelector(".logo-heading");
let expand=function(){
    logo.style.fontSize='100px';
}
let shrink=function(){
    logo.style.fontSize='24px';
}
logo.addEventListener('click',function(){
    if(logo.style.fontSize!=='100px'){
        logo.onclick=expand();
    }else if(logo.style.fontSize==='100px'){
        logo.onclick=shrink();
    }
});


let nav=document.querySelector("nav");
let body=document.querySelector("body");
let purple=function(){
    nav.style.backgroundColor='purple';
}
let red=function(){
    nav.style.backgroundColor='red';
}
let orange=function(){
    nav.style.backgroundColor="orange";
}
let white=function(){
    nav.style.backgroundColor="white";
}
nav.addEventListener('mouseenter', red) ;
body.addEventListener('keydown', purple) ;
body.addEventListener('keyup', orange) ;
nav.addEventListener('mouseleave', white);


let content=document.querySelector('.content-section');
let destination=document.querySelector('.content-destination');

let sizeUp=function(){
    content.style.transform="scale(1.5)";
}
let sizeDown=function(){
    content.style.transform="scale(1.0)";
}
let flip=function(){
    destination.style.transform="rotate(180deg)";
}
content.addEventListener('mousedown', sizeUp);
content.addEventListener('mouseup', sizeDown);
destination.addEventListener('dblclick', flip);
function rgb(num) {
    return Math.floor(Math.random() * num);
}
let colorChange = function() {
    let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
}
// let images=document.querySelector('.img-fluid');
let images=document.querySelectorAll("img")[0];
let imgtwo=document.querySelectorAll("img")[1];
let imgthree=document.querySelectorAll("img")[2];
console.log(images);
let x=0;
let degree=function(num){
    x=x+num;
    return x;
}
let flip25deg=function(){
     images.style.transform="rotate("+degree(25)+"deg)";
     imgtwo.style.transform="rotate("+degree(25)+"deg)";
     imgthree.style.transform="rotate("+degree(25)+"deg)";
}

body.onwheel = colorChange;
body.onscroll = flip25deg;

