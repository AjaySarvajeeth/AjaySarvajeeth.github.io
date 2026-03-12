import type { Metadata } from 'next'
import './globals.css'
import { NeuralBackground } from '@/components/NeuralBackground'
import { Navbar } from '@/components/Navbar'
import { profile } from '@/data/profile'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const fontSans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.headline,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <NeuralBackground />
        <Navbar name={profile.shortName} />
        {children}
      </body>
    </html>
  )
}
