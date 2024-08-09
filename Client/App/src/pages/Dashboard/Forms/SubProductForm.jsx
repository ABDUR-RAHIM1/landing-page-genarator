import React, { useContext, useState } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import AddBtn from '../../../Helpers/AddBtn'
import { formContext } from '../../../ContextApi/ContextApi'

export default function SubProductForm() {
    const { handleUpdateState, handleMultipleFile, imgLoading } = useContext(formContext)
    const [about, setAbout] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setAbout(value)
    }

    const handleAddToState = () => {
        const data = {
            name: "about",
            value: about
        }
        handleUpdateState(data)
    }


    const handleFileChange = (e) => {

        const data = {
            name: "subImage",
            value: [...e.target.files]
        }
        console.log(data)
        handleMultipleFile(data)
    }

    return (
        <div className='formWrapper'>
            <FormTitle text={"Sub Product"} />

            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label="about product (multiple)"
                        name="about"
                        placeholder="Ex : best product in this time"
                        width="w-full"
                        handler={handleChange}
                    />
                    <AddBtn handleAdd={handleAddToState} text={"Add About Text"} />
                </div>
                <div className="formGroup">
                    <InputField
                        label={`${imgLoading ? "uploading . . . " : "product Sub Images"}`}
                        name="subProduct.image"
                        width="w-full"
                        type="file"
                        multiple="multiple"
                        handler={handleFileChange}
                    />
                </div>
            </div>

        </div>
    )
}
