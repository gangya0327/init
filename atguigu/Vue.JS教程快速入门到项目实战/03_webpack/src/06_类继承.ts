;(() => {
  class Person {
    name: string
    age: number
    gender: string
    constructor(name: string, age = 20, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHi(str: string) {
      console.log(`hello 我是${this.name}, 今年${this.age}，是个${this.gender}孩子`, str)
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用父类的构造函数，使用super
      super(name, age, gender)
    }
    sayHi() {
      console.log('我是子类方法')
      // 调用父类方法
      super.sayHi('你好吗')
    }
  }
  const person = new Person('小红', 20, '女')
  person.sayHi('你好么')
  const student = new Student('小明', 22, '男')
  student.sayHi()
})()
