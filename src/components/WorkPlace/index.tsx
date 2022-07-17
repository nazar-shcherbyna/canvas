import React, { useEffect, useRef } from 'react'
import { Canvas } from '../Canvas'
import { TopPanel } from '../TopPanel'
import { WorkPlaceSC } from './styles'

export const WorkPlace = () => {

    const topPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      console.log('topPanelRef',topPanelRef.current);
    }, [])
    
    return (
        <WorkPlaceSC>
            <TopPanel ref={topPanelRef}/>
            <Canvas />
        </WorkPlaceSC>
    )
}