import React, { useContext } from 'react'
import InputField from '../../../Helpers/Inputs'
import FormTitle from '../../../Helpers/FormTitle'
import { formContext } from '../../../ContextApi/ContextApi'

export default function ReviewForm() {

    const { handleMultipleFile, imgLoading } = useContext(formContext)

    const handleFileChange = (e) => {
        const data = {
            name: "review",
            value: [...e.target.files]
        }
        console.log(data)
        handleMultipleFile(data)
    }
    return (
        <div className='formWrapper'>
            <FormTitle text={'Review'} />
            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label="heading"
                        name="review.heading"
                        placeholder="Ex : review Headline"
                    />
                    <InputField
                        label="Text"
                        name="review.text"
                        placeholder="Ex : review Text"
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label={`${imgLoading ? "uploading . . ." : "Review Photos"}`}
                        name="review.heading"
                        type="file"
                        multiple="multiple"
                        width="w-full"
                        handler={handleFileChange}
                    />
                </div>
            </div>
        </div>
    )
}
