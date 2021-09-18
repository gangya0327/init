const a = document.getElementsByTagName('a')[0]

document.cookie = 'mykey=123456'
const queryObject = {}
const search = window.location.search
search.replace(/([^&=?]+)=([^&]+)/g, (m, $1, $2) => {
  console.log(`m`, m)
  console.log(`$1`, $1)
  console.log(`$2`, $2)
  queryObject[$1] = decodeURIComponent($2)
})

console.log(`queryObject`, queryObject)
a.href = queryObject.redirectUrl

// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.async = true;
// script.src = 'remote.js';
// var s = document.getElementsByTagName('script')[0];
// s.parentNode.insertBefore(script, s);