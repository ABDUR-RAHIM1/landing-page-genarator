import React, { useState } from 'react'
import formFields from '../../Data/FormInputs'
import Cart from './Cart'
import Alert from '../../Homecomponents/Alert'
import { useContext } from 'react'
import { formContext } from '../../ContextApi/ContextApi'

export default function Order(props) {

    const { orderForm, setOrderForm } = useContext(formContext)
    const [show, setShow] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderForm({ ...orderForm, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true)
    }
    console.log(orderForm)
    return (
        <form onSubmit={handleSubmit} className=' orderFormWrapper'>
            <div id='place-order' />
            <div className='orderForm'>
                <h2 className=' text-xl font-medium my-5'>অর্ডারটি সম্পন্ন করতে নিচের ফর্মটি পুরন
                    করে <span className=' text-red-600 font-bold'>Order Now</span> বাটনে ক্লিক করুন</h2>

                {
                    formFields.map(input => (
                        <div key={input.name} className=' w-full my-2'>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input value={orderForm[input.name]} onChange={handleChange} type={input.type} name={input.name} required={input.required} placeholder={input.placeholder} className='input' />
                        </div>
                    ))
                }

            </div>
            <div className='cartWrapper'>
                <Cart info={props.info} orderForm={orderForm} />
            </div>

            {
                show &&
                <Alert />
            }
        </form>
    )
}
