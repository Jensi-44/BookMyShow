import React from 'react'
import Navbar from '../components/Navbar'
import movies from '../data/movies.json'
import { useNavigate, useParams } from 'react-router-dom'


const MovieDetails = () => {
    const {id} = useParams()
    const movie = movies.find((m)=>m.id === parseInt(id))
    const navigate = useNavigate()

    const handleclick = () =>{
      navigate('/BookingPage')
    }
  return (
    <>
   
    <div className='bg-white min-h-screen'>
      <div className='relative'>
        <img src={movie.poster} className='w-full h-80 md:h-150 object-cover'/>
        <div className='absolute left-0 top-0 flex items-center w-full h-full justify-center bg-black/80'>

        <div className='flex'>
            <img src={movie.poster} className='w-60 h-90 absolute top-37 left-30 rounded-xl'/>
            <h1 className='text-white text-4xl font-semibold absolute left-95 top-37'>{movie.title}</h1>
            <div className='bg-black/70 px-6 py-4 w-80 rounded-lg absolute left-95 top-55 flex justify-between'>
            <p className='text-white'>{movie.rating}</p>
            <button className='px-2 py-2 bg-white rounded-lg'>Rate Now</button>
            </div>
            <p className='text-white font-semibold left-95 absolute'>{movie.genre}</p>

            <button className='bg-white px-9 py-3 rounded-lg absolute top-90 left-95 font-semibold' onClick={handleclick}>Book tickets</button>
            
        </div>
        </div>
      </div>

      <div className='bg-black/70 m-4 rounded-lg'>
        <h1 className='text-black font-semibold text-xl p-4 font-semibold m-2'>About the Movie</h1>
        <p className='text-black  absolute left-4 text-gray-900'>{movie.description}</p> 
      </div>
      <h1 className='text-black font-semibold text-xl p-4 font-semibold bg-black/70 m-4 mt-[2em] rounded-lg m-2'>Cast</h1>
      <p className='text-black absolute left-4 text-gray-900'>{movie.cast}</p>
      
      </div>
      
      
     

    </>
    
    
  )
}

export default MovieDetails