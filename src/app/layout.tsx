import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './_components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const ibm_Plex_Mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ibm-plex-mono',
})

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
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
