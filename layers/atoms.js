import Layer from '../engine/layer.js'
import Atom from '../layers/atom.js'
import ImageDrawable from '../engine/image_drawable.js'

export default class extends Layer {
    layerData

    constructor(ctx, x, y, w, h, layerData) {
        super(ctx, x, y, w, h)
        this.layerData = layerData
    }

    async load() {
        const electronImage = "https://lance-gilmore.github.io/elements/images/electron1.png"
        for (const image of this.layerData) {

            const layerImage = new ImageDrawable(this.ctx,image.x,image.y,image.w,image.h)
            layerImage.imageLocation = image.img
            await layerImage.load()
            this.elements.push(layerImage)

            // const layerImage = new Atom(this.ctx,image.x,image.y,image.w,image.h,1,1,image.img,electronImage)
            // //layerImage.imageLocation = image.img
            // await layerImage.load()
            // this.elements.push(layerImage)
            
        }
    }

    checkCollision(x,y,r,b) {
        for (const element of this.elements) {

            const ex = element.startx
            const ey = element.starty
            const er = element.startx + element.canvasw
            const eb = element.starty + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                const index = this.elements.indexOf(element);
                if (index > -1) {
                    this.elements.splice(index, 1)
                }
                return true
            }

        }
        return false
    }

}