// 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生不同行为
;(() => {
  // 定义一个类
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    run(distance: number = 10) {
      console.log(this.name, `跑了${distance}米`)
    }
  }
  // 定义一个子类
  class Dog extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 5) {
      console.log(this.name, `跑了${distance}米`)
    }
  }
  class Pig extends Animal {
    constructor(name: string) {
      super(name)
    }
    run(distance: number = 2) {
      console.log(this.name, `跑了${distance}米`)
    }
  }

  const ani: Animal = new Animal('动物')
  ani.run()
  const dog: Dog = new Dog('阿黄')
  dog.run()
  const pig: Pig = new Pig('猪猪')
  pig.run()

  console.log('----')

  const dog1: Animal = new Dog('哈士奇')
  dog1.run()
  const pig1: Animal = new Pig('二师弟')
  pig1.run()

  console.log('----')

  function doRun(ani: Animal) {
    ani.run()
  }
  doRun(dog1)
  doRun(pig1)
})()
