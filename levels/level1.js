import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/background.js'
import Platforms from '../layers/platforms.js'
import Foreground from '../layers/forground_static.js'
import Bounce from '../layers/bounce.js'
import ExitLayer from '../layers/exit.js'
import LavaLayer from '../layers/lava.js'
import HealthLayer from '../layers/health.js'

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

        const h = new Foreground(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await h.load()
        this.layers.push(h)

        const bounce = new Bounce(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load()
        this.layers.push(bounce)

        const exit = new ExitLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await exit.load()
        this.layers.push(exit)

        const lava = new LavaLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await lava.load()
        this.layers.push(lava)

        const health = new HealthLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight,1)
        await health.load()
        this.layers.push(health)

        const health2 = new HealthLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight,500)
        await health2.load()
        this.layers.push(health2)

        const s = new Bunny(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava])
        await s.load()
        s.addExitLevelListener(() => {
            this.triggerExitLevel()
        })
        s.addDamageListener(() => {
            health.reduceHealth()
        })

        const g = new Girl(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava])
        await g.load()
        g.addExitLevelListener(() => {
            this.triggerExitLevel()
        })
        g.addDamageListener(() => {
            health2.reduceHealth()
        })

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

    update() {
        super.update()
    }

}