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

    checkCollisions() {
        for (const collidable of this.#collidables) {
            if (collidable.checkCollision(this.canvasx, this.canvasy, this.canvasx + this.canvasw, this.canvasy + this.canvash)) {
                return true
            }
        }
        return false
    }

    update() {
        const movementSpeed = 5
        if (this.#movingLeft) {
            this.move(this.canvasx-movementSpeed, this.canvasy)
        } else {
            this.move(this.canvasx+movementSpeed, this.canvasy)
        }

        if (this.checkCollisions) {
            this.#movingLeft = !this.#movingLeft
        }

        super.update()
    }

}