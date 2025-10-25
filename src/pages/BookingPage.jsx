import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingPage = () => {
    const [selectedseat, setSelectedSeat] = useState([])
    const navigate = useNavigate()
    const seats = [
        ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
        ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
        ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
        ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
        ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
        ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
        ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
        ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10']
    ];
    const handleclick = (seat) => {
        if (selectedseat.includes(seat)) {
            setSelectedSeat(selectedseat.filter((s) => s !== seat));
        } else {
            setSelectedSeat([...selectedseat, seat]);
        }
    };

    const handleprocess = () => {
        navigate('/summary', { state: { selectedseat } })
    }
    return (
        <>
            <div className='flex items-center justify-center'>
                <div>
                    {seats.map((row, index) => (
                        <div key={index} className='text-white'>

                            {row.map((seat) => (
                                <button key={seat} onClick={() => handleclick(seat)} className={`w-12 h-12 rounded-lg m-3 ${selectedseat.includes(seat) ? 'bg-green-800' : 'bg-gray-800'}`}>
                                    {seat}
                                </button>
                            ))}

                        </div>
                    ))}

                </div>
            </div>
            <div className='justify-center items-center flex'>
                <h2 className='text-black'>Selected Seat : </h2>
                <p className='text-green-700'>
                    {selectedseat.length > 0 ? selectedseat.join(',') : 'No Seats Selected'}
                </p>
            </div>


            <div className='justify-center items-center flex mt-[1em]'>
                <button className={`bg-blue-500 shadow-lg shadow-blue-500/50 p-3 rounded-lg ${selectedseat.length === 0 ? 'bg-gray-700 cursor-not-allowed' : 'bg-red-500'} `} onClick={handleprocess} disabled={selectedseat.length === 0}>Process to Summary</button>
            </div>
        </>


    )
}

export default BookingPage