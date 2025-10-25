import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='p-4'>
    <nav className='flex gap-4'>
      <Link to='settings'>Settings</Link>
      <Link to='orders'>Orders</Link>
    </nav>

    <Outlet/>
    </div>

  )
}

export default Profile