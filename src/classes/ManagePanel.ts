// import { Draw } from './Draw'
// import { Rectangle } from './Rectangle'

export class ManagePanel {
//     configs: [Draw, Rectangle]
//     current
//     isUserAction: boolean

//     constructor() {
//         this.configs = [
//             new Draw(),
//             new Rectangle(),
//         ]
//         this.current = this.configs[0]
//         this.init()
//         this.isUserAction = false
//     }

//     change(configType: string) {
//         if (!this.isUserAction) {
//             this.current.mount()
//         }
//         if (configType !== this.current.configType) {
//             this.current.unmount()
//             const index = this.configs.findIndex((btn) => btn.configType === configType)
//             this.current = this.configs[index]
//             this.current.mount()
//         }
//     }

//     init() {
//         // this.change(this.current.configType)
//         // const initialBtn = document.querySelector(`[data-configtype=${this.current.configType}]`) as HTMLElement
//         // initialBtn.classList.add('selected')
//         // this.configs.forEach((conf) => {
//         //     const currentBtn = document.querySelector(`[data-configtype=${conf.configType}]`) as HTMLElement
//         //     currentBtn.addEventListener('click', () => {
//         //         document.querySelectorAll('.manage-panel__button').forEach((btn) => {
//         //             btn.classList.remove('selected')
//         //         })
//         //         currentBtn.classList.add('selected')
//         //         if (!this.isUserAction) this.isUserAction = true
//         //         this.change(conf.configType)
//         //     })
//         // })
//     }

//     info() {
//         // return this.current.info()
//     }
}