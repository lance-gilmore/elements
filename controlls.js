
export default class {

    upPressed = false
    downPressed = false
    leftPressed = false
    rightPressed = false
    wPressed = false
    sPressed = false
    aPressed = false
    dPressed = false

    constructor() {
        this.#addEvents()
    }

    #addEvents() {
        
        document.addEventListener("keydown", (event) => {
            //console.log(event.key)
            if (event.key == 'ArrowUp') {
                this.upPressed = true
            }
            if (event.key == 'ArrowDown') {
                this.downPressed = true
            }
            if (event.key == 'ArrowLeft') {
                this.leftPressed = true
            }
            if (event.key == 'ArrowRight') {
                this.rightPressed = true
            }

            if (event.key == 'w') {
                this.wPressed = true
            }
            if (event.key == 's') {
                this.sPressed = true
            }
            if (event.key == 'a') {
                this.aPressed = true
            }
            if (event.key == 'd') {
                this.dPressed = true
            }
        })

        document.addEventListener("keyup", (event) => {
            //console.log(event.key)
            if (event.key == 'ArrowUp') {
                this.upPressed = false
            }
            if (event.key == 'ArrowDown') {
                this.downPressed = false
            }
            if (event.key == 'ArrowLeft') {
                this.leftPressed = false
            }
            if (event.key == 'ArrowRight') {
                this.rightPressed = false
            }

            if (event.key == 'w') {
                this.wPressed = false
            }
            if (event.key == 's') {
                this.sPressed = false
            }
            if (event.key == 'a') {
                this.aPressed = false
            }
            if (event.key == 'd') {
                this.dPressed = false
            }
        })

    }

}