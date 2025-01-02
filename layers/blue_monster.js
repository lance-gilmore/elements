import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/layer_data.js'

export default class extends JsonLayer {
    #collidables
    #movingLeft = true

    constructor(ctx, x, y, w, h, collidables) {
        super(ctx, x, y, w, h)
        this.#collidables = collidables
    }

    async load() {
        const ld = new LayerData()
        super.load(ld.blueMonsters)
    }

    checkCollisions(element) {
        for (const collidable of this.#collidables) {
            if (collidable.checkCollision(element.canvasx, element.canvasy, element.canvasx + element.canvasw, element.canvasy + element.canvash)) {
                return true
            }
        }
        return false
    }

    update() {
        const movementSpeed = 5
        for (const element in this.elements) {
            if (this.#movingLeft) {
                this.move(element.canvasx-movementSpeed, element.canvasy)
            } else {
                this.move(element.canvasx+movementSpeed, element.canvasy)
            }

            if (this.checkCollisions) {
                this.#movingLeft = !this.#movingLeft
            }
        }

        super.update()
    }

}