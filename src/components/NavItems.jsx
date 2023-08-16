'use client';

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import Logout from './Logout';

const NavItems = () => {
    const {user} = useAuth()

    return (
        <ul className='flex gap-5 md:gap-8'>
            {
                user ? <>
                <li><Logout /></li>
                <li><Link href="/dashboard/profile" className='text-xl font-medium py-1 md:py-2 px-4 md:px-8 border border-gray-300 rounded-lg'>Dashboard</Link></li></> :
                <><li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Signup</Link></li></>
            }
        </ul>
    );
};

export default NavItems;