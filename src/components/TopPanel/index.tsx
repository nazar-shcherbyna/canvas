import React from 'react'
import { observer } from 'mobx-react-lite'
import { CleanIcon } from '../../assets/icons'
import managePanelState from '../../store/managePanelState'
import { TopPanelSC } from './styles'
import savePictureState from '../../store/savePictureState'
import { SavePictureModal } from '../SavePictureModal/SavePictureModal'
import canvasState from '../../store/canvasState'
import { Button } from '@mui/material'

const TopPanel = observer(() => {

    const handleMakePicture = () => {
        const image = canvasState.canvas.toDataURL()
        savePictureState.setImage(image)
        savePictureState.setIsOpenModal(!savePictureState.isOpenModal)
    }

    return (
        <TopPanelSC>
            <Button 
                onClick={handleMakePicture}
                variant={'contained'}
                size={'small'}
            >
                make picture
            </Button>  
            <Button 
                onClick={() => managePanelState.change('eraser')}
                variant={'contained'}
                size={'small'}
                color={'info'}
                sx={{ml: '20px'}}
            >
                <CleanIcon />
            </Button>
            <SavePictureModal />
        </TopPanelSC>
    )
})

export { TopPanel }