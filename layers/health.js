import Drawable from '../engine/layer.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Drawable {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const carrotImg = "https://lance-gilmore.github.io/elements/images/carrot.png"

        const layerImage = new ImageDrawable(this.ctx,10,10,50,100)
        layerImage.imageLocation = carrotImg
        await layerImage.load()
        this.elements.push(layerImage)

    }

    update() {
        
    }

    move(x, y) {

    }

}