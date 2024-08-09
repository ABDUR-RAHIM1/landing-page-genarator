import React from 'react'
import { MdClose } from 'react-icons/md'

export default function DemoPage(props) {
    const { closeDemo } = props;
    return (
        <div className=' w-full h-screen fixed overflow-x-auto top-0 right-0 bg-[#000000d9]'>
            <div>
                <MdClose onClick={closeDemo} className=' text-4xl border border-orange-400 p-1 rounded-md absolute top-5 right-5 text-orange-600 cursor-pointer' />
            </div>


            <section className='headerArea' title='Header'>
                <div className='w-[80px] h-[80px] rounded-md my-5 border border-orange-300 flex items-center justify-center caption-top font-bold'>
                    logo
                </div>
                <div className=' text-center'>
                    <h1 className='h1'>
                        Main Headline
                    </h1>
                    <h3 className=' text-xl font-medium'>
                        Sub Headline
                    </h3>
                    <button className=' button my-5'>Order Button</button>
                </div>
            </section>

            <section className=' my-10'>
                <div className=' px-10 bg-gray-600 w-full md:w-[75%] m-auto h-[600px] rounded-md flex items-center justify-center'>
                    <p>Procut Main Images</p>
                </div>
                <div className=' bg-gray-400 py-10 my-8 flex items-center justify-center'>
                    <h1 className='h1'>About Prodcut (Quate)</h1>
                </div>
            </section>


            <section className=' my-10 px-10'>
                <div className='w-full md:w-[60%] m-auto'>
                    <h1 className='h1 text-center bg-gray-400 py-6 text-gray-700 rounded-md'>FAQ Headline!</h1>
                </div>
                <div className=' border py-10 my-5 px-5'>
                    <h2 className=' text-xl text-white text-center'>FAQ Questions and Answers</h2>
                </div>
            </section>

            <section className=' my-5'>
                <h1 className=' h1 text-center text-gray-400'>
                    About the Product (Related Text)
                </h1>
                <div className=' px-10 bg-gray-600 w-full md:w-[75%] m-auto h-[600px] rounded-md flex items-center justify-center'>
                    <p>Procut Sub Images</p>
                </div>
                <div className=' px-5 my-5 flex items-center justify-between flex-wrap'>
                    <div className=' w-[48%] md:w-[22%] bg-gray-400 py-3 px-3 rounded-md text-center cursor-pointer'>sub image</div>
                    <div className=' w-[48%] md:w-[22%] bg-gray-400 py-3 px-3 rounded-md text-center cursor-pointer'>sub image</div>
                    <div className=' w-[48%] md:w-[22%] bg-gray-400 py-3 px-3 rounded-md text-center cursor-pointer'>sub image</div>
                    <div className=' w-[48%] md:w-[22%] bg-gray-400 py-3 px-3 rounded-md text-center cursor-pointer'>sub image</div>
                </div>
            </section>

            <section className=' bg-gray-400 h-[500px] flex items-center justify-between px-10'>
                <div className=' w-full md:w-[65%] h-[90%] border rounded-md flex items-center justify-center text-xl '>
                    order form
                </div>
                <div className=' w-full md:w-[30%] h-[90%] border rounded-md flex items-center justify-center text-xl '>
                    Cart
                </div>
            </section>

        </div>
    )
}
