import { makeAutoObservable } from 'mobx';
import { Draw } from '../classes/Draw';
import { Rectangle } from '../classes/Rectangle';
import canvasState from './canvasState';

class ManagePanelState {
    selectedType = 'draw'
    configs!: [Draw, Rectangle]
    current!: Draw | Rectangle
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
        if (!this.isUserAction) {
            this.configs = [
                new Draw(canvasState.canvas),
                new Rectangle(canvasState.canvas),
            ]
            this.current = this.configs[0]
            this.current.mount()
        }
        if (configType !== this.current.configType) {
            this.current.unmount()
            const index = this.configs.findIndex((btn) => btn.configType === configType)
            this.current = this.configs[index]
            this.current.mount()
        }
    }
}

export default new ManagePanelState()