import React, { useState } from 'react'
import gifImg from "../assets/images/congrs.gif"
import { IoMdClose } from 'react-icons/io'

export default function Alert() {
    const [show, setShow] = useState(false)
    return (
        <div className={` ${show ? "flex" : "hidden"} w-full h-screen bg-black bg-opacity-90 fixed top-0 left-0 items-center justify-center flex-col gap-2`}>
            <img src={gifImg} alt="" />
            <div className='relative w-[500px] h-[250px] rounded-md bg-[#EBF5FF] text-[#1E429F] border flex flex-col items-center justify-center gap-5 px-4 py-3 text-center text-sm '>
                <p  >
                    আপনার অর্ডারটি সম্পন্ন হয়েছে
                    খুব শীগ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে ।
                </p>
                <p> আমাদের সাথে থাকার জন্য আপনাকে ধন্যবাদ ।</p>

                <IoMdClose onClick={() => setShow(false)} className='text-3xl text-red-600 absolute top-5 right-5 cursor-pointer border' />
            </div>
        </div>
    )
}
