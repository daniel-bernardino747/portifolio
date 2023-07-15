import { Fan } from 'lucide-react'
import Link from 'next/link'

interface HeaderHomeOptionProps {
  link: string
  label: string
}

export function HeaderHomeOption({ link, label }: HeaderHomeOptionProps) {
  return (
    <Link href={link} className="flex items-center gap-4">
      <Fan
        size={40}
        className="text-white peer hover:rotate-90 transition-transform ease-out duration-300 cursor-pointer"
      />

      <span className="text-green-500 ml-3 select-none font-semibold peer-hover:text-white peer-hover:ml-0 transition-all duration-150">
        {label}
      </span>
    </Link>
  )
}
