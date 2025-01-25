import Drawable from './engine/drawable.js'
import LayerLevel from './levels/layer_level.js'
import Store from './levels/store.js'
import World from './levels/world.js'
import Level1 from './levels/level1_layer_data.js'
import Level2 from './levels/level1_layer_data.js'

export default class extends Drawable {
    
    controlls
    currentLevel

    levels = new Map([
        ['Level1', Level1],
        ['Level2', Level2]
      ]);

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
    }

    async load() {
        await this.loadWorld()
    }

    async loadWorld() {
        const l = new World(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener((level) => {
            this.loadLevel(level);
          })
    }

    async loadStore(level) {
        const l = new Store(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls, level)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener(() => {
            this.loadLevel(l.level);
          })
    }

    async loadLevel(level) {
        const layerData = new (this.levels.get(level))()
        const l = new LayerLevel(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls, layerData)
        await l.load()
        this.currentLevel = l
        l.addStoreListener(() => {
            this.loadStore(level);
          })
        l.addExitLevelListener(() => {
            this.loadWorld();
          })
    }

    draw() {
        this.currentLevel.draw()
    }

    update() {
        this.currentLevel.update()
    }

}