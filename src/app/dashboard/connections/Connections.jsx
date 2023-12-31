'use client';

import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Connections = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://oruphones-server.vercel.app/users?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                })
        }
    }, [user?.email]);

    // console.log(users)

    return (
        <>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-20'>
                <div className='py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div className='flex justify-between items-start'>
                        <div >
                            <h3 className='text-xl'>Torikul Islam</h3>
                            <p className='pt-2 pb-8 text-gray-600'>MERN Stack Developer <br />
                                @Sheikhs Tech Ltd.</p>
                        </div>
                        <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                    </div>
                    <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Remove Connection</button>
                </div>
                <div className='py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div className='flex justify-between items-start'>
                        <div >
                            <h3 className='text-xl'>Yeamin Hossain</h3>
                            <p className='pt-2 pb-8 text-gray-600'>Product Manager<br />
                                @Sheikhs Tech Ltd.</p>
                        </div>
                        <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                    </div>
                    <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Remove Connection</button>
                </div>

                <div className='py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div className='flex justify-between items-start'>
                        <div >
                            <h3 className='text-xl'>Abu Hanzala</h3>
                            <p className='pt-2 pb-8 text-gray-600'>Teacher<br />
                                @Sheikhs Tech Ltd.</p>
                        </div>
                        <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                    </div>
                    <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Remove Connection</button>
                </div>
            </div>

            <h3 className="text-3xl font-semibold">People you can also connect</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-20'>
                {
                    users?.map(user => <div
                        key={user._id} className='flex justify-between items-start py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                        <div >
                            <h3 className='text-xl'>{user?.name}</h3>
                            <p className='pt-2 pb-8 text-gray-600'>{user?.professionalDetails?.title}<br /> @{user?.professionalDetails?.company}</p>
                            <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Connect</button>
                        </div>
                        <Image className="mr-2 rounded-full" width={120} height={120} src={user?.profilePhoto} alt="User photo" />
                    </div>)
                }
            </div>
        </>
    );
};

export default Connections;