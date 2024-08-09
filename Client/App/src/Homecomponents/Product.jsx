import React from 'react'
import pd1 from "../assets/images/pd1.png";
import ProductImg from './ProductImg';

export default function Product() {
    return (
        <div className=' flex items-center justify-center flex-col my-5'>
            <ProductImg src={pd1} />

            <div className='w-full py-10 text-center bg-[#fcb900] text-gray-600 my-10'>
                <h1 className='h1'>
                    "প্রিয়নবী সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন- মধুতে আরোগ্য নিহিত আছে"
                    <br />
                    <span className=' text-red-500'>_আল-হাদিস</span>
                </h1>
            </div>
        </div>
    )
}
