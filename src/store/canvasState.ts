import { makeAutoObservable } from 'mobx';

class CanvasState {
    canvas!: HTMLCanvasElement

    constructor() {
        console.log('CanvasState');
        makeAutoObservable(this)
    }

    setCanvas(canvasElement: HTMLCanvasElement) {
        this.canvas = canvasElement
        this.canvas.width = window.innerWidth - 40 - 200
        this.canvas.height = window.innerHeight - 30 - 40
    }
}

export default new CanvasState()