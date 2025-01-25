import Layer from '../engine/layer.js'
import Door from './world_door.js'

export default class extends Layer {
    level = ''
    levels

    constructor(ctx, x, y, w, h, levels) {
        super(ctx, x, y, w, h)
        this.levels = levels
    }

    async load() {
        const lvl1 = new Door(this.ctx,0,0,0,0,610,320,'Level1',new this.levels.get('Level1')())
        await lvl1.load()
        this.elements.push(lvl1)

        const lvl2 = new Door(this.ctx,0,0,0,0,1110,320,'Level2',new this.levels.get('Level2')())
        await lvl2.load()
        this.elements.push(lvl2)
        
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