;(() => {
  function showMsg(str: string, ...args: string[]) {
    console.log(str)
    console.log(args)
  }
  showMsg('a', 'b', 'c', 'd')
})()
