#!/usr/bin/env node
import { Rover } from './src/rover.js'
import { PositionModule } from './src/position-modules/position-module.js'
import { MapModule } from './src/map-modules/map-module.js'
import { Position } from './src/position-modules/position.js'
import { directionFromChar } from './src/position-modules/direction.js'
import yargs from 'yargs/yargs'

process.env.NODE_ENV === 'production'

const argv = yargs(process.argv.slice(2))
  .group(['positionX', 'positionY', 'direction'], 'Rover initialization:')
  .group(['commands'], 'Rover commands:')
  .group(['map-size'], 'Rover options:')
  .options({
    'positionX': {
      type: 'count',
      alias: 'x',
      describe: 'initial X landing rover position',
      demandOption: true,
    },
    'positionY': {
      type: 'count',
      alias: 'y',
      describe: 'initial Y landing rover position',
      demandOption: true,
    },
    'direction': {
      type: 'string',
      alias: 'd',
      describe: 'initial landing rover direction',
      demandOption: true,
    },
    'commands': {
      alias: 'c',
      describe: 'provide an array of commands for the rover to execute',
      type: 'array',
      demandOption: true,
    },
    'map-size': {
      describe: 'specify wheter the map is large "L" (10x10) or small "S" (5x5)',
      type: 'string',
      default: 'L',
    }
  })
  .help()
  .wrap(72)
  .coerce('direction', (directionString) => {
    if (!directionString) {
      throw 'Direction must be N S W or E'
    }
    return directionFromChar(directionString as string)
  })
  .coerce('positionX', parseInt)
  .coerce('positionY', parseInt)
  .coerce('commands', (commandStringArray: string[]) => {
    return commandStringArray
  })
  .parseSync()

const direction = argv.direction
const positionX = argv.positionX
const positionY = argv.positionY
const commands = argv.commands
const mapSize = argv['map-size']

const argsAreAllDefined = direction !== undefined
  && positionX !== undefined
  && positionY !== undefined
  && commands !== undefined
  && mapSize !== undefined

if (argsAreAllDefined) {

  const initialPosition = new Position(positionX, positionY, direction)
  const mapModule = new MapModule()
  const positionModule = new PositionModule()

  const roverParts = { mapModule, positionModule }
  const dependencies = { console }

  console.log('~~~~~ ROVER INITIALIZATION ~~~~~\n')

  const rover = new Rover(initialPosition, roverParts, dependencies)

  rover.run(commands)
    .then(() => {
      console.log('\n~~~~~ ROVER TERMINATED ~~~~~\n')
    })
} else {
  console.log('~~~~~ ROVER INITIALIZATION FAILURE ~~~~~\n')
  console.log(`direction: ${ direction } positionX: ${ positionX } positionY: ${ positionY } commands ${ commands }`)
}


