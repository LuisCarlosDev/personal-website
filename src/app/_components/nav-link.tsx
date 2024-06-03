import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useRouter()
  return <Link data-current={pathname === props.href} {...props} />
}
