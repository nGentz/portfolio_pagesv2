"use client";
import { useState } from "react";

export default function Chart() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid #007AFF', borderRadius: 8, padding: 16, margin: '1.5rem 0', background: '#f5faff' }}>
      <strong>Interactive Chart Example</strong>
      <div style={{ margin: '1rem 0' }}>Button clicked: {count} times</div>
      <button
        style={{ background: '#007AFF', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1rem', cursor: 'pointer' }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
} 