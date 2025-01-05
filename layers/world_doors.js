import Layer from '../engine/layer.js'
import Door from './world_door.js'

export default class extends Layer {
    level = ''

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const lvl1 = new Door(this.ctx,0,0,0,0,610,370,'Level1')
        await lvl1.load()
        this.elements.push(lvl1)
        
    }

    checkCollision(x,y,r,b) {
        this.level = ''
        for (const element of this.elements) {

            const ex = element.startx
            const ey = element.starty
            const er = element.startx + element.canvasw
            const eb = element.starty + element.canvash
            
            if (x < er && r > ex && y < eb && b > ey) {
                this.level = element.level
                return true
            }

        }
        return false
    }

}