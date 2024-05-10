
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
                console.log('up')
            }
            if (event.key == 'ArrowDown') {
                this.downPressed = true
                console.log('down')
            }
            if (event.key == 'ArrowLeft') {
                this.leftPressed = true
                console.log('left')
            }
            if (event.key == 'ArrowRight') {
                this.rightPressed = true
                console.log('right')
            }
        })

        document.addEventListener("keyup", (event) => {
            //console.log(event.key)
            if (event.key == 'ArrowUp') {
                this.upPressed = false
                console.log('up')
            }
            if (event.key == 'ArrowDown') {
                this.downPressed = false
                console.log('down')
            }
            if (event.key == 'ArrowLeft') {
                this.leftPressed = false
                console.log('left')
            }
            if (event.key == 'ArrowRight') {
                this.rightPressed = false
                console.log('right')
            }
        })


    }

}