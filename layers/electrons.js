import JsonLayer from '../engine/json_layer.js'

export default class extends JsonLayer {
    type = 'electron'
    layerData

    constructor(ctx, x, y, w, h, layerData) {
        super(ctx, x, y, w, h)
        this.layerData = layerData
    }

    async load() {
        super.load(this.layerData)
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