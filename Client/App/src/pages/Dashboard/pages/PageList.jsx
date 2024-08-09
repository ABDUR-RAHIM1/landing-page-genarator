import React, { useEffect, useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import { BASE_URL } from '../../../API/Api';
import { token, user } from '../../../App';
import { Link } from 'react-router-dom';
import demoPd from "../../../assets/images/pd1.png"
import Loader from '../../../PageComponents/Loader';

export default function PageList() {
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(pages)

    useEffect(() => {
        setIsLoading(true);
        const getPage = async () => {
            try {
                const res = await fetch(`${BASE_URL}/user/one`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await res.json();
                console.log(data)
                setPages(data.pages);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);

            }
        }

        getPage();
    }, []);
 

    if (isLoading) {
        return <Loader />
    }


    return (
        <DashboardLayout>
            <p>Total Page : {pages.length}</p>
            <div className='flex items-center justify-between flex-wrap'>

                {
                    pages ? (
                        pages.map(page => (
                            <SinglePage key={page._id} pageData={page} />
                        ))
                    ) : (
                        <p>No pages available</p>
                    )
                }

            </div>

        </DashboardLayout>
    );
}


const SinglePage = (props) => {

    const { _id, information, product } = props.pageData
    const { productName, productType } = information;
    const { image } = product;

    return (
        <div key={_id}
            className='w-[31%] my-3 border p-2 hover:shadow-md bg-gray-50'
        >
            <img src={image || demoPd} className='w-[70%] h-[150px] m-auto border' alt={productName} />
            <div className=' my-3'>
                <p>{productName}</p>
                <p>{productType}</p>
            </div>
            <Link to={`/page/${user.username}/${_id}`} className=' w-full py-2 bg-gray-200 inline-block text-center my-3'>
                full page
            </Link>
        </div>
    )
}