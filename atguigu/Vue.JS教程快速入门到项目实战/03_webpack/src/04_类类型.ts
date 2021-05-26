;(() => {
  // 定义一个接口
  interface IFly {
    fly(): any
  }
  // 定义一个类，他的类型就是上面定义的接口
  class Person implements IFly {
    fly() {
      console.log('i can fly')
    }
  }
  const person = new Person()
  person.fly()

  interface ISwim {
    swim(): any
  }
  // 定义一个类，他的类型是IFly和ISwim
  class Person2 implements IFly, ISwim {
    fly() {
      console.log('i can fly too')
    }
    swim() {
      console.log('i can swim too')
    }
  }
  // 实例化对象
  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 接口可以继承其他接口
  interface IFlyAndSwim extends IFly, ISwim {}
  class Person3 implements IFlyAndSwim {
    fly() {
      console.log('i want to fly')
    }
    swim() {
      console.log('i want to swim')
    }
  }
  const person3 = new Person3()
  person3.fly()
  person3.swim()
})()
