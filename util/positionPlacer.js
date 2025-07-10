import map from "../managers/mapManager.js";

class PositionPlacer {
    MAP_WIDTH = map.WIDTH;
    MAP_HEIGHT = map.HEIGHT;
    MAX_DAYS = 315; // days since aug 28
    BUFFER_L = 500; 
    BUFFER_R = 500;
    BUFFER = this.BUFFER_L + this.BUFFER_R;
    VIBES_SCALE = 2.5; // actually 1 self incorporated buffer

    getSizeScaling(preset, width, height) {
        const max = Math.max(width, height);
        let nWidth = width / max;
        let nHeight = height / max;

        switch (preset) {
            case "big":
                return {
                    width: nWidth * 200,
                    height: nHeight * 200,
                }

            case "mid":
                return {
                    width: nWidth * 140,
                    height: nHeight * 140,
                }

                
            case "small":
                return {
                    width: nWidth * 100,
                    height: nHeight * 100,
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