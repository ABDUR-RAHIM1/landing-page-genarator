import React, { useContext } from 'react';
import { formContext } from '../ContextApi/ContextApi';

export default function SelectField(props) {
    const { label, name, value, options, width, required } = props;
    const { handleChange, formData, } = useContext(formContext)

    return (
        <div className={`${width || "w-[48%]"}`}>
            {label && (
                <label htmlFor={name} className='capitalize'>
                    {label}
                </label>
            )}
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                required={required || true}
                className={`input mt-2 placeholder-gray-500 placeholder-opacity-50 placeholder:capitalize `}
            >
                <option value="">Select Type</option> {/* Placeholder option */}
                {options && options.map((op, i) => (
                    <option value={op} key={i}>
                        {op}
                    </option>
                ))}
            </select>
        </div>
    );
}
