const str = "aBc"

// A-Z 65-90
// a-z 97-122

function changeStringCase(str) {
  const arr = str.split('')
  const result = []
  arr.map(item => {
    let code = item.charCodeAt()
    let res
    if (code >= 65 && code <= 90) {
      res = item.toLowerCase()
    } else if (code >= 97 && code <= 122) {
      res = item.toUpperCase()
    }
    result.push(res)
  })
  console.log(`result`, result.join(''))
  return result.join('')
}

console.log(changeStringCase(str))