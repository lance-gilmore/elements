import Drawable from './engine/drawable.js'
import Level1 from './levels/level1.js'
import LevelHouse from './levels/level_house.js'
import Store from './levels/store.js'

export default class extends Drawable {
    
    controlls
    #ctx
    currentLevel

    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#ctx = ctx
    }

    async load() {
        
        const l = new Level1(this.#ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener(() => {
            this.loadStore();
          })

    }

    loadLevel2() {
       const lh = new LevelHouse(this.#ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
       lh.load()

       this.currentLevel = lh
    }

    loadStore() {
       const lh = new Store(this.#ctx, 0, 0, this.canvasw, this.canvash, this.controlls)
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