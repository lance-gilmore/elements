import PlayerCharicter from '../engine/player_charicter.js'
import Bunny1 from '../sprites/bunny1.js'
import Bunny2 from '../sprites/bunny2.js'

export default class extends PlayerCharicter {
    keymap = {
        up: 'upPressed',
        left: 'leftPressed',
        right: 'rightPressed',
        down: 'downPressed'
    }

    constructor(ctx, controlls, collidables, borderx, bordery, bounce, levelExit, damages,pickups, store) {
        super(ctx, 150, 100, controlls, collidables, borderx, bordery, bounce, levelExit, damages,pickups, store)
    }

    async load() {
        const b1 = new Bunny1(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b1.load()
        this.images.push(b1)
        const b2 = new Bunny2(this.ctx,this.canvasx,this.canvasy,this.canvasw,this.canvash)
        await b2.load()
        this.images.push(b2)
    }

}