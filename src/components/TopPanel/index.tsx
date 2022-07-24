import React, { ChangeEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { CleanIcon } from '../../assets/icons'
import managePanelState from '../../store/managePanelState'
import { TopPanelSC } from './styles'
import savePictureState from '../../store/savePictureState'
import canvasState from '../../store/canvasState'
import { Button, Input } from '@mui/material'
import { SavePictureModal } from '../SavePictureModal/SavePictureModal'

const TopPanel = observer(() => {

    const handleMakePicture = (): void => {
        const image = canvasState.canvas.toDataURL();
        savePictureState.setImage(image);
        savePictureState.setIsOpenModal(!savePictureState.isOpenModal);
    }

    const handleColor = (e: ChangeEvent<HTMLInputElement>): void => {
        canvasState.setColor(e.target.value);
    }

    return (
        <TopPanelSC>
            <Input 
                type='color' 
                style={{width: '50px'}}
                onChange={handleColor}
            />
            <Button 
                onClick={handleMakePicture}
                variant={'contained'}
                size={'small'}
                sx={{ml: '20px'}}
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