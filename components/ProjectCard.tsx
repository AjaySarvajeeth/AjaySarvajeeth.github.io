import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/7">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-white/70">{project.tagline}</p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-xs text-white/90 ring-1 ring-white/15 transition hover:bg-white/15"
          aria-label={`Open ${project.title}`}
        >
          Case study <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {project.slug === 'azure-disk-resize-agent' ? (
        <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
          <video
            className="h-40 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/projects/azure-disk-resize-agent.mp4" type="video/mp4" />
          </video>
        </div>
      ) : project.image ? (
        <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
          {/* Use <img> for GitHub Pages friendliness */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-40 w-full object-contain bg-black/30 opacity-95"
          />
        </div>
      ) : null}

      <p className="relative mt-4 text-sm text-white/70">{project.summary}</p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="relative mt-4 space-y-2 text-sm text-white/70">
        {project.impact.slice(0, 2).map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      {project.links?.github ? (
        <div className="relative mt-5">
          <a
            href={project.links.github}
            className="text-sm text-white/70 hover:text-white"
          >
            View repository →
          </a>
        </div>
      ) : null}
    </div>
  )
}
