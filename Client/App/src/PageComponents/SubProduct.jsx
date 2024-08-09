import React from 'react'
import images from '../constans/Constans';
import Button from './Button';
export default function SubProduct(props) {
    const { image, about } = props.subProductData;

    console.log(props)
    return (
        <div className=' px-10 my-10'>
            <div className=' my-5  w-full text-center '>
                {
                    about && about.map((a, i) => (
                        <p key={i}>{a}</p>
                    ))
                }
            </div>
            <div className=' w-full md:w-[80%] m-auto'>
                <img src={image || images.pd1} className=' w-full h-[500px] rounded-md ' alt="" />
            </div>

            <div className=' text-center my-10'>
                <Button border={"border-blue-700"} />
            </div>

        </div>
    )
}
