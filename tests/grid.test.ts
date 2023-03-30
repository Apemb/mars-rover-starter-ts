/*
import { expect } from './test-helper'
import {Grid} from '../src/grid'

describe('Grid', () => {
  describe('insertToken', () => {
    it('given an empty grid, ' +
      'when inserting a token in the first column, ' +
      'it positions itself at the bottom of the first column', () => {
      // Arrange
      const grid = new Grid()

      // Act
      let columnNumber = 0
      grid.insertToken(columnNumber)

      // Assert
      const resultString = grid.toString()
      const expectedString = '.......\n' +
        '.......\n' +
        '.......\n' +
        '.......\n' +
        '.......\n' +
        'x......'

        expect(resultString).to.equal(expectedString)
    })

    it('given a grid with one token in a column, ' +
      'when inserting a token in that column, ' +
      'it positions itself on top of the previous one', () => {
      // Arrange
      const grid = new Grid()
      const columnNumber = 0
      grid.insertToken(columnNumber)

      // Act
      grid.insertToken(columnNumber)

      // Assert
      const resultString = grid.toString()
      const expectedString = '.......\n' +
        '.......\n' +
        '.......\n' +
        '.......\n' +
        'x......\n' +
        'x......'

      expect(resultString).to.equal(expectedString)
    })

    it('given a grid with two tokens in a column, ' +
      'when inserting a token in that column, ' +
      'it positions itself on top of the previous ones', () => {
      // Arrange
      const grid = new Grid()
      const columnNumber = 0
      grid.insertToken(columnNumber)
      grid.insertToken(columnNumber)

      // Act
      grid.insertToken(columnNumber)

      // Assert
      const resultString = grid.toString()
      const expectedString = '.......\n' +
        '.......\n' +
        '.......\n' +
        'x......\n' +
        'x......\n' +
        'x......'

      expect(resultString).to.equal(expectedString)
    })

    it('given a grid with six tokens in a column, ' +
      'when inserting a token in that column, ' +
      'it throws a ColumnFullError')

    it('given a grid with a token in a column, ' +
      'when inserting a token in another column, ' +
      'it positions the token at the bottom of that other column')

    it('given an empty grid, ' +
      'when inserting a token in a column that does not exist, ' +
      'it throws a InvalidColumnNumberError')
  })
})
*/
