import camera from "./camera.js";

class MapManager {
    WIDTH = 5000;
    HEIGHT = 750;

    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.WIDTH;
        this.canvas.height = this.HEIGHT;

        this.canvas.style.backgroundColor = "gray"; // debugging

        this.pois = [];
    }

    drawPattern() {
        for (let i = 0.5; i < 10; i++) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 20;
            this.ctx.strokeStyle = "orange";
            this.ctx.moveTo(0, 50 * i);
            this.ctx.lineTo(4000, 100 * i);
            this.ctx.stroke();

            i += i / 2;
        }

        let img = new Image();
        img.src = "assets/road.webp";
        img.alt = "heyo this img sucks";
        this.ctx.drawImage(img, 0, 0, 1040, 280, 0, 0, this.WIDTH, this.HEIGHT);

        // img = new Image();
        // img.src = "/assets/high.avif";
        // img.alt = "why am i setting alt if it never breaks";
        // this.ctx.drawImage(img, 0, 0, 740, 886, 100, 100, 740 / 2, 886 / 2);
    }

    update() {
        // ... important events
        this.draw();
    }

    draw() {
        this.ctx.reset();
        this.drawPattern();

        this.pois.forEach((eventItem) => {
            eventItem.draw(this.ctx);
        })
        // this.drawCamera(); // this is for debugging on the scaled map, irrelevant
    }

    drawCamera() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "black";
        this.ctx.rect(camera.position.x, camera.position.y, camera.width, camera.height);
        this.ctx.stroke();
    }
    
    loadPoi(eventItem) {
        this.pois.push(eventItem);
    }
}

export default new MapManager();