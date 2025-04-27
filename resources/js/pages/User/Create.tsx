import { useState } from 'react'
import { router } from '@inertiajs/react'
import Layout from './Layout';

export default function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/users', values)
  }

  return (
      <Layout>
        <form onSubmit={handleSubmit} className="text-black flex flex-col gap-4 max-w-sm mx-auto p-4 bg-white rounded shadow">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">First name:</label>
            <input
              id="name"
              value={values.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email:</label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </Layout>
  )
}
