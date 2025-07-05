export class FpsController {
    constructor(fps) {
        this.fps = fps;
        this.delay = 1000 / this.fps; // 16.667 ms
        this.start = null;
        this.frame = -1;
    }

    shouldDelay(timestamp) {
        if (this.start === null) this.start = timestamp;

        var frameInLower = Math.floor((timestamp - this.start) / this.delay);
        if (frameInLower > this.frame) {
            this.frame = frameInLower;
            return false;
        } else {
            return true;
        }
    }
}