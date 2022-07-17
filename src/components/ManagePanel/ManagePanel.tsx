import React from 'react'
import { observer } from 'mobx-react-lite'
import managePanelState from '../../store/managePanelState'
import { ManageButtonSC, ManagePanelSC } from './styles'

export const ManagePanel = observer(() => {

    return (
        <ManagePanelSC>
            <h2 className="manage-panel__h2">Select option</h2>
            <div className="manage-panel__buttons">
                <ManageButtonSC 
                    selected={managePanelState.selectedType === 'draw'}
                    onClick={() => managePanelState.change('draw')}
                >
                    Draw
                </ManageButtonSC>
                <ManageButtonSC 
                    selected={managePanelState.selectedType === 'rectangle'}
                    onClick={() => managePanelState.change('rectangle')}
                >
                    Rectangle
                </ManageButtonSC>
            </div>
        </ManagePanelSC>
    )
})