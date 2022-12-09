import React from 'react'
import { useLocation } from 'react-router-dom'
import Cars from './Cars'
import Dashboard from './Dashboard'
import Details from './Details'

const Component = () => {
    const location=useLocation()
    const getComponent=()=>{
        switch(location.pathname){
            case "":return <Dashboard/>
            case "clients":return <Dashboard/>
            case "cars":return <Cars/>
            case "types":return <Dashboard/>
            case "details":return <Details/>
            case "orders":return <Dashboard/>
            default:return null
        }
    }
  return (
    <div>
        {getComponent()}
    </div>
  )
}

export default Component