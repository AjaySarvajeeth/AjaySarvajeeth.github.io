import Link from 'next/link'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { TechOrbit } from '@/components/TechOrbit'
import { Footer } from '@/components/Footer'
import { CopyButton } from '@/components/CopyButton'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

function SignatureWork() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <p className="relative text-xs font-medium uppercase tracking-widest text-white/60">
        Signature work
      </p>
      <h3 className="relative mt-2 text-lg font-semibold tracking-tight">
        AI systems I’ve built
      </h3>

      <div className="relative mt-4 space-y-3">
        {[
          {
            title: 'Azure VM Disk Automation',
            desc: 'Deterministic agent workflow (ASK → CONFIRM → EXECUTE) with step-by-step status updates.',
            href: '/projects/azure-disk-resize-agent'
          },
          {
            title: 'Credit Card Fraud Detection',
            desc: 'Recall-optimized XGBoost + SHAP explainability, packaged for batch + single inference.',
            href: '/projects/fraud-detection-xgboost'
          },
          {
            title: 'Offline RAG Chatbot',
            desc: 'Local embeddings + FAISS retrieval + offline LLM for secure document Q&A.',
            href: '/projects/offline-rag-llama'
          }
        ].map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="block rounded-xl border border-white/10 bg-black/30 p-4 transition hover:bg-black/40"
          >
            <p className="text-sm font-medium text-white/85">{s.title}</p>
            <p className="mt-1 text-sm text-white/65">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function WhatICanHelpWith() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <p className="relative text-xs font-medium uppercase tracking-widest text-white/60">
        What I bring
      </p>
      <h3 className="relative mt-2 text-lg font-semibold tracking-tight">
        Production-first ML engineering
      </h3>

      <ul className="relative mt-4 space-y-2 text-sm text-white/70">
        {[
          'Evaluation as a habit: define success metrics early (especially under class imbalance).',
          'Guardrails & observability: logs, audit trails, and failure-aware workflows.',
          'Cost + governance: offline-first GenAI when privacy/cost matters.',
          'Ship-ready packaging: repeatable inference with versioned features and artifacts.'
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10">
                <span className="font-mono">{profile.role}</span>
                <span className="text-white/40">•</span>
                <span>{profile.location}</span>
              </p>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base text-white/70 md:text-lg">
                {profile.headline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                >
                  View projects <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.github}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.linkedin}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {profile.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs text-white/60">{s.label}</p>
                    <p className="mt-1 text-2xl font-semibold tracking-tight">{s.value}</p>
                    <p className="mt-1 text-xs text-white/55">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <SignatureWork />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-white/60">
                  What I optimize for
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    'Measurable impact (time saved, risk reduced, accuracy improved)',
                    'Cost-aware architectures (offline/local RAG when it makes sense)',
                    'Production reliability (guardrails, logs, monitoring)'
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        subtitle="AI/ML systems, agentic automation, and data products — with emphasis on real-world constraints (cost, observability, reliability)."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* STACK */}
      <Section
        id="stack"
        title="AI stack"
        subtitle="A curated set of tools I use most often — plus the surrounding engineering to make them reliable in production."
      >
        <TechOrbit />
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        title="Certifications"
        subtitle="Signal of breadth across cloud + analytics — useful when designing end-to-end systems."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {profile.certifications.map((c) => (
            <div
              key={c}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="font-mono text-sm text-white/80">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="If you want to talk ML/LLMs, productionizing models, or building agentic workflows — I’m happy to connect."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">
              Email me at{' '}
              <a className="text-white hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <CopyButton value={profile.email} />
              <a
                href={profile.links.github}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
              <p className="font-mono">Prefer a quick summary?</p>
              <p className="mt-2">
                I build ML & LLM systems end-to-end (data → model → deployment), with strong focus on
                reliability, observability, and cost.
              </p>
            </div>
          </div>

          <WhatICanHelpWith />
        </div>
      </Section>

      <Footer />
    </main>
  )
}
