function compareArray(array, inputArray) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== inputArray[i]) {
      return false
    }
  }
  return true
}
