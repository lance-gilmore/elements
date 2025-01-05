import Drawable from './drawable.js'

export default class extends Drawable {
    text = ''

    constructor(ctx, x, y, w, h,text) {
        super(ctx, x, y, w, h)
        this.text = text
    }

    async load() {
        
    }

    draw() {
        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.text,this.canvasx,this.canvasy);
    }

}