import { Position } from './position';
export declare class PositionModule {
    private _currentPosition;
    constructor();
    setInitialPosition(position: Position): void;
    get currentPosition(): any;
    moveForward(): void;
    moveBackward(): void;
    turnRight(): void;
    turnLeft(): void;
    private changeXCoordinate;
    private changeYCoordinate;
    private changeDirection;
}
