import randomColor from 'randomcolor';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';
import Name from './Name';
import RefreshButton from './RefreshButton';
import useWindowSize from './WindowSize';

export default function Paint() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

  // wrap it in a useCallback so we don't recreate this function on every re-render
  // , []keeps the same function instance across renders
  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
    .then(res => res.json())
    .then(res => {
      setColors(res.colors.map(color => color.hex.value))
      setActiveColor(res.colors[0].hex.value)
    }, [])
  })

  // empty array 2nd argument only runs on first render
  useEffect(getColors, []); 
  // infinite loop of color
  // useEffect(getColors); 

  const [visible, setVisible] = useState(false)
  let timeoutId = useRef(); 

  const [windowWidth, windowHeight] = useWindowSize(() => {
      setVisible(true)
      clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(() => setVisible(false), 500)
  });

  const headerRef = useRef({ offsetHeight: 0 }); 

  return (
    <div className="app">
      <header ref={ headerRef } style={{ borderTop: `10px solid ${activeColor}` }}>
        <Name />
        <div style={{ marginLeft: "25%", marginTop: 10, display: "flex" }}>
          <ColorPicker
            colors = { colors }
            activeColor = { activeColor }
            setActiveColor = { setActiveColor }
          />
          <RefreshButton 
            cb = { getColors }
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
        <div className={`window-size ${visible ? '' : 'hidden'}`}>
          {windowWidth} x {windowHeight}
        </div>
      </div>
  )
}