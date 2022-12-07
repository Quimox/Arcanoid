import { Phase } from './phase.js'


export class nivel5 extends Phase {
    init() {

    }
    create() {
        this.bricks = this.relatedScene.physics.add.staticGroup({//Para la distribucion en esta escena de el grupo de los bloques
            key: ['orangebrick', 'greybrick', 'orangebrick', 'greybrick', 'orangebrick', 'greybrick', 'orangebrick', 'greybrick', 'orangebrick', 'greybrick', 'orangebrick', 'greybrick'], // Elementos que se representaran
            frameQuantity: 2, //Cantitat de ladrillos de cada cada tipo que se representaran
            gridAlign: {
                width: 8, //Cantidad por linea de ladrillos
                height: 170,
                cellWidth: 100, //Distancia de ancho entre columnas
                cellHeight: 100, //Distancia de altura entre bloques
                x: 250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y: 200
            }
        });
        this.configureColisions();
    }
}
;



