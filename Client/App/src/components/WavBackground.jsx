import React from 'react'
import logo from "../assets/images/logo.png";
import Button from './Button';

export default function WavBackground() {
    return (
        <div className='wavBg flex items-center justify-center flex-col gap-5'>
            <div className="logo">
                <img src={logo} className='w-24 h-24 rounded-md' alt="modhu" />
            </div>
            <div className="text">
                <h1 className='h1 text-gray-700'>
                    কাঁচা মধু (Raw Honey) তে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিকারী এবং ক্যান্সার প্রতিরোধী উপকারিতা রয়েছে _NCBI
                </h1>
                <h4>মধূতে বিভিন্ন ধরনের রোগ প্রতিরোধ ক্ষমতা </h4>

                <Button />
            </div>
        </div>
    )
}
