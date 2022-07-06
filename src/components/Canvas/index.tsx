import React, { useLayoutEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { CanvasSC, CanvasWrappSC } from './styles'
import canvasState from '../../store/canvasState'


export const Canvas = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useLayoutEffect(() => {
        if (canvasRef.current) {
            canvasState.setCanvas(canvasRef.current)
        }
    }, [])

    return (
        <CanvasWrappSC>
            <CanvasSC ref={canvasRef} />
        </CanvasWrappSC>
    )
})