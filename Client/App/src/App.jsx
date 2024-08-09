import React, { useEffect } from 'react'
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
import Orders from './pages/Dashboard/pages/Orders'
import PageList from './pages/Dashboard/pages/PageList'
import Cookies from 'js-cookie'
import PageDetails from './pages/Dashboard/pages/PageDetails'
import TestForm from './Test/TestForm'
import ManagePage from './pages/Dashboard/pages/ManagePage'

export const token = Cookies.get('pageToken');
const userCookie = Cookies.get('pageUser');
export const user = userCookie ? JSON.parse(userCookie) : null;

export default function App() {



  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<TestForm />} />  // for testing sometime
        <Route path='/page/:username/:id' element={<PageDetails />} />
        <Route path='/auth' element={<Auth />} />

        {/* Dashboard start */}

        <Route element={<AdminProtected />}>
          <Route
            path="/dashboard/:username"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/:username/create-page"
            element={<CreatePage />}
          />
          <Route
            path="/dashboard/:username/page-list"
            element={<PageList />}
          />
          <Route
            path="/dashboard/:username/page-manage"
            element={<ManagePage />}
          />
          <Route
            path="/dashboard/:username/orders"
            element={<Orders />}
          />

        </Route>

        {/* Dashboard end */}
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}
