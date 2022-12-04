import React from 'react'
import SideBar from '../ui/SideBar'

function Layaout({children} : any) {
  return (
    <main className='flex'>
      <header className=' bg-gray-50 rounded-t-[3rem] rounded-r-[3rem]'>
        <SideBar />
      </header>
      <div className=' '>
      <article>{children}</article>
      </div>
    </main>
  )
}

export default Layaout