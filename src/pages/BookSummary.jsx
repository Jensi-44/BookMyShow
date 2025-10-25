import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BookSummary = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const handleclick = () =>{
      navigate('/paymentpage')
    }

    const{selectedseat = []} = location.state || {}

    const ticketprice = 150
    const subtotal = selectedseat.length * ticketprice
    const gst = subtotal * 0.18
    const total = subtotal + gst
  return (
    <div className='max-w-2xl mx-auto mt-[8em]  bg-white border border-black shadow-lg'>
        <div className='p-10 flex flex-col justify-center'>
            <p className='text-gray-800 p-2 '>{selectedseat.length > 0 ? selectedseat.join(",") : "None"}</p>
        

        <div className='border-t border-gray-700 p-2'>
            <p>Ticket Price : ₹{ticketprice}*{selectedseat.length}</p>
            <p>Subtotal : ₹{subtotal}</p>
            <p>GST : ₹{gst.toFixed(2)}</p>
            <hr className='my-2'/>
            <p className='font-semibold'>Total:₹{total.toFixed(2)}</p>
        </div>
         <button className={`bg-blue-500 shadow-lg shadow-blue-500/50 p-3 rounded-lg ${selectedseat.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600'}`}  disabled={selectedseat.length === 0} onClick={handleclick}>Payment</button>
         </div>
    </div>
  )
}

export default BookSummary