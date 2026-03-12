'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Brain,
  Cloud,
  Cpu,
  Database,
  LineChart,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/cn'

type StackGroup = {
  name: string
  icon: LucideIcon
  items: string[]
}

export function TechOrbit() {
  const groups: StackGroup[] = useMemo(
    () => [
      {
        name: 'Gen AI & Agents',
        icon: Brain,
        items: ['LangChain', 'LangGraph', 'RAG', 'Vector DB', 'LLMs', 'Evaluation', 'Embeddings', 'Indexing', 'Multi-Agent worklows']
      },
      {
        name: 'ML & DL',
        icon: Cpu,
        items: ['Suprevised', 'Un-supervised', 'Scikit-Learn', 'NLP', 'Ensemble Methods', 'Neural Networks', 'TensorFlow']
      },
      {
        name: 'Data',
        icon: Database,
        items: ['Spark', 'Hadoop', 'ETL', 'Pipelines', 'Data modeling', 'Quality checks']
      },
      {
        name: 'Cloud',
        icon: Cloud,
        items: ['Azure', 'Databricks', 'AWS', 'GCP']
      },
      {
        name: 'MLOps',
        icon: ShieldCheck,
        items: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Governance', 'Monitoring']
      },
      {
        name: 'BI & Insights',
        icon: LineChart,
        items: ['Power BI', 'Advanced Excel', 'Data Analysis', 'Dashboards']
      }
    ],
    []
  )

  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (timer.current) window.clearInterval(timer.current)
    timer.current = window.setInterval(() => {
      if (!locked) setActive((i) => (i + 1) % groups.length)
    }, 3200)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [groups.length, locked])

  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-white/60">
          AI Stack Orbit
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{groups[active].name}</h3>
        <p className="mt-2 text-sm text-white/70">
          A quick snapshot of the tools I use most — optimized for production constraints.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {groups[active].items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/50">
          Tip: click an icon to lock the view.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {groups.map((g, idx) => {
            const Icon = g.icon
            const isActive = idx === active
            return (
              <button
                key={g.name}
                onClick={() => {
                  setActive(idx)
                  setLocked(true)
                }}
                onDoubleClick={() => setLocked(false)}
                className={cn(
                  'group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition',
                  isActive ? 'bg-white/12 ring-white/20' : 'hover:bg-white/10'
                )}
                aria-label={`Show ${g.name}`}
              >
                <Icon className={cn('h-6 w-6 text-white/70', isActive && 'text-white')} />
                <span className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-2 py-1 text-[11px] text-white/70 ring-1 ring-white/10 group-hover:block">
                  {g.name}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
          <p>
            <span className="font-medium text-white/75">Lock:</span> Click an icon.{' '}
            <span className="font-medium text-white/75">Unlock:</span> Double click.
          </p>
        </div>
      </div>
    </div>
  )
}
