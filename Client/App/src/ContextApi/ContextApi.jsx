import React, { createContext, useEffect, useState } from 'react'
import initialFormState from '../Data/FormData';
import { BASE_URL } from '../API/Api';
import orderFormState from '../Data/OrderFormState';
import { token } from '../App';
import { toast } from 'react-toastify';
import uploadFile from '../Helpers/UploadFIle';

export const formContext = createContext()

export default function ContextApi({ children }) {
    // 1
    const [loading, setLoading] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    const [formData, setFormData] = useState(initialFormState);

    const [logo, setLogo] = useState("")
    const [productImg, setProductImg] = useState("")
    const [subProductImg, setSubProductImg] = useState([])
    const [reviewImgs, setReviewImgs] = useState([])

    const [quote, setQuote] = useState([]) 
    const [acordion, setAcordion] = useState([])
    const [about, setAbout] = useState([]);
    const [orderForm, setOrderForm] = useState(orderFormState)




    //  2 for add page nested form state
    const handleChange = (e) => {
        const { name, value } = e.target;
        const path = name.split('.');

        setFormData((prevState) => {
            let state = { ...prevState };
            let current = state;

            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }

            current[path[path.length - 1]] = value;
            return state;
        });
    }

    console.log(formData)

    const handleUploadFile = async (filePath) => {
        try {
            setImgLoading(true)
            const { name, file } = filePath
            const imgurl = await uploadFile(file);

            switch (name) {
                case "logo":
                    setLogo(imgurl)
                    break;

                case "product":
                    setProductImg(imgurl)
                    break;

                default:
                    console.warn(`Unhandled info.name: ${info.name}`);
                    break;
            }
        } catch (error) {
            console.log(error)
            toast.error("Error uploading file!")
        } finally {
            setImgLoading(false)
        }

    }

    const handleMultipleFile = async (files) => {
        const { name, value } = files;
        setImgLoading(true)
        try {
            if (!value || value.length === 0) {
                console.error("No files selected.");
                toast.error("No files selected!")
                return;
            }

            const imgUrls = [];


            for (const file of value) {
                const imgUrl = await uploadFile(file);
                if (imgUrl) {
                    imgUrls.push(imgUrl);
                }
            }

            switch (name) {
                case "subImage":
                    setSubProductImg(imgUrls)
                    break;

                case "review":
                    setReviewImgs(imgUrls)
                    break;

                default:
                    console.warn(`Unhandled name: ${name}`);
                    toast.error(`Unhandled name: ${name}`)
                    break;
            }


        } catch (error) {
            console.error("Error uploading files:", error);
            toast.error("Error uploading file!")
        } finally {
            setImgLoading(false)
        }
    };


    const handleUpdateState = (info) => {

        switch (info.name) {
            case "quote":
                setQuote([...quote, info.value])
            break;

            case "acordion":
                setAcordion([...acordion, info.value])
                break;

            case "about":
                setAbout([...about, info.value])
                break;

            default:
                console.warn(`Unhandled info.name: ${info.name}`);
                toast.error(`Unhandled info.name: ${info.name}`)
                break;
        }
    }

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            hero: {
                ...prev.hero,
                logo: logo
            },
            product: {
                ...prev.product,
                image: productImg,
                quote: quote
            },
            acordion: {
                ...prev.acordion,
                acordions: acordion
            },
            subProduct: {
                ...prev.subProduct,
                about: about,
                image: subProductImg
            },
            review: {
                ...prev.review,
                images: reviewImgs
            },
        }))
    }, [logo, productImg, subProductImg, reviewImgs, quote, acordion, about,])


    //  page context start



    const [page, setPage] = useState({})

    //  page createF
    const handleCreatePage = (e) => {
        e.preventDefault()
        setLoading(true)
        const createPage = async () => {
            try {
                const res = await fetch(`${BASE_URL}/page/create`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify(formData)
                });

                const result = await res.json();
                result.ok ? toast.success(result.message) : toast.error("Cannot Fetching Data")
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        createPage()
    }

    const getPageDetails = async (id, username) => {
        setLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/page/one/${username}/${id}`);
            const data = await res.json();

            setPage(data)
        } catch (error) {
            console.log(error)
            toast.error("Failed To fetch!")
        } finally {
            setLoading(false)
        }
    }


    const value = {
        loading, imgLoading,
      /* 1 */  formData, setFormData,
       /* 2 */  handleChange, handleUploadFile, handleUpdateState, handleMultipleFile,

        /* page details start*/
        handleCreatePage,
        getPageDetails, page,
        /* page details end*/

        // 69  order start
        orderForm, setOrderForm
        //  order end


    }

    return (
        <formContext.Provider value={value}>
            {children}
        </formContext.Provider>
    )
}
