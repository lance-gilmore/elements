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
            if (collidable.checkCollision(element.startx, element.starty, element.startx + element.canvasw, element.starty + element.canvash)) {
                return true
            }
        }
        return false
    }

    update() {
        const movementSpeed = 4

        for (const element of this.elements) {
            if (this.#movingLeft) {
                element.startx = element.startx-movementSpeed
            } else {
                element.startx = element.startx+movementSpeed
            }

            if (this.checkCollisions(element)) {
                this.#movingLeft = !this.#movingLeft
                element.setFlipx(this.#movingLeft)
            }
        }

        super.update()
    }

}