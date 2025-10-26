import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const {user, setUser}= useContext(AppContext)
  const navigate = useNavigate()
  const handleclick = () =>{
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    navigate('/login')
  }
  return (
    <div className='min-h-screen'>
      <div className='bg-white shadow-lg max-w-2xl mx-auto mt-[5em] p-5 rounded-lg text-center'>
         <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="w-28 h-28 mx-auto rounded-full mb-5"
        />
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>

        <button className='mt-[1em] bg-red-500 py-2 w-full rounded-lg' onClick={handleclick}>Logout</button>
      </div>
    </div>
  )
}

export default Profile