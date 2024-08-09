import React, { useContext, useState } from 'react'
import FormTitle from '../../../Helpers/FormTitle'
import InputField from '../../../Helpers/Inputs'
import FormSubTitle from '../../../Helpers/FormSubTitle'
import AddBtn from '../../../Helpers/AddBtn'
import { formContext } from '../../../ContextApi/ContextApi'

export default function AcordionForm() {

    const { handleUpdateState } = useContext(formContext);
    const [acordion, setAcordion] = useState({ question: "", answer: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAcordion({ ...acordion, [name]: value })
    }

    const handleAddToState = () => {
        const data = {
            name: "acordion",
            value: acordion,
        };

        handleUpdateState(data)
    }
    return (
        <div className='formWrapper'>
            <FormTitle text={"Add FAQ"} />

            <div className="formSection">
                <div className="formGroup">
                    <InputField
                        label="Heading"
                        name="acordion.heading"
                        placeholder="Ex : FAQ"
                    />
                    <InputField
                        label="Text"
                        name="acordion.text"
                        placeholder="Ex : Your question Our Answer"
                    />
                </div>
            </div>
            <div className="formSection">
                <FormSubTitle text={"Add Multiple"} />
                <div className="formGroup">
                    <InputField
                        label="Question"
                        name="question"
                        placeholder="Ex : Why Chose Our Product"
                        handler={handleChange}
                    />
                    <InputField
                        label="Answer"
                        name="answer"
                        placeholder="Ex : One of the Best Product"
                        handler={handleChange}
                    />
                    <AddBtn
                        handleAdd={handleAddToState}
                        text={"Add FAQ"}
                    />
                </div>
            </div>
        </div>
    )
}
