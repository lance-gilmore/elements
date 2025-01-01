import Layer from './layer.js'
import ImageDrawable from './image_drawable.js'
import AnimatedSprite from '../engine/animated_sprite.js'

export default class extends Layer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load(json) {
        // const json = [{x,y,w,h,img}]

        for (const image of json) {
            if (Array.isArray(image.img)) {
                const as = new AnimatedSprite(this.ctx,image.x,image.y,image.w,image.h)
                for (const frame of image.img) {
                    const layerImage = new ImageDrawable(this.ctx,image.x,image.y,image.w,image.h)
                    layerImage.imageLocation = frame
                    await layerImage.load()
                    as.images.push(layerImage)
                }
                this.elements.push(as)
            } else {
                const layerImage = new ImageDrawable(this.ctx,image.x,image.y,image.w,image.h)
                layerImage.imageLocation = image.img
                await layerImage.load()
                this.elements.push(layerImage)
            }
        }
    }


}