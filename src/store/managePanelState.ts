import { makeAutoObservable } from 'mobx';
import { Draw } from '../classes/Draw';
import { Eraser } from '../classes/Eraser';
import { Rectangle } from '../classes/Rectangle';
import canvasState from './canvasState';

class ManagePanelState {
    selectedType = 'draw'
    configs!: [Draw, Rectangle, Eraser]
    current!: Draw | Rectangle | Eraser
    isUserAction = false

    constructor() {
        makeAutoObservable(this)
        console.log('ManagePanelState');
    }

    setSelectedType(selectedType: string) {
        this.selectedType = selectedType
    }

    setUserAction() {
        this.isUserAction = true
    }
    
    change(configType: string) {
        console.log('ManagePanelState change');
        this.setSelectedType(configType)
        if (!this.isUserAction) {
            this.configs = [
                new Draw(canvasState.canvas),
                new Rectangle(canvasState.canvas),
                new Eraser(canvasState.canvas),
            ]
            this.current = this.configs[0]
            this.current.mount()
        }
        if (configType !== this.current.configType) {
            this.current.unmount()
            const index = this.configs.findIndex((btn) => btn.configType === configType)
            console.log('22222222', index);
            
            this.current = this.configs[index]
            this.current.mount()
        }
    }
}

export default new ManagePanelState()