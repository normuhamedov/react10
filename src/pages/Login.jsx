import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function LoginForm() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 

        navigate("/");
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            <div className="bg-[#000] border border-gray-700 p-8 rounded-lg w-[350px] text-center">
                <h1 className="text-white text-4xl font-cursive mb-4">Instagram</h1>
                {error && <p className="text-red-500">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username or Email"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Log in
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="border-b border-gray-700 flex-grow"></div>
                    <span className="text-gray-400 mx-3">OR</span>
                    <div className="border-b border-gray-700 flex-grow"></div>
                </div>

                <div className="text-blue-500 font-semibold cursor-pointer flex justify-center items-center gap-2">
                    <span className="text-lg">🔵</span> Log in with Facebook
                </div>

                <div className="mt-2">
                    <span className="text-gray-400 text-sm cursor-pointer hover:underline">Forgot password?</span>
                </div>
            </div>

            <div className="mt-4 text-center bg-[#000] border border-gray-700 p-4 rounded-lg w-[350px]">
                <p className="text-white">
                    Don't have an account? <span className="text-blue-500 cursor-pointer"><NavLink to='/register'>Sign up</NavLink></span>
                </p>
            </div>
        </div>
    );
}
