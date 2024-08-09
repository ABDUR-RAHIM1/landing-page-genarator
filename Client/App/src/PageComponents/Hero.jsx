import React from 'react'

import images from '../constans/Constans'
import Button from './Button'

export default function Hero(props) {

    const { logo, headline, utils } = props.heroData;

    const getStyle = (utils) => {
        return {
            background: `${utils.gradientType}-gradient(${utils.gradientRoated}deg, ${utils.primaryBgColor}, ${utils.secondaryBgColor})`,
            primaryTextColor: utils.primaryTextColor,
        };
    };

    const styles = getStyle(utils)

    return (
        <div style={{ background: styles.background }} className={` w-full h-[80vh]  flex items-center justify-center flex-col`}>
            <div>
                <img src={logo || images.pd1} className='w-[100px] h-[100px] rounded-full my-3' alt={"landing page"} />
            </div>
            <div className='w-full md:w-[75%]  text-center '>
                <h1 style={{ color: styles.primaryTextColor }} className='h1'>{headline.main}</h1>
                <p className='text-[19px]'>{headline.sub}</p>

            </div>
            <div>
                <Button border={"border-blue-800"} />
            </div>
        </div>
    )
}
