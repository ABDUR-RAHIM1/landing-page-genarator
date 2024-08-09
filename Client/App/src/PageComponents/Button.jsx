import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
    const { border } = props
    return (
        <a href='#place-order' className='inline-block'>
            <button className={`button my-5 ${border}`}>অর্ডার করতে চাই</button>
        </a>
    )
}

