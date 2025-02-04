import Layer from '../engine/json_layer.js'
import StoreItem from '../layers/store_item.js'
import Elements from '../layer_data/elements.js'

export default class extends Layer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load(json) {
        const elements = new Elements()

        for (let i=0;i<json.length;i++) {
            const image = json[i]
            if (i < elements.elements.length) {
                const element = elements.elements[i]
                const layerImage = new StoreItem(this.ctx,image.x,image.y,image.w,image.h,1,1,1)
                layerImage.image = image.img
                layerImage.neutrons = element.neutrons
                layerImage.protons = element.protons
                layerImage.electrons = element.electrons
                layerImage.symbol = element.symbol
                layerImage.name = element.name
                await layerImage.load()
                this.elements.push(layerImage)
            }
        }
        // for (const image of json) {
        //     const layerImage = new StoreItem(this.ctx,image.x,image.y,image.w,image.h,1,1,1)
        //     layerImage.image = image.img
        //     await layerImage.load()
        //     this.elements.push(layerImage)
        // }
        
    }

    checkCollision(x,y,r,b) {
        this.level = ''
        for (const e of this.elements) {
            const element = e.elements[0]
            const ex = element.startx
            const ey = element.starty
            const er = element.startx + element.canvasw
            const eb = element.starty + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                this.level = e.level
                return true
            }

        }
        return false
    }

}