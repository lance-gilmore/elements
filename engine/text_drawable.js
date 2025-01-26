import Drawable from './drawable.js'

export default class extends Drawable {
    text = ''
    fontSize

    constructor(ctx, x, y, fontSize) {
        super(ctx, x, y, 0,0)
        this.fontSize = fontSize
    }

    async load() {
        
    }

    draw() {
        this.ctx.font = this.fontSize+"px Arial";
        this.ctx.fillText(this.text,this.canvasx,this.canvasy);
    }

}