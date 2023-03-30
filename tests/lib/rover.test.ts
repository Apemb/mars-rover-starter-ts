import {PositionModule} from '../../lib/position-modules/position-module'
import {MapModule} from '../../lib/map-modules/map-module'
import {Console, Rover, RoverDependencies} from '../../lib/rover'
import {expect, sinon} from '../test-helper'
import {Position} from '../../lib/position-modules/position'
import {Direction} from '../../lib/position-modules/direction'
import {SinonStubbedInstance} from 'sinon'

class DummyConsole implements Console {
  log(message: string) {
  }
}

describe('Unit | Class | Rover', () => {

  let console: SinonStubbedInstance<DummyConsole>
  const positionModule = new PositionModule()
  const mapModule = new MapModule()
  const roverParts = { positionModule, mapModule }
  let dependencies: RoverDependencies

  beforeEach(() => {
    console = sinon.createStubInstance(DummyConsole)
    dependencies = { console }
  })

  describe('#constructor', () => {

    it(
      'should initialize displaying the map with the rover position on 1x1xN',
      () => {
        // Given
        const expectedFirstCall = [
          'Initial Position',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   ^                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.NORTH)

        // When
        new Rover(initialPosition, roverParts, dependencies)

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      }
    )

    it(
      'should initialize displaying the map with the rover position on 3x4xN',
      () => {
        // Given
        const expectedFirstCall = [
          'Initial Position',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|       ^             |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(3, 4, Direction.NORTH)

        // When
        new Rover(initialPosition, roverParts, dependencies)

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      }
    )

    it(
      'should initialize displaying the map with the rover position on 7x0xW',
      () => {
        // Given
        const expectedFirstCall = [
          'Initial Position',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|               <     |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(7, 0, Direction.WEST)

        // When
        new Rover(initialPosition, roverParts, dependencies)

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      }
    )
  })

  describe('#run', () => {

    describe('moving forward', () => {

      it('should dispaly the rover moving forward when command is f' +
        ' and direction is N', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|   ^                 |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.NORTH)

        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving forward when command is f' +
        ' and direction is E', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|     >               |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.EST)

        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving forward when command is f' +
        ' and direction is S', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                     |\n' +
          '2|   v                 |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving forward when command is f' +
        ' and direction is W', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1| <                   |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('moving backward', () => {

      it('should dispaly the rover moving backward when command is b' +
        ' and direction is N', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                     |\n' +
          '2|   ^                 |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving backward when command is b' +
        ' and direction is E', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1| >                   |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.EST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving backward when command is b' +
        ' and direction is S', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|   v                 |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover moving backward when command is b' +
        ' and direction is W', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|     <               |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('turning right', () => {

      it('should dispaly the rover turning right when command is r' +
        ' and direction is N', () => {
        // Given
        const expectedFirstCall = [
          'Move: r',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   >                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['r'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning right when command is r' +
        ' and direction is E', () => {
        // Given
        const expectedFirstCall = [
          'Move: r',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   v                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.EST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['r'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning right when command is r' +
        ' and direction is S', () => {
        // Given
        const expectedFirstCall = [
          'Move: r',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   <                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['r'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning right when command is r' +
        ' and direction is W', () => {
        // Given
        const expectedFirstCall = [
          'Move: r',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   ^                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['r'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('turning left', () => {

      it('should dispaly the rover turning left when command is l' +
        ' and direction is N', () => {
        // Given
        const expectedFirstCall = [
          'Move: l',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   <                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['l'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning left when command is l' +
        ' and direction is E', () => {
        // Given
        const expectedFirstCall = [
          'Move: l',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   ^                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.EST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['l'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning left when command is l' +
        ' and direction is S', () => {
        // Given
        const expectedFirstCall = [
          'Move: l',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   >                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['l'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover turning left when command is l' +
        ' and direction is W', () => {
        // Given
        const expectedFirstCall = [
          'Move: l',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|   v                 |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['l'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('crossing the Northern border', () => {

      it('should dispaly the rover crossing to the south' +
        ' when crossing in forward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
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
          '9|   ^                 |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 0, Direction.NORTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover crossing to the south' +
        ' when crossing in backward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
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
          '9|   v                 |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 0, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('crossing the Southern border', () => {

      it('should dispaly the rover crossing to the north' +
        ' when crossing in forward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|   v                 |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 9, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover crossing to the north' +
        ' when crossing in backward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|   ^                 |\n' +
          '1|                     |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 9, Direction.NORTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('crossing the Eastern border', () => {

      it('should dispaly the rover crossing to the west' +
        ' when crossing in forward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                   < |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(0, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover crossing to the west' +
        ' when crossing in backward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                   > |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(0, 1, Direction.EST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('crossing the Western border', () => {

      it('should dispaly the rover crossing to the east' +
        ' when crossing in forward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: f',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1| >                   |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(9, 1, Direction.EST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['f'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })

      it('should dispaly the rover crossing to the east' +
        ' when crossing in backward direction', () => {
        // Given
        const expectedFirstCall = [
          'Move: b',
        ]
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1| <                   |\n' +
          '2|                     |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(9, 1, Direction.WEST)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        rover.run(['b'])

        // Then
        expect(console.log).to.have.been.calledTwice
        expect(console.log.firstCall.args).to.deep.equal(expectedFirstCall)
        expect(console.log.secondCall.args).to.deep.equal(expectedSecondCall)
      })
    })

    describe('running multiple commands', () => {

      it('should dispaly the rover exectuting mutiple commands', async () => {
        // Given
        const expectedSecondCall = [
          '   0 1 2 3 4 5 6 7 8 9\n' +
          ' +---------------------+\n' +
          '0|                     |\n' +
          '1|                     |\n' +
          '2|       >             |\n' +
          '3|                     |\n' +
          '4|                     |\n' +
          '5|                     |\n' +
          '6|                     |\n' +
          '7|                     |\n' +
          '8|                     |\n' +
          '9|                     |\n' +
          ' +---------------------+\n',
        ]
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const rover = new Rover(initialPosition, roverParts, dependencies)
        console.log.reset()

        // When
        await rover.run(['f', 'l', 'f', 'f'])

        // Then
        expect(console.log.callCount).to.deep.equal(8)
        expect(console.log.getCall(7).args).to.deep.equal(expectedSecondCall)
      })
    })
  })
})
