// 基础类型
;(() => {
  // console.log('test')
  // 布尔
  let flag: boolean = true
  console.log(flag)

  // 数字
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1, a2, a3, a4)

  // 字符串
  let str1: string = 'abc'
  let str2: string = 'def'
  let str3: string = 'ghi'
  console.log(`${str1}, ${str2}, ${str3}`)

  // 字符串+数字
  let str11: string = 'ccc'
  let num11: number = 1000
  console.log(str11 + num11)

  console.log('-----')

  let und: undefined = undefined
  let nul: null = null
  console.log(und, nul)
  // undefined和null可以作为其他类型的子类型（解除严格模式）
  // let num2: number = undefined
  // console.log(num2)

  console.log('-----')

  // 数组
  let arr1: number[] = [1, 2, 3, 4, 5]
  console.log(arr1)
  // 泛型
  let arr2: Array<number> = [1, 2, 3, 4, 5]
  console.log(arr2)

  // 元组，类型和数据的位置个数一开始就确定
  let arr3: [string, number, boolean] = ['abc', 100, false]
  console.log(arr3)

  console.log('-----')

  // 枚举
  enum Color {
    red,
    green = 5,
    blue,
  }
  console.log(Color)
  let color: Color = Color.red
  console.log(color)

  enum Gender {
    女,
    男,
  }
  console.log(Gender)

  console.log('-----')

  // 当一个数组中有多个数据，个数不确定，类型也不确定
  let str: any = 100
  str = 'abc'
  console.log(str)

  // void
  function showMsg(): void {
    console.log('haha')
  }
  showMsg()
  console.log(showMsg())

  console.log('-----')

  // object
  function getObj(obj: object): object {
    console.log(obj)
    return {
      name: 'peter',
      age: 20,
    }
  }
  console.log(getObj({ name: 'raven' }))
  console.log(getObj(new String('123')))
  console.log(getObj(String))

  console.log('-----')

  // 联合类型
  function getString(str: number | string): string {
    return str.toString()
  }
  console.log(getString(123))
  console.log(getString('abc'))

  function getLength(str: number | string): number {
    // 类型断言方法1
    if ((<string>str).length) {
      // 类型断言方法2
      return (str as string).length
    } else {
      return str.toString().length
    }
  }
  console.log(getLength(123))
  console.log(getLength('abcde'))

  // 类型推断，在没有明确指定类型时推测一个类型
  // let txt = 100 // 推测为number
  // txt = 'abc'
  // console.log(txt)

  let txt2 // 推测为any
  txt2 = 100
  txt2 = 'bbb'
  console.log(txt2)

  console.log('-----')
})()
