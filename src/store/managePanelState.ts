import { makeAutoObservable } from 'mobx';
import { Draw } from '../classes/Draw';
import { Eraser } from '../classes/Eraser';
import { Rectangle } from '../classes/Rectangle';
import canvasState from './canvasState';

class ManagePanelState {
    selectedType = 'draw'
    configs!: Map<string, Draw | Rectangle | Eraser>
    current!: Draw | Rectangle | Eraser
    isUserAction = false

    constructor() {
        makeAutoObservable(this)
    }

    setSelectedType(selectedType: string) {
        this.selectedType = selectedType
    }

    setUserAction() {
        this.isUserAction = true
    }
    
    change(configType: string) {
        this.setSelectedType(configType)
        if (!this.isUserAction) {
            this.configs = new Map([
                ['draw', new Draw(canvasState.canvas)],
                ['rectangle', new Rectangle(canvasState.canvas)],
                ['eraser', new Eraser(canvasState.canvas)],
            ])
            this.current = this.configs.get('draw')!
            this.current.mount()
        }
        if (configType !== this.current.configType) {
            this.current.unmount()
            this.current = this.configs.get(configType)!
            this.current.mount()
        }
    }
}

export default new ManagePanelState()