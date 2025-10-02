'use client';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from './nav';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [disableSidebarTransition, setDisableSidebarTransition] = useState(false);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track window size to determine mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1100;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Instantly hide sidebar (no slide) when switching to mobile
  useEffect(() => {
    if (isMobile) {
      setDisableSidebarTransition(true);
      setSidebarOpen(false);
      // Re-enable transition after a short delay
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => setDisableSidebarTransition(false), 200);
    }
  }, [isMobile]);

  // Toggle sidebar on menu button click
  const handleMenuClick = () => setSidebarOpen((open) => !open);
  // Sidebar width values
  const desktopSidebar = { width: '22vw', minWidth: 220, maxWidth: 340 };
  const mobileSidebar = { width: '65vw', minWidth: 0, maxWidth: '100vw' };
  return (
    <>
      {/* Ensure external links open in a new tab site-wide */}
      <ExternalLinksTargetBlank />
      {/* TopBar for mobile */}
      <div className="topbar-mobile" style={{ display: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, borderBottom: '2px solid #222', background: '#FFF', zIndex: 30, position: 'fixed', top: 0, left: 0, right: 0, width: '100vw' }}>
          <a href="/" style={{ textDecoration: 'none', fontWeight: 500, fontSize: '1.1rem', color: '#111', marginLeft: 24, whiteSpace: 'nowrap', letterSpacing: 0.2 }}>Nicholas Gentz</a>
          <button
            aria-label="Toggle menu"
            onClick={handleMenuClick}
            style={{ fontSize: '1.1rem', fontWeight: 500, marginRight: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}
          >
            Menu
          </button>
        </div>
      </div>
      {/* Overlay for mobile sidebar only */}
      {sidebarOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.18)',
            zIndex: 19,
            display: 'block',
          }}
        />
      )}
      <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
        {/* Sidebar for desktop and sliding drawer for mobile */}
        <aside
          className={`sidebar${disableSidebarTransition ? ' no-transition' : ''} ${sidebarOpen ? ' open' : ''}`}
          style={{
            ...(isMobile ? mobileSidebar : desktopSidebar),
            borderRight: '2px solid #222',
            background: '#FFF',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            height: '100vh',
            zIndex: 20,
            // Visibility is controlled by CSS media queries and the `.open` class
          }}
        >
          {/* Close button for mobile */}
          <button
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            style={{ display: 'none', position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#111', zIndex: 30 }}
          >
            ×
          </button>
          <Navbar
            variant="sidebar"
            onItemClick={() => {
              if (isMobile) setSidebarOpen(false)
            }}
          />
        </aside>
        {/* Main content: center with maxWidth and equal padding on mobile */}
        <main className="main-content-appshell" style={{
          background: '#FFF',
          minHeight: '100vh',
          overflowX: 'hidden',
          width: '100%',
        }}>
          {children}
        </main>
      </div>
      <style jsx global>{`
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }
        /* Baseline: hide sidebar off-canvas to avoid flash on initial paint */
        .sidebar {
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @media (max-width: 1100px) {
          .sidebar {
            width: 65vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            box-shadow: 2px 0 16px rgba(0,0,0,0.08);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .sidebar.no-transition {
            transition: none !important;
          }
          .topbar-mobile {
            display: block !important;
          }
          aside.sidebar button[aria-label='Close menu'] {
            display: block !important;
          }
          .main-content-appshell {
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100vw !important;
            max-width: 700px !important;
            overflow-x: hidden !important;
            padding-left: 4vw !important;
            padding-right: 4vw !important;
          }
        }
        @media (min-width: 1101px) {
          .topbar-mobile {
            display: none !important;
          }
          .sidebar {
            width: 22vw !important;
            min-width: 220px !important;
            max-width: 340px !important;
            transform: translateX(0) !important;
            position: fixed !important;
          }
          aside.sidebar button[aria-label='Close menu'] {
            display: none !important;
          }
          .main-content-appshell {
            margin-left: 22vw !important;
            width: 78vw !important;
            overflow-x: hidden !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: none !important;
          }
        }
      `}</style>
    </>
  );
}

function ExternalLinksTargetBlank() {
  useEffect(() => {
    const setTargets = () => {
      const anchors = Array.from(document.querySelectorAll('a[href^="http"]')) as HTMLAnchorElement[];
      anchors.forEach((a) => {
        try {
          const url = new URL(a.href, window.location.href);
          if (url.origin !== window.location.origin) {
            a.target = '_blank';
            const rel = a.getAttribute('rel') || '';
            if (!/\bnoopener\b/.test(rel) || !/\bnoreferrer\b/.test(rel)) {
              a.setAttribute('rel', `${rel} noopener noreferrer`.trim());
            }
          }
        } catch {
          // Ignore invalid URLs
        }
      });
    };
    setTargets();
    const observer = new MutationObserver(() => setTargets());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
