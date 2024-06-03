import { NavLink } from './nav-link'

export function Header() {
  return (
    <header className="px-[120px] py-8 flex items-center justify-between select-none">
      <h1 className="gradient-text uppercase font-bold text-transparent animate-gradient">
        Luis Carlos
      </h1>

      <nav className="space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projetos</NavLink>
      </nav>
    </header>
  )
}
