import React from 'react'

function AddDetails() {
  return (
    <div className='mt-4'>
        <h2 className=' uppercase font-bold text-blue-900 text-2xl text-center '>New details</h2>
        <form className='w-[70%] mx-auto my-10 border-gray-100 border-b-2 p-4 rounded-lg'  action="">
        <section className='grid lg:grid-cols-3 gap-8 mt-10 '>
        <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Key</label>
                    <input className='border-b-2 border-blue-900 px-2 py-2' type="text" placeholder='value..' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Key</label>
                    <input className='border-b-2 border-blue-900 px-2 py-2' type="text" placeholder='value..' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold'>Key</label>
                    <input className='border-b-2 border-blue-900 px-2 py-2' type="text" placeholder='value..' />
                </div>
        </section>
        <section className=''>
            <button className='bg-blue-700 text-white px-3 rounded-lg py-2 hover:bg-blue-600 mt-5 '>Submit</button>
        </section>
        </form>
    </div>
  )
}

export default AddDetails