import { makeAutoObservable } from 'mobx';
import { Draw } from '../classes/Draw';
import { Rectangle } from '../classes/Rectangle';
import canvasState from './canvasState';

class ManagePanelState {
    selectedType = 'draw'
    configs: [Draw, Rectangle] = [
        new Draw(canvasState.canvas),
        new Rectangle(canvasState.canvas),
    ]
    current: Draw | Rectangle = this.configs[0]
    isUserAction = false

    constructor() {
        makeAutoObservable(this)
        this.init()
    }

    setSelectedType(selectedType: string) {
        this.selectedType = selectedType
    }

    setUserAction() {
        this.isUserAction = true
    }
    
    change(configType: string) {
        if (!this.isUserAction) {
            this.current.mount()
        }
        if (configType !== this.current.configType) {
            this.current.unmount()
            const index = this.configs.findIndex((btn) => btn.configType === configType)
            this.current = this.configs[index]
            this.current.mount()
        }
    }

    init() {
        console.log('init');
        this.change(this.current.configType)
    
    }
}

export default new ManagePanelState()