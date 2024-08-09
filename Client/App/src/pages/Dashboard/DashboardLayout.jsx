import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
export default function DashboardLayout({ children }) {
  const { username } = useParams()
  return (
    <div className=' w-full flex dashboardLayout'>
      <aside className='sidebar w-[250px] px-5 py-10 h-screen overflow-y-scroll'>

        <div className=' border-b border-gray-600 pb-4'>
          <h4 className=' text-xl font-medium my-3 flex gap-2 items-center'> <MdDashboard className='text-2xl text-orange-500' />  Dashboard</h4>
          <p className='text-center font-medium'>{username}</p>
        </div>

        <nav className=' nav my-10'>
          <Link to={`/dashboard/${username}`}>Dashboard</Link>
          <Link to={`/dashboard/${username}/create-page`}>Create Page</Link>
          <Link to={`/dashboard/${username}/page-list`}> Your Pages</Link>
          <Link to={`/dashboard/${username}/page-manage`}>Manage Pages</Link>
          <Link to={`/dashboard/${username}/orders`}>Orders</Link>
        </nav>
        <div style={{ height: "1000px" }}></div>
      </aside>
      <main className=' dashboardMain flex-1 h-screen overflow-y-scroll py-10 px-5'>

        {children}
      </main>
    </div>
  )
}
