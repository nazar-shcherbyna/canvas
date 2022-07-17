import React from 'react'
import { Dialog } from '@mui/material'
import { observer } from 'mobx-react-lite'
import savePictureState from '../../store/savePictureState'

export const SavePictureModal = observer(() => {

    const handleClose = () => {
        savePictureState.setIsOpenModal(false)
    }

    return (
        <Dialog
            open={savePictureState.isOpenModal}
            maxWidth="xl"
            onClose={handleClose}
        >
            <img src={savePictureState.image} alt="" />
        </Dialog>
    )
})