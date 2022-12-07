import { Phase } from './phase.js'


export class nivel4 extends Phase {
    init() {

    }

    create() {
        this.bricks = this.relatedScene.physics.add.staticGroup();


        this.bricks.create(325, 100, 'yellowbrick');
        this.bricks.create(325, 200, 'yellowbrick');
        this.bricks.create(325, 300, 'yellowbrick');


        this.bricks.create(375, 150, 'greybrick');
        this.bricks.create(375, 250, 'greybrick');
        this.bricks.create(375, 350, 'greybrick');


        this.bricks.create(425, 100, 'yellowbrick');
        this.bricks.create(425, 200, 'yellowbrick');
        this.bricks.create(425, 300, 'yellowbrick');


        this.bricks.create(475, 150, 'greybrick');
        this.bricks.create(475, 250, 'greybrick');
        this.bricks.create(475, 350, 'greybrick');


        this.bricks.create(525, 100, 'yellowbrick');
        this.bricks.create(525, 200, 'yellowbrick');
        this.bricks.create(525, 300, 'yellowbrick');


        this.bricks.create(575, 150, 'greybrick');
        this.bricks.create(575, 250, 'greybrick');
        this.bricks.create(575, 350, 'greybrick');

        this.bricks.create(625, 100, 'yellowbrick');
        this.bricks.create(625, 200, 'yellowbrick');
        this.bricks.create(625, 300, 'yellowbrick');

        this.bricks.create(675, 150, 'greybrick');
        this.bricks.create(675, 250, 'greybrick');
        this.bricks.create(675, 350, 'greybrick');

        this.bricks.create(725, 100, 'yellowbrick');
        this.bricks.create(725, 200, 'yellowbrick');
        this.bricks.create(725, 300, 'yellowbrick');

        this.bricks.create(775, 150, 'greybrick');
        this.bricks.create(775, 250, 'greybrick');
        this.bricks.create(775, 350, 'greybrick');

        this.bricks.create(825, 100, 'yellowbrick');
        this.bricks.create(825, 200, 'yellowbrick');
        this.bricks.create(825, 300, 'yellowbrick');

        this.bricks.create(875, 150, 'greybrick');
        this.bricks.create(875, 250, 'greybrick');
        this.bricks.create(875, 350, 'greybrick');

        this.bricks.create(925, 100, 'yellowbrick');
        this.bricks.create(925, 200, 'yellowbrick');
        this.bricks.create(925, 300, 'yellowbrick');

        this.configureColisions();

    }
}
;
/*key: ['greybrick', 'redbrick', 'greenbrick', 'orangebrick'],
 
 frameQuantity: 8,
 gridAlign: {
 width: 8,
 height: 200,
 cellWidth: 100,
 cellHeight: 100,
 x: screen.availWidth * 0.13, //Posicion inicial de la rejilla de su primer elemento en X i Y
 y: screen.availWidth * 0.07
 
 
 
 }
 });
 */