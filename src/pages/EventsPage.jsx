import React, { useState } from 'react'
import events from '../data/events.json'

const EventsPage = () => {
    const[selectedcategory, setSelectedcategory] = useState('All')

    const filterevents = selectedcategory === 'All' ? events : events.filter(event => event.category === selectedcategory)
    return (
        <div className='min-h-screen'>
               <h1 className='text-2xl text-bold mt-[1em] p-3 bg-black text-white border border-black m-3 rounded-lg'>Upcoming Events</h1>

            <div className='mt-[1em] border border-black p-3 m-3 rounded-lg'>
                <label className='m-6'>Filter by Category: </label>
                <select value={selectedcategory}
                onChange={(e)=>setSelectedcategory(e.target.value)} >
                    <option value="All">All</option>
                    <option value="Concert">Concert</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>

            <div className='mt-[1em] grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
                {
                    filterevents.map((event) => (
                        <div key={event.id} className='border border-black rounded-lg p-3 m-3 '>
                            <img src={event.image} className='w-70 h-50 rounded-lg flex items-center' />
                            <h3>{event.name}</h3>
                            <p>{event.category}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventsPage