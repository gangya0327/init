// 定义接口时，为接口中的属性或方法定义泛型类型
;(() => {
  // 定义泛型接口
  interface IBaseCRUD<T> {
    data: Array<T>
    add: (t: T) => T
    getUserId: (id: number) => T
  }
  class User {
    name: string
    age: number
    id?: number
    constructor(name: string, age: number, id?: number) {
      this.name = name
      this.age = age
      // this.id = id
    }
  }
  class UserCRUD implements IBaseCRUD<User> {
    data: Array<User> = []
    add(user: User): User {
      user.id = Date.now() + Math.random()
      this.data.push(user)
      return user
    }
    getUserId(id: number): User {
      return this.data.find((user) => user.id === id)!
    }
  }
  // 实例化添加用户信息对象的类UerCRUD
  const userCRUD: UserCRUD = new UserCRUD()
  userCRUD.add(new User('jack', 20))
  userCRUD.add(new User('sam', 30))
  const { id } = userCRUD.add(new User('peter', 28))
  console.log(userCRUD.data)
  console.log(userCRUD.getUserId(id!))
})()
