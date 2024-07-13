import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
export default function DashboardLayout({ children }) {
  const { username } = useParams()
  return (
    <div className='w-full flex '>
      <aside className='w-[250px] px-5 py-10 bg-black text-white h-screen overflow-y-scroll'>

        <div className=' border-b border-gray-600 pb-4'>
          <h4 className=' text-xl font-medium my-3 flex gap-2 items-center'> <MdDashboard className='text-2xl text-orange-500' />  Dashboard</h4>
          <p className='text-center font-medium'>{username}</p>
        </div>

        <nav className=' nav my-10'>
          <Link to={`/page/${username}`}>Dashboard</Link>
          <Link to={`/page/${username}/create-page`}>Create Page</Link>
          <Link to={`/page/${username}/page-list`}> Your Pages</Link>
          <Link to={`/page/${username}/orders`}>Orders</Link> 
        </nav>
        <div style={{ height: "1000px" }}></div>
      </aside>
      <main className='flex-1 h-screen overflow-y-scroll py-10 px-5'>

        {children}
        <div style={{ height: "1000px" }}></div>
      </main>
    </div>
  )
}
