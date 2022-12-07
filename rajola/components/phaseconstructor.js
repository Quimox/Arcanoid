import { nivel1 } from './nivel1.js'                                            // Importo todos los niveles para implementar en el juego.
import { nivel2 } from './nivel2.js'
import { nivel3 } from './nivel3.js'
import { nivel4 } from './nivel4.js'
import { nivel5 } from './nivel5.js'
import { nivel6 } from './nivel6.js'

export class PhaseConstructor {
    constructor(scene) {                                                        // En el constructor recibo la escena donde se va a usar este componente.
        this.relatedScene = scene;                                              // En el constructor genero un array con todos los niveles ordenados. 
        //console.warn("ample:"+parseInt(document.getElementsByTagName('canvas')[0].style.width));
        this.phases = [
            nivel6, // Esta ordenada al revés, pero es que los voy a ir sacando con el método pop() de los arrays.
            nivel5,
            nivel4,
            nivel3,
            nivel2,
            nivel1
        ];
    }

    create() {                                                                  //Se encarga de coger la última fase del array, instanciarla y solicitarle que se cree el grupo de ladrillos
        let CurrentPhaseClass = this.phases.pop();
        this.currentPhase = new CurrentPhaseClass(this.relatedScene);
        return this.currentPhase.create();
    }

    nextLevel() {
        this.currentPhase.deleteFixedBricks();                                  //El método nextLevel() se encarga de verificar que existen todavía fases en el juego.
        if (this.phases.length === 0) {                                         //Si no es así, entonces llama al método endGame de la escena principal.
            this.relatedScene.endGame(true);                                    //Si quedaban fases, entonces hace que se cree la siguiente, mediante el método create()
        } else {
            return this.create();
        }
    }

    isPhaseFinished() {
        return this.currentPhase.isPhaseFinished();                             // Tenemos un método extra que permite saber si la fase se ha terminado.Pregunta a la fase actual si está terminada.
    }
}
