import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    #hitCooldown = false

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const carrotImg = "https://lance-gilmore.github.io/elements/images/carrot.png"

        const layerImage1 = new ImageDrawable(this.ctx,10,10,10,20)
        layerImage1.imageLocation = carrotImg
        await layerImage1.load()
        this.elements.push(layerImage1)

        const layerImage2 = new ImageDrawable(this.ctx,30,10,10,20)
        layerImage2.imageLocation = carrotImg
        await layerImage2.load()
        this.elements.push(layerImage2)

        const layerImage3 = new ImageDrawable(this.ctx,50,10,10,20)
        layerImage3.imageLocation = carrotImg
        await layerImage3.load()
        this.elements.push(layerImage3)

    }

    reduceHealth() {
        if (!this.#hitCooldown) {
            this.#hitCooldown = true

            this.elements.pop()

            setTimeout(() => { 
                this.#hitCooldown = false
            },4000)
        }
    }

    update() {
        
    }

    move(x, y) {
        // overwrite to make it not move
    }

}