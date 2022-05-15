import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const disableButton = count > 0 ? '' : 'true'
  const increment = () => {
    setCount(previCount => previCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h3> Count is {count} </h3>
      <button onClick={() => setCount(count - 1)} disabled={disableButton}> - </button>
      <button onClick={increment}> + </button>
    </div>
  )
}

export default Counter;
