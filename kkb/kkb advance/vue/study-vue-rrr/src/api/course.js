// import axios from 'axios'

// 异步获取课程
export function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: 'web全栈', price: 98 }, { name: 'web高级', price: 78 }, { name: 'web入门', price: 49 }])
    }, 2000)
  })
}

// export function getCourses() {
//   return axios.get('/api/courses').then(res => res.data)
// }