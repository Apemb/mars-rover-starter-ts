"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionModule = void 0;
const position_1 = require("./position");
const direction_1 = require("./direction");
function positiveModulo10(number) {
    return ((number % 10) + 10) % 10;
}
class PositionModule {
    constructor() {
        this._currentPosition = undefined;
    }
    setInitialPosition(position) {
        this._currentPosition = position;
    }
    get currentPosition() {
        return this._currentPosition;
    }
    moveForward() {
        if (!this._currentPosition) {
            return;
        }
        switch (this._currentPosition.d) {
            case direction_1.Direction.NORTH:
                this.changeYCoordinate(positiveModulo10(this._currentPosition.y - 1));
                break;
            case direction_1.Direction.EST:
                this.changeXCoordinate(positiveModulo10(this._currentPosition.x + 1));
                break;
            case direction_1.Direction.SOUTH:
                this.changeYCoordinate(positiveModulo10(this._currentPosition.y + 1));
                break;
            case direction_1.Direction.WEST:
                this.changeXCoordinate(positiveModulo10(this._currentPosition.x - 1));
                break;
        }
    }
    moveBackward() {
        if (!this._currentPosition) {
            return;
        }
        switch (this._currentPosition.d) {
            case direction_1.Direction.NORTH:
                this.changeYCoordinate(positiveModulo10(this._currentPosition.y + 1));
                break;
            case direction_1.Direction.EST:
                this.changeXCoordinate(positiveModulo10(this._currentPosition.x - 1));
                break;
            case direction_1.Direction.SOUTH:
                this.changeYCoordinate(positiveModulo10(this._currentPosition.y - 1));
                break;
            case direction_1.Direction.WEST:
                this.changeXCoordinate(positiveModulo10(this._currentPosition.x + 1));
                break;
        }
    }
    turnRight() {
        if (!this._currentPosition) {
            return;
        }
        switch (this._currentPosition.d) {
            case direction_1.Direction.NORTH:
                this.changeDirection(direction_1.Direction.EST);
                break;
            case direction_1.Direction.EST:
                this.changeDirection(direction_1.Direction.SOUTH);
                break;
            case direction_1.Direction.SOUTH:
                this.changeDirection(direction_1.Direction.WEST);
                break;
            case direction_1.Direction.WEST:
                this.changeDirection(direction_1.Direction.NORTH);
                break;
        }
    }
    turnLeft() {
        if (!this._currentPosition) {
            return;
        }
        switch (this._currentPosition.d) {
            case direction_1.Direction.NORTH:
                this.changeDirection(direction_1.Direction.WEST);
                break;
            case direction_1.Direction.EST:
                this.changeDirection(direction_1.Direction.NORTH);
                break;
            case direction_1.Direction.SOUTH:
                this.changeDirection(direction_1.Direction.EST);
                break;
            case direction_1.Direction.WEST:
                this.changeDirection(direction_1.Direction.SOUTH);
                break;
        }
    }
    changeXCoordinate(x) {
        if (this._currentPosition) {
            this._currentPosition = new position_1.Position(x, this._currentPosition.y, this._currentPosition.d);
        }
    }
    changeYCoordinate(y) {
        if (this._currentPosition) {
            this._currentPosition = new position_1.Position(this._currentPosition.x, y, this._currentPosition.d);
        }
    }
    changeDirection(d) {
        if (this._currentPosition) {
            this._currentPosition = new position_1.Position(this._currentPosition.x, this._currentPosition.y, d);
        }
    }
}
exports.PositionModule = PositionModule;
