import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'; // Import Firebase auth functions
import { app } from './config/logion'; // Import Firebase app instance
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Email() {
    const auth = getAuth(app);  // Initialize auth
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function clickme() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User registered successfully
                console.log('User Registered:', userCredential);
            })
            .catch((error) => {
                // Handle Errors
                console.error('Error during registration:', error);
            });
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 h-screen flex items-center justify-center">
            <div className="bg-black shadow-md rounded-lg overflow-hidden flex w-3/4 max-w-4xl">
                {/* Right Section (Login Form) */}
                <div className="p-10">
                    <h2 className="text-2xl font-bold text-blue-600">Login</h2>
                    <p className="mt-2 text-white">
                        Welcome! Login to get amazing discounts and offers only for you.
                    </p>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-white">User Name</label>
                            <input
                                onChange={handleEmailChange}
                                value={email}
                                type="text"
                                id="username"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <input
                                onChange={handlePasswordChange}
                                value={password}
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <button type="button" onClick={clickme} className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-500">
                            LOGIN
                        </button>
                    </form>
                    <div className="mt-4 flex justify-between text-sm">
                        <p>
                            New User? <Link to="#" className="text-blue-600 hover:underline">Signup</Link>
                        </p>
                        <Link to="#" className="text-blue-600 hover:underline">Forgot your password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Email;
