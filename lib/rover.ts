import {Position} from './position-modules/position'
import {MapModule} from './map-modules/map-module'
import {PositionModule} from './position-modules/position-module'

const MOVE_TIME = process.env.NODE_ENV === 'test' ? 0 : 1000

function positiveModulo10(number: number) {
  return ((number % 10) + 10) % 10
}

function moving() {
  return new Promise((resolve) => {
    setTimeout(resolve, MOVE_TIME)
  })
}

export interface Console {
  log(message: string): void
}

export interface RoverDependencies {
  console: Console
}

export interface RoverParts {
  mapModule: MapModule
  positionModule: PositionModule
}

export class Rover {
  private position: Position
  private positionModule: PositionModule
  private mapModule: MapModule
  private console: Console

  constructor(
    initialPosition: Position,
    roverParts: RoverParts,
    dependencies: RoverDependencies
  ) {
    this.position = initialPosition
    this.mapModule = roverParts.mapModule
    this.positionModule = roverParts.positionModule
    this.console = dependencies.console

    this.console.log('Initial Position')
    this.positionModule.setInitialPosition(initialPosition)
    this.displayPosition()
  }

  async run(commands: string[]) {

    for (let index = 0; index < commands.length; index++) {
      const command = commands[index]
      await this.execute(command)
    }
    return Promise.resolve()
  }

  async execute(command: string) {
    this.console.log('Move: ' + command)

    switch (command) {
      case 'f':
        this.positionModule.moveForward()
        break
      case 'b':
        this.positionModule.moveBackward()
        break
      case 'r':
        this.positionModule.turnRight()
        break
      case 'l':
        this.positionModule.turnLeft()
        break
    }

    this.displayPosition()

    await moving()
  }

  displayPosition() {

    const map = this.mapModule.generateMap(this.positionModule.currentPosition)

    this.console.log(map)
  }
}
