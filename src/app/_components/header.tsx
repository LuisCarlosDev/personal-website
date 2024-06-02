import Link from 'next/link'

export function Header() {
  return (
    <header className="px-[120px] py-8 flex items-center justify-between select-none">
      <h1 className="gradient-text uppercase font-bold text-transparent animate-gradient">
        Luis Carlos
      </h1>

      <nav className="space-x-4">
        <Link href="/">
          <span className="text-primary mr-2">#</span>
          Home
        </Link>
        <Link href="/">
          <span className="text-primary mr-2">#</span>
          Projetos
        </Link>
      </nav>
    </header>
  )
}
