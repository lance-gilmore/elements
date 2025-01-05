import PlayerCharicter from '../engine/player_charicter.js'
import Girl1 from '../sprites/girl1.js'
import Girl2 from '../sprites/girl2.js'

export default class extends PlayerCharicter {
    keymap = {
        up: 'wPressed',
        left: 'aPressed',
        right: 'dPressed',
        down: 'sPressed'
    }

    constructor(ctx, controlls, collidables, borderx, bordery, bounce, levelExit, damages,coins) {
        super(ctx, 200, 100, controlls, collidables, borderx, bordery, bounce, levelExit, damages,coins)
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