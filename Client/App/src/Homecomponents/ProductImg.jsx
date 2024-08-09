import React from 'react' 
import { Link } from 'react-router-dom';

export default function ProductImg(props) {
    const { src } = props;
    return (
        <Link to={"/place-order"} className=' cursor-pointer'>
            <img src={src} className='  w-[700px] h-[500px] m-auto rounded-md' alt="modhu" />
        </Link>
    )
}
