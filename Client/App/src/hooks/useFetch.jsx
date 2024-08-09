import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../API/Api'

export default function useFetch(url) {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/url`);
                const result = await res.json();
                setData(result)
                console.log(result)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        getData()
    }, [url])


    return (
        {
            loading, error, data
        }
    )
}
