export enum Direction {
  NORTH = 'NORTH',
  EST = 'EST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export function directionFromChar(char: string) {
  switch (char) {
    case 'N':
      return Direction.NORTH
    case 'E':
      return Direction.EST
    case 'S':
      return Direction.SOUTH
    case 'W':
      return Direction.WEST
  }
}
