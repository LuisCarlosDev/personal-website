import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './_components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const ibm_Plex_Mono = IBM_Plex_Mono({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-plex-mono',
// })

export const metadata: Metadata = {
  title: 'Luis Carlos Website',
  description: 'Meu site pessoal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
      <body className={inter.variable}>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  )
}
