import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/background.js'
import Platforms from '../layers/platforms.js'
import Foreground from '../layers/forground_static.js'
import TestLayer from '../layers/test_layer.js'

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

         const p = new Platforms(this.#ctx,0,0,this.viewWidth,this.viewHeight)
         await p.load()
         this.layers.push(p)

        // const h = new Foreground(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        // await h.load()
        // this.layers.push(h)

        // const test = new TestLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        // await test.load()
        // this.layers.push(test)

        const s = new Bunny(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight)
        await s.load()

        const g = new Girl(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight)
        await g.load()

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

    update() {
        super.update()
        
       // for (const pc of this.playerCharicters) {
       //     if (pc.x)
       // }
    }

}