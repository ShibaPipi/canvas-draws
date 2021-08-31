export interface TangramPoint {
  x: number
  y: number
}

export interface TangramParam {
  pos: Array<TangramPoint>
  color: string
}

export const tangramParams = [
  {
    pos: [
      {
        x: 0,
        y: 0
      },
      {
        x: 800,
        y: 0
      },
      {
        x: 400,
        y: 400
      }
    ],
    color: '#caff67'
  },
  {
    pos: [
      {
        x: 0,
        y: 0
      },
      {
        x: 400,
        y: 400
      },
      {
        x: 0,
        y: 800
      }
    ],
    color: '#67becf'
  },
  {
    pos: [
      {
        x: 800,
        y: 0
      },
      {
        x: 800,
        y: 400
      },
      {
        x: 600,
        y: 600
      },
      {
        x: 600,
        y: 200
      }
    ],
    color: '#ef3d61'
  },
  {
    pos: [
      {
        x: 600,
        y: 200
      },
      {
        x: 600,
        y: 600
      },
      {
        x: 400,
        y: 400
      }
    ],
    color: '#f9f51a'
  },
  {
    pos: [
      {
        x: 400,
        y: 400
      },
      {
        x: 600,
        y: 600
      },
      {
        x: 400,
        y: 800
      },
      {
        x: 200,
        y: 600
      }
    ],
    color: '#a594c0'
  },
  {
    pos: [
      {
        x: 200,
        y: 600
      },
      {
        x: 400,
        y: 800
      },
      {
        x: 0,
        y: 800
      }
    ],
    color: '#fa8ecc'
  },
  {
    pos: [
      {
        x: 800,
        y: 400
      },
      {
        x: 800,
        y: 800
      },
      {
        x: 400,
        y: 800
      }
    ],
    color: '#f6ca29'
  }
]

export const draw = (shape: TangramParam, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath()
  ctx.moveTo(shape.pos[0].x, shape.pos[0].y)
  for (let i = 1; i < shape.pos.length; i++) {
    ctx.lineTo(shape.pos[i].x, shape.pos[i].y)
  }
  ctx.closePath()

  ctx.fillStyle = shape.color
  ctx.fill()

  // 七巧板的边框
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 3
  ctx.stroke()
}
