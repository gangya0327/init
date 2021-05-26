// 不能在外部修改
;(() => {
  class Person {
    readonly name: string
    constructor(name: string) {
      this.name = name
    }
    sayHi() {
      console.log('hello', this.name)
      // this.name = 'kavin'
    }
  }
  const person = new Person('jack')
  console.log(person)
  console.log(person.name)
  // person.name = 'mary'
  console.log(person.name)
  person.sayHi()
})()
