import Layout from './Layout'
import { Head } from '@inertiajs/react'
import { Link } from '@inertiajs/react'

export default function Index({ users }) {
  return (
    <Layout>
        {
            users.map(user =>
                <div key={user.id} className="flex items-center justify-between gap-4 p-2 border-b">
                  <p className="text-white-800">{user.name}</p>
                  <Link
                    href={`/users/${user.id}`}
                    method="delete"
                    as="button"
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Excluir
                  </Link>
                </div>

            )
        }
    </Layout>
  )
}
