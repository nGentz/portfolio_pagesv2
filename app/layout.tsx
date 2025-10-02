import './global.css'
import type { Metadata } from 'next'
import AppShell from './components/AppShell'

export const metadata: Metadata = {
  title: {
    default: 'Nick Gentz | Data Analytics Portfolio',
    template: '%s | Nick Gentz',
  },
  description: '--',
  openGraph: {
    title: 'Nick Gentz Portfolio',
    description: '--.',
    siteName: 'Nick Gentz Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ background: '#FFF', fontFamily: 'Sweden Sans, system-ui, sans-serif', margin: 0, padding: 0 }}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
} 
