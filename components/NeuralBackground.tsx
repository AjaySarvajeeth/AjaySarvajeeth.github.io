'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let nodes: Node[] = []

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(36, Math.floor((window.innerWidth * window.innerHeight) / 32000))
      nodes = Array.from({ length: count }).map(() => {
        const speed = 0.12 + Math.random() * 0.25
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed
        }
      })
    }

    const step = () => {
      // Background base
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Paint a subtle gradient haze
      const g = ctx.createRadialGradient(
        window.innerWidth * 0.2,
        window.innerHeight * 0.15,
        0,
        window.innerWidth * 0.2,
        window.innerHeight * 0.15,
        Math.max(window.innerWidth, window.innerHeight)
      )
      g.addColorStop(0, 'rgba(255,255,255,0.06)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      const linkDist = 130

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = window.innerWidth + 20
        if (n.x > window.innerWidth + 20) n.x = -20
        if (n.y < -20) n.y = window.innerHeight + 20
        if (n.y > window.innerHeight + 20) n.y = -20
      }

      // Links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.18
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(255,255,255,0.5)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = window.requestAnimationFrame(step)
    }

    resize()

    if (!prefersReducedMotion) {
      raf = window.requestAnimationFrame(step)
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
    />
  )
}
