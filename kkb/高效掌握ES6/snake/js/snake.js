export default class Snake {
  constructor() {
    this.data = [
      { x: 5, y: 4, color: '#0f0' },
      { x: 4, y: 4, color: '#ddd' },
      { x: 3, y: 4, color: '#ddd' },
      { x: 2, y: 4, color: '#ddd' },
    ]
    this.direction = 'right'
  }
  move() {
    let last = this.data.length - 1
    this.lastData = {
      x: this.data[last].x,
      y: this.data[last].y,
      color: this.data[last].color
    }
    // 蛇身每次移动到前面一个的位置
    for (let i = this.data.length - 1; i > 0; i--) {
      this.data[i].x = this.data[i - 1].x
      this.data[i].y = this.data[i - 1].y
    }
    // 蛇头根据当前方向移动
    switch (this.direction) {
      case 'left':
        this.data[0].x--
        break
      case 'right':
        this.data[0].x++
        break
      case 'up':
        this.data[0].y--
        break
      case 'down':
        this.data[0].y++
        break
    }
  }
  changeDir(dir) {
    if (this.direction === 'left' || this.direction === 'right') {
      if (dir === 'left' || dir === 'right') {
        return false
      }
    }
    if (this.direction === 'up' || this.direction === 'down') {
      if (dir === 'up' || dir === 'down') {
        return false
      }
    }
    this.direction = dir
  }
  eatFood() {
    this.data.push(this.lastData)
  }
}