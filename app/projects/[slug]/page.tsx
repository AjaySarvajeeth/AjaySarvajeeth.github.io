import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

type PageProps = {
  params: { slug: string }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <Link href="/#projects" className="text-sm text-white/70 hover:text-white">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">←</span> Back to projects
        </span>
      </Link>

      <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-2 text-white/70">{project.tagline}</p>

      {project.slug === 'azure-disk-resize-agent' ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <video
            className="h-60 w-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/projects/azure-disk-resize-agent.mp4" type="video/mp4" />
          </video>
        </div>
      ) : project.image ? (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <img
            src={project.image}
            alt={project.title}
            className="h-60 w-full object-contain bg-black/30"
          />
        </div>
      ) : null}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm text-white/80">{project.summary}</p>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold">Impact</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {project.impact.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.links?.github || project.links?.demo || project.links?.docs ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    Demo <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.links.docs ? (
                  <a
                    href={project.links.docs}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    Docs <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6">
        {project.caseStudy?.length ? (
          <div className="grid gap-6">
            {project.caseStudy.map((sec) => (
              <section
                key={sec.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-base font-semibold">{sec.title}</h2>
                {sec.body ? <p className="mt-2 text-sm text-white/70">{sec.body}</p> : null}
                {sec.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {sec.bullets.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        <Link
          href="/#projects"
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/80 transition hover:bg-white/7"
        >
          Browse more projects
        </Link>
      </div>
    </main>
  )
}
