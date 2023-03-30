"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directionFromChar = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["EST"] = "EST";
    Direction["SOUTH"] = "SOUTH";
    Direction["WEST"] = "WEST";
})(Direction = exports.Direction || (exports.Direction = {}));
function directionFromChar(char) {
    switch (char) {
        case 'N':
            return Direction.NORTH;
        case 'E':
            return Direction.EST;
        case 'S':
            return Direction.SOUTH;
        case 'W':
            return Direction.WEST;
    }
}
exports.directionFromChar = directionFromChar;
