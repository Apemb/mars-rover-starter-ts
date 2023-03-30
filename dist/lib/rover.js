"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
const MOVE_TIME = process.env.NODE_ENV === 'test' ? 0 : 1000;
function positiveModulo10(number) {
    return ((number % 10) + 10) % 10;
}
function moving() {
    return new Promise((resolve) => {
        setTimeout(resolve, MOVE_TIME);
    });
}
class Rover {
    constructor(initialPosition, roverParts, dependencies) {
        this.position = initialPosition;
        this.mapModule = roverParts.mapModule;
        this.positionModule = roverParts.positionModule;
        this.console = dependencies.console;
        this.console.log('Initial Position');
        this.positionModule.setInitialPosition(initialPosition);
        this.displayPosition();
    }
    run(commands) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < commands.length; index++) {
                const command = commands[index];
                yield this.execute(command);
            }
            return Promise.resolve();
        });
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            this.console.log('Move: ' + command);
            switch (command) {
                case 'f':
                    this.positionModule.moveForward();
                    break;
                case 'b':
                    this.positionModule.moveBackward();
                    break;
                case 'r':
                    this.positionModule.turnRight();
                    break;
                case 'l':
                    this.positionModule.turnLeft();
                    break;
            }
            this.displayPosition();
            yield moving();
        });
    }
    displayPosition() {
        const map = this.mapModule.generateMap(this.positionModule.currentPosition);
        this.console.log(map);
    }
}
exports.Rover = Rover;
