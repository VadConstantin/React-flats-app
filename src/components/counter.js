import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const disableButton = count > 0 ? '' : 'true'

  return (
    <div>
      <h3> Count is {count} </h3>
      <button onClick={() => setCount(count - 1)} disabled={disableButton}> MOINS </button>
      <button onClick={() => setCount(count + 1)}> PLUS </button>
    </div>
  )
}

export default Counter;
