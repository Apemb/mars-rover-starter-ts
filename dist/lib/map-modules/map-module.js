"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapModule = void 0;
const direction_1 = require("../position-modules/direction");
class MapModule {
    generateMap(position) {
        let roverChar = ' ';
        switch (position.d) {
            case direction_1.Direction.NORTH:
                roverChar = '^';
                break;
            case direction_1.Direction.EST:
                roverChar = '>';
                break;
            case direction_1.Direction.SOUTH:
                roverChar = 'v';
                break;
            case direction_1.Direction.WEST:
                roverChar = '<';
                break;
        }
        const mapTemplate = '' +
            '   0 1 2 3 4 5 6 7 8 9\n' +
            ' +---------------------+\n' +
            '0|                     |\n' +
            '1|                     |\n' +
            '2|                     |\n' +
            '3|                     |\n' +
            '4|                     |\n' +
            '5|                     |\n' +
            '6|                     |\n' +
            '7|                     |\n' +
            '8|                     |\n' +
            '9|                     |\n' +
            ' +---------------------+\n';
        const mapBuilderArray = mapTemplate.split('');
        const index = (position.x + 1) * 2 +
            25 * (position.y + 2) - 1;
        mapBuilderArray[index] = roverChar;
        const map = mapBuilderArray.join('');
        return map;
    }
}
exports.MapModule = MapModule;
