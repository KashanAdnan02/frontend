import React, { useState } from 'react';
import axios from "axios"
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // add api
            const data = await axios.post("https://backend-smit-authentication.vercel.app/signup", formData)
            console.log(data)
            alert("User registered successfully");
        } catch (error) {
            console.error(error);
            alert("Sign up failed");
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="mobile" type="number" placeholder="mobile" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default SignUp;
