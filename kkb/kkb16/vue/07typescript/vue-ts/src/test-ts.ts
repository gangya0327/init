import { Feature } from './types'

// 类型注解
let var1: string
// eslint-disable-next-line prefer-const
var1 = 'kkb'
// var1 = 1

// 类型推论
// eslint-disable-next-line prefer-const
let var2 = true
// var2 = 1

// 原始类型：string，boolean，undefined，null，symbol
let var3: string | undefined

// 类型数据
let arr: string[]
// eslint-disable-next-line prefer-const
arr = ['tom']
// arr = ['tom', 1]

// 任意类型
let varAny: any
varAny = 'aaa'
varAny = 123

// 函数类型
function greet(person: string): string {
  return 'hello ' + person
}

// void类型
function warn(): void {
  console.log(123)
}

// 对象object，不是原始类型的就是对象类型
function fn1(o: object) {}
fn1({ prop: 1 })
// fn1(123)

function fn2(o: { prop: number }) {}
fn2({ prop: 123 })
// fn2({prop: '123'})

// 类型别名 type
type Prop = { prop: number }
function fn3(p: Prop) {}

// type与interface基本相同
interface Prop2 {
  prop: number
}

// 类型断言
const someValue: any = 'this is a string'
const strLen = (someValue as string).length

// 联合类型
let union: string | number
union = '1'
union = 1

// 交叉类型
type First = { first: number }
type Second = { second: number }
// 扩展出新的type
type FirstAndSecond = First & Second
function fn4(param: FirstAndSecond): FirstAndSecond {
  return { first: 1, second: 2 }
}

// 函数
function greeting(person: string, msg1 = 'abc', msg2?: string): string {
  return ''
}
greeting('tom')

// 函数重载
// 主要用于源码和框架，函数用参数个数，类型或者返回值类型区分同名函数
// 先声明，再实现
// 多个同名声明
function watch(cb1: () => void): void;
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void;
// 实现
function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void): void {
  if (cb1 && cb2) {
    console.log('执行重载2')
  } else {
    console.log('执行重载1')
  }
}
// watch()

// class类
class Parent {
  private _foo = 'foo' // 私有属性，不能在类外部访问
  protected bar = 'bar' // 保护属性，可以在子类中访问

  // 参数属性：构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = 'tua') {}

  // 方法也有修饰符
  private someMethod() {}

  // 存取器：属性方式访问，可添加额外逻辑，控制读写
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}

const p = new Parent()
p.foo
p.tua

class Child extends Parent {
  say() {
    this.bar
  }
}

const c = new Child()
c.foo
c.tua
c.say()

// 接口仅约束结构，不要求实现

// 泛型是指在定义函数，接口或类时，不预先指定具体的类型，
// 而在使用时再指定类型的一种特性，增加代码通用性

// 不用泛型
// interface Result {
//   ok: 0 | 1,
//   data: Feature[]
// }

interface Result<T> {
  ok: 0 | 1
  data: T
}
// 泛型方法
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data }
}
// 用尖括号方式指定T为string
getResult<string>('hello')
// 用类型推断指定T为number
getResult(1)