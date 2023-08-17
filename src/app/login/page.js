import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginForm from './LoginForm';

export const metadata = {
    title: "Login - Oru Phones",
};

const LoginPage = () => {

    return (
        <div className='container mx-auto px-4 py-20 flex justify-center'>
            <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg">
                <div className='relative overflow-hidden px-7 md:px-10 py-10 rounded-xl bg-gradient-to-r from-[#ff8e882a] to-[#de8adf3a]'>
                    {/* <div className='absolute -top-28 -left-16 w-[500px] h-[200px] bg-indigo-500 -rotate-6'></div> */}

                    <Image src="/logo.png" width="60" height="60" alt='Logo image' />
                    <h2 className='relative font-bold text-3xl mb-8 mt-2 font-bubblegum'>Login Account</h2>
                    <LoginForm />
                    <p className='text-center mt-4'>
                        <Link href='/signup' className='text-sm font-medium'>Don&apos;t have an account? <span className='text-violet-500 hover:underline hover:cursor-pointer'>Signup</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;