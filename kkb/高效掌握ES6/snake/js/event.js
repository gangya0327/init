export default class Events {
  events = {} // 事件池，记录所有相关事件及处理函数
  on(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    if (!this.events[eventName].includes(fn)) {
      this.events[eventName].push(fn)
    }
  }
  off(eventName, fn) {
    if (!this.events[eventName]) return
    this.events[eventName] = this.events[eventName].filter(item => item != fn)
  }
  dispatch(eventName, ...args) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach(item => {
      item.call(this, ...args)
    })
  }
}