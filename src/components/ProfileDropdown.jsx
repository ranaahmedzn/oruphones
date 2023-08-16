'use client';

import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Logout from './Logout';

const ProfileDropdown = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    const { user } = useAuth()

    return (
        <div className='relative'>
            {/* for large devices */}
            <button onClick={() => setOpenDropdown(!openDropdown)} className="hidden p-2 md:flex gap-1 items-center text-sm font-medium text-gray-900 rounded-lg hover:text-blue-600 md:mr-0 border border-gray-300" type="button">
                {
                    user?.photoURL && <Image className="mr-2 rounded-lg" width={42} height={42} src={user.photoURL} alt="User photo" />
                }
                <div className='mr-4 text-left'>
                    <p className='text-sm'>Welcome,</p>
                    <p className='text-lg font-medium leading-5'>{user && user?.displayName}</p>
                </div>
                {
                    openDropdown ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />
                }
            </button>

            {/* for smaller devices */}
            {
                user?.photoURL && <Image onClick={() => setOpenDropdown(!openDropdown)} className="md:hidden rounded-lg" width={33} height={33} src={user?.photoURL} alt="User photo" />
            }
            <div className={`${openDropdown ? "block" : "hidden"} z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-48`}>
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-medium">{user && user?.displayName}</div>
                    <div className="truncate">{user && user?.email}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/connections" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Connections</Link>
                    </li>
                </ul>
                <div className="py-2">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <Logout />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;