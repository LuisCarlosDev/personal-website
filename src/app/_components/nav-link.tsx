'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = LinkProps & {
  children: React.ReactNode
}

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link
      data-current={pathname === props.href}
      {...props}
      className={`${isActive && 'text-primary'}`}
    >
      <span className="text-primary font-bold mr-2">#</span>
      {props.children}
    </Link>
  )
}
