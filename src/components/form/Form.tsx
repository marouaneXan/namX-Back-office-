import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Form() {
  return (
    <div className=' '>
        <h1 className='text-center font-bold text-2xl'>Add Form</h1>
        <form >
            <section className='flex gap-6 mb-6 mt-7'>
            <div className="flex flex-col ">
                    <label className='font-semibold text-sm' htmlFor="">Vlaue</label>
                    <input className='border-2 rounded-lg px-2 py-1' type="text" placeholder='text..'/>
                </div>
                <div className="flex flex-col ">
                    <label className='font-semibold text-sm' htmlFor="">Vlaue</label>
                    <input className='border-2 rounded-lg px-2 py-1' type="text" placeholder='text..'/>
                </div>
            </section>
            <section className='flex gap-6 mb-6 "'>
                <div className="flex flex-col ">
                    <label className='font-semibold text-sm' htmlFor="">Vlaue</label>
                    <input className='border-2 rounded-lg px-2 py-1' type="text" placeholder='text..'/>
                </div>
                <div className="flex flex-col ">
                    <label className='font-semibold text-sm' htmlFor="">Vlaue</label>
                    <input className='border-2 rounded-lg px-2 py-1' type="text" placeholder='text..'/>
                </div>
            </section>
            <button className=' bg-violet-800 text-white px-4 hover:bg-violet-600 py-2 rounded-lg flex justify-center items-center font-medium text-base'>Submit<NavigateNextIcon className=' text-sm' /> </button>
        </form>
    </div>
  )
}

export default Form