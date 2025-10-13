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

        const lvl6 = new Door(this.ctx,0,0,0,0,2210,320,'Level6',new (this.levels.get('Level6'))(), this.levelScores['Level6'])
        await lvl6.load()
        this.elements.push(lvl6)

        const lvl7 = new Door(this.ctx,0,0,0,0,2510,320,'Level7',new (this.levels.get('Level7'))(), this.levelScores['Level7'])
        await lvl7.load()
        this.elements.push(lvl7)

        const lvl8 = new Door(this.ctx,0,0,0,0,2810,320,'Level8',new (this.levels.get('Level8'))(), this.levelScores['Level8'])
        await lvl8.load()
        this.elements.push(lvl8)

        const lvl9 = new Door(this.ctx,0,0,0,0,3110,320,'Level9',new (this.levels.get('Level9'))(), this.levelScores['Level9'])
        await lvl9.load()
        this.elements.push(lvl9)
        
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