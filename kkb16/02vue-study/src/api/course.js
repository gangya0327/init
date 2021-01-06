export function getCourses() {
  return new Promise((res) => {
    setTimeout(() => {
      res([{ name: 'web' }, { name: 'javascript' }, { name: 'html5' }])
    }, 2000)
  })
}