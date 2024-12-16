const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// 更新畫廊顯示和指示器樣式
function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}
// 下一張圖片
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});
// 上一張圖片
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});
// 點擊指示器跳轉到對應圖片
indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateCarousel();
    });
});

setInterval(() => {
    nextButton.click();
}, 8000);
updateCarousel();
