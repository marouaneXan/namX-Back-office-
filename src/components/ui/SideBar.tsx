import React from 'react'
import {NavLink} from 'react-router-dom'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';


function SideBar() {
  return (
    <div className=' py-10 h-screen flex flex-col justify-between'>
        <section className='mx-auto '>
            <h1 className=' font-extrabold text-2xl'>Nam.X</h1>
        </section>
        <section className=' my-auto flex flex-col justify-between h-[50%] text-gray-400 capitalize  font-medium text-base'>
        <NavLink
            to="/dashboard"
            className={({ isActive }) =>
            isActive ? ' flex gap-2  text-gray-500 bg-slate-100 p-3 w-[90%]  border-l-4 border-blue-700' : ' flex gap-2 p-3  '
            }
            >
                <DashboardCustomizeRoundedIcon />
                <p>Dashboard</p>
            </NavLink>
            <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? ' flex gap-2  text-gray-500 bg-slate-100 p-3 w-[90%]  border-l-4 border-blue-700' : ' flex gap-2 p-3  '
            }
            >
                <PeopleAltRoundedIcon />
                <p>Clients</p>
            </NavLink>
            <NavLink              
            to="/Cars"
            className={({ isActive }) =>
            isActive ? ' flex gap-2  text-gray-500 bg-slate-100 p-3 w-[90%]  border-l-4 border-blue-700' : ' flex gap-2 p-3  '
            }
            >
                <TimeToLeaveRoundedIcon />
                <p>Cars</p>
            </NavLink>
            <NavLink              
            to="/"
            className={({ isActive }) =>
            isActive ? ' flex gap-2  text-gray-500 bg-slate-100 p-3 w-[90%]  border-l-4 border-blue-700' : ' flex gap-2 p-3  '
            }
            >
                <TaskRoundedIcon />
                <p>Orders</p>
            </NavLink>
        </section>
        <section className='mx-auto'>
            <button className='font-semibold bg-violet-800 text-white px-4 py-2 rounded-lg hover:bg-violet-600'>
                <ExitToAppRoundedIcon />log-out
                </button>
        </section>
    </div>
  )
}

export default SideBar