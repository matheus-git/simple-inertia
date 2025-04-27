import Layout from './Layout'
import { Head } from '@inertiajs/react'

export default function Index({ users }) {
  return (
    <Layout>
        {
            users.map(user =>
                <p key={user.name}>{user.name}</p>
            )
        }
    </Layout>
  )
}
