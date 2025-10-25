import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your payment! Your booking has been confirmed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
