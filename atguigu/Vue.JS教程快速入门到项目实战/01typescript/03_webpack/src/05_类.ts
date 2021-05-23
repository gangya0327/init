// 类可以理解为模板，通过模板可以实例化对象
;(() => {
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string
    constructor(name: string, age = 19, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHi(str: string) {
      console.log(`hello 我是${this.name}, 今年${this.age}，是个${this.gender}孩子`, str)
    }
  }
  const person = new Person('李四', 20, '男')
  person.sayHi('你好吗')
})()
