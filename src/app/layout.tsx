import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daniel Bernardino',
  description: 'Criador, compositor e dev em tempo integral',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={clsx('bg-green-500', inter.className)}>{children}</body>
    </html>
  )
}
