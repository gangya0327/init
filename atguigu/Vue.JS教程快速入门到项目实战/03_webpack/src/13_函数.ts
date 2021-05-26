;(() => {
  // 函数声明，命名函数
  function add(x: number, y: number): number {
    return x + y
  }
  console.log(add(1, 3))
  // 函数表达式，匿名函数
  const add2 = function (x: string, y: string): string {
    return x + y
  }
  console.log(add2('a', 'b'))

  // 函数完整写法
  const add3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  console.log(add3(1, 2))
})()
