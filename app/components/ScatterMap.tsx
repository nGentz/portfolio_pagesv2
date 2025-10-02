"use client";
import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react'

export default function ScatterMap() {
  const mapDiv = useRef<HTMLDivElement>(null)
  const [figs, setFigs] = useState<{ def: any; scaled: any }>({ def: null, scaled: null })
  const plotlyRef = useRef<any>(null)

  // 1) load Plotly, 2) fetch both JSONs, 3) draw
  useEffect(() => {
    async function init() {
      const Plotly = (await import('plotly.js-dist-min')).default
      plotlyRef.current = Plotly
      const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
      const [def, scaled] = await Promise.all([
        fetch(`${base}/scatter_map_default.json`).then(r => r.json()),
        fetch(`${base}/scatter_map_scaled.json`).then(r => r.json())
      ])
      setFigs({ def, scaled })
      Plotly.newPlot(mapDiv.current!, def.data, def.layout)
    }
    init()
  }, [])

  // toggles between default/scaled
  function onToggle(e: ChangeEvent<HTMLInputElement>) {
    const fig = e.target.checked ? figs.scaled : figs.def
    if (fig && plotlyRef.current) plotlyRef.current.react(mapDiv.current!, fig.data, fig.layout)
  }

  return (
    <>
      <label style={{ display: 'block', marginBottom: 8 }}>
        <input type="checkbox" onChange={onToggle} /> Use scaled markers
      </label>
      <div ref={mapDiv} style={{ width: '100%', height: 600 }} />
    </>
  )
}
