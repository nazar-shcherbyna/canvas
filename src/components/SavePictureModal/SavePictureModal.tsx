import React from 'react'
import { Button, Dialog } from '@mui/material'
import { observer } from 'mobx-react-lite'
import savePictureState from '../../store/savePictureState'
import { ImgWrappSC, SavePictureModalWrappSC } from './styles'

const SavePictureModal = observer(() => {

    const handleClose = () => {
        savePictureState.setIsOpenModal(false)
    }

    return (
        <Dialog
            open={savePictureState.isOpenModal}
            maxWidth="xl"
            onClose={handleClose}
        >
            <SavePictureModalWrappSC>
                <ImgWrappSC>
                    <img src={savePictureState.image} alt="" />
                </ImgWrappSC>
                <Button 
                    href={savePictureState.image} 
                    download
                    variant='contained'
                    color='primary'
                    sx={{w: '150px', m: '10px auto'}}
                >
                    Download
                </Button>
            </SavePictureModalWrappSC>
        </Dialog>
    )
})

export default SavePictureModal