

var heroImg = document.getElementById("hero-img");
var heroTitle = document.getElementById("hero-title");
var heroText = document.getElementById("hero-text");
var next = document.getElementById("arrow-right");
var prev = document.getElementById("arrow-left");
var hamburger = document.getElementById("hamburger-icon");
var nav = document.getElementById("navbar");

var imgSrcArr = ["/images/desktop-image-hero-1.jpg", "/images/desktop-image-hero-2.jpg", "/images/desktop-image-hero-3.jpg"];
var heroTitleArr = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials"
]
var heroTextArr = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."  
] ;
var n = 0;
var isToggled = false;
var currentSrc = imgSrcArr[n];
heroImg.src = currentSrc;
console.log(currentSrc);
console.log(heroImg.src);
// arrow button implementation

next.addEventListener("click", () => {
  if(n < 2){
    n++;
    heroImg.src = imgSrcArr[n];
    heroText.innerText = heroTextArr[n];
    heroTitle.innerText = heroTitleArr[n];
  }else{
    n = 0;
    heroImg.src = imgSrcArr[n];
    heroText.innerText = heroTextArr[n];
    heroTitle.innerText = heroTitleArr[n];
  }
  return;
})
prev.addEventListener("click", () => {
  if(n > 0){
    n--;
    heroImg.src = imgSrcArr[n];
    heroText.innerText = heroTextArr[n];
    heroTitle.innerText = heroTitleArr[n];
  }else{
    n = 2;
    heroImg.src = imgSrcArr[n];
    heroText.innerText = heroTextArr[n];
    heroTitle.innerText = heroTitleArr[n];
  }
  return;
})
hamburger.addEventListener("click", () => {
  if(isToggled){
    hamburger.src = "/images/icon-hamburger.svg";
    nav.style.top = "-1000px";
  }else{
    hamburger.src = "/images/icon-close.svg"
    nav.style.top = "0";
  }
  isToggled = !isToggled;
})