import randomColor from 'randomcolor';
import React, { useEffect, useRef, useState } from 'react';

export default function Playground() {
  const [count, setCount] = useState(30)

  // this is an infinite loop
  // const [color, setColor] = useState(null)
  // useEffect(() => {
  //   setColor(randomColor())
  // })

  const inputRef = useRef();
  
  const [color, setColor] = useState(null)
  
  // 2nd argument is an array of dependencies
  // list of things that will trigger effect
  // Documentation: 
  // Does useEffect run after every render? Yes! By default, 
  // it runs both after the first render and after every update. 
  // Instead of thinking in terms of “mounting” and “updating”, 
  // you might find it easier to think that effects happen 
  // “after render”. React guarantees the DOM has been updated 
  // by the time it runs the effects.
  useEffect(
    () => { 
      setColor(randomColor()) ;
      inputRef.current.focus();
    },
    [count],
  )
  
  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
    </div>
  )
}

// import React, { useState, useEffect, useRef } from 'react'
// import randomColor from 'randomcolor'