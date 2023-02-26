import React from 'react'
import Link from 'next/link'
import { Text } from '@vercel/examples-ui'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <Text className="text-zinc-600">
        <Link href="/">
          <a target="_blank" rel="noopener noreferrer">
            Powered by Bantr AI
          </a>
        </Link>
      </Text>
    </footer>
  )
}