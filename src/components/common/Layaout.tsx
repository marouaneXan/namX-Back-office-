import React from 'react'
import SideBar from '../ui/SideBar'
import NavBar from '../ui/NavBar'

function Layaout({children} : any) {
  return (
    <main className='flex bg-slate-100'>
      <header className='w-[12%] bg-gray-50 '>
        <SideBar />
      </header>
      <div className=' w-[88%] '>
        <NavBar />
      <article>{children}</article>
      </div>
    </main>
  )
}

export default Layaout