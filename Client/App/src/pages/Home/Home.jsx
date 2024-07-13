import React from 'react'

import WaveBackground from '../../components/WavBackground'
import Product from '../../components/Product'
import Acordion from '../../components/Acordion'
import Order from '../Order/Order' 

export default function Home() {
    return (
        <div>
            <WaveBackground /> 
            <Product />
            <Acordion />
            <Order/>
        </div>
    )
}
