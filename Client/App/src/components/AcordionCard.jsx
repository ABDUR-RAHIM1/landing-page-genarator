import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

export default function AcordionCard(props) {
    const { qes, ans } = props.data
    const [show, setShow] = useState(false)


    return (
        <div className="acordion">
            <button onClick={() => setShow(!show)} className={`acordionBtn ${show ? "bg-gray-200" : ""}`}>
                <p>{qes}</p>
                <IoIosArrowDown className={`text-2xl ${show ? " rotate-180" : " rotate-0"} duration-200`} />
            </button>
            <div className={`acordionText ${show ? "block" : "hidden"} duration-200`}>
                <p>
                    {ans}
                </p>
            </div>
        </div>
    )
}
