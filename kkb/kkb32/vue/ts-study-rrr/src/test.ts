/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let var1: string
var1 = 'abc'
// var1 = 4

// 编译器类型推断
const var2 = true
// var2 = 4

// 类型数组
let arr: string[]
arr = ['peter']

// 任意类型any
let varAny: any
varAny = 4
varAny = 'ccc'

let arrAny: any[]
arrAny = ['a', 4, false]

// 函数中的类型约束
function greet(person: string): string {
  return 'hello ' + person
}

// void类型，没有返回值的函数
function warn(): void {
  console.log('warn')
}
