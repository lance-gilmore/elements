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
import CoinsLayer from '../layers/coins.js'
import Scores from '../layers/scores.js'
import BlueMonsterLayer from '../layers/blue_monster.js'


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

        const coins = new CoinsLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight)
        await coins.load()
        this.layers.push(coins)

        const bmobs = new BlueMonsterLayer(this.#ctx,0,0,this.viewWidth,this.viewHeight,[p])
        await bmobs.load()
        this.layers.push(bmobs)

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
        s.addCoinListener(() => {
            scores.addNeutron()
        })
        s.addDamageListener(() => {
            health.reduceHealth()
            if (health.currentHealth < 1) {
                const index = this.playerCharicters.indexOf(s);
                if (index > -1) {
                    this.playerCharicters.splice(index, 1)
                }
            }
        })

        const g = new Girl(this.#ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],coins)
        await g.load()
        g.addExitLevelListener(() => {
            this.triggerExitLevel()
        })
        g.addCoinListener(() => {
            score2.addNeutron()
        })
        g.addDamageListener(() => {
            health2.reduceHealth()
            if (health2.currentHealth < 1) {
                const index = this.playerCharicters.indexOf(g);
                if (index > -1) {
                    this.playerCharicters.splice(index, 1)
                }
            }
        })

        this.playerCharicters.push(s)
        this.playerCharicters.push(g)

    }

    update() {
        super.update()
    }

}