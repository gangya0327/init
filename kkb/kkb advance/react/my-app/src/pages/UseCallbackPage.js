import React, { useState, useCallback, PureComponent } from 'react'

export default function UseCallbackPage() {
  const [count, setCount] = useState(0)

  const addClick = useCallback(() => {
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
      <button onClick={() => setCount(count + 1)}>add</button>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log('child render')
    const { addClick } = this.props
    return (
      <div>
        <h3>Child</h3>
        <button onClick={addClick}>add</button>
      </div>
    )
  }
}
