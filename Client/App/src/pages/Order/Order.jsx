import React, { useState } from 'react'
import formFields from '../../Data/FormInputs'
import Cart from './Cart'
import Alert from '../../components/Alert'

export default function Order() {
    const [formData, setFormData] = useState({})
    const [show, setShow] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true)
    }
 
    return (
        <form onSubmit={handleSubmit} className=' orderFormWrapper'>
            <div className='orderForm'>
                <h2 className=' text-xl font-medium my-5'>অর্ডারটি সম্পন্ন করতে নিচের ফর্মটি পুরন
                    করে <span className=' text-red-600 font-bold'>Order Now</span> বাটনে ক্লিক করুন</h2>

                {
                    formFields.map(input => (
                        <div key={input.name} className=' w-full my-2'>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input onChange={handleChange} type={input.type} name={input.name} required={input.required} placeholder={input.placeholder} className='input' />
                        </div>
                    ))
                }

            </div>
            <div className='cartWrapper'>
                <Cart />
            </div>

            {
                show &&
                <Alert />
            }
        </form>
    )
}
