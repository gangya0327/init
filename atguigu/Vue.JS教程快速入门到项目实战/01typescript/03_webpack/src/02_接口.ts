;(() => {
  // 定义一个接口，该接口作为person对象的类型使用
  // 限定或约束该对象中的属性类型
  interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
  }
  // 定义一个对象，该对象的类型就是定义的接口IPerson
  const person: IPerson = {
    id: 1,
    name: 'peter',
    age: 20,
    // sex: 'male',
  }
  console.log(person)
  // person.id = 9
  // console.log(person)
})()
