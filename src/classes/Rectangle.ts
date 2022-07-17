import { AbstractTool } from '../abstractClasses/AbstractTool'

export class Rectangle extends AbstractTool {
    isDownMouse = false
    savedCanvas = ''
    startPosition: {
        x: number,
        y: number,
    } = Object.seal({
        x: 0,
        y: 0,
    })

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'rectangle')  
    }

    mount(): void {
        this.canvas.onmousedown = this.onMouseDown.bind(this)
        this.canvas.onmousemove = this.onMouseMove.bind(this)
        this.canvas.onmouseup = this.onMouseUp.bind(this)
        this.canvas.onmouseover =  this.onMouseOver.bind(this)
    }

    unmount(): void {
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
        this.canvas.onmouseup = null
        this.canvas.onmouseover = null
    }

    onMouseDown(e: MouseEvent): void {
        this.isDownMouse = true
        this.startPosition = {
            x: e.offsetX,
            y: e.offsetY,
        }
        this.savedCanvas = this.canvas.toDataURL()
    }

    onMouseMove(e: MouseEvent): void {
        if (this.isDownMouse === true) {
            const img = new Image()
            img.src = this.savedCanvas
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
                this.ctx.beginPath()
                const size = {
                    width: e.offsetX - this.startPosition.x,
                    height: e.offsetY - this.startPosition.y,
                }
                this.ctx.rect(this.startPosition.x, this.startPosition.y, size.width, size.height)
                this.ctx.fill()
                this.ctx.stroke()
            }
        }
    }

    onMouseUp(): void {
        this.isDownMouse = false
    }

    onMouseOver(): void {
        this.isDownMouse = false
        this.startPosition = {
            x: 0,
            y: 0,
        }
    }
}