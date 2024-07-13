import React from 'react'

export default function Cart() {
    return (
        <div className=' bg-gray-50 min-h-[100vh] p-3'>
            <h5 className=' from-black my-3 text-lg font-medium'>Order Details</h5>
            <div className=' flex items-center justify-between border-b my-3'>
                <p className=' font-medium'>Quantity</p>
                <p className=' font-medium'>Subtotal</p>
            </div>
            <div className=' flex items-center justify-between my-3'>
                <p className=' font-medium'>1 kg</p>
                <p className=' font-medium'>850 ৳ </p>
            </div>
            <div className=' flex items-center justify-between my-3'>
                <p>Subtotal</p>
                <p>850৳ </p>
            </div>
            <div className=' flex items-center justify-between'>
                <p>Shipping</p>
                <p>50 BDT</p>
            </div>

            <div className=' bg-gray-100 rounded-md py-5 px-2 my-4'>
                <h4 className=' font-bold text-[17px] my-3'>ক্যাশঅন ডেলিভারি</h4>
                <p className='py-2 text-[15px] px-3 bg-gray-200 text-red-600'>পণ্য হাতে পেয়ে পেমেন্ট করতে পারবেন</p>
            </div>
            <button className='  py-3 px-4 text-clip bg-yellow-600 text-white my-5 w-full rounded-md font-medium hover:bg-yellow-800 duration-200'>Order Now</button>
        </div>
    )
}
