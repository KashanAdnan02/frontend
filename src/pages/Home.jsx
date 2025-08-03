import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const token = localStorage.getItem("token")
    const [data, setData] = useState({})
    console.log(token);
    const navigate = useNavigate()

    async function getData() {
        const data = await axios.post("https://backend-smit-authentication.vercel.app/user", { token })
        console.log(data)
        setData(data.data)
    }
    useEffect(() => {
        if (!token) {
            navigate("/signin")
        }
        getData()
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
