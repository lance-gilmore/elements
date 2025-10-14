import Drawable from './engine/drawable.js'
import LayerLevel from './levels/layer_level.js'
import Store from './levels/store.js'
import World from './levels/world.js'
import Level1 from './layer_data/level1_layer_data.js'
import Level2 from './layer_data/level2_layer_data.js'
import Level3 from './layer_data/level3_layer_data.js'
import Level4 from './layer_data/level4_layer_data.js'
import Level5 from './layer_data/level5_layer_data.js'
import Level6 from './layer_data/level6_layer_data.js'
import Level7 from './layer_data/level7_layer_data.js'
import Level8 from './layer_data/level8_layer_data.js'
import Level9 from './layer_data/level9_layer_data.js'

export default class extends Drawable {
    
    controlls
    currentLevel
    levelScores = {}

    levels = new Map([
        ['Level1', Level1],
        ['Level2', Level2],
        ['Level3', Level3],
        ['Level4', Level4],
        ['Level5', Level5],
        ['Level6', Level6],
        ['Level7', Level7],
        ['Level8', Level8],
        ['Level9', Level9]
      ]);


    constructor(ctx, x, y, w, h, controlls) {
        super(ctx, x, y, w, h)
        this.controlls = controlls
        this.#initScores()
    }

    async load() {
        await this.loadWorld()
    }

    async loadWorld() {
        const l = new World(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls, this.levels, this.levelScores)
        await l.load()
        this.currentLevel = l
        l.addExitLevelListener((level) => {
            this.loadLevel(level);
        })
        l.addStoreListener((level) => {
          //  this.#updateScores(level,l.topBar)
            this.loadStore(level);
        })
    }

    async loadStore(level) {
        let totalScores = {
            protons: 0,
            neutrons: 0,
            electrons: 0
        }
        this.levels.forEach((_value, key) => {
            totalScores.protons += this.levelScores[key].protons
            totalScores.neutrons += this.levelScores[key].neutrons
            totalScores.electrons += this.levelScores[key].electrons
        })

        const l = new Store(this.ctx, 0, 0, this.canvasw, this.canvash, this.controlls, level, totalScores)
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
            this.#updateScores(level,l.topBar)
            this.loadStore(level);
          })
        l.addExitLevelListener(() => {
            this.#updateScores(level,l.topBar)
            this.loadWorld();
          })
    }

    #initScores() {
        this.levels.forEach((_value, key) => {
            this.levelScores[key] = {
                protons: 0,
                neutrons: 0,
                electrons: 0
            }
        })
    }

    #updateScores(level, topBar) {
        let totalNeutrons = 0
        let totalProtons = 0
        let totalElectrons = 0
        for (const scores of topBar.scores) {
            totalNeutrons += scores.neutrons
            totalProtons += scores.protons
            totalElectrons += scores.electrons
        }

        if (totalNeutrons > this.levelScores[level].neutrons) {
            this.levelScores[level].neutrons = totalNeutrons
        }
        if (totalProtons > this.levelScores[level].protons) {
            this.levelScores[level].protons = totalProtons
        }
        if (totalElectrons > this.levelScores[level].electrons) {
            this.levelScores[level].electrons = totalElectrons
        }
    }

    draw() {
        this.currentLevel.draw()
    }

    update() {
        this.currentLevel.update()
    }

}