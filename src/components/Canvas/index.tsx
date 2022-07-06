import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { CanvasSC, CanvasWrappSC } from './styles'
import canvasState from '../../store/canvasState'
import managePanelState from '../../store/managePanelState'


export const Canvas = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    console.log('Canvas component');
    
    useLayoutEffect(() => {
        if (canvasRef.current) {
            canvasState.setCanvas(canvasRef.current)
            managePanelState.change('draw')
        }
    }, [])

    return (
        <CanvasWrappSC>
            <CanvasSC ref={canvasRef} />
        </CanvasWrappSC>
    )
})