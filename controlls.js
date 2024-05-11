
export default class {

    upPressed = false
    downPressed = false
    leftPressed = false
    rightPressed = false

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
        })

    }

}