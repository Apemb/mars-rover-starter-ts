"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(x, y, d) {
        this._x = x;
        this._y = y;
        this._d = d;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get d() {
        return this._d;
    }
}
exports.Position = Position;
