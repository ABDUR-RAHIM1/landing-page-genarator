import React, { useContext } from 'react'
import DashboardLayout from '../pages/Dashboard/DashboardLayout'
import ImageForm from '../pages/Dashboard/Forms/HeroForm'
import { formContext } from '../ContextApi/ContextApi'
import ProductInfoForm from '../pages/Dashboard/Forms/ProductInfoForm'
import PriceForm from '../pages/Dashboard/Forms/InfoForm'
import AcordionForm from '../pages/Dashboard/Forms/AcordionForm'
import ReviewForm from '../pages/Dashboard/Forms/ReviewForm'

export default function TestForm() {
 
    return (
        <DashboardLayout>
            <ImageForm /> 
            <ProductInfoForm />
            <PriceForm />
            <AcordionForm />
            <ReviewForm />
        </DashboardLayout>
    )
}
