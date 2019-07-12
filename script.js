const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const background = new Image();
const pipeTop = new Image();
const pipeBottom = new Image();
const bird = new Image();
const base = new Image();

backgroundImgs = ['assets/background-day.png', 'assets/background-night.png'];
birdImgs = ['assets/yellowbird-upflap.png', 'assets/yellowbird-midflap.png', 'assets/yellowbird-downflap.png'];

background.src = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];
pipeTop.src = 'assets/pipe-green-top.png';
pipeBottom.src = 'assets/pipe-green.png';
base.src = 'assets/base.png';

background.onload = () => {
    canvas.width = background.width;
    canvas.height = background.height;
};

let c = 0;
bird.flap = () => {
    bird.src = birdImgs[c++ % birdImgs.length];
}
setInterval(bird.flap, 100);


const gap = 85;
bird.posX = 10;
bird.posY = 150;
gravity = 3;

const drawSprites = () => {
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(pipeTop, 160, -100);
    ctx.drawImage(pipeBottom, 160, pipeTop.height-100 + gap);
    ctx.drawImage(base, 0, background.height - base.height);
    ctx.drawImage(bird, bird.posX, bird.posY);

    bird.posY += gravity;
    window.requestAnimationFrame(drawSprites);
};
drawSprites();


document.addEventListener('keydown', (e) => {
    bird.posY -= 80;
});




// pipe.onload = () => {
//     pipe.positionX = canvas.width;
//     let pipeMotion = () => {
//         ctx.drawImage(pipe, pipe.positionX, background.height - base.height);
//         ctx.drawImage(pipe, pipe.positionX, background.height - base.height);
//     }
//     pipeMotion();
// }


// base.onload = () => {
//     base.positionX = 0;
//     let baseMotion = () => {
//         ctx.drawImage(base, base.positionX, background.height - base.height);
//         if (base.positionX === canvas.width-base.width) {
//             base.positionX = 0;
//         } else {
//             base.positionX -= 1;
//         }
//         window.requestAnimationFrame(baseMotion);
//     }
//     baseMotion();
// };