export class LiveCounter {                                                      // Código de la clase para la gestión de vidas del jugador
    constructor(scene, initialLives) {
        this.relatedScene = scene;                                              //Guardar la escena en una propiedad del componente, para poder usarla más adelante.
        this.initialLives = initialLives;                                       //Guardamos también el número de vidas iniciales con el que queremos iniciar el juego.

    }

    create() {
        let displacement = 95;                                                  //Como se situa la barra de vidas 
        //console.log(this.ample.width);
        this.liveImages = this.relatedScene.physics.add.staticGroup({
            setScale: {x: 0.4, y: 0.5},
            key: 'heart',
            frameQuantity: this.initialLives - 1,
            gridAlign: {
                width: this.initialLives - 1,
                height: 1,
                cellWidth: displacement,
                cellHeight: 30,
                x: 800,
                y: 15
            }
        });
    }

    liveLost() {
        if (this.liveImages.countActive() === 0) {                              //Comprobamos si nos quedan vidas para restar todavía.
            this.relatedScene.endGame();                                        //Si no quedan vidas, avisamos a la escena que usa este componente, para que de por finalizado el juego.
            return true;
        }
        let currentLiveLost = this.liveImages.getFirstAlive();
        currentLiveLost.disableBody(true, true);
        return false;
    }
}
