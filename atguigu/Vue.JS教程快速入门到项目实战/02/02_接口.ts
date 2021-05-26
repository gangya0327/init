;(() => {
  interface IPerson {
    firstName: string
    lastName: string
  }
  function shwoFullName(person: IPerson) {
    return person.firstName + '-' + person.lastName
  }
  const person = {
    firstName: 'peter',
    lastName: 'raven',
  }
  console.log(shwoFullName(person))
})()
