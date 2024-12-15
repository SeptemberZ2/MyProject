//側邊欄位
const sideMenu = document.getElementById("sideMenu");
document.body.addEventListener("mousemove", function(event) {
    if (event.clientX >= window.innerWidth - 150 ) {
        sideMenu.style.right = "0";
    } else {
        sideMenu.style.right = "-240px"; 
    }
});
//圖片輪播1
const slides1 = document.querySelector('.slides1');
const totalSlides1 = document.querySelectorAll('.slides1 img').length;
let currentIndex1 = 0;
function nextSlide1() {
    currentIndex1 = (currentIndex1 + 1) % totalSlides1;
    slides1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}
setInterval(nextSlide1, 5000);
//圖片輪播2
const slides2 = document.querySelector('.slides2');
const totalSlides2 = document.querySelectorAll('.slides2 img').length;
let currentIndex2 = 0;
function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}
setInterval(nextSlide2, 5000);
//圖片輪播3
const slides3 = document.querySelector('.slides3');
const totalSlides3 = document.querySelectorAll('.slides3 img').length;
let currentIndex3 = 0;
function nextSlide3() {
    currentIndex3 = (currentIndex3 + 1) % totalSlides3;
    slides3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
}
setInterval(nextSlide3, 5000);
//圖片輪播4
const slides4 = document.querySelector('.slides4');
const totalSlides4 = document.querySelectorAll('.slides4 img').length;
let currentIndex4 = 0;
function nextSlide4() {
    currentIndex4 = (currentIndex4 + 1) % totalSlides4;
    slides4.style.transform = `translateX(-${currentIndex4 * 100}%)`;
}
setInterval(nextSlide4, 5000);
