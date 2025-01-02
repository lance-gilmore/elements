import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    #offset = 0
    currentPoints = 0

    constructor(ctx, x, y, w, h, offset) {
        super(ctx, x, y, w, h)
        this.#offset = offset
    }

    async load() {
        const img = "https://lance-gilmore.github.io/elements/images/yellow_sphere.png"

        const layerImage1 = new ImageDrawable(this.ctx,90+this.#offset,10,20,20)
        layerImage1.imageLocation = img
        await layerImage1.load()
        this.elements.push(layerImage1)
    }

    addPoints() {
        this.currentPoints++
    }

    draw() {
        super.draw()

        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.currentPoints,120+this.#offset,28);
    }

    update() {
        
    }

    move(x, y) {
        // overwrite to make it not move
    }

}