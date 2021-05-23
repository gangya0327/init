;(() => {
  // 函数类型：通过接口方式作为函数类型使用
  interface ISearchFunc {
    //  定义一个调用签名
    (source: string, subString: string): boolean
  }
  const searchString: ISearchFunc = function (source: string, subString: string): boolean {
    return source.search(subString) > -1
  }
  console.log(searchString('hello typescript', 'hello'))
})()
