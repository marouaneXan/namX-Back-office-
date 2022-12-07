import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-white/50 py-6  shadow-sm'>
        <div>
            <ul className='flex font-semibold text-slate-400 justify-evenly'>
                <li className='hover:text-slate-500 hover:border-b-4 border-blue-800 transition-all'><Link to='/car'>Cars</Link></li>
                <li className='hover:text-slate-500 hover:border-b-4 border-blue-800 transition-all'><Link to='/'>Orders</Link></li>
                <li className='hover:text-slate-500 hover:border-b-4 border-blue-800 transition-all'><Link to='/'>Details</Link></li>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}

export default NavBar