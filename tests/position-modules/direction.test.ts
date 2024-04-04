import {
  Direction,
  directionFromChar
} from '../.././src/position-modules/direction'
import { expect } from '../test-helper'

describe('Unit | Class | PositionModules | Direction', () => {

  describe('directionFromChar', () => {

    it('should return SOUTH when char is S', () => {
      // Given
      const char = 'S'

      // When
      const direction = directionFromChar(char)

      // Then
      expect(direction).to.deep.equal(Direction.SOUTH)
    })

    it('should return WEST when char is W', () => {
      // Given
      const char = 'W'

      // When
      const direction = directionFromChar(char)

      // Then
      expect(direction).to.deep.equal(Direction.WEST)
    })

    it('should return NORTH when char is N', () => {
      // Given
      const char = 'N'

      // When
      const direction = directionFromChar(char)

      // Then
      expect(direction).to.deep.equal(Direction.NORTH)
    })

    it('should return EST when char is E', () => {
      // Given
      const char = 'E'

      // When
      const direction = directionFromChar(char)

      // Then
      expect(direction).to.deep.equal(Direction.EST)
    })
  })
})
