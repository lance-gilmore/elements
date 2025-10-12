import Layer from '../engine/layer.js'
import Door from './world_door.js'

export default class extends Layer {
    level = ''
    levels
    levelScores

    constructor(ctx, x, y, w, h, levels, levelScores) {
        super(ctx, x, y, w, h)
        this.levels = levels
        this.levelScores = levelScores
    }

    async load() {
        const lvl1 = new Door(this.ctx,0,0,0,0,510,320,'Level1',new (this.levels.get('Level1'))(), this.levelScores['Level1'])
        await lvl1.load()
        this.elements.push(lvl1)

        const lvl2 = new Door(this.ctx,0,0,0,0,1010,320,'Level2',new (this.levels.get('Level2'))(), this.levelScores['Level2'])
        await lvl2.load()
        this.elements.push(lvl2)

        const lvl3 = new Door(this.ctx,0,0,0,0,1510,320,'Level3',new (this.levels.get('Level3'))(), this.levelScores['Level3'])
        await lvl3.load()
        this.elements.push(lvl3)
        
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