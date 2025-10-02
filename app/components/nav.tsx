"use client";
import Link from 'next/link'

const navItems = [
  { path: '/about', name: 'about', external: false },
  { path: '/work', name: 'work', external: false },
  { path: 'https://drive.google.com/file/d/1uHAqnv1dVrXthm79Upqfvx2GTgCBc9og/view', name: 'resume', external: true },
]

// Add a prop for variant: 'sidebar' or 'topbar'
interface NavbarProps {
  variant?: 'sidebar' | 'topbar';
  onItemClick?: () => void;
}

export function Navbar({ variant = 'sidebar', onItemClick }: NavbarProps) {
  const isSidebar = variant === 'sidebar';
  return (
    <div
      style={
        isSidebar
          ? { display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'Sweden Sans, system-ui, sans-serif', justifyContent: 'space-between', paddingTop: '12rem' }
          : { display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: 64, borderBottom: '2px solid #222', background: '#FFF', zIndex: 20, position: 'relative', fontFamily: 'Sweden Sans, system-ui, sans-serif', padding: '0 1rem' }
      }
    >
      {isSidebar ? (
        <div>
          <Link href="/" onClick={onItemClick} style={{ textDecoration: 'none' }}>
            <div style={{ fontWeight: 500, fontSize: '2.25rem', margin: '0 0 0.5rem 2rem', textAlign: 'left', color: '#111', cursor: 'pointer' }}>Nicholas Gentz</div>
          </Link>
          <div style={{ color: '#222', fontSize: '1.1rem', textAlign: 'left', fontWeight: 400, marginLeft: '2rem', marginBottom: '2.5rem' }}>
            Data Analyst<br />M.S. in Analytics (2026)
          </div>
          <div style={{ borderBottom: '2px solid #222', margin: '0 0 2.5rem 0', width: '100%' }} />
          <nav style={{ marginLeft: '2rem', marginTop: '1.5rem' }}>
            {navItems.map(({ path, name, external }) => (
              external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onItemClick}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontWeight: 400,
                    display: 'block',
                    margin: '1.1rem 0',
                    textAlign: 'left',
                    fontFamily: 'Sweden Sans, system-ui, sans-serif',
                  }}
                >
                  {name} <span style={{ fontSize: '1.2rem', verticalAlign: 'middle' }}>↗</span>
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  onClick={onItemClick}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontWeight: 400,
                    display: 'block',
                    margin: '1.1rem 0',
                    textAlign: 'left',
                    fontFamily: 'Sweden Sans, system-ui, sans-serif',
                  }}
                >
                  {name}
                </Link>
              )
            ))}
          </nav>
        </div>
      ) : (
        <>
          <Link href="/" onClick={onItemClick} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ fontWeight: 500, fontSize: '1.5rem', margin: '0 1.5rem 0 0', color: '#111', cursor: 'pointer', whiteSpace: 'nowrap' }}>Nicholas Gentz</div>
          </Link>
          <nav style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            {navItems.map(({ path, name, external }) => (
              external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    display: 'inline-block',
                    fontFamily: 'Sweden Sans, system-ui, sans-serif',
                  }}
                >
                  {name} <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}>↗</span>
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    display: 'inline-block',
                    fontFamily: 'Sweden Sans, system-ui, sans-serif',
                  }}
                >
                  {name}
                </Link>
              )
            ))}
          </nav>
        </>
      )}
      {isSidebar && (
        <footer style={{ textAlign: 'left', fontSize: '1rem', color: '#AAAAAA', padding: '0 0 2rem 2rem', fontWeight: 400, fontFamily: 'Sweden Sans, system-ui, sans-serif' }}>
          <a href="https://github.com/nGentz" target="_blank" rel="noopener noreferrer" style={{ color: '#222', textDecoration: 'none', fontSize: '1rem', fontWeight: 400, fontFamily: 'Sweden Sans, system-ui, sans-serif' }}>github ↗</a>
          <div style={{ marginTop: '1rem', fontSize: '1rem' }}>© 2025 MIT Licensed</div>
        </footer>
      )}
    </div>
  )
}
