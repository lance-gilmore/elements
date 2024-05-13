import PlayerCharicter from '../player_charicter.js'
import Girl1 from '../sprites/girl1.js'
import Girl2 from '../sprites/girl2.js'

export default class extends PlayerCharicter {

    constructor(ctx, controlls, collidables, borderx, bordery) {
        super(ctx, 200, 350, controlls, collidables, borderx, bordery)
    }

    async load() {
        const b1 = new Girl1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Girl2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

    async load() {
        const b1 = new Girl1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Girl2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

}