import React from 'react';

export default function ColorPicker({ colors = [], activeColor, setActiveColor }) {
  if (!colors.length) return null
  return (
    <div className="color-picker">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <span style={{ background: color, padding: 10, marginRight: 20 }} />
        </label>
      ))}
    </div>
  )
}