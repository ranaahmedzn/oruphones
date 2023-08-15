import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='pt-4 pb-10 px-4 md:px-0'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[76px] md:h-[170px]'>
                <p className="font-semibold">My Profile</p>
            </div>

            <div className="-mt-8 md:-mt-16 mx-6 md:mx-10 p-5 md:p-8 bg-white border border-gray-300 border-opacity-50 shadow-xl rounded-lg flex flex-col md:flex-row gap-16">
                <div className='w-full md:w-1/2 space-y-5 md:space-y-8'>
                    <div className='flex items-center justify-between'>
                        <Image className="mr-2 rounded-full" width={88} height={88} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                        <button className='py-1 px-5 text-md bg-[#F0EFFA] rounded-full'>Upload Photo</button>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Your Name</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg"> Rana Ahmed </p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Email</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg">rana48ahmed@gmail.com</p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Phone Number</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg">+8801781940069</p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p className="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                About <span className='text-[#413B89]'>Rana</span>
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur. Leo diam cras neque mauris</p>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p className="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Skills
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p className='text-gray-900 text-md font-medium'>JavaScript</p>
                        <p className='text-gray-900 text-md font-medium'>React</p>
                    </div>
                </div>

                <div className='w-full md:w-1/2 space-y-5 md:space-y-8'>
                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Professional Details
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Certifications
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>

                            <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Experiences
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>

                            <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Educations
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                            <p className="text-md text-xl text-[#413B89] font-semibold">
                                Sirajganj Govt. College
                            </p>
                            <div className='text-md font-semibold flex justify-between'>
                                <p>Economics</p>
                                <p>2023 - 2027</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;