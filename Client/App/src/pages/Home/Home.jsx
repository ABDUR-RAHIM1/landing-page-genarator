import React from 'react'

import WavBackground from '../../Homecomponents/WavBackground'
import Product from '../../Homecomponents/Product'
import Acordion from '../../Homecomponents/Acordion'
import Order from '../Order/Order' 

export default function Home() {
    return (
        <div>
            <WavBackground /> 
            <Product />
            <Acordion />
            <Order/>
        </div>
    )
}
