'use client';

import createJWT from '@/Utilities/createJWT';
import useAuth from '@/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { startTransition, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const { signInUser } = useAuth()
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const toastId = toast.loading("Loading...");
        try {
            await signInUser(email, password);
            await createJWT({ email });
            startTransition(() => {
                refresh();
                replace(from);
                toast.dismiss(toastId);
                toast.success("User login successful!");
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-[#de8adf48] text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-800 focus:outline-none focus:ring-1 ring-gray-400 ring-opacity-50" placeholder="Enter email" required />
            </div>
            <div className="mb-4 relative">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type={show ? "text" : "password"} id="password" className="bg-[#de8adf48] text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-800 focus:outline-none focus:ring-1 ring-gray-400 ring-opacity-50" placeholder='Enter password' required />
                {
                    show ? <FaEyeSlash onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                        : <FaEye onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer' />
                }
            </div>
            {
                error && <p className='-mt-2 mb-6 flex gap-1 items-center text-sm font-medium text-rose-500'><FaExclamationCircle /> {error}</p>
            }
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" defaultChecked={true} className="accent-indigo-500 bg-[#de8adf48] w-4 h-4 border border-gray-300 rounded bg- focus:ring-3 focus:ring-blue-300" required />
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>

                <span className='ml-2 text-sm font-medium text-indigo-500 hover:underline hover:cursor-pointer'>Forgot password?</span>
            </div>

            <div className='text-center'>
                <button type="submit" className="bg-indigo-500 font-medium text-white rounded-full px-5 py-2">Login</button>
            </div>
        </form>
    );
};

export default LoginForm;