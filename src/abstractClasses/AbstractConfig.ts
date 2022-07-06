import canvasState from "../store/canvasState"

export abstract class AbstractConfig {
    canvas!: HTMLCanvasElement
    ctx!: CanvasRenderingContext2D 
    configType: string
    
    constructor(canvas: HTMLCanvasElement, configType: string) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        this.configType = configType
    }

    public info() {}

    public mount() {}

    public unmount() {}
}