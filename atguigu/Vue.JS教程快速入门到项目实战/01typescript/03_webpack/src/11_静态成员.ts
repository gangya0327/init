;(() => {
  class Person {
    // 类中有默认name属性
    static name1: string = 'abc'
    constructor(name: string) {
      // name1是静态属性，不能通过实例对象直接调用
      // this.name1 = name
    }
    static sayHi() {
      console.log('hello')
    }
  }
  // const person: Person = new Person('peter')
  // console.log(person.name1)
  // person.sayHi()

  // 通过类名.静态属性方式来访问该数据
  console.log(Person.name1)
  Person.name1 = 'xyz'
  console.log(Person.name1)

  Person.sayHi()
})()
