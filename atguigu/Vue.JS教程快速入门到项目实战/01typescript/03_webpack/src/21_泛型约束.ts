// 直接对一个泛型参数取length，会报错，因为不确定是否有该属性
;(() => {
  interface ILength {
    length: number
  }
  function getLength<T extends ILength>(x: T): number {
    return x.length
  }
  console.log(getLength<string>('abc'))
  // console.log(getLength<string>(123))
})()
