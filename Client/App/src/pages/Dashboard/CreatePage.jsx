import React, { useState } from 'react'
import DashboardLayout from './DashboardLayout'
import CreatePageForm from './Forms/CreatePageForm'
import DemoPage from './Components/DemoPage'

export default function CreatePage() {
    const [show, setShow] = useState(false)

    const openDemo = () => {
        setShow(true)
    }
    const closeDemo = () => {
        setShow(false)
    }
    return (
        <DashboardLayout>
            <div className=' flex items-center justify-between relative'>
                <h2 className=' text-2xl my-5 font-medium'>Create Your Own Page</h2>
                <button onClick={openDemo} className='button'>View Demo</button>
            </div>
            {
                show &&
                <DemoPage closeDemo={closeDemo} />
            }
            <CreatePageForm />
        </DashboardLayout>
    )
}
