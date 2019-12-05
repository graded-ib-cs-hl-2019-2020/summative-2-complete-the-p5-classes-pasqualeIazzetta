import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
function setup() {
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    createCanvas(500, 500);
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50));
        balls[0] = new Ball(30, 30, 30);
        balls[1] = new Ball(300, 100, 60);
        balls[2] = new Ball(500, 300, 90);
        balls[3] = new Ball(200, 400, 100);
        balls[4] = new Ball(400, 200, 50);
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = new Bubble(random(30));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = new Snowflake(snowflakes[0] =
        );
    }
}
function draw() {
    background("skyblue");
    for (let i = 0; i < numBalls; i++) {
        balls[0].draw();
        balls[1].draw();
        balls[2].draw();
        balls[3].draw();
        balls[4].draw();
        balls[0].move();
        balls[1].move();
        balls[2].move();
        balls[3].move();
        balls[4].move();
    }
}
if (!mouseIsPressed) {
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map