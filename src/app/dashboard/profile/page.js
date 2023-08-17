import React from 'react';
import Profile from './Profile';

export const metadata = {
    title: "Profile - Oru Phones",
};

const ProfilePage = () => {
    return (
        <div className='pt-4 pb-10 px-4 md:px-0'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[76px] md:h-[170px]'>
                <p className="font-semibold">My Profile</p>
            </div>

            <Profile />
        </div>
    );
};

export default ProfilePage;