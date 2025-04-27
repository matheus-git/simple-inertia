import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <main className="h-screen flex justify-center items-center">
      {children}
    </main>
  )
}
