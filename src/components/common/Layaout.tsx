import React from 'react'
import SideBar from '../ui/SideBar'

function Layaout({children} : any) {
  return (
    <main className='flex'>
      <header className=' border-r-2 border-gray-100 shadow-lg shadow-gray-200'>
        <SideBar />
      </header>
      <div>
      <article>{children}</article>
      </div>
    </main>
  )
}

export default Layaout