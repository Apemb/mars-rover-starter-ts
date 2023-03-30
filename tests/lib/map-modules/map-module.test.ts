import {Position} from '../../../lib/position-modules/position'
import {Direction} from '../../../lib/position-modules/direction'
import {MapModule} from '../../../lib/map-modules/map-module'
import {expect} from '../../test-helper'

describe('Unit | Class | MapModules | Map Module', () => {

  beforeEach(() => {
  })

  describe('#generateMap', () => {

    it('should generate the map with the rover at position 1, 1 East', () => {
      // Given
      const expectedMap =
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
        ' +---------------------+\n'
      const position = new Position(1, 1, Direction.EST)
      const mapModule = new MapModule()

      // When
      const map = mapModule.generateMap(position)

      // Then
      expect(map).to.equal(expectedMap)
    })

    it('should generate the map with the rover at position 2, 4 North', () => {
      // Given
      const expectedMap =
        '   0 1 2 3 4 5 6 7 8 9\n' +
        ' +---------------------+\n' +
        '0|                     |\n' +
        '1|                     |\n' +
        '2|                     |\n' +
        '3|                     |\n' +
        '4|     ^               |\n' +
        '5|                     |\n' +
        '6|                     |\n' +
        '7|                     |\n' +
        '8|                     |\n' +
        '9|                     |\n' +
        ' +---------------------+\n'
      const position = new Position(2, 4, Direction.NORTH)
      const mapModule = new MapModule()

      // When
      const map = mapModule.generateMap(position)

      // Then
      expect(map).to.equal(expectedMap)
    })

    it('should generate the map with the rover at position 7, 0 West', () => {
      // Given
      const expectedMap =
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
        ' +---------------------+\n'
      const position = new Position(7, 0, Direction.WEST)
      const mapModule = new MapModule()

      // When
      const map = mapModule.generateMap(position)

      // Then
      expect(map).to.equal(expectedMap)
    })

    it('should generate the map with the rover at position 9, 9 South', () => {
      // Given
      const expectedMap =
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
        '9|                   v |\n' +
        ' +---------------------+\n'
      const position = new Position(9, 9, Direction.SOUTH)
      const mapModule = new MapModule()

      // When
      const map = mapModule.generateMap(position)

      // Then
      expect(map).to.equal(expectedMap)
    })
  })
})
