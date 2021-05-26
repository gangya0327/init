// 轻量级的为函数或者变量添加的约束

;(() => {
  function showMsg(str: string) {
    return '一二三 ' + str
  }
  // let msg = '四五六'
  let msg = [1, 2, 3]
  console.log(showMsg(msg))
})()