
export class Start extends Phaser.Scene {
    constructor() {                                                             // Metodos llamados por el framework-- El constructor son las tareas de inicializacion de la clase , necesita el nombre de la escena
        super({key: 'start'});                                                  // Cada una con una key por escena 1/1.Es la palabra clave
        this.startButton = new StartButton(this);
    }

    preload() {
        if (window.innerWidth <= 810) {
            alert('Per jugar correctament a aquest joc, has de girar la pantalla del dispositiu');
        }
        this.load.image('logo', './images/rajola-logo.png');
        this.startButton.preload();
        this.load.image('teclaup', 'images/teclaup.png');
        this.load.image('teclasides', 'images/teclasides.png');

    }

    create() {
        this.congratsLogo = this.add.image(600, 500, 'logo');
        this.startButton.create();
        this.teclaUp = this.add.image(910, 650, 'teclaup');
        this.teclaUp.setScale(0.2, 0.2);
        this.teclaSides = this.add.image(820, 750, 'teclasides');
        this.teclaSides.setScale(0.2, 0.2);
        this.scoreText = this.add.text(710, 650, 'Prem la tecla          ' + '       per a llançar la pilota ', {fontSize: '25px', fill: '#fff', fontFamily: 'Roboto, sans-serif'});
        this.scoreText = this.add.text(560, 750, 'Prem les tecles               ' + '             per a moure la plataforma ', {fontSize: '25px', fill: '#fff', fontFamily: 'Roboto, sans-serif'});

    }
}
class StartButton {
    constructor(scene) {
        this.relatedScene = scene;                                              //Recibe la escena en la que esta y la guarda en la propiedad del componenete "relatedScene"
    }
    preload() {
        this.relatedScene.load.spritesheet('startButton', 'images/startbutton.png', {frameWidth: 280, frameHeight: 100});   // Se usa la propiedad "relatedScene" porque ahi es donde se ha guaradao la escena en la que estamos
    }

    create() {
        this.startButton = this.relatedScene.add.sprite(600, 830, 'startButton').setInteractive({cursor: 'pointer'});     //Propiedad para ser clickable


        this.startButton.on('pointerdown', () => {                              //Se inicia la escena cuando pulsamos el boton
            this.relatedScene.scene.start('game');

        });
    }
}

