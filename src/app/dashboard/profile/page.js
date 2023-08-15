import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    return (
        <div className='py-4'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[170px]'>
                <p className="font-semibold">My Profile</p>
            </div>

            <div className="-mt-16 mx-10 p-8 bg-white border border-gray-300 border-opacity-50 shadow-xl rounded-lg flex gap-16">
                <div className='w-1/2 space-y-8'>
                    <div className='flex items-center justify-between'>
                        <Image className="mr-2 rounded-full" width={88} height={88} src="https://i.ibb.co/8gFjx0j/admin.png" alt="User photo" />
                        <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Upload Photo</button>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                                <input type="text" id="name" class="text-gray-900 text-md rounded-lg focus:outline-none" value="Rana Ahmed" required />
                            </div>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" id="email" class="text-gray-900 text-md rounded-lg focus:outline-none" value="rana48ahmed@gmail.com" required />
                            </div>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                <input type="text" id="number" class="text-gray-900 text-md rounded-lg focus:outline-none" value="01781940069" required />
                            </div>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                About <span className='text-[#413B89]'>Rana</span>
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Skills
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p className='text-gray-900 text-md rounded-lg'>JavaScript</p>
                        <p className='text-gray-900 text-md rounded-lg'>React</p>
                    </div>
                </div>

                <div className='w-1/2 space-y-8'>
                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Skills
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div>
                        <div className='flex gap-5 mb-4 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Certifications
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>

                            <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5 mb-4 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Experiences
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>

                            <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-5 mb-4 items-end justify-between'>
                            <p class="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Educations
                            </p>
                            <button className='py-1 px-5 bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                            <p class="text-md text-xl text-[#413B89] font-semibold">
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