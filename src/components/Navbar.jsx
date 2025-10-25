import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../context/Appcontext';
import {MdClose} from 'react-icons/md'

const Navbar = () => {
  const { user, selectedCity, setSelectedCity } = useContext(AppContext)
  const navigate = useNavigate()
  const[isopen, setisopen] = useState()

  const handleclick = () =>{
    navigate('/search')
  }

 
  return (
    <nav className='bg-white text-black  p-3 w-full fixed z-20 shadow-lg'>

      <div className='max-w-7xl mx-auto flex justify-between items-center'>

      <div className='flex gap-4 m-2 hidden md:flex'>

        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/profile'>Profile</Link> 
        <Link to='/search' onClick={handleclick}>Search.....</Link>
      </div>
        {/* <div className='border border-gray-800 rounded-lg hidden md:flex'>
          <input type='search' placeholder='Search Movie..' className='p-2' onClick={handleclick} />
        </div> */}
       <div className='flex sm:flex-row sm:justify-end gap-2 hidden md:flex'>
            <p className='m-2'>{user.name}</p>

            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className='border border-black p-1 rounded-lg'>
              <option>Rajkot</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Ahmedabad</option>
            </select>
          </div>

          </div>

          <div className='md:hidden flex items-center'>
            <button onClick={()=> setisopen(!isopen)}>
            {isopen ?  <MdClose size={28}/> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>}
            </button>
          </div>

          {isopen && (
             <div className='flex gap-4 m-2 flex-col md:hidden'>

        <Link to='/' onClick={()=>setisopen(false)}>Home</Link>
        <Link to='/movies'  onClick={()=>setisopen(false)}>Movies</Link>
        <Link to='/events'  onClick={()=>setisopen(false)}>Events</Link>
        <Link to='/profile' onClick={()=>setisopen(false)}>Profile</Link> 
    
        <div className='border border-gray-800 rounded-lg'>
          <input type='search' placeholder='Search Movie..' className='p-2' onClick={handleclick} />
        </div>
       <div className='flex sm:flex-row sm:justify-end gap-2'>
            <p className='m-2'>{user.name}</p>

            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className='border border-black p-1 rounded-lg'>
              <option>Rajkot</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Ahmedabad</option>
            </select>
          </div>
            </div>

          )}

          
    </nav>
    
  )
}

export default Navbar