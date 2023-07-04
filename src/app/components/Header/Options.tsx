'use client'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const options = {
  homepage: {
    name: 'Início',
    link: '/',
  },
  about: {
    name: 'Sobre mim',
    link: '#sobre-mim',
  },
  services: {
    name: 'Serviços',
    link: '#servicos',
  },
  projects: {
    name: 'Projetos',
    link: '#projetos',
  },
}

const variants = {
  base: 'hover:font-medium transition ease-in-out py-1 border border-transparent border-b-2 hover:border-b-bright-orange',
  active: 'border-b-bright-orange font-medium',
}

export function HeaderOptions() {
  const pathname = usePathname()
  return (
    <ul className="flex justify-end">
      {Object.entries(options).map(([key, { name, link }]) => (
        <li key={key} className="w-28 p-2 flex justify-center">
          <a
            href={link}
            className={clsx(
              variants.base,
              link === pathname && variants.active,
            )}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}
