import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const handlesubmit = (e) =>{

        e.preventDefault()

        if(!email || !password){
            setError('Please All filed Required!!!')
        }

        const storeuser = JSON.parse(localStorage.getItem('user'))

        if(
           storeuser && storeuser.email === email && storeuser.password === password
        ) {
            setError('')
            alert(`Welcome Back, ${storeuser.name}`)
             navigate('/')

        } else{

            setError('Invalid email or password')

        }  
    } 

  return (
    <div className={`flex flex-col justify-center min-h-screen items-center`}>
        <div className='border border-gray-800 p-10 rounded-2xl max-w-md w-full shadow-lg shadow-blue-500/30'>

            {/* <div className='flex justify-center'>
                <img src={logo} className='w-20 h-20'/>
            </div> */}

            <h2 className='text-center text-lg font-semibold whitespace-nowrap'>Login in to Twitter</h2>

            <form onSubmit={handlesubmit}>
                <input type='email' 
                placeholder='Email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5'
                />

                 <input type='password' 
                 placeholder='Password' 
                 className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 />

                {error && <p className='text-red-400 mb-2 mt-2'>{error}</p>}

                 <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 font-semibold p-3 mt-5 rounded-lg'>
                    Login
                 </button>
            </form>

            <p className='text-gray-400 text-center mt-4'>
                Don’t have an account? <span className='text-blue-400 cursor-pointer'><a href='signup'>Sign up</a></span>
            </p>

        </div>


    </div>
  )
}

export default Login