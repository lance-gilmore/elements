import Level from '../engine/level.js'
import Bunny from '../player_charicters/bunny.js'
import Girl from '../player_charicters/girl.js'
import BlueMonsterLayer from '../layers/blue_monster.js'
import JsonLayer from '../engine/json_layer.js'
import LayerData from '../layers/level1_layer_data.js'
import TopBar from '../layers/top_bar.js'
import Particles from '../layers/particle.js'


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

        

        const bounce = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await bounce.load(layerData.bounce)
        this.layers.push(bounce)

        const exit = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await exit.load(layerData.exit)
        this.layers.push(exit)

        const store = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await store.load(layerData.store)
        this.layers.push(store)

        const lava = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await lava.load(layerData.lava)
        this.layers.push(lava)

        const neutrons = new Particles(this.ctx,0,0,this.viewWidth,this.viewHeight,layerData.neutrons, 'neutron')
        await neutrons.load()
        this.layers.push(neutrons)

        const electrons = new Particles(this.ctx,0,0,this.viewWidth,this.viewHeight,layerData.electrons, 'electron')
        await electrons.load()
        this.layers.push(electrons)

        const protons = new Particles(this.ctx,0,0,this.viewWidth,this.viewHeight,layerData.electrons, 'proton')
        await protons.load()
        this.layers.push(protons)

        const bmobs = new BlueMonsterLayer(this.ctx,0,0,this.viewWidth,this.viewHeight,[platforms])
        await bmobs.load()
        this.layers.push(bmobs)

        const topBar = new TopBar(this.ctx,0,0,this.viewWidth,this.viewHeight,2)
        await topBar.load()
        this.layers.push(topBar)

        const s = new Bunny(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],[neutrons,electrons,protons], store)
        await this.setupPlayer(s, topBar)

        const g = new Girl(this.ctx, this.controlls, [platforms], this.viewWidth,this.viewHeight, bounce, exit,[lava,bmobs],[neutrons,electrons,protons], store)
        await this.setupPlayer(g, topBar)

        const foreground = new JsonLayer(this.ctx,0,0,this.viewWidth,this.viewHeight)
        await foreground.load(layerData.foreground)
        this.foregroundLayers.push(foreground)

    }

    async setupPlayer(player, topBar) {
        await player.load()
        player.addExitLevelListener(() => {
            this.triggerExitLevel()
        })
        player.addStoreListener(() => {
            this.triggerStore()
        })
        player.addPickupListener((type) => {
            const index = this.playerCharicters.indexOf(player);
            if (type === 'neutron') {
                topBar.scores[index].addNeutron()
            } else if (type === 'electron') {
                topBar.scores[index].addElectron()
            } else if (type === 'proton') {
                topBar.scores[index].addProton()
            }
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