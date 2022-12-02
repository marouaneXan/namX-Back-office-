import React from 'react'
import SideBar from '../ui/SideBar'

function Layaout({children} : any) {
  return (
    <main className='flex'>
      <header>
        <SideBar />
      </header>
      <div>
      <article>{children}</article>
      </div>
    </main>
  )
}

export default Layaout