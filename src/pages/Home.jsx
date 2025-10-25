import React, { useContext } from 'react'
import movies from '../data/movies.json'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
import Navbar from '../components/Navbar'
 

const Home = () => {
  const {selectedCity } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <>
  
    
    <div className='bg-white min-h-screen'>
      <div className='relative'>
        <img src='https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg' className='w-full h-80 md:h-96 object-cover'/>
        <div className='absolute left-0 top-0 flex items-center w-full h-full justify-center bg-black/40'>
        <h1 className='text-2xl md:text-6xl text-white font-semibold'>Welcome To MovieZone</h1>
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-6'>
      <p className='text-xl'>{selectedCity}</p>

        <h2 className='text-black text-xl font-semibold mb-2'>Recommended Movies</h2>

        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>

          {movies.map((movie)=>(

            <div key={movie.id} className='bg-white p-2 rounded-lg'>
              <img src={movie.poster} className='rounded-lg mb-2 hover:scale-105 transition' onClick={()=>navigate(`/moviedetail/${movie.id}`)}/>
              <h3 className='text-black text-lg'>{movie.title}</h3>
              <p className='text-black text-sm'>{movie.year}</p>

            </div>
          ))}

        

        </div>

      </div>
    </div>
    </>
  )
}

export default Home