import React, { FC, useEffect, useRef } from 'react'
import { errMsg } from 'utils/canvas'

import { draw, params } from '../../utils/shapes/locker';

export const Locker: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    canvas.style.border = '2px solid #999'
    canvas.width = 775
    canvas.height = 525
    const canvasCtx = canvas.getContext('2d')
    if (!canvasCtx) {
      alert(errMsg)
      return
    }

    for (let i = 0; i < params.boxList.length; i++) {
      draw(params.boxList[i], canvasCtx)
    }
  }, [canvasRef])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <canvas ref={canvasRef}>{errMsg}</canvas>
    </div>
  )
}
