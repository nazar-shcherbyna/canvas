import { getEventListeners } from 'events';
import { AbstractConfig } from '../abstractClasses/AbstractConfig'

export class Draw extends AbstractConfig {
    isDownMouse: boolean

    constructor(canvas: HTMLCanvasElement) {
        console.log('Draw');
        super(canvas, 'draw')
        this.isDownMouse = false
    }

    mount() {
        console.log('mount Draw')
        console.log('Draw canvas', this.canvas);
        console.log('Draw ctx', this.ctx);
        this.canvas.onmousedown = this.onMouseDown.bind(this)
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmouseover =  this.onMouseOver.bind(this)
    }

    unmount() {
        console.log('unmount Draw')
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmouseover = null
    }

    onMouseDown(e: MouseEvent) {
        this.isDownMouse = true
        console.log('onMouseDown', this.canvas);
        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
    }

    onMouseMove(e: MouseEvent) {
        if (this.isDownMouse) {
            this.ctx.stroke()
            this.ctx.lineTo(e.offsetX, e.offsetY)
            // this.ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2)
            // this.ctx.fill()
        }
    }

    onMouseUp(e: MouseEvent) {
        this.isDownMouse = false
        // ctx.beginPath()
    }

    onMouseOver(e: MouseEvent) {
        this.isDownMouse = false
    }
}