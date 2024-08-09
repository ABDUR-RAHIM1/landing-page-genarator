import React from 'react'

export default function Cart(props) {
    const {  deliverySystem, offerPrice, productName, productType, regularPrice, shippingIn, shippingOut } = props.info;
    const { orderForm } = props

    let amountOfQuantity = offerPrice * orderForm.quantity;
    let totalAmount = orderForm.district === "dhaka" ? amountOfQuantity + shippingIn : amountOfQuantity + shippingOut

    let shipping = totalAmount - amountOfQuantity

    return (
        <div className=' bg-gray-50 min-h-[100vh] p-3'>
            <h5 className=' from-black my-3 text-lg font-medium'>Order Details</h5>
            <div className=' flex items-center justify-between border-b my-3'>
                <p className=' font-medium'>Quantity</p>
                <p className=' font-medium'>Subtotal</p>
            </div>
            <div className=' flex items-center justify-between my-3'>
                <p className=' font-medium'> {orderForm.quantity} {productType}</p>
                <p className=' font-medium'> {amountOfQuantity} <span className='text-[14px]'>BDT</span> </p>
            </div>

            <div className=' flex items-center justify-between text-[17px]'>
                <p>Shipping</p>
                <p>{shipping} <span className='text-[14px]'>BDT</span> </p>
            </div>
            <div className=' flex items-center justify-between my-3'>
                <p>total Amount</p>
                <p> {totalAmount} <span className='text-[14px]'>BDT</span> </p>
            </div>
            <div className=' bg-gray-100 rounded-md py-5 px-2 my-4'>
                <h4 className=' font-bold text-[17px] my-3'>{deliverySystem} ডেলিভারি</h4>
                <p className='py-2 text-[15px] px-3 bg-gray-200 text-red-600'>পণ্য হাতে পেয়ে পেমেন্ট করতে পারবেন</p>
            </div>
            <button className='  py-3 px-4 text-clip bg-yellow-600 text-white my-5 w-full rounded-md font-medium hover:bg-yellow-800 duration-200'>Order Now</button>
        </div>
    )
}
