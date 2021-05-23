;(() => {
  function getMsg<K, V>(value1: K, value2: V): [K, V] {
    return [value1, value2]
  }
  const arr1 = getMsg<string, number>('abc', 100.123)
  console.log(arr1)
})()
