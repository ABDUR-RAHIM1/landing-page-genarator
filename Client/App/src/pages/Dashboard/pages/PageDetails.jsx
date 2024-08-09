import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../../API/Api';
import Loader from '../../../PageComponents/Loader';
import Product from '../../../PageComponents/Product';
import Acordion from '../../../PageComponents/Acordion';
import Order from '../../Order/Order'; 
import Hero from '../../../PageComponents/Hero';
import SubProduct from '../../../PageComponents/SubProduct';
import Footer from '../../../PageComponents/Footer';
import Reviews from '../../../PageComponents/Reviews';

export const pageContext = createContext()

export default function PageDetails() {

    const { id, username } = useParams();
    const [loading, setLoading] = useState(false)
    const [pageData, setPageData] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`${BASE_URL}/page/one/${username}/${id}`);
                const result = await res.json();
                setPageData(result)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }

        getData()
    }, [id, username])



    if (loading) {
        return <Loader />
    }


    return (

        <div>

            {Object.keys(pageData).length !== 0 ? (
                <>
                    <Hero heroData={pageData.hero} />
                    <Product productData={pageData.product} hero={pageData.hero} />
                    <Acordion acordionData={pageData.acordion} />
                    <SubProduct subProductData={pageData.subProduct} />
                    <Reviews reviewData={pageData.review} />
                    <Order info={pageData.information} />
                    <Footer />
                </>
            )
                : (
                    <p className=' text-center my-10'>Empty Data</p>
                )
            }
        </div>
    )
}
