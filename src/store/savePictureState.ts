import { makeAutoObservable } from 'mobx';

class SavePictureState {
    isOpenModal = false;
    image = '';

    constructor() {
        makeAutoObservable(this)
    }

    setIsOpenModal(val: boolean): void {
        this.isOpenModal = val;
    }

    setImage(img: string): void {
        this.image = img
    }
}

export default new SavePictureState()