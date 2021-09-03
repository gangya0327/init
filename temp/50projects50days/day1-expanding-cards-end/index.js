const panels = document.querySelectorAll('.panel')

panels.forEach(item => {
  item.addEventListener('click', function() {
    // 方法一 查找class名称
    // document.getElementsByClassName('active')[0].classList.remove('active')

    // 方法二 父节点的兄弟元素
    // Array.from(item.parentElement.children)
    //   .filter(itm => itm !== item)
    //   .forEach(itm => itm.classList.remove('active'))

    // 方法二变种 使用call
    [].filter.call(item.parentElement.children, child => child !== item)
      .forEach(itm => itm.classList.remove('active'))

    item.classList.add('active')
  })
});
