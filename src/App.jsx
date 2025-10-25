import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'


import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Settings from './pages/Settings'
import Order from './pages/Order'
import MovieDetails from './pages/MovieDetails'
import { AppProvider } from './context/Appcontext'
import Search from './pages/Search'
import BookingPage from './pages/BookingPage'
import BookSummary from './pages/BookSummary'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import EventsPage from './pages/EventsPage'
import PaymentPage from './pages/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  const location = useLocation();
  const noNavbar = ['/login', '/signup'];
  return (
    <>
      <AppProvider>

        {!noNavbar.includes(location.pathname) && <Navbar />}
        <div className="pt-16">
          <Routes>
            <Route path='/' element={
               <ProtectedRoute>
                <Home />
               </ProtectedRoute>} />
          
            <Route path="/events" element={<EventsPage />} />
            <Route path='/profile' element={
               <ProtectedRoute><Profile /></ProtectedRoute>}>
              <Route path='settings' element={<Settings />} />
              <Route path='orders' element={<Order />} />
            </Route>
            <Route path='/moviedetail/:id' element={<MovieDetails />} />
            <Route path='/search' element={<Search />} />
            <Route path='/BookingPage' element={<BookingPage />} />
            <Route path='/summary' element={<BookSummary />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/paymentpage' element={<PaymentPage/>}/>
            <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
            
          </Routes>
        </div>
      </AppProvider>


    </>
  )
}

export default App