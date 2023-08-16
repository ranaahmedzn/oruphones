'use client';

import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const { user } = useAuth()
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/user?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setUserData(data)
                })
        }
    }, [user?.email]);

    const { name, email, phoneNumber, profilePhoto, about, skills, professionalDetails, certifications, experiences, educations } = userData;

    return (
        <div className='pt-4 pb-10 px-4 md:px-0'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[76px] md:h-[170px]'>
                <p className="font-semibold">My Profile</p>
            </div>

            <div className="-mt-8 md:-mt-16 mx-6 md:mx-10 p-5 md:p-8 bg-white border border-gray-300 border-opacity-50 shadow-xl rounded-lg flex flex-col md:flex-row gap-16">
                <div className='w-full md:w-1/2 space-y-5 md:space-y-8'>
                    <div className='flex items-center justify-between'>
                        {
                            profilePhoto && <Image className="mr-2 rounded-full" width={88} height={88} src={profilePhoto} property='true' alt="User photo" />
                        }
                        <button className='py-1 px-5 text-md bg-[#F0EFFA] rounded-full'>Upload Photo</button>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Your Name</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg">{name}</p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Email</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg">{email}</p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>

                        <div className='flex gap-5 items-end justify-between'>
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Phone Number</p>
                                <p className="text-gray-900 text-md font-medium rounded-lg">{phoneNumber}</p>
                            </div>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p className="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                About <span className='text-[#413B89]'>{name}</span>
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        <p>{about}</p>
                    </div>

                    <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                        <div className='flex gap-5 items-end justify-between'>
                            <p className="text-gray-900 text-md rounded-lg text-xl font-semibold">
                                Skills
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        {
                            skills?.map((skill, index) => <p
                                key={index}
                                className='text-gray-900 text-md font-medium'>{skill}</p>)
                        }
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
                        <div className='flex gap-6'>
                            <div>
                                <p>{professionalDetails?.title}</p>
                                <p>{professionalDetails?.company}</p>
                                <p>{professionalDetails?.location}</p>
                                <p>{professionalDetails?.website}</p>
                            </div>
                            <div className='flex w-fit mx-auto items-center'>
                                <div className='mx-auto'>
                                    <Image width={38} height={38} src="/star1.png" alt="User photo" />
                                    <Image className="ml-2 -mt-5" width={32} height={32} src="/star2.png" alt="User photo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Certifications
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        {
                            certifications?.length > 0 ? certifications?.map((certificate, index) => <div
                                key={index} className='py-4 px-6 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-full mb-5'>
                                <div className='flex items-center gap-5'>
                                    <Image className="mr-2" width={30} height={30} src="/star3.png" alt="Star vector" />
                                    <div className="space-y-1">
                                        <p className="text-lg text-gray-500 font-medium">{certificate?.title}</p>
                                        <p className="text-base text-gray-500 font-medium">{certificate?.authority}</p>
                                    </div>
                                </div>
                            </div>) : <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                                <p>Add your certifications</p>
                            </div>
                        }

                    </div>
                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Experiences
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        {
                            experiences?.length > 0 ? experiences?.map((experience, index) => <div
                                key={index} className='p-4 space-y-2 border border-gray-300 border-opacity-50 shadow rounded-lg mb-5'>
                                <div className='flex justify-between'>
                                    <p>{experience?.experienceYear} Years <span>({experience?.startDate}-{experience?.endDate})</span></p>
                                    <p>Full-Time</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className="text-base text-gray-500 font-medium">{experience?.company}</p>
                                    <p className="text-base text-gray-500 font-medium">--{experience?.title}</p>
                                </div>
                            </div>) : <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                                <p>Add your experiences</p>
                            </div>
                        }
                    </div>

                    <div>
                        <div className='flex gap-5 mb-3 items-end justify-between'>
                            <p className="text-gray-900 text-lg font-semibold">
                                Educations
                            </p>
                            <button className='py-1 px-5 text-sm bg-[#F0EFFA] rounded-full'>Edit</button>
                        </div>
                        {
                            educations?.length > 0 ? educations?.map((education, index) => <div
                                key={index} className='p-4 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                                <p className="text-md text-xl text-[#413B89] font-semibold">
                                    {education?.degree}
                                </p>
                                <div className='text-md font-semibold flex justify-between mb-5'>
                                    <p>{education?.school}</p>
                                    <p>({education?.startDate}-{education?.endDate})</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                            </div>) : <div className='p-4 space-y-5 border border-gray-300 border-opacity-50 shadow rounded-lg'>
                                <p>Add you educations</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;