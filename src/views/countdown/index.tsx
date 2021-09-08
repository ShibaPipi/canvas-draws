import React, { FC, useEffect, useRef } from 'react'

import { DIGIT_CLOCK_WINDOW_HEIGHT, errMsg, WINDOW_WIDTH } from 'utils/canvas'
import { render as countdownRender } from 'utils/shapes/countdown'

// todo: 组件、函数命名不对，不能是 countdown，而是 clock
export const Countdown: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const timer = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    canvas.width = WINDOW_WIDTH
    canvas.height = DIGIT_CLOCK_WINDOW_HEIGHT
    const canvasCtx = canvas.getContext('2d')
    if (!canvasCtx) {
      alert(errMsg)
      return
    }

    let date = new Date()
    timer.current = window.requestAnimationFrame(() => {
      countdownRender(timer, canvasCtx, date)
    })

    return () => window.cancelAnimationFrame(timer.current)
  }, [canvasRef])

  return (
    <div>
      <canvas ref={canvasRef}>{errMsg}</canvas>
    </div>
  )
}
