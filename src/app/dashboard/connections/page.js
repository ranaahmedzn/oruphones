import Image from 'next/image';
import React from 'react';

const ConnectionsPage = () => {
    return (
        <div className='mt-4'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[76px]'>
                <p className="font-semibold">My Connections</p>
            </div>
            
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-20'>
                <div className='flex justify-between items-start py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div >
                        <h3 className='text-xl'>Torikul Islam</h3>
                        <p className='pt-2 pb-8 text-gray-600'>MERN Stack Developer <br />
                        @Sheikhs Tech Ltd.</p>
                        <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Remove Connection</button>
                    </div>
                    <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                </div>

                <div className='flex justify-between items-start py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div >
                        <h3 className='text-xl'>Yeamin Hossain</h3>
                        <p className='pt-2 pb-8 text-gray-600'> Product Manager<br />
                        @Sheikhs Tech Ltd.</p>
                        <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Remove Connection</button>
                    </div>
                    <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                </div>
            </div>
            
            <h3 className="text-3xl font-semibold">People you can also connect</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                <div className='flex justify-between items-start py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div >
                        <h3 className='text-xl'>Torikul Islam</h3>
                        <p className='pt-2 pb-8 text-gray-600'>MERN Stack Developer <br />
                        @Sheikhs Tech Ltd.</p>
                        <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Connect</button>
                    </div>
                    <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                </div>

                <div className='flex justify-between items-start py-4 px-3 shadow rounded-lg border border-gray-300 border-opacity-50'>
                    <div >
                        <h3 className='text-xl'>Yeamin Hossain</h3>
                        <p className='pt-2 pb-8 text-gray-600'> Product Manager<br />
                        @Sheikhs Tech Ltd.</p>
                        <button className='py-1 px-5 bg-[#BAB6EB] rounded-full'>Connect</button>
                    </div>
                    <Image className="mr-2 rounded-full" width={120} height={120} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                </div>
            </div>
        </div>
    );
};

export default ConnectionsPage;