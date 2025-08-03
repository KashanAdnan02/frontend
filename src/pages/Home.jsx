import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const token = localStorage.getItem("token")
    const [data, setData] = useState({})
    console.log(token);
    async function getData() {
        const data = await axios.post("https://backend-smit-authentication.vercel.app/user", { token })
        console.log(data)
        setData(data.data)
    }
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 4000);
    }, [])

    return (
        <div>
            {data.name}
            {data.email}
            {data.mobile}
        </div>
    )
}

export default Home
