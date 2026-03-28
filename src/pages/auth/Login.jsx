import React from 'react'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6C47FF] to-[#FF6B9D] p-4">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-md">

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    Welcome back
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                    Login to continue to JobBoard
                </p>

                {/* Toggle Buttons */}
                <div className="flex mt-6 bg-gray-100 rounded-full p-1">
                    <button className="flex-1 py-2 rounded-full text-white bg-gradient-to-r from-[#6C47FF] to-[#FF6B9D] text-sm font-medium">
                        Job seeker
                    </button>
                    <button className="flex-1 py-2 rounded-full text-gray-600 text-sm font-medium">
                        Recruiter
                    </button>
                </div>

                {/* Form */}
                <div className="mt-6 space-y-4">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="rutvik@gmail.com"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B9D]"
                        />
                    </div>

                    {/* Button */}
                    <button className="w-full py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                        Login
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account?{" "}
                    <span className="text-indigo-600 cursor-pointer">
                        <Link to={'/register'}>Register</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login
