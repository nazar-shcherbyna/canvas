import React from 'react'
import { observer } from 'mobx-react-lite'
import { CleanIcon } from '../../assets/icons'
import managePanelState from '../../store/managePanelState'
import { TopPanelBtnSC, TopPanelSC } from './styles'
import savePictureState from '../../store/savePictureState'
import { SavePictureModal } from '../SavePictureModal/SavePictureModal'
import canvasState from '../../store/canvasState'

const TopPanel = observer(() => {

    const handleMakePicture = () => {
        const image = canvasState.canvas.toDataURL()
        savePictureState.setImage(image)
        savePictureState.setIsOpenModal(!savePictureState.isOpenModal)
    }

    return (
        <TopPanelSC>
            <TopPanelBtnSC onClick={handleMakePicture}>
                make picture
            </TopPanelBtnSC>  
            <TopPanelBtnSC onClick={() => managePanelState.change('eraser')}>
                <CleanIcon />
            </TopPanelBtnSC>
            <SavePictureModal />
        </TopPanelSC>
    )
})

export { TopPanel }