import map from "../managers/mapManager.js";

class PositionPlacer {
    MAP_WIDTH = map.WIDTH;
    MAP_HEIGHT = map.HEIGHT;
    MAX_DAYS = 315; // days since aug 28
    BUFFER_L = 100; 
    BUFFER_R = 100;
    BUFFER = this.BUFFER_L + this.BUFFER_R;
    VIBES_SCALE = 1.2; // actually 1 self incorporated buffer

    getSizeScaling(preset, width, height) {
        const max = Math.max(width, height);
        let nWidth = width / max;
        let nHeight = height / max;

        switch (preset) {
            case "big":
                return {
                    width: nWidth * 400,
                    height: nHeight * 400,
                }

            case "mid":
                return {
                    width: nWidth * 200,
                    height: nHeight * 200,
                }

                
            case "small":
                return {
                    width: nWidth * 200,
                    height: nHeight * 200,
                }
            
            default: // invalid
                 return {
                    width: 200,
                    height: 200,
                }
        }
    }

    getXForDay(day) {
        return this.BUFFER_L + (day / this.MAX_DAYS) * (this.MAP_WIDTH - this.BUFFER);
    }

    offsetX(width) {
        return width / 2;
    }

    // higher vibes better
    getYForVibes(vibes) {
        return (this.MAP_HEIGHT / 2) - (vibes / this.VIBES_SCALE) * (this.MAP_HEIGHT / 2);
    }

    offsetY(heig) {
        return heig / 2;
    }
}

export default new PositionPlacer();