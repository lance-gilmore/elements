import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/house_bg.js'

export default class extends Level {
    
    controlls
    #ctx

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        const b = new Background(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await b.load()
        this.layers.push(b)


        const s = new Bunny(this.#ctx, this.controlls, [], this.viewWidth,this.viewHeight, null, null, [])
        await s.load()

        const g = new Girl(this.#ctx, this.controlls, [], this.viewWidth,this.viewHeight, null, null, [])
        await g.load()

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

}