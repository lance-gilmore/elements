import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import TopBar from '../layers/top_bar.js'
import LayerData from '../layer_data/world_layer_data.js'
import JsonLayer from '../engine/json_layer.js'
import Doors from '../layers/world_doors.js'


export default class extends Level {
    
    controlls
    levels
    levelScores

    constructor(ctx, x, y, w, h, controlls, levels, levelScores) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.levels = levels
        this.levelScores = levelScores
    }

    async load() {
        const layerData = new LayerData()

        const background = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await background.load(layerData.background)
        this.layers.push(background)

        const platforms = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await platforms.load(layerData.platforms)
        this.layers.push(platforms)

        const store = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await store.load(layerData.store)
        this.layers.push(store)

        const bounce = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const doors = new Doors(this.ctx,0,0,this.viewWidth,this.viewHeight, this.levels, this.levelScores)
        await doors.load()
        this.layers.push(doors)


        const s = new Bunny(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, doors,[],[])
        await this.setupPlayer(s, doors)

        const g = new Girl(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, doors,[],[])
        await this.setupPlayer(g, doors)

        const foreground = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await foreground.load(layerData.foreground)
        this.foregroundLayers.push(foreground)

    }

    async setupPlayer(player, doors) {
        await player.load()
        player.addExitLevelListener(() => {
            this.triggerExitLevel(doors.level)
        })
        player.addStoreListener(() => {
            this.triggerStore()
        })

        this.playerCharicters.push(player)
    }

    update() {
        super.update()
    }

}