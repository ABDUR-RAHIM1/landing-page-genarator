import React from 'react'
import images from '../constans/Constans'

export default function ImgSpinner() {
    return (
        <div className='input flex items-center justify-between  bg-gray-100'>
            <div className='w-[30%] h-full bg-gray-100 text-black flex items-center justify-center'>
                Image is Uplaoding . . .
            </div>
            <img className='w-full h-full' src={images.fileLoader} alt="" />

        </div>
    )
}
