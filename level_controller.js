import Drawable from './engine/drawable.js'
import Store from './levels/store.js'
import World from './levels/world.js'
import Level1 from './levels/level1.js'

export default class extends Drawable {
    
    controlls
    currentLevel

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
    }

    async load() {
        this.loadWorld()
    }


    loadWorld() {
        const l = new World(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener(() => {
            this.loadLevel1();
          })
    }

    loadLevel1() {
        const l = new Level1(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener(() => {
            this.loadStore();
          })
    }

    loadStore() {
       const lh = new Store(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
       lh.load()
       this.currentLevel = lh
    }

    draw() {
        this.currentLevel.draw()
    }

    update() {
        this.currentLevel.update()
    }

}