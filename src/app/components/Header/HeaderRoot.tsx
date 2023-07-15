import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="py-2 h-[150px] px-4 flex items-center justify-between">
      {children}
    </header>
  )
}
