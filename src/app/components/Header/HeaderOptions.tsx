'use client'

import { Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const options = {
  instagram: {
    component: Instagram,
    link: '/',
  },
  linkedin: {
    component: Linkedin,
    link: '/',
  },
}

export function HeaderOptions() {
  return (
    <ul className="flex justify-end gap-4">
      {Object.entries(options).map(([_, { component: Icon, link }]) => (
        <Button
          asChild
          variant="link"
          key={link}
          className="hover:bg-green-800 transition rounded-full h-12 w-12 p-3"
        >
          <Link href={link} target="_blank">
            <Icon size={40} color="white" />
          </Link>
        </Button>
      ))}
    </ul>
  )
}
