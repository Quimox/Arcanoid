import { Phase } from './phase.js'



export class nivel2 extends Phase {
    init() {
    }
    create() {

        this.bricks = this.relatedScene.physics.add.staticGroup();

        this.bricks.create(550, 100, 'yellowbrick');
        this.bricks.create(650, 100, 'yellowbrick');

        this.bricks.create(500, 145, 'greybrick');
        this.bricks.create(700, 145, 'greybrick');

        this.bricks.create(450, 185, 'yellowbrick');
        this.bricks.create(750, 185, 'yellowbrick');

        this.bricks.create(400, 225, 'greybrick');
        this.bricks.create(800, 225, 'greybrick');

        this.bricks.create(350, 265, 'yellowbrick');
        this.bricks.create(850, 265, 'yellowbrick');

        this.bricks.create(300, 305, 'greybrick');
        this.bricks.create(900, 305, 'greybrick');

        this.bricks.create(250, 365, 'yellowbrick');
        this.bricks.create(950, 365, 'yellowbrick');

        this.bricks.create(200, 405, 'greybrick');
        this.bricks.create(1000, 405, 'greybrick');

        this.bricks.create(150, 450, 'yellowbrick');
        this.bricks.create(1050, 450, 'yellowbrick');

        this.bricks.create(100, 495, 'greybrick');
        this.bricks.create(1100, 495, 'greybrick');

        this.configureColisions();

    }
}
;