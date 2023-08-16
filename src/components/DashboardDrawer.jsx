'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { HiOutlineMenuAlt2, HiOutlineXMark } from 'react-icons/hi';
import Logout from './Logout';

const DashboardDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div className='flex gap-3 md:hidden'>
            <HiOutlineMenuAlt2 size={26} onClick={() => setOpenDrawer(!openDrawer)} />
            <Image src="/logo.png" width="70" height="60" alt='Logo image' ></Image>

            {/* drawer for smaller devices */}
            <aside className={`absolute ${openDrawer ? "top-[50px] left-0" : "top-[50px] -left-full"} w-full h-[calc(100vh-65px)] bg-[#1E2875] text-white transition-all duration-500`}>
                <div className='flex flex-col h-[calc(100%-120px)] justify-between pl-4 pt-10'>
                    <ul>
                        <li onClick={() => setOpenDrawer(!openDrawer)} className="w-fit flex gap-4 items-center">
                            <FaAngleRight />
                            <Link href="/dashboard/profile" className='py-2'>My Profile</Link>
                        </li>
                        <li onClick={() => setOpenDrawer(!openDrawer)} className="w-fit flex gap-4 items-center">
                            <FaAngleRight />
                            <Link href="/dashboard/connections" className='py-2'>My Connections</Link>
                        </li>
                        <li onClick={() => setOpenDrawer(!openDrawer)} className="w-fit flex gap-4 items-center">
                            <FaAngleRight />
                            <Logout />
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default DashboardDrawer;