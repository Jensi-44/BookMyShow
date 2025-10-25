import React, { useEffect, useState } from 'react'
import moviesdata from '../data/movies.json'

const Search = () => {
    const [movies, setMovies] = useState(moviesdata)
    const [searchterm, setSearchterm] = useState("")
    const [selectedGenre, setselectedGenre] = useState("All")
    return (

        useEffect(() => {

            let filtered = movies;

            if (searchterm.trim() !== "") {
                filtered = filtered.filter(movie =>
                    movie.title.toLowerCase().includes(searchterm.toLowerCase())
                )
            }

            if (selectedGenre !== "All") {
                filtered = filtered.filter(movie => movie.genre === selectedGenre)
            }

            setMovies(filtered)

        }, [searchterm, selectedGenre]),

        <div className='max-w-6xl mx-auto p-6'>
            <input type='search' placeholder='Search Movie..' className='p-2 w-70' onChange={(e) => setSearchterm(e.target.value)} value={searchterm} />

            <select value={selectedGenre} onChange={(e) => setselectedGenre(e.target.value)}>
                <option>All</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Crime</option>
            </select>

            <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className='bg-white p-2 rounded-lg'>
                            <img src={movie.poster} className='rounded-lg mb-2 hover:scale-105 transition' onClick={() => navigate(`/moviedetail/${movie.id}`)} />
                            <h3 className='text-black text-lg'>{movie.title}</h3>
                            <p className='text-black text-sm'>{movie.year}</p>
                        </div>
                    ))
                ) : (

                    <p className="text-center col-span-full text-gray-400">
                        No movies found 😢
                    </p>




                )}

            </div>

        </div>
    )
}

export default Search