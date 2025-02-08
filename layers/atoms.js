import JsonLayer from '../engine/json_layer.js'
import Atom from '../layers.atom.js'

export default class extends JsonLayer {
    layerData

    constructor(ctx, x, y, w, h, layerData) {
        super(ctx, x, y, w, h)
        this.layerData = layerData
    }

    async load() {
        const electronImage = "https://lance-gilmore.github.io/elements/images/electron1.png"
        for (const image of json) {

            const layerImage = new Atom(this.ctx,image.x,image.y,image.w,image.h,image.x,image.y,1,1,image.img,electronImage)
            //layerImage.imageLocation = image.img
            await layerImage.load()
            this.elements.push(layerImage)
            
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