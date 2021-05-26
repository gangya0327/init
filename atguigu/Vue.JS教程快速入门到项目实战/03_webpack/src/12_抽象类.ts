// 抽象类包含抽象方法，没有具体实现，也可以包含实例方法
;(() => {
  abstract class Animal {
    abstract name: string
    // 抽象方法
    abstract eat(): any
    // 实例方法
    run() {
      console.log('running')
    }
  }
  // 定义一个派生类
  class Dog extends Animal {
    name: string = 'lala'
    eat() {
      console.log('eating')
    }
  }
  const dog = new Dog()
  dog.eat()
  dog.run()
  console.log(dog.name)
})()
