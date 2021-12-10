
// code for navigation stick at the bottom

window.onscroll = function() {myFunction()};

var header = document.getElementById("main-nav");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    document.querySelector('.nav-full').classList.add("sticky");
  } else {
     document.querySelector('.nav-full').classList.remove("sticky");
  }
}

// code executes after click on the hamberger icon 
let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let link1 =document.querySelector('.click1');
let link2 =document.querySelector('.click2');
let link3=document.querySelector('.click3');
let link4=document.querySelector('.click4');
let link5=document.querySelector('.click5');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');

});

// code executes after click on the times icon 
times.addEventListener('click', function(){
  mobileNav.classList.remove('open');

});

// hamberger options 
link1.addEventListener('click', function() {
  mobileNav.classList.remove('open');
});
link2.addEventListener('click', function() {
  mobileNav.classList.remove('open');
});
link3.addEventListener('click', function() {
  mobileNav.classList.remove('open');
});
link4.addEventListener('click', function() {
  mobileNav.classList.remove('open');
});
link5.addEventListener('click', function() {
  mobileNav.classList.remove('open');
});
