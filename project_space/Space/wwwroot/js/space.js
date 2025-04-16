//生成流星
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    const icon = document.createElement('i');
    icon.classList.add('fa-regular', 'fa-star');
    meteor.appendChild(icon);
    //0~1小於0.5得true，則從左側生成，反之flase的話右側
    const fromLeft = Math.random() < 0.5;
    meteor.style.left = fromLeft ? '-50px' : '100vw';
    //生成範圍
    meteor.style.top = `${Math.random() * 400}px`;
    //隨機大小
    const randomSize = Math.floor(Math.random() * 15) + 10;
    meteor.style.fontSize = `${randomSize}px`;

    document.body.appendChild(meteor);
    //初始座標
    let posX = parseFloat(meteor.style.left);
    let posY = parseFloat(meteor.style.top);
    //隨機飛行角度(30度 ~ 60度)
    let Deg = Math.random() * 30 + 30;
    let Rad = Deg * (Math.PI / 180); //角度換弧度:1度=(3.1415.../180)弧度 我測量學沒有白學

    //飛行速度
    let speed = Math.random() * 2 + 3;

    //初始方向向量
    let velocityX = Math.cos(Rad) * speed * (fromLeft ? 1 : -1);
    let velocityY = Math.sin(Rad) * speed;
    //流星移動
    function move() {
        posX += velocityX;
        posY += velocityY;
        meteor.style.transform = `translate(${posX}px, ${posY}px)`;
        //超過畫面範圍刪除流星
        if (posY > window.innerHeight) {
            meteor.remove();
        } else {
            requestAnimationFrame(move);
        }
    }

    move();
}
//生成流星機率: 65%
window.addEventListener("scroll", () => {
    if (Math.random() < 0.65) createMeteor();
});
//星辰
const canvas = document.getElementById('stars');
//取得畫筆
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 800; i++) {
    stars.push({
        x: Math.random() * canvas.width,//(0~1)*畫布寬度生成出隨機x軸位置
        y: Math.random() * canvas.height,//隨機y軸位置
        radius: Math.random() * 1.5,//大小
        alpha: Math.random(),//亮度
        delta: Math.random() * 0.02//閃爍速度
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
        ctx.beginPath();
        ctx.globalAlpha = s.alpha;
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        s.alpha += s.delta;
        if (s.alpha <= 0 || s.alpha >= 1) s.delta = -s.delta;
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animateStars);
}
animateStars();
