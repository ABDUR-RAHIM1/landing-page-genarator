import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Order from './pages/Order/Order'
import Dashboard from './pages/Dashboard/Dashboard'
import AdminProtected from './ProtectedRoute/AdminProtected'
import Auth from './pages/auth/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Notfound from './pages/Notfound/Notfound'
import CreatePage from './pages/Dashboard/CreatePage'
import Orders from './pages/Dashboard/Orders'
import PageList from './pages/Dashboard/PageList'

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
            path="/page/:username"
            element={<Dashboard />}
          />
          <Route
            path="/page/:username/create-page"
            element={<CreatePage />}
          />
          <Route
            path="/page/:username/page-list"
            element={<PageList />}
          /> 
          <Route
            path="/page/:username/orders"
            element={<Orders />}
          />

        </Route>

        {/* Dashboard end */}
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}
