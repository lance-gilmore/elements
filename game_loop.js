
export default class {
    #ctx
    #entities = []
    #running = false

    constructor(ctx) {
        this.#ctx = ctx
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