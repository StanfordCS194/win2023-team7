import react from 'react'
import Link from 'next/link'
import { Text } from '@vercel/examples-ui'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href="/">
          <a target="_blank" rel="noopener noreferrer">
            <span className="font-semibold text-xl tracking-tight">Bantr AI</span>
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              <Text className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Home
              </Text>
            </a>
          </Link>
          <Link href="/create">
            <a target="_blank" rel="noopener noreferrer">
              <Text className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
                Create
              </Text>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}