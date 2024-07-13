import React from 'react'

export default function CreatePageForm() {
    return (
        <div>
            {/*  first section */}
            <section className='section'>
                <div >
                    <label htmlFor="logo">Add logo</label>
                    <input type="file" name='logo' className='input' />
                </div>
                <div >
                    <label htmlFor="mainBG">Main Background</label>
                    <input type="file" name='mainBG' className='input' />
                </div>
                <div>
                    <label htmlFor="subBg">Sub Background</label>
                    <input type="file" name='subBg' className='input' />
                </div>
                <div>
                    <label htmlFor="mainPd">Product Image (Main)</label>
                    <input type="file" name='mainPd' className='input' />
                </div>
                <div className='m-auto'>
                    <label htmlFor="subPd">Product Image (Sub)</label>
                    <input type="file" name='subPd' className='input' />
                </div>
            </section>
        </div>
    )
}
