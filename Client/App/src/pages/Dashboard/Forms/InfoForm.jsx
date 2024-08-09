import React from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import FormSubTitle from '../../../Helpers/FormSubTitle'

export default function InfoForm() {

    return (
        <div className='formWrapper'>
            <FormTitle text="Basic Information" />
            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label=" product Name"
                        name="information.productName"
                        placeholder="Ex : hunny nut"
                    />
                    <InputField
                        label=" product Type"
                        name="information.productType"
                        placeholder="Ex : kg / kilo / piece"
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label=" regular Price"
                        type="number"
                        name="information.regularPrice"
                        placeholder="Ex : 150"
                    />
                    <InputField
                        label="offer Price"
                        type="number"
                        name="information.offerPrice"
                        placeholder="Ex : 120"
                    />
                </div>
                <div className="formGroup">
                    <InputField
                        label="Shipping inside Dhaka"
                        type="number"
                        name="information.shippingIn"
                        placeholder="Ex : 50"
                    />
                    <InputField
                        label="Shipping Outside Dhaka"
                        type="number"
                        name="information.shippingOut"
                        placeholder="Ex : 100"
                    />
                </div>

                <div className="formGroup">
                    <InputField
                        label="Delevery System"
                        name="information.deliverySystem"
                        placeholder="Ex : Cash on"
                    />
                    <InputField
                        label="Delevery System Text"
                        name="information.deliverySystemText"
                        placeholder="Ex : On the hand payment"
                    />
                </div>
                <div className="formSection">
                    <FormSubTitle text={"Contact Information"} />
                    <div className="formGroup">
                        <InputField
                            label="Mobile"
                            type="number"
                            name="information.contact.mobile"
                            placeholder="Ex : 01864432943"
                        />
                        <InputField
                            label="Email"
                            type="email"
                            name="information.contact.email"
                            placeholder="Ex : example@gmail.com"
                        />


                    </div>
                </div>
            </div>
        </div>
    )
}
