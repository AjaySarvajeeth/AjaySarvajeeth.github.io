'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
]

export function Navbar(props: { name: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 backdrop-blur',
        scrolled ? 'bg-black/40' : 'bg-black/15'
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <span className="text-sm font-semibold">AI</span>
          </span>
          <span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white">
            {props.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Download resume
          </a>
        </nav>

        <div className="md:hidden">
          <a
            href="#projects"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  )
}
