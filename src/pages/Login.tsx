import { Link } from 'react-router-dom'
import React from 'react'
import login from '../assets/images/login.jpg'

function Login() {
  return (
    <div className='flex justify-between flex-wrap bg-gray-900 text-white'>
        <section className='w-[50%] '>
            <img className='h-[100vh]  w-full object-cover rounded-tr-[5rem] rounded-br-[5rem]' src={login} alt="" />
        </section>
        <section className='w-[50%] flex flex-col items-center my-auto gap-12 '>
            <Link to='/' className='font-bold text-2xl'>Welcome back</Link>
        <form className='flex flex-col gap-6'>
            <div className='flex flex-col'>
                <label className='' htmlFor="">email</label>
                <input className='border-2 px-7 py-2 rounded-lg' type="email" placeholder='email...' />
            </div>
            <div className='flex flex-col'>
                <label className='' htmlFor="">password</label>
                <input className='border-2 px-7 py-2 rounded-lg' type="password" placeholder='password...' />
            </div>
            <div className=' self-center '>
                <button className='bg-blue-700 text-white w-[19rem] py-2 hover:bg-blue-400 rounded-lg'>SignIn</button>
                <div>
                    <p className='text-gray-400'>Don't have account? <Link to='/register' className='text-blue-700 hover:text-blue-800 font-semibold'>Sign up</Link> </p>
                </div>
            </div>
        </form>
        </section>
    </div>
  )
}

export default Login