
export default class {
    #ctx
    #entities = []
    #running = false

    constructor(ctx) {
        this.#ctx = ctx
        this.keyChecker()
    }

    keyChecker() {
        const valueKeyMap = {
            38:'↑',40:'↓',37:'←',39:'→',32:'spacebar',65:'a',66:'b',67:'c',68:'d',69:'e',70:'f',71:'g',72:'h',73:'i',74:'j',75:'k',76:'l',77:'m',78:'n',79:'o',80:'p',81:'q',82:'r',83:'s',84:'t',85:'u',86:'v',87:'w',88:'x',89:'y',90:'z',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',48:'0'
          };
        console.log('hre')
        document.addEventListener("keydown", (event) => {
            console.log(event.code)
            console.log(event.key)
            if (event.code == 38) {
                console.log('up')
            }
        })
    }

    async addEntity(entity) {
        this.#entities.push(entity)
    }

    async start() {
        this.#running = true
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

        while (this.#running) {
            

            this.#update()

            this.#render()

            await sleep(500)
        }

    }

    async #update() {
        for (const entity of this.#entities) {
            entity.update()
        }
    }

    async #render() {
        for (const entity of this.#entities) {
            entity.draw()
        }
    }

    async stop() {
        this.#running = false
    }



}