import Events from './event.js'
import Map from './map.js'
import Food from './food.js'
import Snake from './snake.js'

export default class Game extends Events {
  constructor(el, rect) {
    super()
    this.map = new Map(el, rect)
    this.food = new Food(this.map.cells, this.map.rows)
    this.snake = new Snake()
    this.map.setData(this.snake.data)
    this.createFood()
    this.map.setData(this.food.data)
    this.map.render()

    this.timer = 0
    this.interval = 300
    this.keyDown = this.keyDown.bind(this)
    this.grade = 0

    this.control()
  }
  start() {
    this.move()
  }
  // 在地图中渲染
  render() {
    this.map.clearData()
    this.map.setData(this.snake.data)
    this.map.setData(this.food.data)
    this.map.render()
  }
  createFood() {
    if (this.map.include(this.food.data)) {
      this.food.create()
    }
  }
  changeGrade(grade) {
    this.dispatch('changegrade', grade)
  }
  stop() {
    clearInterval(this.timer)
  }
  // 控制移动
  move() {
    this.stop()
    this.timer = setInterval(() => {
      this.snake.move()
      if (this.isEat()) {
        this.grade++
        this.snake.eatFood()
        this.createFood()
        this.changeGrade(this.grade)
        this.interval *= 0.8

        if (this.grade > 10) {
          this.over(1)
        }
      }
      if (this.isOver()) {
        this.over(0)
        return false
      }
      this.render()
    }, this.interval)
  }
  isEat() {
    return (this.snake.data[0].x === this.food.data.x) && (this.snake.data[0].y === this.food.data.y)
  }
  isOver() {
    // 1. 判断是否出地图
    if (
      this.snake.data[0].x < 0 ||
      this.snake.data[0].x > this.map.cells - 1 ||
      this.snake.data[0].y < 0 ||
      this.snake.data[0].y > this.map.rows - 1
    ) {
      return true
    }
    // 2. 判断是否撞到自己
    for (let i = 1; i < this.snake.data.length - 1; i++) {
      if (this.snake.data[0].x === this.snake.data[i].x && this.snake.data[0].y === this.snake.data[i].y) {
        return true
      }
    }
    return false
  }
  // overState 0中途停止 1游戏胜利
  over(overState) {
    if (overState === 1) {
      // this.toWin && this.toWin()
      this.dispatch('win')
    } else {
      // this.toOver && this.toOver()
      this.dispatch('over')
    }
    this.stop()
  }
  keyDown({ keyCode }) {
    switch (keyCode) {
      case 37:
        this.snake.changeDir('left')
        break;
      case 38:
        this.snake.changeDir('up')
        break;
      case 39:
        this.snake.changeDir('right')
        break;
      case 40:
        this.snake.changeDir('down')
        break;
    }
  }
  // 控制器
  control() {
    this.dispatch('control')
    window.addEventListener('keydown', this.keyDown)
  }
  removeControl() {
    window.removeEventListener('keydown', this.keyDown)
  }
  addControl(fn) {
    fn.call(this)
  }
}