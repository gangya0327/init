;(() => {
  function sayHi(str:string) {
    return 'hello ' + str
  }
  let text = 'peter'
  console.log(sayHi(text))
})()

/**
 * ts文件中只用了js代码，可以直接在浏览器中运行
 * 否则需要先编译成js代码
 */