import { PhaseConstructor } from '../components/phaseconstructor.js';           // Import el contructor de fases
import { LiveCounter } from '../components/live-counter.js';                    // Import de la clase LiveCounter


var nivell = 1;
export class Game extends Phaser.Scene {                                        // Permite exportar de un archivo js a otro importantando lo solicitado,perimte crear escenas y extender al numero que queramos

    constructor() {
        super({key: 'game'});
    }
    init() {
        this.phaseConstructor = new PhaseConstructor(this);                     // Invocar el método del constructor de niveles
        this.score = 0; //El marcador con la puntuacion
        this.liveCounter = new LiveCounter(this, 5);                            // Cada vez que la escena del juego se resetea, se cree un nuevo contador de vidas.
        this.level = 0;
    }
    // Precarga de items o assets :imagenes , sonidos y otros archivos que se puedan necesitar para el videojuego
    preload() {

        this.load.image('background', 'images/background.png');
        this.load.image('platform', 'images/platform.png');
        this.load.image('heart', 'images/heart.png');
        this.load.image('ball', 'images/ball.png');
        this.load.image('buttonstart', 'images/startbutton.png');

        //Imagenes ladrillos
        this.load.image('blackbrick', 'images/brickBlack.jpg');
        this.load.image('greenbrick', 'images/brickGreen.jpg');
        this.load.image('orangebrick', 'images/brickOrange.jpg');
        this.load.image('yellowbrick', 'images/brickYellow.jpg');
        this.load.image('whitebrick', 'images/brickWhite.jpg');
        this.load.image('redbrick', 'images/brickRed.jpg');
        this.load.image('greybrick', 'images/brickGrey.jpg');

        //Sonidos
        this.load.audio('platformimpactsample', 'sounds/click.mp3');
        this.load.audio('brickimpactsample', 'sounds/blockCrush.wav');
        this.load.audio('fixedbrickimpactsample', 'sounds/fixed-brick-impact.ogg');
        this.load.audio('gameoversample', 'sounds/gameover.ogg');
        this.load.audio('winsample', 'sounds/you_win.ogg');
        this.load.audio('startgamesample', 'sounds/start-game.ogg');
        this.load.audio('livelostsample', 'sounds/negative.wav');
        this.load.audio('phasechange', 'sounds/levelUp.wav');
        this.load.audio('gameover', 'sounds/gameOver.wav');

        //Joystics
        let url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);
    }

    create() {                                                                  // Crea la escena colocando los elementos que forman parte de esta :imagenes que han sido precargados en preload
        this.physics.world.setBoundsCollision(true, true, true, false);         // Los bordes del mundo colisionan con las fisicas para que nada salga de este

        this.add.image(600, 500, 'background');
        this.liveCounter.create();
        this.platform = this.physics.add.image(600, 840, 'platform').setImmovable(); // Crea la plataforma añadiendo la gravedad(physics)
        this.platform.body.allowGravity = false;                                // Hace la plataforma inamovible con el setIMMovable
        this.platform.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.ball = this.physics.add.image(600, 780, 'ball');                   // Crea la bola y le da el efecto de las fisicas
        this.ball.setBounce(1);                                                 // Cantidad de rebote que se puede producer con relacion 1/1 de la fuerza impactada
        this.ball.setCollideWorldBounds(true);                                  // La bola rebota al llegar a los bordes del mundo excpeto en el inferior
        this.ball.setData('glue', true);                                        // Propiedad'Pegamento'
        this.ball.setScale(0.4, 0.4);                                           // Cambia el tamaño de la ball a su 1/2 original
        this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this); // Se establece la colision( el null es una funcion callback no le indica ninguna funcion , el this significa el contexto de un objeto)

        this.phaseConstructor.create();

        this.scoreText = this.add.text(16, 16, 'Punts: 0', {fontSize: '30px', fill: '#fff', fontFamily: 'Roboto, sans-serif'});

        if (screen.width <= 1080) {
            this.levelText = this.add.text(500, 16, 'Nivell : ' + nivell + "/ 6", {fontSize: '30px', fill: '#fff', fontFamily: 'Roboto, sans-serif'});
        } else {
            this.levelText = this.add.text(450, 16, 'Nivell : ' + nivell + "/ 6", {fontSize: '30px', fill: '#fff', fontFamily: 'Roboto, sans-serif'});
        }


        this.platformimpactsample = this.sound.add('platformimpactsample');
        this.brickImpactSample = this.sound.add('brickimpactsample');
        this.fixedBrickImpactSample = this.sound.add('fixedbrickimpactsample');
        this.gameOverSample = this.sound.add('gameoversample');
        this.winSample = this.sound.add('winsample');
        this.startGameSample = this.sound.add('startgamesample');
        this.liveLostSample = this.sound.add('livelostsample');
        this.phaseChangeSample = this.sound.add('phasechange');
        // Joystic

        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 100,
            y: 800,
            radius: 100,
            base: this.add.circle(0, 0, 60, 0xddebee),
            thumb: this.add.circle(0, 0, 35, 0x4b8694)
        });

        this.joystickCursors = this.joyStick.createCursorKeys();
        this.cursors = this.input.keyboard.createCursorKeys();
        if (screen.width <= 1080) {
            this.joyStick.visible = true;

        } else {
            this.joyStick.visible = false;

        }
    }

    update() {

// Le da a la barra el movimiento si estan las teclas presionadas
        if (this.cursors.left.isDown || this.joystickCursors.left.isDown) {     // Permite que la bola se quede pegada a la barra hacia la izquierda y la siga sin despegarse  'glue'
            this.platform.setVelocityX(-650);
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(-650);
            }
        } else if (this.cursors.right.isDown || this.joystickCursors.right.isDown) { // Permite que la bola se quede pegada a la barra hacia la derecha y la siga sin despegarse 'glue'
            this.platform.setVelocityX(650);
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(650);
            }
        } else {
            this.platform.setVelocityX(0);                                      // Se aplica la funcion 'glue' para que se quede en velocidad 0 la bola 
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(0);
            }
        }
        if (this.ball.y > 1100) {                                               // Condicion de la bola que pase por debajo del limite inferior
            let gameNotFinished = this.liveCounter.liveLost();
            if (!gameNotFinished) {
                this.liveLostSample.play();
                this.setInitialPlatformState();
            }
        }
        if (this.cursors.up.isDown || this.joystickCursors.up.isDown) {         // Cuando se pulsa la tecla arriba de el teclado se dispara la bola
            if (this.ball.getData('glue')) {
                this.startGameSample.play();
                this.ball.setVelocity(-60, -300);
                this.ball.setData('glue', false);
            }
        }
        this.ball.rotation += 0.1;
    }

    platformImpact(ball, platform) {                                            // La funcion de la ball y de la platform  para el rebote de la bola al colisionar
        this.platformimpactsample.play();
        let relativeImpact = ball.x - platform.x;
        if (relativeImpact > 0) {
            ball.setVelocityX(10 * relativeImpact);                             // Ofrece un numero aleatorio entre los numeros del intervalo
        } else if (relativeImpact < 0) {
            ball.setVelocityX(10 * relativeImpact);
        } else {
            ball.setVelocityX(Phaser.Math.Between(-10, 10));
        }
    }

    brickImpact(ball, brick) {                                                  // La funcion de la ball y los bricks para desaparecer a la colision
        this.brickImpactSample.play();
        brick.disableBody(true, true);
        this.increasePoints(10);
        if (this.phaseConstructor.isPhaseFinished()) {
            this.phaseChangeSample.play();
            this.increaselevel(1);
            this.phaseConstructor.nextLevel();                                  // Pasa al siguiente nivel, con el método nextLevel().
            this.setInitialPlatformState();
        }
    }

    fixedBrickImpact(ball, brick) {                                             // El impacto de la bola cons los ladrillos
        this.fixedBrickImpactSample.play();
        let relativeImpact = ball.x - brick.x;
        if (relativeImpact > 0) {
            ball.setVelocityX(8 * relativeImpact);                              // Ofrece un numero aleatorio entre los numeros del intervalo
        } else if (relativeImpact < 0) {
            ball.setVelocityX(8 * relativeImpact);
        } else {
            ball.setVelocityX(Phaser.Math.Between(-12, 12));
        }
    }
    increasePoints(points) {                                                    // El marcador y la suma de puntos
        this.score += points;
        this.scoreText.setText('PUNTOS: ' + this.score);
    }
    increaselevel(points) {
        nivell++;
        this.levelText.setText('Nivell: ' + nivell);
    }

    endGame(completed = false) {
        if (!completed) {
            this.scene.start('gameover');
            this.gameOverSample.play();                                         //Si el contador llega a 0 la escene endGame(true) es llamada
        } else {
            this.winSample.play();
            this.scene.start('congratulations');
    }
    }
    setInitialPlatformState() {                                                 // Devuelve la plataforma a una posicion inicial
        this.platform.x = 600;
        this.platform.y = 860;
        this.ball.setVelocity(0, 0);
        this.ball.x = 600;
        this.ball.y = 800;
        this.ball.setData('glue', true);
    }
}

