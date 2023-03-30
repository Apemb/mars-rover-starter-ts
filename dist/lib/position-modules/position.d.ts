import { Direction } from './direction';
export declare class Position {
    private _x;
    private _y;
    private _d;
    constructor(x: number, y: number, d: Direction);
    get x(): number;
    get y(): number;
    get d(): Direction;
}
