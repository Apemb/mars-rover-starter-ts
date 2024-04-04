import {Direction} from './direction.js'

export class Position {
  private _x: number
  private _y: number
  private _d: Direction

  constructor(x: number, y: number, d: Direction) {
    this._x = x
    this._y = y
    this._d = d
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get d(): Direction {
    return this._d
  }
}
