import canvasState from "../store/canvasState"

export abstract class AbstractConfig {
    canvas!: HTMLCanvasElement
    ctx!: CanvasRenderingContext2D 
    configType: string
    
    constructor(canvas: HTMLCanvasElement, configType: string) {
        this.canvas = canvas
        this.configType = configType
        console.log('AbstractConfig constructor canvas', this.canvas);
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
        console.log('AbstractConfig constructor ctx', this.ctx);
    }

    public info() {}

    public mount() {}

    public unmount() {}
}