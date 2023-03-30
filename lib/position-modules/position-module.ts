import {Position} from './position'
import {Direction} from './direction'

function positiveModulo10(number: number) {
  return ((number % 10) + 10) % 10
}

export class PositionModule {
  private _currentPosition: Position | undefined

  constructor() {
    this._currentPosition = undefined
  }

  setInitialPosition(position: Position) {
    this._currentPosition = position
  }

  get currentPosition(): any {
    return this._currentPosition
  }

  moveForward() {
    if (!this._currentPosition) {
      return
    }

    switch (this._currentPosition.d) {
      case Direction.NORTH:
        this.changeYCoordinate(positiveModulo10(this._currentPosition.y - 1))
        break
      case Direction.EST:
        this.changeXCoordinate(positiveModulo10(this._currentPosition.x + 1))
        break
      case Direction.SOUTH:
        this.changeYCoordinate(positiveModulo10(this._currentPosition.y + 1))
        break
      case Direction.WEST:
        this.changeXCoordinate(positiveModulo10(this._currentPosition.x - 1))
        break
    }
  }

  moveBackward() {
    if (!this._currentPosition) {
      return
    }

    switch (this._currentPosition.d) {
      case Direction.NORTH:
        this.changeYCoordinate(positiveModulo10(this._currentPosition.y + 1))
        break
      case Direction.EST:
        this.changeXCoordinate(positiveModulo10(this._currentPosition.x - 1))
        break
      case Direction.SOUTH:
        this.changeYCoordinate(positiveModulo10(this._currentPosition.y - 1))
        break
      case Direction.WEST:
        this.changeXCoordinate(positiveModulo10(this._currentPosition.x + 1))

        break
    }
  }

  turnRight() {
    if (!this._currentPosition) {
      return
    }

    switch (this._currentPosition.d) {
      case Direction.NORTH:
        this.changeDirection(Direction.EST)
        break
      case Direction.EST:
        this.changeDirection(Direction.SOUTH)
        break
      case Direction.SOUTH:
        this.changeDirection(Direction.WEST)
        break
      case Direction.WEST:
        this.changeDirection(Direction.NORTH)
        break
    }
  }

  turnLeft() {
    if (!this._currentPosition) {
      return
    }

    switch (this._currentPosition.d) {
      case Direction.NORTH:
        this.changeDirection(Direction.WEST)
        break
      case Direction.EST:
        this.changeDirection(Direction.NORTH)
        break
      case Direction.SOUTH:
        this.changeDirection(Direction.EST)
        break
      case Direction.WEST:
        this.changeDirection(Direction.SOUTH)
        break
    }
  }

  private changeXCoordinate(x: number) {
    if (this._currentPosition) {
      this._currentPosition = new Position(
        x,
        this._currentPosition.y,
        this._currentPosition.d
      )
    }
  }

  private changeYCoordinate(y: number) {
    if (this._currentPosition) {
      this._currentPosition = new Position(
        this._currentPosition.x,
        y,
        this._currentPosition.d
      )
    }
  }

  private changeDirection(d: Direction) {
    if (this._currentPosition) {
      this._currentPosition = new Position(
        this._currentPosition.x,
        this._currentPosition.y,
        d
      )
    }
  }
}
