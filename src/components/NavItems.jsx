'use client';

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';

const NavItems = () => {
    const {user} = useAuth()

    return (
        <ul className='flex gap-10'>
            {
                user ? <li><Link href="/dashboard/profile" className='text-xl font-medium py-2 px-8 border border-gray-300 rounded-lg'>Dashboard</Link></li> :
                <><li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Signup</Link></li></>
            }
        </ul>
    );
};

export default NavItems;