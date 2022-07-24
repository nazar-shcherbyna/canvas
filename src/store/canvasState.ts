import { makeAutoObservable } from 'mobx';

class CanvasState {
    canvas!: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D;
    color = '#000';

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvasElement: HTMLCanvasElement): void {
        this.canvas = canvasElement
        this.canvas.width = window.innerWidth - 40 - 200
        this.canvas.height = window.innerHeight - 30 - 40
        this.ctx = this.canvas.getContext('2d')!
        this.ctx.fillStyle = 'rgb(205,255,255)'
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height)
    }

    setColor(color: string): void {
        this.color = color
        this.ctx.fillStyle = color
        this.ctx.strokeStyle = color
    }
}

export default new CanvasState()