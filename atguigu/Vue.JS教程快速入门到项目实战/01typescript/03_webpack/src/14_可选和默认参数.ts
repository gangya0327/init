;(() => {
  const getFullName = function (firstName: string = 'peter', lastNmae?: string): string {
    if (lastNmae) {
      return firstName + '_' + lastNmae
    } else {
      return firstName
    }
  }
  console.log(getFullName())
  console.log(getFullName('jack'))
  console.log(getFullName('tom', 'ford'))
})()
