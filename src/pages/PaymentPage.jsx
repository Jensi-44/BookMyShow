import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
    const [paymentmethod, setPaymentmethod] = useState('card')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleclick = () => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            navigate('/paymentsuccess')
        }, 2000)
    }
    return (
        <div className='min-h-screen'>
            <div className='bg-white rounded-lg max-w-2xl mx-auto mt-[8em] shadow-lg p-6'>
                <h1 className='text-2xl font-semibold'>Payment Page</h1>

                <label className='text-black text-bold'>Select Payment Method:</label>

                <select value={paymentmethod} onChange={(e) => setPaymentmethod(e.target.value)} className='mt-[1em] m-2'>
                    <option value='card'>Credit/Debit Card</option>
                    <option value="upi">UPI</option>
                    <option value="netbanking">Net Banking</option>
                </select>

                {paymentmethod === "card" && (

                    <div className='mt-[1em]'>
                        <input type='text' placeholder='Card Number' className='border p-2 w-full mb-2 rounded-md' />

                        <input type='text' placeholder='MM/YY' className='border p-2 w-full mb-2 rounded-md' />

                        <input type='text' placeholder='CVV' className='border p-2 w-full mb-2 rounded-md' />
                    </div>

                )}

                <button onClick={handleclick} disabled={loading} className='bg-blue-500 w-full py-2 rounded-lg text-white mt-[1em]'>
                    {loading ? "Processing...." : "Pay-Now"}
                </button>

            </div>
        </div>
    )
}

export default PaymentPage