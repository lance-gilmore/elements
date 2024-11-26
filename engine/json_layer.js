import Layer from './layer.js'
import ImageDrawable from './image_drawable.js'

export default class extends Layer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load(json) {
        // const json = [{x,y,w,h,img}]

        for (const image of json) {
            const layerImage = new ImageDrawable(this.ctx,image.x,image.y,image.w,image.h)
            layerImage.imageLocation = image.img
            await layerImage.load()
            this.elements.push(layerImage)
        }
    }

    update() {
        
    }

}