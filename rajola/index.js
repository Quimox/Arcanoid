import { Game } from './scenes/game.js';                                         //Importe de diferentes escenas
import { Congratulations } from './scenes/congratulations.js';
import { Start } from './scenes/start.js';
import { Gameover } from './scenes/gameover.js';

console.log("hola");

const config = {
    type: Phaser.AUTO,
    scene: [Start, Game, Gameover, Congratulations],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        parent: 'main',
        mode: Phaser.Scale.FIT,
        width: 1200, //La ventana disponible del navegador
        height: 900


    },
    audio: {
        disableWebAudio: true
    }

};

var game = new Phaser.Game(config);


/*
 console.log(game.config.width);
 var c = document.getElementsByTagName('canvas');
 console.log(parseInt(c[0].style.width));
 ample = parseInt(document.getElementsByTagName('canvas')[0].style.width);
 ample = config.width;
 console.log(ample);
 */


