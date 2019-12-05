export class Snowflake {
}
let snowflakes = [];
function setup() {
    createCanvas(400, 600);
    fill(240);
    noStroke();
}
function draw() {
    background('brown');
    let t = frameCount / 60;
    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake());
        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    }
    function snowflake() {
        this.posX = 0;
        this.posY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);
        this.radius = sqrt(random(pow(width / 2, 2)));
        this.update = function (time) {
            let w = 0.6;
            let angle = w * time + this.initialangle;
            this.posX = width / 2 + this.radius * sin(angle);
            this.posY += pow(this.size, 0.5);
            if (this.posY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };
        this.display = function () {
            ellipse(this.posX, this.posY, this.size);
        };
    }
    draw();
    void {
        : .color,
        : .x, this: .y + this.size / 2, this: .x, this: .y - this.size / 2,
        : .x + this.size / 2, this: .y, this: .x - this.size / 2, this: .y,
        : .x - this.size / 3, this: .y - this.size / 3, this: .x + this.size / 3, this: .y + this.size / 3,
        : .x - this.size / 3, this: .y + this.size / 3, this: .x + this.size / 3, this: .y - this.size / 3
    };
}
//# sourceMappingURL=snowflakes.js.map