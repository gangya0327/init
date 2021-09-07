import { roomData } from './data.js'
console.log('roomData', roomData)

// 方法一
let count = 0
roomData.map(a => {
  a.roomList && a.roomList.map(b => {
    b.roomList && b.roomList.map(c => {
      c.roomList && c.roomList.map(d => {
        !d.roomList && count++
      })
    })
  })
})
console.log('count', count)

// 方法二
let count2 = 0
function getRoomList(obj) {
  obj.map(o => {
    if (o.roomList) {
      getRoomList(o.roomList)
    } else {
      count2++
    }
  })
}
getRoomList(roomData)
console.log(`count2`, count2)