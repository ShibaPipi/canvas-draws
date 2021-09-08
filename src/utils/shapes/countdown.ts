import { DIGIT_CLOCK_WINDOW_HEIGHT, WINDOW_WIDTH } from '../canvas';

interface Ball {
  x: number;
  y: number;
  vx: number
  vy: number;
  g: number;
  color: string;
}

const digit = [
  [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ], //0
  [
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1]
  ], //1
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
  ], //2
  [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //3
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1]
  ], //4
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //5
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //6
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0]
  ], //7
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //8
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0]
  ], //9
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ] //:
]

const colors = ['#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF4444', '#CC0000']

const RADIUS = 8
const MARGIN_TOP = 60
const MARGIN_LEFT = 30

let balls: Ball[] = []

export const render = (timer: React.MutableRefObject<number>, ctx: CanvasRenderingContext2D, date: Date) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height) // 清除屏幕，重新绘制
  const r = RADIUS
  const curHours = date.getHours()
  const curMinutes = date.getMinutes()
  const curSeconds = date.getSeconds()

  renderDigit(MARGIN_LEFT + 0 * (r + 1), MARGIN_TOP, Math.floor(curHours / 10), ctx)
  renderDigit(MARGIN_LEFT + 15 * (r + 1), MARGIN_TOP, Math.floor(curHours % 10), ctx)
  renderDigit(MARGIN_LEFT + 30 * (r + 1), MARGIN_TOP, 10, ctx)
  renderDigit(MARGIN_LEFT + 39 * (r + 1), MARGIN_TOP, Math.floor(curMinutes / 10), ctx)
  renderDigit(MARGIN_LEFT + 54 * (r + 1), MARGIN_TOP, Math.floor(curMinutes % 10), ctx)
  renderDigit(MARGIN_LEFT + 69 * (r + 1), MARGIN_TOP, 10, ctx)
  renderDigit(MARGIN_LEFT + 78 * (r + 1), MARGIN_TOP, Math.floor(curSeconds / 10), ctx)
  renderDigit(MARGIN_LEFT + 93 * (r + 1), MARGIN_TOP, Math.floor(curSeconds % 10), ctx)

  for (let i = 0; i < balls.length; i++) {
    ctx.fillStyle = balls[i].color;

    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
    ctx.closePath();

    ctx.fill();
  }

  const nextShowTimeSeconds = new Date();

  var nextHours = nextShowTimeSeconds.getHours();
  var nextMinutes = nextShowTimeSeconds.getMinutes()
  var nextSeconds = nextShowTimeSeconds.getSeconds()

  if (nextSeconds !== curSeconds) {
    if (Math.floor(curHours / 10) !== Math.floor(nextHours / 10)) {
      addBalls(MARGIN_LEFT + 0, MARGIN_TOP, Math.floor(curHours / 10));
    }
    if (Math.floor(curHours % 10) !== Math.floor(nextHours % 10)) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, Math.floor(curHours / 10));
    }

    if (Math.floor(curMinutes / 10) !== Math.floor(nextMinutes / 10)) {
      addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, Math.floor(curMinutes / 10));
    }
    if (Math.floor(curMinutes % 10) !== Math.floor(nextMinutes % 10)) {
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, Math.floor(curMinutes % 10));
    }

    if (Math.floor(curSeconds / 10) !== Math.floor(nextSeconds / 10)) {
      addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, Math.floor(curSeconds / 10));
    }
    if (Math.floor(curSeconds % 10) !== Math.floor(nextSeconds % 10)) {
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, Math.floor(nextSeconds % 10));
    }
  }

  updateBalls();

  date = nextShowTimeSeconds // 将当前时刻设置给 date，用于下次绘制和判断下一刻的时间是否变化，从而产生小球下落动画

  timer.current = window.requestAnimationFrame(() => {
    render(timer, ctx, date)
  })
}

const renderDigit = (
  x: number,
  y: number,
  num: number,
  ctx: CanvasRenderingContext2D
) => {
  const r = RADIUS
  let rx = 0
  let ry = 0
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      const point = digit[num][i][j]
      if (point === 1) {
        rx = x + (2 * j + 1) * (r + 1)
        ry = y + (2 * i + 1) * (r + 1)
        ctx.beginPath()
        ctx.arc(rx, ry, r, 0, 2 * Math.PI)
        ctx.closePath()

        ctx.fillStyle = 'rgb(0, 102, 153)'
        ctx.fill()
      }
    }
  }
}

/*const update = () => {
  var nextShowTimeSeconds = getCurrentShowTimeSeconds();

  var nextHours = parseInt(nextShowTimeSeconds / 3600);
  var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60)
  var nextSeconds = nextShowTimeSeconds % 60

  var curHours = parseInt(curShowTimeSeconds / 3600);
  var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
  var curSeconds = curShowTimeSeconds % 60

  if (nextSeconds !== curSeconds) {
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curHours / 10));
    }
    if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curHours / 10));
    }

    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes / 10));
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes % 10));
    }

    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds / 10));
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds % 10));
    }

    curShowTimeSeconds = nextShowTimeSeconds;
  }

  updateBalls();
}*/

const updateBalls = () => {
  for (let i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;

    // 碰撞检测
    if (balls[i].y >= DIGIT_CLOCK_WINDOW_HEIGHT - RADIUS) {
      balls[i].y = DIGIT_CLOCK_WINDOW_HEIGHT - RADIUS;
      balls[i].vy = -balls[i].vy * 0.75;
    }
    if (balls[i].x >= WINDOW_WIDTH - RADIUS) {
      balls[i].x = WINDOW_WIDTH - RADIUS;
      balls[i].vx = -balls[i].vx * 0.75;
    }
  }
}

const addBalls = (x: number, y: number, num: number) => {
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] === 1) {
        const aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 0.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -2,
          color: colors[Math.floor(Math.random() * colors.length)]
        }

        balls.push(aBall)
      }
    }
  }
}
