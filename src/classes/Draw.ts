import { AbstractConfig } from '../abstractClasses/AbstractConfig'

export class Draw extends AbstractConfig {
    isDownMouse: boolean

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'draw')
        this.isDownMouse = false
    }

    mount() {
        console.log('mount Draw')
        this.canvas.addEventListener('mousedown', this.onMouseDown)
        this.canvas.addEventListener('mousemove', this.onMouseMove)
        this.canvas.addEventListener('mouseup',  this.onMouseUp)
        this.canvas.addEventListener('mouseover',  this.onMouseOver)
    }

    unmount() {
        console.log('unmount Draw')
        this.canvas.removeEventListener('mousemove', this.onMouseMove)
        this.canvas.removeEventListener('mouseup', this.onMouseUp)
        this.canvas.removeEventListener('mouseover', this.onMouseOver)
        this.canvas.removeEventListener('mousedown', this.onMouseDown)
    }

    onMouseDown(e: MouseEvent) {
        this.isDownMouse = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.offsetX, e.offsetY)
    }

    onMouseMove(e: MouseEvent) {
        if (this.isDownMouse) {
            // this.ctx.stroke()
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