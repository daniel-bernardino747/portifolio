import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return <header className="shadow py-2 px-4 drop-shadow-lg">{children}</header>
}
