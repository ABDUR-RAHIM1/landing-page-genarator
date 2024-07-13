import React from 'react'
import DashboardLayout from './DashboardLayout'
import CreatePageForm from './Components/CreatePageForm'

export default function CreatePage() {
    return (
        <DashboardLayout>
            <h2 className=' text-2xl my-5 font-medium'>Create Your Own Page</h2>
            <CreatePageForm />
        </DashboardLayout>
    )
}
