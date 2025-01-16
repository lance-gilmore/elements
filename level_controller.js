import Drawable from './engine/drawable.js'
import Store from './levels/store.js'
import World from './levels/world.js'
import Level1 from './levels/level1.js'
import Level2 from './levels/level2.js'

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
        const l = new (this.levels.get(level))(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
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