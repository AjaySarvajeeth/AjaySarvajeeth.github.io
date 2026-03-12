import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export function Section(props: {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={props.id} className={cn('scroll-mt-24 py-16', props.className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {props.title}
          </h2>
          {props.subtitle ? (
            <p className="mt-2 max-w-3xl text-pretty text-sm text-white/70 md:text-base">
              {props.subtitle}
            </p>
          ) : null}
        </div>
        {props.children}
      </div>
    </section>
  )
}
