import React, { useState, useMemo } from 'react'

export default function UseMemoPage() {
  const [count, setCount] = useState(0)

  // 当前计算只和count有关
  const expensive = useMemo(() => {
    console.log('compute')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  const [value, setValue] = useState('')
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <p>expensive: {expensive}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}
