import { Phase } from './phase.js'

export class nivel1 extends Phase {
    init() {
        this.liveCounter = new LiveCounter(this, 3);                            //Cada vez que la escena del juego se resetea, se cree un nuevo contador de vidas.

    }

    create() {
        this.bricks = this.relatedScene.physics.add.staticGroup({//Para la distribucion en esta escena de el grupo de los bloques
            key: ['redbrick','greenbrick', 'redbrick', 'greenbrick', 'redbrick', 'greenbrick', 'redbrick', 'greenbrick'], // Elementos que se representaran 
            frameQuantity: 2, //Cantitat de ladrillos de cada cada tipo que se representaran
            gridAlign: {
                width: 8, //Cantidad por linea de ladrillos
                height: 200,
                cellWidth: 100, //Distancia de ancho entre columnas
                cellHeight: 100, //Distancia de altura entre bloques
                x:  250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y:  200

            }


        });
        this.configureColisions();
    }

}
;

        