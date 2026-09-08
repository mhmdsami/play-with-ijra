"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>clicked {count} times</button>;
}

export function Palette() {
  const [colors, setColors] = useState<string[]>(() => randomColors());
  return (
    <div>
      <div id="swatches">
        {colors.map((c) => (
          <div key={c} className="swatch" style={{ background: c }} />
        ))}
      </div>
      <button onClick={() => setColors(randomColors())}>shuffle</button>
    </div>
  );
}

function randomColors(): string[] {
  return Array.from({ length: 5 }, () => `hsl(${Math.floor(Math.random() * 360)} 40% 55%)`);
}
