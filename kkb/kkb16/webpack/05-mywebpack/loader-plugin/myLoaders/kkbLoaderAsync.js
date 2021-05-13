module.exports = function(source) {
  // loader处理模块，有处理顺序

  // return result
  // this.callback(null, result)
const callback = this.async()
  setTimeout(() => {
    const result = source.replace('hello', this.query.name)
    console.log(result)
    // return result
    callback(null, result)
  }, 3000);
}