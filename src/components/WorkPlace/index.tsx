import React from 'react'
import { Canvas } from '../Canvas'
import { TopPanel } from '../TopPanel'
import { WorkPlaceSC } from './styles'

export const WorkPlace = () => {

    return (
        <WorkPlaceSC>
            <TopPanel />
            <Canvas />
        </WorkPlaceSC>
    )
}