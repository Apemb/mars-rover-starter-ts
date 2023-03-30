#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rover_1 = require("./lib/rover");
const position_module_1 = require("./lib/position-modules/position-module");
const map_module_1 = require("./lib/map-modules/map-module");
const position_1 = require("./lib/position-modules/position");
const direction_1 = require("./lib/position-modules/direction");
const yargs = __importStar(require("yargs"));
process.env.NODE_ENV === 'production';
const argv = yargs
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
    }
})
    .help()
    .wrap(72)
    .coerce('direction', (directionString) => {
    if (!directionString) {
        throw 'Direction must be N S W or E';
    }
    return (0, direction_1.directionFromChar)(directionString);
})
    .coerce('positionX', parseInt)
    .coerce('positionY', parseInt)
    .coerce('commands', (commandStringArray) => {
    return commandStringArray;
})
    .parseSync();
const direction = argv.direction;
const positionX = argv.positionX;
const positionY = argv.positionY;
const commands = argv.commands;
if (direction && positionX && positionY && commands) {
    const initialPosition = new position_1.Position(positionX, positionY, direction);
    const mapModule = new map_module_1.MapModule();
    const positionModule = new position_module_1.PositionModule();
    const roverParts = { mapModule, positionModule };
    const dependencies = { console };
    console.log('~~~~~ ROVER INITIALIZATION ~~~~~\n');
    const rover = new rover_1.Rover(initialPosition, roverParts, dependencies);
    rover.run(commands)
        .then(() => {
        console.log('\n~~~~~ ROVER TERMINATED ~~~~~\n');
    });
}
