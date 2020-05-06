import randomColor from 'randomcolor';
import React, { useEffect, useRef, useState } from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';
import Name from './Name';
import WindowSize from './WindowSize';

export default function Paint() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    })
  }

  // empty array 2nd argument only runs on first render
  useEffect(getColors, []); 

  const headerRef = useRef({ offsetHeight: 0 }); 

  return (
    <div className="app">
      <header ref={ headerRef } style={{ borderTop: `10px solid ${activeColor}` }}>
        <Name />
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors = { colors }
            activeColor = { activeColor }
            setActiveColor = { setActiveColor }
          />
        </div>
      </header>
        {
          activeColor && (
            <Canvas
              color = { activeColor }
              height = { window.innerHeight - headerRef.current.offsetHeight }
            />
          )
        }
        <WindowSize /> 
      </div>
  )
}