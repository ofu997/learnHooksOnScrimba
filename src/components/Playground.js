import randomColor from 'randomcolor';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export default function Playground() {
  const [count, setCount] = useState(30)

  // this is an infinite loop
  // const [color, setColor] = useState(null)
  // useEffect(() => {
  //   setColor(randomColor())
  // })

  const inputRef = useRef();
  
  const [color, setColor] = useState(randomColor())

  // const calculate = useCallback(<Calculate />, [count]);
  
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
      inputRef.current.focus();
    },
    [count]
  )

  // returns function
  useCallback(() => console.log('useCallback'));
  // returns result of function
  useMemo(() => console.log('useMemo')); 

  const cb = useCallback(num => console.log(num), [count]);
  
  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
      <Calculate
        cb = { cb }
        numb = { count }
      />
    </div>
  )
}

const Calculate = React.memo(({ cb, num }) => {
  cb(num);
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})

// import React, { useState, useEffect, useRef } from 'react'
// import randomColor from 'randomcolor'