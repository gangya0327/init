import React, { useState, useEffect } from 'react'

export default function HookPage(props) {
  // 定义一个叫count的sate变量，初始化为0
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())

  // 相当于compoenentDidMount和componentDidUpdate
  useEffect(() => {
    // 只需要在count发生改变时执行
    document.title = `点击了${count}次`
  }, [count])
  useEffect(() => {
    // 只需要在componentDidMount时执行
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    // 清除定时器
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}
