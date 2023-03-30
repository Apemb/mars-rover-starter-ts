import {Position} from '../../../lib/position-modules/position'
import {Direction} from '../../../lib/position-modules/direction'
import {PositionModule} from '../../../lib/position-modules/position-module'
import {expect} from '../../test-helper'

describe('Unit | Class | PositionModules | Position Module', () => {

  describe('#moveForward', () => {

    it(
      'should update the rover position accordingly when direction is North',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const expectedPosition = new Position(1, 0, Direction.NORTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveForward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is Est',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.EST)
        const expectedPosition = new Position(2, 1, Direction.EST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveForward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is South',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const expectedPosition = new Position(1, 2, Direction.SOUTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveForward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is West',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.WEST)
        const expectedPosition = new Position(0, 1, Direction.WEST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveForward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )
  })

  describe('#moveBackward', () => {

    it(
      'should update the rover position accordingly when direction is North',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const expectedPosition = new Position(1, 2, Direction.NORTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveBackward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is Est',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.EST)
        const expectedPosition = new Position(0, 1, Direction.EST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveBackward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is South',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const expectedPosition = new Position(1, 0, Direction.SOUTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveBackward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is West',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.WEST)
        const expectedPosition = new Position(2, 1, Direction.WEST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.moveBackward()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )
  })

  describe('#turnRight', () => {

    it(
      'should update the rover position accordingly when direction is North',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const expectedPosition = new Position(1, 1, Direction.EST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnRight()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is Est',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.EST)
        const expectedPosition = new Position(1, 1, Direction.SOUTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnRight()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is South',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const expectedPosition = new Position(1, 1, Direction.WEST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnRight()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is West',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.WEST)
        const expectedPosition = new Position(1, 1, Direction.NORTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnRight()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )
  })

  describe('#turnLeft', () => {

    it(
      'should update the rover position accordingly when direction is North',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.NORTH)
        const expectedPosition = new Position(1, 1, Direction.WEST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnLeft()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is Est',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.EST)
        const expectedPosition = new Position(1, 1, Direction.NORTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnLeft()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is South',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.SOUTH)
        const expectedPosition = new Position(1, 1, Direction.EST)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnLeft()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )

    it(
      'should update the rover position accordingly when direction is West',
      () => {
        // Given
        const initialPosition = new Position(1, 1, Direction.WEST)
        const expectedPosition = new Position(1, 1, Direction.SOUTH)
        const positionModule = new PositionModule()
        positionModule.setInitialPosition(initialPosition)

        // When
        positionModule.turnLeft()

        // Then
        const position = positionModule.currentPosition
        expect(position).to.be.an.instanceOf(Position)
        expect(position).to.deep.equal(expectedPosition)
      }
    )
  })
})
