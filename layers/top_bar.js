import Drawable from '../engine/layer.js'
import Layer from '../engine/layer.js'
import Health from './health.js'
import Scores from '../layers/scores.js'

export default class extends Layer {

    #offset = 0
    neutrons = 0
    protons = 0
    electrons = 0
    #numPlayers
    healths = []
    scores = []

    constructor(ctx, x, y, w, h, numPlayers) {
        super(ctx, x, y, w, h)
        this.#numPlayers = numPlayers
    }

    async load() {
        offset = 500

        for (let i = 0; i < this.#numPlayers; i++) {
            const health = new HealthLayer(this.ctx,0,0,this.viewWidth,this.viewHeight,offset*i)
            await health.load()
            this.layers.push(health)
            this.healths.push(health)

            const scores = new Scores(this.ctx,0,0,this.viewWidth,this.viewHeight,offset*i)
            await scores.load()
            this.layers.push(scores)
            this.scores.push(scores)
        }

    }


    update() {
        
    }

    move(x, y) {
        // overwrite to make it not move
    }

}