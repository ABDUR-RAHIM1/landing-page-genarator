import React, { useContext } from 'react'
import { formContext } from '../ContextApi/ContextApi';

export default function InputField(props) {
    const { label, type, name, placeholder, required, width, handler, multiple } = props;
    const { handleChange, formData, } = useContext(formContext)



    return (
        <div className={`${width || "w-[48%]"}`}>
            <label className=' capitalize' htmlFor={name}>{label}</label>
            <input
                onChange={handler || handleChange}
                type={type || "text"}
                name={name}
                multiple={multiple || ""}
                required={required || true}
                placeholder={placeholder || ""}
                className={` input  mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:capitalize`}
            />
        </div>
    )
}
