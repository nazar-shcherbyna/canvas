import { AbstractTool } from '../abstractClasses/AbstractTool'

export class Draw extends AbstractTool {
    isDownMouse = false

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'draw')
    }

    mount() {
        this.ctx.fillStyle = '#000'
        this.ctx.strokeStyle = '#000'
        this.ctx.lineWidth = 2
        this.canvas.onmousedown = this.onMouseDown.bind(this)
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmouseover =  this.onMouseOver.bind(this)
    }

    unmount() {
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmouseover = null
    }

    onMouseDown(e: MouseEvent) {
        this.isDownMouse = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
    }

    onMouseMove(e: MouseEvent) {
        if (this.isDownMouse) {
            this.ctx.lineTo(e.offsetX, e.offsetY)
            this.ctx.stroke()
        }
    }

    onMouseUp() {
        this.isDownMouse = false
    }

    onMouseOver() {
        this.isDownMouse = false
    }
}