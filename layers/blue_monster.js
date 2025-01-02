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
            console.log(element)
            if (this.#movingLeft) {
                element.move(element.canvasx-movementSpeed, element.canvasy)
            } else {
                element.move(element.canvasx+movementSpeed, element.canvasy)
            }

            if (this.checkCollisions(element)) {
                this.#movingLeft = !this.#movingLeft
            }
        }

        super.update()
    }

}