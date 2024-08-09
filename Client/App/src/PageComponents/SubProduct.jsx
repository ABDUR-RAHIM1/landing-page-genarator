import React, { useState } from 'react'
import images from '../constans/Constans';
import Button from './Button';
export default function SubProduct(props) {
    const { image, about } = props.subProductData;

    const [imageIndex, setImgIndex] = useState(0)
    const handleAddPhoto = (index) => {
        setImgIndex(index)
    }
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
                <img src={image[imageIndex]} className=' w-full h-[500px] rounded-md ' alt="" />

            </div>
            <div className='w-full my-5 p-10 bg-gray-100 flex items-center justify-center gap-4'>
                {
                    image && image.map((image, i) => (
                        <img onClick={() => handleAddPhoto(i)} key={i} className=' w-[200px] h-[200px] cursor-pointer' src={image} alt={`${image + i}`} />
                    ))
                }
            </div>

            <div className=' text-center my-10'>
                <Button border={"border-blue-700"} />
            </div>

        </div>
    )
}
