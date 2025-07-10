export class Tooltip {
    constructor(json) {
        const start = new Date(1724767200000);

        console.log(json.day);
        console.log(start.toDateString());

        start.setDate(start.getDate() + json.day);

        this.text = json.text;
        this.day = start.toDateString();
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.font = "10vw monospace";
        ctx.fillText(this.day, 10, 200);
    }
}