import React, { FC, useEffect, useRef, useState } from 'react'

import { errMsg, WINDOW_HEIGHT, WINDOW_WIDTH } from 'utils/canvas'
import { render as countdownRender } from 'utils/shapes/countdown'

export const Countdown: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const timer = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    canvas.width = WINDOW_WIDTH
    canvas.height = WINDOW_HEIGHT
    const canvasCtx = canvas.getContext('2d')
    if (!canvasCtx) {
      alert(errMsg)
      return
    }

    timer.current = window.requestAnimationFrame(() => {
      countdownRender(canvasCtx, new Date())
    })

    return () => window.cancelAnimationFrame(timer.current as number)
  }, [canvasRef])

  return (
    <div>
      <canvas ref={canvasRef}>{errMsg}</canvas>
    </div>
  )
}
