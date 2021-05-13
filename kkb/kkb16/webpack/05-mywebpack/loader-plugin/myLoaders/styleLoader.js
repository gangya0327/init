module.exports = function(source) {
  console.log(source)
  return `const ele = document.createElement('style')
    ele.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(ele)
  `
}