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
        const lvl1 = new Door(this.ctx,0,0,0,0,410,320,'Level1',new (this.levels.get('Level1'))(), this.levelScores['Level1'])
        await lvl1.load()
        this.elements.push(lvl1)

        const lvl2 = new Door(this.ctx,0,0,0,0,1010,320,'Level2',new (this.levels.get('Level2'))(), this.levelScores['Level2'])
        await lvl2.load()
        this.elements.push(lvl2)

        const lvl3 = new Door(this.ctx,0,0,0,0,1310,320,'Level3',new (this.levels.get('Level3'))(), this.levelScores['Level3'])
        await lvl3.load()
        this.elements.push(lvl3)

        const lvl4 = new Door(this.ctx,0,0,0,0,1610,320,'Level4',new (this.levels.get('Level4'))(), this.levelScores['Level4'])
        await lvl4.load()
        this.elements.push(lvl4)

        const lvl5 = new Door(this.ctx,0,0,0,0,1910,320,'Level5',new (this.levels.get('Level5'))(), this.levelScores['Level5'])
        await lvl5.load()
        this.elements.push(lvl5)
        
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