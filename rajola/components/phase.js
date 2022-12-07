export class Phase {
    constructor(scene) {                                                        //Recibe la escena donde lo vamos a usar el componente
        this.relatedScene = scene;
        
    }

    configureColisions() {                                                      //La configuración de las colisiones
        this.relatedScene.physics.add.collider(this.relatedScene.ball, this.bricks, this.relatedScene.brickImpact, null, this.relatedScene);   //La fase posee el grupo de los ladrillos, ella misma se encargue de implementar las colisiones.
    }

    configureColisionsFixed() {                                                 //Colisiones con los ladrillos irrompibles
        this.relatedScene.physics.add.collider(this.relatedScene.ball, this.fixedBricks, this.relatedScene.fixedBrickImpact, null, this.relatedScene);
    }
    deleteFixedBricks() {                                                       //Se eliminan al pasar de nivel
        if (this.fixedBricks) {
            this.fixedBricks.getChildren().forEach(item => {
                item.disableBody(true, true);
            });
        }
    }

    isPhaseFinished() {                                                         // Se pasa al siguiente nivel cuando no quedan ladrillos activos
        return (this.bricks.countActive() === 0);
    }
}
