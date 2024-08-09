import React, { useContext, useState } from 'react'
import ProductInfoForm from './ProductInfoForm'
import AcordionForm from './AcordionForm'
import { BASE_URL } from '../../../API/Api'
import uploadFile from '../../../Helpers/UploadFIle'
import { token } from '../../../App'
import Spinner from '../../../Homecomponents/Spinner'
import { formContext } from '../../../ContextApi/ContextApi'
import ReviewForm from './ReviewForm'
import HeroForm from './HeroForm'
import InfoForm from './InfoForm'
import SubProductForm from './SubProductForm'


export default function CreatePageForm() {
    const { formData, setFormData, handleCreatePage, loading } = useContext(formContext) 
    const [imgLoading, setImgLoading] = useState(false)



    const handleChange = async (e) => {
        const { name, type, value, files } = e.target;
        if (type === 'file' && files && files[0]) {
            setImgLoading(true)
            const fileUrl = await uploadFile(files[0]);
            if (fileUrl) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: fileUrl
                }));
                setImgLoading(false)
            }

        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };





    return (
        <form onSubmit={handleCreatePage}>
            {/*  first section */}

            <HeroForm handleChange={handleChange} />
            <ProductInfoForm handleChange={handleChange} />
            <InfoForm handleChange={handleChange} />
            <AcordionForm />
            <SubProductForm />
            <ReviewForm />

            <button className=' button w-full bg-orange-600 text-white'>
                {
                    loading ? <Spinner /> : "Publish Page"
                }
            </button>

        </form>
    )
}
