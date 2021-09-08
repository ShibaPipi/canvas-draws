interface Box {
  num: string;
  row: Array<number>;
  col: Array<number>;
}

interface LockerLayout {
  id: string;
  name: string;
  rows: number;
  cols: number;
  boxList: Array<Box>;
}

const boxWidth = 100
const boxHeight = 100
const margin = 25

export const params: LockerLayout = {
  id: 'foo-bar-baz-001',
  name: 'locker',
  rows: 8,
  cols: 6,
  boxList: [{
    num: '1',
    row: [0],
    col: [0, 1]
  }, {
    num: '2',
    row: [1],
    col: [0]
  }, {
    num: '3',
    row: [2],
    col: [0]
  }, {
    num: '4',
    row: [1, 2],
    col: [1]
  }, {
    num: '4-A',
    row: [3],
    col: [1, 2, 3]
  }, {
    num: 'Square',
    row: [1, 2],
    col: [2, 3]
  }, {
    num: '6',
    row: [0, 1],
    col: [4, 5]
  }, {
    num: '5',
    row: [2, 3],
    col: [5]
  }]
}

export const draw = (box: Box, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath()

  const x = box.col[0] * boxWidth + (box.col[0] + 1) * margin
  const y = box.row[0] * boxHeight + (box.row[0] + 1) * margin
  const width = box.col.length * boxWidth + (box.col.length - 1) * margin
  const height = box.row.length * boxHeight + (box.row.length - 1) * margin

  ctx.moveTo(x, y)
  ctx.lineTo(x + width, y)
  ctx.lineTo(x + width, y + height)
  ctx.lineTo(x, y + height)

  ctx.closePath()

  ctx.font = '48px "微软雅黑"'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.fillText(box.num, x + width / 2, y + height / 2)

  ctx.strokeStyle = '#999'
  ctx.lineWidth = 3
  ctx.stroke()
}
