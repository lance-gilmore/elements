import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    #hitCooldown = false
    #offset = 0
    currentHealth = 3

    constructor(ctx, x, y, w, h, offset) {
        super(ctx, x, y, w, h)
        this.#offset = offset
    }

    async load() {
        const healthImg = "https://lance-gilmore.github.io/elements/images/heart.png"

        const layerImage1 = new ImageDrawable(this.ctx,10+this.#offset,10,15,20)
        layerImage1.imageLocation = healthImg
        await layerImage1.load()
        this.elements.push(layerImage1)

        const layerImage2 = new ImageDrawable(this.ctx,30+this.#offset,10,15,20)
        layerImage2.imageLocation = healthImg
        await layerImage2.load()
        this.elements.push(layerImage2)

        const layerImage3 = new ImageDrawable(this.ctx,50+this.#offset,10,15,20)
        layerImage3.imageLocation = healthImg
        await layerImage3.load()
        this.elements.push(layerImage3)

    }

    reduceHealth() {
        if (!this.#hitCooldown) {
            this.#hitCooldown = true

            this.elements.pop()
            this.currentHealth--

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