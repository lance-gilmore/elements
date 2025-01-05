import Layer from '../engine/layer.js'
import Door from './world_door.js'

export default class extends Layer {

    constructor(ctx, x, y, w, h) {
        super(ctx, x, y, w, h)
    }

    async load() {
        const lvl1 = new Door(this.ctx,0,0,0,0,610,390,'Level1')
        await lvl1.load()
        this.elements.push(lvl1)
        
    }


}