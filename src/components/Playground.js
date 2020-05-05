import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react';
export default function Playground() {
  const [count, setCount] = useState(0)

  // this is an infinite loop
  // const [color, setColor] = useState(null)
  // useEffect(() => {
  //   setColor(randomColor())
  // })

    // 2nd argument is an array of dependencies
    // list of things that will trigger effect
  const [color, setColor] = useState(null)
  useEffect(
    () => { setColor(randomColor()) }, 
    [count],
  )
  
  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  )
}