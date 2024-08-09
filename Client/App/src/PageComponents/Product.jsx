import React, { useContext } from 'react'

import images from "../constans/Constans"

export default function Product(props) {
    const { image, quote } = props.productData;
    const { utils } = props.hero;

    const getStyle = (utils) => {
        return {
            background: `${utils.gradientType}-gradient(${utils.gradientRoated}deg, ${utils.primaryBgColor}, ${utils.secondaryBgColor})`,
            primaryTextColor: utils.primaryTextColor,
        };
    };

    const styles = getStyle(utils)

    return (
        <div className=' flex items-center justify-center flex-col my-5'>

            <div className=' w-full md:w-[75%] m-auto'>
                <img src={image || images.pd1} className='w-full h-[500px] rounded-md' alt="" />
            </div>

            <div style={{ background: styles.background }} className=' w-full px-10 py-16 my-10 '>
                {
                    quote && quote.map((q, i) => (
                        <div key={i} className=' border-b'>
                            <h4 style={{ color: styles.primaryTextColor }} className='h1'>{q.text}
                                <span className=' ml-5 text-red-600'> - {q.author}</span>
                            </h4>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
