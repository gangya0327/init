// 数据初始化
let routes = [
  {
    title: '桌面开料',
    spend: 0.5,
    next: '抛光'
  },
  {
    title: '抛光',
    spend: 0.5,
    next: '组装'
  },
  {
    title: '组装',
    spend: 0.5,
    next: '油漆'
  },
  {
    title: '油漆',
    spend: 0.5,
    next: '全桌组装'
  },
  {
    title: '桌腿开料',
    spend: 0.5,
    next: '打磨'
  },
  {
    title: '打磨',
    spend: 1,
    next: '组装'
  },
  {
    title: '抽屉板开料',
    spend: 1,
    next: '抽屉组装'
  },
  {
    title: '抽屉组装',
    spend: 1,
    next: '抽屉油漆'
  },
  {
    title: '抽屉油漆',
    spend: 2,
    next: '全桌组装'
  },
  {
    title: '全桌组装',
    spend: 1
  }
]

// 找出根节点
let head = null
routes.forEach((item, index) => {
  if (!item.next) {
    head = item
    routes.splice(index, 1)
  }
})

// 遍历数组
while (routes.length !== 0) {
  routes.forEach((item, index) => {
    // 递归查询目标
    function findTarget(obj, target) {
      if (obj.title === target.next) {
        obj.prev = obj.prev ? [...obj.prev, item] : [item]
        routes.splice(index, 1)
      } else if (obj.prev) {
        obj.prev.forEach(item => {
          findTarget(item, target)
        })
      } else {
        return false
      }
    }
    findTarget(head, item)
  })
}

console.log('整理后树形结构', head)

let arr = [
  {
    route: [head.title],
    spend: [head.spend]
  }
]

function calculateRoute(head) {
  if (!head.prev) {
    return
  } else if (head.prev.length === 1) {
    arr.forEach((item, index) => {
      item.route.push(head.prev[0].title)
      item.spend.push(head.prev[0].spend)
    })
    calculateRoute(head.prev[0])
  } else if (head.prev.length === 2) {
    let arr1 = JSON.parse(JSON.stringify(arr))
    arr.forEach((item, index) => {
      item.route.push(head.prev[0].title)
      item.spend.push(head.prev[0].spend)
    })
    calculateRoute(head.prev[0])

    arr1.forEach((item, index) => {
      item.route.push(head.prev[1].title)
      item.spend.push(head.prev[1].spend)
    })
    calculateRoute(head.prev[1])

    let arr2 = arr1.concat(arr)
    arr = JSON.parse(JSON.stringify(arr2))
  }
}

calculateRoute(head)

// 题目理解了，但是没有实现，感觉实现思路就不对