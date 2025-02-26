import React, { useContext } from 'react'
import { register } from '../service/authService';
import AuthContext from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router';
import { apiClient } from '../config/apiConfig';

const Register = () => {
    const { setUser, setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(event.target);

        const body = {
            username: form.get("username"),
            password: form.get("password"),
            email: form.get("email"),
            birthDate: form.get("birthDate"),
            gender: form.get("gender"),
        }
        try {
            const data = await register(body)
            console.log(data);
            setUser(data.user);
            setToken(data.accessToken);
            apiClient.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-black">
                <div className="bg-[#000] border border-gray-700 p-8 rounded-lg w-[350px] text-center">
                    <h1 className="text-white text-4xl font-cursive mb-4">Instagram</h1>
                    <div className="flex items-center my-4">
                        <div className="border-b border-gray-700 flex-grow"></div>
                        <div className="border-b border-gray-700 flex-grow"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-left">
                            <label htmlFor="username" className="block text-gray-400 mb-1">Username:</label>
                            <input type="text" name="username" id="username"
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500" />
                        </div>

                        <div className="text-left">
                            <label htmlFor="password" className="block text-gray-400 mb-1">Password:</label>
                            <input type="password" name="password" id="password"
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500" />
                        </div>

                        <div className="text-left">
                            <label htmlFor="email" className="block text-gray-400 mb-1">Email:</label>
                            <input type="email" name="email" id="email"
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500" />
                        </div>
                        <div className="text-left">
                            <label htmlFor="birthDate" className="block text-gray-400 mb-1">Birth Date:</label>
                            <input type="date" name="birthDate" id="birthDate"
                                className="w-full px-4 py-2 bg-black  border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500" />
                        </div>

                        <div className="text-left">
                            <label htmlFor="gender" className="block text-gray-400 mb-1">Gender:</label>
                            <select name="gender" id="gender"
                                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                            Register
                        </button>
                    </form>
                </div>

                <div className="mt-4 text-center bg-[#000] border border-gray-700 p-4 rounded-lg w-[350px]">
                    <p className="text-white">Already have an account? <NavLink to='/login' className="text-blue-500 cursor-pointer">Login</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Register
