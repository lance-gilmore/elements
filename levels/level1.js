import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import HealthLayer from '../layers/health.js'
import CoinsLayer from '../layers/coins.js'
import Scores from '../layers/scores.js'
import BlueMonsterLayer from '../layers/blue_monster.js'
import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/level1_layer_data.js'
import TopBar from '../layers/top_bar.js'


export default class extends Level {
    
    controlls

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
    }

    async load() {
        const layerData = new LayerData()

        const background = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await background.load(layerData.background)
        this.layers.push(background)

         const p = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
         await p.load(layerData.platforms)
         this.layers.push(p)

        const h = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await h.load(layerData.foreground)
        this.layers.push(h)

        const bounce = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const exit = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await exit.load(layerData.exit)
        this.layers.push(exit)

        const lava = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await lava.load(layerData.lava)
        this.layers.push(lava)

        const coins = new CoinsLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await coins.load()
        this.layers.push(coins)

        const bmobs = new BlueMonsterLayer(this.ctx,0,0,this.viewWidth,this.viewHeight,[p])
        await bmobs.load()
        this.layers.push(bmobs)

        const topBar = new TopBar(this.ctx,0,0,this.viewWidth,this.viewHeight,2)
        await topBar.load()
        this.layers.push(topBar)

        const s = new Bunny(this.ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],coins)
        await this.setupPlayer(s, topBar)

        const g = new Girl(this.ctx, this.controlls, [p], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],coins)
        await this.setupPlayer(g, topBar)

    }

    setupPlayer(player, topBar) {
        player.load()
        player.addExitLevelListener(() => {
            this.triggerExitLevel()
        })
        player.addCoinListener(() => {
            const index = this.playerCharicters.indexOf(player);
            topBar.scores[index].addNeutron()
        })
        player.addDamageListener(() => {
            const index = this.playerCharicters.indexOf(player);
            topBar.healths[index].reduceHealth()
            if (topBar.healths[index].currentHealth < 1) {
                if (index > -1) {
                    this.playerCharicters.splice(index, 1)
                }
            }
        })

        this.playerCharicters.push(player)
    }

    update() {
        super.update()
    }

}