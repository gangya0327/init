// 在定义函数、接口、类时不能预先确定要使用的数据的类型
;(() => {
  function getArr<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr<number>(100.123, 3)
  console.log(arr1[0].toFixed(2))
  const arr2 = getArr<string>('abc', 3)
  console.log(arr2[0].split(''))
})()
