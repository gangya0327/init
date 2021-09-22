/* eslint-disable @typescript-eslint/no-explicit-any */
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

// 类型别名
type Foobar = { foo: string; bar: number }
let objType: Foobar = { foo: 'abc', bar: 3 }
objType = { foo: 'aa', bar: 5 }

// 联合类型
let union: string | number
union = 1
union = '1'

// 交叉类型
type First = { first: number }
type Second = { second: string }
type FirstAndSecond = First & Second

// 函数
// 1. 形参一旦声明就必须填写
// 2. 问号?表示可选
function greeting(person: string, age = 19, msg?: string): string {
  return 'hello ' + person
}
greeting('peter')

// 函数重载：
// 重载1
function watch(cb1: () => void): void
// 重载2
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void
// 实现
function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void) {
  if (cb2) {
    console.log('执行重载2')
  } else {
    console.log('执行重载1')
  }
}

// class
class Parent {
  private _foo = 'foo' // 私有属性
  protected bar = 'bar' // 保护属性，可以在子类中访问
  // 参数属性，构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = 'tua') {}
  // 方法修饰符
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private someMethod() {}
  // 存取器：属性方式访问，可以添加额外逻辑，控制读写性
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}

class Child extends Parent {
  constructor() {
    super()
  }
}

// 接口：只定义结构，不定义实现
interface Person {
  firstName: string
  lastName: string
}

// greeting函数通过Person接口约束参数结构
function greeting2(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
greeting2({ firstName: 'Jane', lastName: 'Martin' })

// 泛型：指在定义函数，接口或类时，不预先指定具体的类型，
// 而在使用的时候再指定类型的一种特性，增加代码的通用性
// 不用泛型
interface Result<T> {
  ok: 0 | 1
  data: T
}
