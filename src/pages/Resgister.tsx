import { Link } from 'react-router-dom'
import register from '../assets/images/register.jpg'
function Resgister() {
  return (
    <div className='flex justify-between flex-wrap bg-gray-900 text-white'>
        <section className='w-[50%] '>
            <img className='h-[100vh]  w-full object-cover rounded-tr-[5rem] rounded-br-[5rem]' src={register} alt="" />
        </section>
        <section className='w-[50%] flex flex-col items-center my-auto gap-12 '>
            <div className='text-center'>
            <Link to='/' className='font-bold text-2xl'>Welcome to dashboard</Link>
            <p className='w-[70%] mx-auto text-gray-300 font-light'>this is the door to your dashboard please enter your information</p>
            </div>
        <form className='flex flex-col gap-6'>
        <div className='flex flex-col'>
                <label className='' htmlFor="">name</label>
                <input className='border-2 px-7 py-2 rounded-lg' type="text" placeholder='name...' />
            </div>
            <div className='flex flex-col'>
                <label className='' htmlFor="">email</label>
                <input className='border-2 px-7 py-2 rounded-lg' type="email" placeholder='email...' />
            </div>
            <div className='flex flex-col'>
                <label className='' htmlFor="">password</label>
                <input className='border-2 px-7 py-2 rounded-lg' type="password" placeholder='password...' />
            </div>
            <div className=' self-center '>
                <button className=' text-white w-[19rem] py-2 hover:bg-violet-800 rounded-lg  bg-violet-700'>SignUp</button>
                <div>
                    <p className='text-gray-400'>Aleredy have account? <Link to='/' className='text-violet-500 hover:text-violet-800 font-semibold'>Sign up</Link> </p>
                </div>
            </div>
        </form>
        </section>
    </div>
  )
}

export default Resgister