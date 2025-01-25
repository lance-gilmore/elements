import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {
    #collidables
    #layerData

    constructor(ctx, x, y, w, h, collidables, layerData) {
        super(ctx, x, y, w, h)
        this.#collidables = collidables
        this.#layerData = layerData
    }

    async load() {
        super.load(this.#layerData)
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
            if (element.getFlipx()) {
                element.startx = element.startx-movementSpeed
            } else {
                element.startx = element.startx+movementSpeed
            }

            if (this.checkCollisions(element)) {
                element.setFlipx(!element.getFlipx())
            }
        }

        super.update()
    }

}