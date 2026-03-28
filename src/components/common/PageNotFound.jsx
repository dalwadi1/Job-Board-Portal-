import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-indigo-600">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
