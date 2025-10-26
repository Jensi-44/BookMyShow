import React from 'react'
import Navbar from '../components/Navbar'
import movies from '../data/movies.json'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === parseInt(id))
  const navigate = useNavigate()

  const handleclick = () => {
    navigate('/BookingPage')
  }

  return (
    <>
   
      <div className='bg-white min-h-screen'>
        <div className='relative'>
         
          <img
            src={movie.poster}
            className='w-full h-64 sm:h-80 md:h-[500px] object-cover'
          />
          <div className='absolute left-0 top-0 flex items-center w-full h-full justify-center bg-black/80'>

          
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative'>

            
              <img
                src={movie.poster}
                className='w-40 sm:w-48 md:w-60 h-60 sm:h-72 md:h-90 rounded-xl object-cover shadow-lg md:absolute md:top-[10px] md:left-[90px]'
              />

             
              <div className='text-center md:text-left mt-4 md:mt-0 md:ml-[350px] space-y-4'>
                <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>
                  {movie.title}
                </h1>

                <div className='bg-black/70 px-4 sm:px-6 py-3 w-60 sm:w-72 md:w-80 rounded-lg flex justify-between mx-auto md:mx-0'>
                  <p className='text-white'>{movie.rating}</p>
                  <button className='px-3 py-1 bg-white rounded-lg text-sm sm:text-base'>
                    Rate Now
                  </button>
                </div>

                <p className='text-white font-semibold text-sm sm:text-base'>
                  {movie.genre}
                </p>

                <button
                  className='bg-white px-6 sm:px-9 py-2 sm:py-3 rounded-lg font-semibold mt-2 md:mt-6'
                  onClick={handleclick}
                >
                  Book tickets
                </button>
              </div>
            </div>
          </div>
        </div>

     
        <div className='bg-black/10 m-4 rounded-lg p-4 sm:p-6'>
          <h1 className='text-black font-semibold text-lg sm:text-xl mb-2'>
            About the Movie
          </h1>
          <p className='text-gray-800 leading-relaxed text-sm sm:text-base'>
            {movie.description}
          </p>
        </div>

   
        <div className='bg-black/10 m-4 rounded-lg p-4 sm:p-6'>
          <h1 className='text-black font-semibold text-lg sm:text-xl mb-2'>
            Cast
          </h1>
          <p className='text-gray-800 leading-relaxed text-sm sm:text-base'>
            {movie.cast}
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieDetails
