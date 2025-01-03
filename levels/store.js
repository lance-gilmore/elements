import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import Background from '../layers/background.js'
import Platforms from '../layers/platforms.js'
import Foreground from '../layers/forground_static.js'
import Bounce from '../layers/bounce.js'
import ExitLayer from '../layers/exit.js'
import HealthLayer from '../layers/health.js'
import Scores from '../layers/scores.js'
import StoreLayerData from '../layers/store_layer_data.js'
import JsonLayer from '../engine/json_layer.js'


export default class extends Level {
    
    controlls
    #ctx

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        const layerData = new StoreLayerData()

        const background = new JsonLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await background.load(layerData.background)
        this.layers.push(background)

         const p = new JsonLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
         await p.load(layerData.platforms)
         this.layers.push(p)

        const h = new JsonLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await h.load(layerData.foreground)
        this.layers.push(h)

        const bounce = new JsonLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const exit = new JsonLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await exit.load(layerData.exit)
        this.layers.push(exit)

        const health = new HealthLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight,0)
        await health.load()
        this.layers.push(health)

        const health2 = new HealthLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight,500)
        await health2.load()
        this.layers.push(health2)

        const scores = new Scores(this.#ctx,0,0,this.viewWidth,this.viewHeight,0)
        await scores.load()
        this.layers.push(scores)

        const score2 = new Scores(this.#ctx,0,0,this.viewWidth,this.viewHeight,500)
        await score2.load()
        this.layers.push(score2)

        const s = new Bunny(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],coins)
        await s.load()
        s.addExitLevelListener(() => {
            this.triggerExitLevel()
        })


        const g = new Girl(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],coins)
        await g.load()
        g.addExitLevelListener(() => {
            this.triggerExitLevel()
        })

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

    update() {
        super.update()
    }

}