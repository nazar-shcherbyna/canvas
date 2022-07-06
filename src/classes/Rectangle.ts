import { AbstractConfig } from '../abstractClasses/AbstractConfig'

export class Rectangle extends AbstractConfig {
    isDownMouse = false
    canvas!: HTMLCanvasElement
    startPosition: {
        x: number,
        y: number,
    }

    constructor(canvas: HTMLCanvasElement) {
        super(canvas, 'rectangle')
        this.canvas = canvas
        this.startPosition = {
            x: 0,
            y: 0,
        }
    }

    mount() {
        // console.log('mount Rectangle')
        // const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        // ctx.fillStyle = 'rgb(200, 0, 0)'
        // ctx.fillRect(20, 20, 50, 50)
        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        // ctx.fillRect(30, 30, 50, 50)
        // canvas.addEventListener('mousedown', this.onMouseDown)
        // canvas.addEventListener('mousemove', this.onMouseMove)
        // canvas.addEventListener('mouseup',  this.onMouseUp)
        // canvas.addEventListener('mouseover',  this.onMouseOver)
    }

    unmount() {
        // console.log('unmount Rectangle')
        // canvas.removeEventListener('mousedown', this.onMouseDown)
        // canvas.removeEventListener('mousemove', this.onMouseMove)
        // canvas.removeEventListener('mouseup', this.onMouseUp)
        // canvas.removeEventListener('mouseover', this.onMouseOver)
    }

    onMouseDown(e: MouseEvent) {
        this.isDownMouse = true
        this.startPosition = {
            x: e.offsetX,
            y: e.offsetY,
        }
    }

    onMouseMove(e: MouseEvent) {
        if (this.isDownMouse === true) {
            console.log(this.startPosition)
            // ctx.fillRect(this.startPosition.x, this.startPosition.y, e.offsetX, e.offsetY)
        }
    }

    onMouseUp() {
        this.isDownMouse = false
        this.startPosition = {
            x: 0,
            y: 0,
        }
    }

    onMouseOver() {
        this.isDownMouse = false
        this.startPosition = {
            x: 0,
            y: 0,
        }
    }
}