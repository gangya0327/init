import axios from 'axios'

// export function getCourses() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res([{ name: 'web' }, { name: 'javascript' }, { name: 'html5' }])
//     }, 2000)
//   })
// }

export function getCourses() {
  return axios.get('/api/courses').then(res => res.data)
}