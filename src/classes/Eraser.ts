import { AbstractConfig } from '../abstractClasses/AbstractConfig'

export class Eraser extends AbstractConfig {
    isDownMouse: boolean

    constructor(canvas: HTMLCanvasElement) {
        console.log('Eraser');
        super(canvas, 'eraser')
        this.isDownMouse = false
    }

    mount() {
        console.log('mount Eraser')
        console.log('Eraser canvas', this.canvas);
        console.log('Eraser ctx', this.ctx);
        this.canvas.onmousedown = this.onMouseDown.bind(this)
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmouseover =  this.onMouseOver.bind(this)
    }

    unmount() {
        console.log('unmount Eraser')
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmouseover = null
    }

    onMouseDown(e: MouseEvent) {
        this.ctx.fillStyle = 'rgb(205,255,255)'
        this.ctx.strokeStyle = 'rgb(205,255,255)'
        this.ctx.lineWidth = 10
        this.isDownMouse = true
        console.log('onMouseDown', this.canvas);
        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
    }

    onMouseMove(e: MouseEvent) {
        if (this.isDownMouse) {
            this.ctx.lineTo(e.offsetX, e.offsetY)
            this.ctx.stroke()
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