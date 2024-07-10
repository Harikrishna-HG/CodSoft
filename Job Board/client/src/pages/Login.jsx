import React from 'react'

function Login() {
  return (
    <div className="overflow-hidden bg-lime-400  flex flex-col items-center justify-center p-4">
    <h1 className="text-3xl font-bold underline mb-8">
      Login Form
    </h1>
    <div className='flex flex-col items-center justify-center space-y-4 w-full sm:w-96'>
      <input className="border border-black p-2 w-full bg-white rounded" type="text" placeholder="Username" />
      <input className="border border-black p-2 w-full bg-white rounded" type="text" placeholder="Email" />
      <input className="border border-black p-2 w-full bg-white rounded" type="password" placeholder="Password" />
      <input className="border border-black p-2 w-full bg-white rounded" type="password" placeholder="Confirm Password" />
    </div>
    <button className="bg-blue-400 m-4 p-3 rounded hover:text-white hover:bg-red-500">Login</button>
  </div>
  )
}

export default Login
