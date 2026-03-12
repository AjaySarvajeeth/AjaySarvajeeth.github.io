import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js + Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a className="text-sm text-white/60 hover:text-white" href={profile.links.github}>
              GitHub
            </a>
            <a className="text-sm text-white/60 hover:text-white" href={profile.links.linkedin}>
              LinkedIn
            </a>
            <a className="text-sm text-white/60 hover:text-white" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
