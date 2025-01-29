import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import StoreLayerData from '../layer_data/store_layer_data.js'
import TopBar from '../layers/top_bar.js'
import JsonLayer from '../engine/json_layer.js'
import Scores from '../layers/scores.js'
import StoreItems from '../layers/store_items.js'


export default class extends Level {
    
    controlls
    level
    scores

    constructor(ctx, x, y, w, h, controlls, level, scores) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.level = level
        this.scores = scores
    }

    async load() {
        const layerData = new StoreLayerData()

        const background = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await background.load(layerData.background)
        this.layers.push(background)

        const platforms = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await platforms.load(layerData.platforms)
        this.layers.push(platforms)

        const foreground = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await foreground.load(layerData.foreground)
        this.layers.push(foreground)

        const bounce = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const exit = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await exit.load(layerData.exit)
        this.layers.push(exit)

         const items = new StoreItems(this.ctx,0,0,this.viewWidth,this.viewHeight)
         await items.load(layerData.store_items)
        // this.layers.push(items)

        const scores = new Scores(this.ctx,0,0,this.viewWidth,this.viewHeight,250)
        scores.neutrons = this.scores.neutrons
        scores.protons = this.scores.protons
        scores.electrons = this.scores.electrons
        await scores.load()
        this.layers.push(scores)

        const s = new Bunny(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, exit,[],[])
        await this.setupPlayer(s)

        const g = new Girl(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, exit,[],[])
        await this.setupPlayer(g)

    }

    async setupPlayer(player) {
        await player.load()
        player.addExitLevelListener(() => {
            this.triggerExitLevel()
        })

        this.playerCharicters.push(player)
    }

    update() {
        super.update()
    }

}