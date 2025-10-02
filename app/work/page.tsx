'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

const works = [
  { 
    title: 'NYC Subway Ridership', 
    slug: 'nyc-subway-ridership',
    image: 'images/mta-hover-img2.webp',
    previewWidth: 320,
    previewHeight: 344
  },
  { 
    title: 'MoMA Tableau Dashboard', 
    slug: 'moma-tableau-dashboard',
    image: 'images/tableau-hover-img.webp',
    previewWidth: 450,
    previewHeight: 350
  },
]

export default function WorkPage() {
  const [hoveredWork, setHoveredWork] = useState<string | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  // Find the hovered work's info
  const currentWork = works.find(w => w.slug === hoveredWork)

  // Mouse move updates preview position using ref (no React state)
  function handleMouseMove(e: React.MouseEvent) {
    if (!currentWork) return
    // Base sizes
    let imageWidth = currentWork.previewWidth ?? 450
    let imageHeight = currentWork.previewHeight ?? 350
    let offsetX = 145
    let offsetY = 180

    // On small screens, use smaller hardcoded preview size
    if (window.innerWidth < 550) {
      imageWidth = 240
      imageHeight = 180
      offsetX = 90
      offsetY = 120
    }

    // Clamp size to viewport so it never overflows
    const maxW = Math.min(imageWidth, window.innerWidth - 20)
    const maxH = Math.min(imageHeight, window.innerHeight - 20)

    let left = e.clientX + offsetX
    let top = e.clientY - offsetY

    if (left + maxW > window.innerWidth) left = window.innerWidth - maxW
    if (left < 0) left = 0
    if (top + maxH > window.innerHeight) top = window.innerHeight - maxH
    if (top < 0) top = 0

    if (previewRef.current) {
      previewRef.current.style.left = `${left}px`
      previewRef.current.style.top = `${top}px`
      previewRef.current.style.width = `${maxW}px`
      previewRef.current.style.height = `${maxH}px`
    }
  }

  return (
    <main className="page-container" style={{ fontFamily: 'Sweden Sans, system-ui, sans-serif', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <style jsx>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* Preview image as a fixed element, behind text (lower zIndex) */}
      {hoveredWork && currentWork && (
        <div
          ref={previewRef}
          style={{
            position: 'fixed',
            width: currentWork.previewWidth ?? 450,
            height: currentWork.previewHeight ?? 350,
            maxWidth: '90vw',
            maxHeight: '90vh',
            border: '1px solid #e0e0e0',
            backgroundImage: `url(${currentWork.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            pointerEvents: 'none',
            zIndex: 0,
            borderRadius: 0,
            animation: 'fadeInScale 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}

      <div style={{ maxWidth: 700, width: '100%', position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 500, marginBottom: '2rem', color: '#111' }}>Selected Works</h1>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {works.map((work) => (
            <li key={work.slug} style={{ marginBottom: '1.2rem', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Link 
                  href={`/work/${work.slug}`} 
                  style={{
                    color: '#222',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    fontWeight: 400,
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    zIndex: 2
                  }}
                  onMouseEnter={(e) => {
                    setHoveredWork(work.slug)
                    handleMouseMove(e)
                  }}
                  onMouseLeave={() => setHoveredWork(null)}
                  onMouseMove={handleMouseMove}
                >
                  {work.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
