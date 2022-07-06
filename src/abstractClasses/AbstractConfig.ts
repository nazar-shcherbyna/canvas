import canvasState from "../store/canvasState"

export abstract class AbstractConfig {
    canvas!: HTMLCanvasElement
    ctx!: CanvasRenderingContext2D 
    configType: string
    
    constructor(canvas: HTMLCanvasElement, configType: string) {
        console.log('AbstractConfig');
        this.canvas = canvas
        this.configType = configType
        console.log('AbstractConfig canvas', this.canvas);
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        console.log('AbstractConfig ctx', this.ctx);
    }

    public info() {}

    public mount() {}

    public unmount() {}
}