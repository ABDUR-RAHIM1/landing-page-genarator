import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Order from './pages/Order/Order'
import Dashboard from './pages/Dashboard/Dashboard'
import AdminProtected from './ProtectedRoute/AdminProtected'
import Auth from './pages/auth/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/place-order' element={<Order />} />
        <Route path='/auth' element={<Auth />} />

        {/* Dashboard start */}

        <Route element={<AdminProtected />}>
          <Route
            path="/:username"
            element={<Dashboard />}
          />
          <Route
            path="/:username/homed"
            element={<Home />}
          />

        </Route>

        {/* Dashboard end */}

      </Routes>
    </>
  )
}
