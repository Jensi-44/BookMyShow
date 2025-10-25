
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [name, setName] = useState('')
    const[lastname, setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
 

    const handlesubmit = (e) =>{

        e.preventDefault()

        if(!name || !email || !password){
            setError('Please All Filed Required!!')
            return
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return
        }
        setError('')

        const userdata = {
            name, lastname, email, password
        }
        localStorage.setItem("user",JSON.stringify(userdata))

        
        alert(`Account create for ${name}`)
        navigate('/login')
    }

    return (
        <div className={`flex flex-col justify-center min-h-screen items-center`}>
            <div className='border border-gray-800 p-10 rounded-2xl max-w-md w-full shadow-lg shadow-blue-500/30'>

                {/* <div className='flex justify-center'>
                    <img src={logo} className='w-20 h-20' />
                </div> */}

                <h2 className='text-center text-lg font-semibold whitespace-nowrap'>Sign Up</h2>

                <form onSubmit={handlesubmit}>
                    <input type='name' placeholder='First Name' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5' 
                    />
                    
                    <input type='lastname' 
                    placeholder='Last Name' 
                    value={lastname}
                    onChange={(e)=>setLastName(e.target.value)}
                    className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5' 
                    />

                    <input type='email'
                     placeholder='Email' 
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5' 
                     />

                    <input type='password' 
                    placeholder='Password' 
                    value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    className='w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-white mt-5' />

                    {error && <p className='text-red-400 mb-2 mt-2'>{error}</p>}

                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 font-semibold p-3 mt-5 rounded-lg'>
                        SignUp
                    </button>
                </form>

                <p className='text-gray-400 text-center mt-4'>
                    You have an account? <span className='text-blue-400 cursor-pointer'><a href='login'>Sign in</a></span>
                </p>

            </div>


        </div>
    )
}

export default SignUp