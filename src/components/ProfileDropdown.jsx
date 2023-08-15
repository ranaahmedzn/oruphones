'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ProfileDropdown = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div className='relative'>
            {/* for large devices */}
            <button onClick={() => setOpenDropdown(!openDropdown)} className="hidden p-2 md:flex gap-1 items-center text-sm font-medium text-gray-900 rounded-lg hover:text-blue-600 md:mr-0 border border-gray-300" type="button">
                <Image className="mr-2 rounded-lg" width={42} height={42} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                <div className='mr-4 text-left'>
                    <p className='text-sm'>Welcome,</p>
                    <p className='text-lg font-medium leading-5'>Rana Ahmed</p>
                </div>
                {
                    openDropdown ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />
                }
            </button>

            {/* for smaller devices */}
            <Image onClick={() => setOpenDropdown(!openDropdown)} className="md:hidden rounded-lg" width={33} height={33} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />

            <div className={`${openDropdown ? "block" : "hidden"} z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-48`}>
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-medium">Rana Ahmed</div>
                    <div className="truncate">rana48ahmed@gmail.com</div>
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
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;