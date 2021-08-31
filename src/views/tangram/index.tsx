import React, { FC, useEffect, useRef } from 'react'
import { errMsg } from 'utils/canvas'

import { draw, tangramParams } from 'utils/shapes/tangram'

export const Tangram: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    canvas.width = 800
    canvas.height = 800
    const canvasCtx = canvas.getContext('2d')
    if (!canvasCtx) {
      alert(errMsg)
      return
    }

    for (let i = 0; i < tangramParams.length; i++) {
      draw(tangramParams[i], canvasCtx)
    }
  }, [canvasRef])

  return (
    <div>
      <canvas ref={canvasRef}>{errMsg}</canvas>
    </div>
  )
}
