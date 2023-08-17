import DashboardDrawer from '@/components/DashboardDrawer';
import Logout from '@/components/Logout';
import ProfileDropdown from '@/components/profileDropdown';
import Link from 'next/link';
import { BiBell } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';

const layout = ({ children }) => {
    return (
        <div className="container mx-auto">

            <div className="flex">
                {/* sidebar for large devices */}
                <aside className='hidden md:block sticky top-0 w-72 h-[calc(100vh-16px)] px-4 pt-4'>
                    <h3 className="text-xl w-fit mx-auto mb-8 font-medium py-2 px-8 border border-gray-300 rounded-lg">Dashboard</h3>

                    <div className='flex flex-col h-[calc(100%-120px)] justify-between'>
                        <ul>
                            <li className="w-fit flex gap-4 items-center py-2">
                                <FaAngleRight />
                                <Link href="/dashboard/profile" className='py-2 px-5 border border-gray-300 rounded-lg'>My Profile</Link>
                            </li>
                            <li className="w-fit flex gap-4 items-center py2">
                                <FaAngleRight />
                                <Link href="/dashboard/connections" className='py-2 px-5 border border-transparent hover:border-gray-300 rounded-lg'>My Connections</Link>
                            </li>
                        </ul>
                        <Logout />
                        
                    </div>
                </aside>

                <div className='w-full pt-4'>
                    <nav className='relative w-full px-4 md:px-0 flex items-center justify-between md:justify-end border-b pb-4 border-gray-300'>
                        {/* hamburger menu for smaller devices */}
                        <DashboardDrawer />

                        <div className='flex gap-[10px] md:gap-4 items-center'>
                            <BiBell size={26} />
                            <ProfileDropdown />
                        </div>
                    </nav>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;