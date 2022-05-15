import React, { useState } from 'react'

const Clockbis = () => {
  const [date, setDate] = useState(new Date())

  return(
    <div>
      Hello {date.toLocaleTimeString()}
    </div>
  )
}

export default Clockbis;
