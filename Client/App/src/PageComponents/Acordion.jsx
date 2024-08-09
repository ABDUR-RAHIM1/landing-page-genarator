import React from 'react'
import AcordionCard from './AcordionCard'
import Button from './Button'

export default function Acordion(props) {
    const { heading, text, acordions } = props.acordionData;



    return (
        <div className=' px-10 py-10 my-16 bg-gray-100 '>
            <div className='w-full md:w-[60%] m-auto text-center py-6 my-3 text-gray-700 rounded-md'>
                <h1 className='h1 '>{heading}</h1>
                <p>{text}</p>
            </div>

            <div className='acordionWrapper'>
                {
                    acordions && acordions.map((a, i) => (
                        <AcordionCard key={i} data={a} />
                    ))
                }

            </div>

            <div className=' text-center my-5'>
                <Button border="border-yellow-600" />
            </div>

            {/* <div className=' px-10'>
                <h5 className='text-lg font-medium my-4'>
                    মধুকে সাধারণত সব রোগের ওষুধ বলা হয়। এটি আমাদের অভ্যন্তরীণ সকল প্রকার অসুখকে সারাতে সাহায্য করে। তাই প্রত্যেক মানুষেরই উচিত নিয়মিত এক চামচ করে হলেও মধু খাওয়া। আমাদের থেকে <Link to={"/place-order"} className=' text-yellow-700 font-bold underline'>Cash On Delivery</Link> তে একদম খাটি মধু নিতে এখনি অর্ডার করুন ।
                </h5>

                <ProductImg src={pd2} />

                <div className=' text-center my-5'>
                    <Button border="border-yellow-600" />
                </div>
            </div> */}

        </div>
    )
}
