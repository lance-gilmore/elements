import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import TopBar from '../layers/top_bar.js'
import LayerData from '../layers/world_layer_data.js'
import JsonLayer from '../engine/json_layer.js'
import Doors from '../layers/world_doors.js'


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

        const platforms = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await platforms.load(layerData.platforms)
        this.layers.push(platforms)

        const foreground = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await foreground.load(layerData.foreground)
        this.layers.push(foreground)

        const bounce = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const doors = new Doors(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await doors.load()
        this.layers.push(doors)



        const topBar = new TopBar(this.ctx,0,0,this.viewWidth,this.viewHeight,2)
        await topBar.load()
        this.layers.push(topBar)

        const s = new Bunny(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, doors,[],null)
        await this.setupPlayer(s, topBar, doors)

        const g = new Girl(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, doors,[],null)
        await this.setupPlayer(g, topBar, doors)

    }

    async setupPlayer(player, topBar, doors) {
        await player.load()
        player.addExitLevelListener(() => {
            this.triggerExitLevel(doors.level)
        })
        player.addPickupListener(() => {
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