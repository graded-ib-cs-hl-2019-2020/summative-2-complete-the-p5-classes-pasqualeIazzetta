export class Snowflake {

let snowflakes: any[] | never[] = [];

function setup() {
    createCanvas(400, 600);
    fill(240);
    noStroke();
}

function draw(this: any) {
    background('brown');
    let t = frameCount / 60;


    for (let i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake());


        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    }


    function snowflake(this: any) {

        this.posX = 0;
        this.posY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);


        this.radius = sqrt(random(pow(width / 2, 2)));

        this.update = function (time: number) {

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


    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */

    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

}
