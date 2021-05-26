;(() => {
  class Person {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    get fullName() {
      console.log('getting...')
      return this.firstName + '_' + this.lastName
    }
    set fullName(value) {
      console.log('setting...')
      let names = value.split('_')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  const person = new Person('peter', 'raven')
  console.log(person.fullName)
  person.fullName = 'evan_jack'
  console.log(person.fullName)
})()
