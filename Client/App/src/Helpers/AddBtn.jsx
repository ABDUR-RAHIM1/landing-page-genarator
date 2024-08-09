import React from 'react'

export default function AddBtn({ text, handleAdd }) {
    return (
        <div className=' w-full block  mt-10 m-auto text-center'>
            <span onClick={handleAdd} className=' capitalize cursor-pointer bg-blue-500 text-white py-4 px-6 rounded-sm'>
                {text}
            </span>
        </div>
    )
}
