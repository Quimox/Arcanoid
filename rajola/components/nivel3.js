import { Phase } from './phase.js'


export class nivel3 extends Phase {
    init() {

    }
    create() {
        this.bricks = this.relatedScene.physics.add.staticGroup({//Para la distribucion en esta escena de el grupo de los bloques
            key: ['orangebrick', 'blackbrick', 'orangebrick', 'blackbrick', 'orangebrick', 'blackbrick', 'orangebrick', 'blackbrick', 'orangebrick', 'blackbrick', 'orangebrick', 'blackbrick'], // Elementos que se representaran
            frameQuantity: 2, //Cantitat de ladrillos de cada cada tipo que se representaran
            gridAlign: {
                width: 8, //Cantidad por linea de ladrillos
                height: 170,
                cellWidth: 100, //Distancia de ancho entre columnas
                cellHeight: 150, //Distancia de altura entre bloques
                x: 250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y: 200
            }

        });

        this.fixedBricks = this.relatedScene.physics.add.staticGroup({
            key: ['whitebrick', 'whitebrick'],
            frameQuantity: 4,
            gridAlign: {
                width: 10,
                height: 100,
                cellWidth: 100,
                cellHeight: 100,
                x: 250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y: 230
            }
        });
        this.configureColisions();
        this.configureColisionsFixed();
    }
}
;
/* this.fixedBricks = this.relatedScene.physics.add.staticGroup({          //Crear unos bricks indestructibles
 key: ['greybrick'],
 frameQuantity: 7,
 gridAlign: {
 width: 7,
 height: 10,
 cellWidth: 160,
 cellHeight: 90,
 x: screen.availWidth * 0.25,
 y: screen.availWidth * 0.122
 */

