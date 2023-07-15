import { MoveRight } from 'lucide-react'
import Link from 'next/link'

interface HeaderMainOptionProps {
  link: string
  title: string
}

export function HeaderMainOption({ link, title }: HeaderMainOptionProps) {
  return (
    <Link href={link} className="group flex gap-4 items-end py-3 w-32">
      <span className="text-white font-semibold text-base transition-all ease-out group-hover:text-green-800">
        {title}
      </span>
      <MoveRight className="text-white transition-all ease-out duration-300 group-hover:ml-4" />
    </Link>
  )
}
