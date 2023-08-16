'use client';

import createJWT from '@/Utilities/createJWT';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { startTransition, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const { createUser, updateUserProfile } = useAuth()
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0];

        const formData = new FormData()
        formData.append('file', photo)
        formData.append('upload_preset', 'my-uploads')

        const toastId = toast.loading("Loading...");
        try {
            await createUser(email, password);
            await createJWT({ email });

            const res = await fetch('https://api.cloudinary.com/v1_1/dytlsrnu3/image/upload', {
                method: 'POST',
                body: formData
            })
            const data = await res.json()

            await updateUserProfile(name, data.secure_url)

            startTransition(() => {
                refresh();
                replace(from);
                toast.dismiss(toastId);
                toast.success("User signup successful!");
            });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");
        }
    }

    return (
        <div className='container mx-auto px-4 py-20 flex justify-center'>
            <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg">
                <div className='relative overflow-hidden px-7 md:px-10 py-10 rounded-xl bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a]'>
                    {/* <div className='absolute -top-28 -left-16 w-[500px] h-[200px] bg-indigo-500 -rotate-6'></div> */}

                    <Image src="/logo.png" width="60" height="60" alt='Logo image' />
                    <h2 className='relative font-bold text-3xl mb-8 mt-2 font-bubblegum'>Signup Account</h2>
                    <form onSubmit={handleSignup}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
                            <input type="text" id="name" className="bg-[#de8adf48] text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-800 focus:outline-none focus:ring-1 ring-gray-400 ring-opacity-50" placeholder="Enter full name" required />
                        </div>
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
                        <div className="mb-6">
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile photo</label>

                            <input class="relative m-0 block w-full min-w-0 flex-auto bg-[#de8adf48] cursor-pointer
                            bg-clip-padding px-3 text-sm font-normal rounded-lg transition duration-300 ease-in-out file:-mx-3 file:overflow-hidden file:rounded-l-lg file:border-none file:bg-indigo-500 file:px-3 file:py-2.5 file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] file:cursor-pointer hover:file:bg-indigo-600 file:text-sm" id="photo" type="file" />
                        </div>
                        {
                            error && <p className='-mt-2 mb-6 flex gap-1 items-center text-sm font-medium text-rose-500'><FaExclamationCircle /> {error}</p>
                        }
                        <div className="flex items-center h-5 mb-6">
                            <input id="remember" type="checkbox" defaultChecked={true} className="accent-indigo-500 bg-[#de8adf48] w-4 h-4 border border-gray-300 rounded bg- focus:ring-3 focus:ring-blue-300" required />
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms & Conditions</label>
                        </div>

                        <div className='text-center'>
                            <button type="submit" className="bg-indigo-500 font-medium text-white rounded-full px-5 py-2">Signup</button>
                        </div>
                    </form>
                    <p className='text-center mt-4'>
                        <Link href='/login' className='text-sm font-medium'>Already have an account? <span className='text-violet-500 hover:underline hover:cursor-pointer'>Login</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;