import Layout from './Layout'
import { Head } from '@inertiajs/react'

export default function Welcome({ user }) {
  return (
    <>
      <Head title="Welcome" />
      <h1 className="text-gray-700">Welcome</h1>
      <p>Hello {user}, welcome to your first Inertia app!</p>
    </>
  )
}
