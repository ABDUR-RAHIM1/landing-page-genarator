import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <aside>sidber</aside>
      <main>
        main
        {children}
      </main>
    </div>
  )
}
