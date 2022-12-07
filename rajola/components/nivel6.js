import { Phase } from './phase.js'


export class nivel6 extends Phase {
    init() {

    }
    create() {
        this.bricks = this.relatedScene.physics.add.staticGroup({
            key: ['greenbrick', 'blackbrick', 'greenbrick', 'blackbrick', 'greenbrick'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 60,
                cellWidth: 80,
                cellHeight: 40,
                x: 250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y: 200
            }
        });

        this.bricks.getChildren().forEach((element, index) => {
            if ((index >= 10 && index < 20) || (index >= 30 && index < 40)) {
                index++;
            }
            if (((index + 1) % 2) === 0) {
                element.disableBody(true, true);
            }
        });

        this.fixedBricks = this.relatedScene.physics.add.staticGroup({
            key: ['whitebrick'],
            frameQuantity: 5,
            gridAlign: {
                width: 10,
                height: 100,
                cellWidth: 220,
                cellHeight: 100,
                x: 250, //Posicion inicial de la rejilla de su primer elemento en X i Y
                y: 450
            }

        });
        this.configureColisions();
        this.configureColisionsFixed();

    }
}
;