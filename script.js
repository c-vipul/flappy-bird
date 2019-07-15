const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const background = new Image();
const pipeTop = new Image();
const pipeBottom = new Image();
const bird = new Image();
const base = new Image();
const score = new Image();
const gameOver = new Image();

backgroundImgs = ['assets/background-day.png', 'assets/background-night.png'];
birdImgs = ['assets/yellowbird-upflap.png', 'assets/yellowbird-midflap.png', 'assets/yellowbird-downflap.png'];

background.src = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];
pipeTop.src = 'assets/pipe-green-top.png';
pipeBottom.src = 'assets/pipe-green.png';
base.src = 'assets/base.png';
score.src = 'assets/0.png';
gameOver.src = 'assets/gameover.png';

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
gravity = 2;
score.count = 10;
gameOver.status = false;

const pipes = [];
pipes[0] = {
    posX: canvas.width,
    posY: -78
}

const drawSprites = () => {
    ctx.drawImage(background, 0, 0);
    pipes.forEach((pipe) => {
        ctx.drawImage(pipeTop, pipe.posX, pipe.posY);
        ctx.drawImage(pipeBottom, pipe.posX, pipeTop.height + pipe.posY + gap);
        pipe.posX--;
        if (pipe.posX === 75) {
            pipes.push({
                posX: canvas.width,
                posY: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
            });
        }
        if (bird.posX + bird.width >= pipe.posX && bird.posX <= pipe.posX + pipeTop.width && (bird.posY <= pipe.posY + pipeTop.height || bird.posY + bird.height >= pipeTop.height + pipe.posY + gap) || bird.posY + bird.height >= background.height - base.height) {
            gameOver.status = true;
        }
        if (pipe.posX === 10) {
            score.count++;
        }
    });

    ctx.drawImage(base, 0, background.height - base.height);
    ctx.drawImage(bird, bird.posX, bird.posY);
    // console.log(score.count.toString().split(''));
    score.count.toString().split('').forEach((num, i) => {
        console.log(num)
        score.src = `assets/${num}.png`;
        ctx.drawImage(score, 120 + (i*25), 50);
    });
    if (gameOver.status) {
        return ctx.drawImage(gameOver, 50, 180);
    }

    bird.posY += gravity;
    window.requestAnimationFrame(drawSprites);
};
drawSprites();


document.addEventListener('keydown', (e) => {
    bird.posY -= 50;
});