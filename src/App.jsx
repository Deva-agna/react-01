import React from 'react';
import Button from "./components/Elements/Button"

function App() {
  return (
    <>
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className='w-full max-w-xs'>
        <h1 className='text-blue-600 text-3xl font-bold mv-2'>Login</h1>
        <p className='font-medium text-slate-500 mb-8'>Welcome, Please enter your details</p>
        <form action="">
          <div className='mb-6'>
            <label htmlFor="email" className='block text-slate-700 text-sm font-bold mb-2'>Email</label>
            <input type="email" className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50' placeholder='example@gmail.com' />

            <label htmlFor="password" className='block text-slate-700 text-sm font-bold mb-2'>Password</label>
            <input type="password" className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50' placeholder='*************' />
          </div>
          <Button classname="bg-slate-700 w-full">Login</Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
