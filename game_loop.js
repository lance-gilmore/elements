
export default class {
    #ctx
    #entities = []
    #running = false

    constructor(ctx) {
        this.#ctx = ctx
    }

    async start() {
        this.#running = true

        while (this.#running) {

            this.#update()

            this.#render()
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