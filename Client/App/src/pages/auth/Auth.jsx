import React, { useState } from 'react'
import { BASE_URL } from "../../API/Api";
import Spinner from '../../Homecomponents/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export default function Auth() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setLoading(true)
        fetch(`${BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.token) {
                    toast.success(data.message)
                    Cookies.set("pageToken", data.token, { expires: 7 })
                    Cookies.set("pageUser", JSON.stringify(data.user), { expires: 7 })
                    navigate(`/dashboard/${data.user.username}`)
                } else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <div className='loginBg flex items-center justify-between flex-wrap px-10'>
            <div className=' w-full md:w-[48%]'>
                <h1 className='h1'>
                    স্বাগতম
                </h1>
                <p className='text-sm my-2'>
                    আমাদেরে সেবা গ্রহন করার জন্য একাউন্ট তৈরি করুন এবং লগইন করুন ।
                </p>
                <p className='text-sm my-2'>
                    আমাদেরে সাথে থাকার জন্য অসংখ্য ধন্যবাদ ।
                </p>
            </div>

            <div className=' w-full md:w-[48%]'>
                <form onSubmit={handleSubmit} className=' p-3 border border-gray-300 rounded-md'>
                    <h2 className='text-2xl font-bold text-orange-500 my-5'>
                        {
                            show ? "একাউন্ট তৈরি করুন" : "লগইন করুন"
                        }
                    </h2>
                    {show &&
                        <>
                            <div className='my-3'>
                                <label htmlFor="username">Business Name</label>
                                <input onChange={handleChange} className='input' type="text" name='username' placeholder='Your Business Name' />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="name">Name</label>
                                <input onChange={handleChange} className='input' type="text" name='name' placeholder='Your Good Name' />
                            </div>
                        </>
                    }
                    <div className='my-3'>
                        <label htmlFor="email">Email </label>
                        <input onChange={handleChange} className='input' type="email" name='email' placeholder='Your Verifyed Email' />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="password">Password </label>
                        <input onChange={handleChange} className='input' type="password" name='password' placeholder='Strong Password' />
                    </div>
                    <div className=' text-sm my-5 text-right '>

                        {
                            show ?
                                <p>ইতোমধ্যে একাউন্ট আছে ! <span onClick={() => setShow(!show)} className='text-orange-500 font-bold cursor-pointer underline'>লগইন করুন</span> </p>
                                :
                                <p> কোন একাউন্ট নেই ! <span onClick={() => setShow(!show)} className='text-orange-500 font-bold cursor-pointer underline'> একাউন্ট তৈরি করুন</span> </p>
                        }

                    </div>
                    <button className='button w-full bg-orange-500 text-white capitalize my-4'>
                        {
                            loading ? <Spinner /> : show ? "register" : "Login"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}
