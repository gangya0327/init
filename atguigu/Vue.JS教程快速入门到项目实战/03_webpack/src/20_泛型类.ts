;(() => {
  class GenericNumber<T> {
    defaultValue!: T
    add!: (x: T, y: T) => T
  }

  const g1: GenericNumber<number> = new GenericNumber<number>()
  g1.defaultValue = 100
  g1.add = function (x, y) {
    return x + y
  }
  console.log(g1)
  console.log(g1.add(2, 3))

  const g2: GenericNumber<string> = new GenericNumber<string>()
  g2.defaultValue = 'abc'
  g2.add = function (x, y) {
    return x + y
  }
  console.log(g2)
  console.log(g2.add('hello', 'baa'))
})()
