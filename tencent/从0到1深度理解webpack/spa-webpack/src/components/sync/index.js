import lodash from 'lodash-es'
import item from './sync.css'

const sync = function() {
  console.log('sync')
  console.log('item', item)
  document.getElementById('app').innerHTML = `<h2 class='${item.test}'>hello css</h2>`
}
const isArrayFn = function(args) {
  console.log(lodash.isArray(args))
}
export {
  sync,
  isArrayFn
}