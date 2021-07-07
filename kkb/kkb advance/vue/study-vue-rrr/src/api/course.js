// 异步获取课程
export function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'web全栈', price: 123 }, { name: 'web高级', price: 89 }, { name: 'web入门', price: 42 }])
    }, 2000)
  })
}