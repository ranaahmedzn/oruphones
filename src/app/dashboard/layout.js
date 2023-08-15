import ProfileDropdown from '@/components/profileDropdown';
import { Suspense } from 'react';
import { BiBell } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';

const layout = ({ children }) => {
    return (
        <div className="container mx-auto">

            <div className="flex pt-4">
                <aside className='sticky top-0 w-72 h-[calc(100vh-16px)] px-4'>
                    <h3 className="text-xl w-fit mx-auto mb-8 font-medium py-2 px-8 border border-gray-300 rounded-lg">Dashboard</h3>

                    <ul>
                        <li className="w-fit flex gap-4 items-center py-2"> 
                            <FaAngleRight />
                            <span className='py-2 px-5 border border-gray-300 rounded-lg'>My Profile</span>
                        </li>
                        <li className="w-fit flex gap-4 items-center py2">
                            <FaAngleRight />
                            <span className='py-2 px-5 border border-transparent hover:border-gray-300 rounded-lg'>My Connections</span>
                        </li>
                    </ul>
                </aside>
                <div className='w-full'>
                    <nav className='flex items-center justify-end border-b pb-4 border-gray-300'>
                        <div className='flex gap-4 items-center'>
                            <BiBell size={24} />
                            <Suspense>
                                <ProfileDropdown />
                            </Suspense>
                        </div>
                    </nav>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;