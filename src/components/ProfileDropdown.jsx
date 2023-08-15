'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProfileDropdown = () => {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div className='relative'>
            <button onClick={() => setOpenDropdown(!openDropdown)} className="p-2 flex items-center text-sm font-medium text-gray-900 rounded-lg hover:text-blue-600 md:mr-0 border border-gray-300" type="button">
                <span className="sr-only">Open user menu</span>
                <Image className="mr-2 rounded-full" width={32} height={32} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                Rana Ahmed
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div className={`${openDropdown ? "block" : "hidden"} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-medium ">Rana Ahmed</div>
                    <div className="truncate">rana48ahmed@gmail.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Connections</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileDropdown;