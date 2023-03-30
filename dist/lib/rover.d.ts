import { Position } from './position-modules/position';
import { MapModule } from './map-modules/map-module';
import { PositionModule } from './position-modules/position-module';
export interface Console {
    log(message: string): void;
}
export interface RoverDependencies {
    console: Console;
}
export interface RoverParts {
    mapModule: MapModule;
    positionModule: PositionModule;
}
export declare class Rover {
    private position;
    private positionModule;
    private mapModule;
    private console;
    constructor(initialPosition: Position, roverParts: RoverParts, dependencies: RoverDependencies);
    run(commands: string[]): Promise<void>;
    execute(command: string): Promise<void>;
    displayPosition(): void;
}
