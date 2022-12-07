
export class Congratulations extends Phaser.Scene {
    constructor() {                                                             // Metodos llamados por el framework-- El constructor son las tareas de inicializacion de la clase , necesita el nombre de la escena
        super({key: 'congratulations'});                                        // Cada una con una key por escena 1/1.Es la palabra clave
        this.restartButton = new RestartButton(this);
    }

    preload() {
        this.load.image('congratulations', './images/congratulations.png');     // Precarga la pantalla de victoria      
        this.restartButton.preload();
    }

    create() {

        this.congratsImage = this.add.image(600, 500, 'congratulations');
        this.restartButton.create();
    }
}

class RestartButton {
    constructor(scene) {
        this.relatedScene = scene;                                              //Recibe la escena en la que esta y la guarda en la propiedad del componenete "relatedScene"
    }

    preload() {
        this.relatedScene.load.spritesheet('button', 'images/restartbutton.png', {frameWidth: 280, frameHeight: 100}); // Se usa la propiedad "relatedScene" porque ahi es donde se ha guaradao la escena en la que estamos
    }

    create() {
        this.startButton = this.relatedScene.add.sprite(600, 830, 'button').setInteractive({cursor: 'pointer'});
        this.startButton.on('pointerdown', () => {                              //Se reinicia la escena cuando pulsamos el boton
            this.relatedScene.scene.start('game');

        });
    }
}