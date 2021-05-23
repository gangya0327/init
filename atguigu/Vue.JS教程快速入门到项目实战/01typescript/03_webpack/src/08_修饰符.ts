/**
 * 描述类中的成员的可访问性
 * public 默认修饰符，公共，任何位置都可访问
 * private 外部（包括子类）无法访问
 * protected 只有子类可以访问
 */
;(() => {
  class Person {
    protected name: string
    constructor(name: string) {
      this.name = name
    }
    eat() {
      console.log(this.name, 'is eating~')
    }
  }
  const person = new Person('raven')
  // console.log(person.name)
  person.eat()

  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log(this.name, 'is playing~')
    }
  }
  const stu = new Student('mark')
  stu.play()
})()
