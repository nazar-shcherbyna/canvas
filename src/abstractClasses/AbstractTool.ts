import canvasState from "../store/canvasState"

export abstract class AbstractTool {
    canvas!: HTMLCanvasElement
    ctx!: CanvasRenderingContext2D 
    configType: string
    
    constructor(canvas: HTMLCanvasElement, configType: string) {
        this.canvas = canvas
        this.configType = configType
        console.log('AbstractTool constructor canvas', this.canvas);
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
        console.log('AbstractTool constructor ctx', this.ctx);
    }

    public info() {}

    public mount() {}

    public unmount() {}
}