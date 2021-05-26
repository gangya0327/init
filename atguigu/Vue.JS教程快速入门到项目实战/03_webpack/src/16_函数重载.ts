// 函数名字相同，参数及其个数不同
;(() => {
  function add(x: string, y: string): string
  function add(x: number, y: number): number
  function add(x: string | number, y: string | number) {
    // return x + y
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }
  console.log(add('abc', 'def'))
  console.log(add(1, 3))
  console.log('abc', 3)
})()
