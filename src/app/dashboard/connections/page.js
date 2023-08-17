import React from 'react';
import Connections from './Connections';

export const metadata = {
    title: "Connections - Oru Phones",
};

const ConnectionsPage = () => {
    return (
        <div className='mt-4 px-4 md:px-0'>
            <div className='bg-[#1E2875] text-white p-3 rounded-lg h-[76px]'>
                <p className="font-semibold">My Connections</p>
            </div>

            <Connections />
        </div>
    );
};

export default ConnectionsPage;