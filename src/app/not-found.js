import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="text-center">
                <Image
                    src="/not-found.png"
                    alt="not-found"
                    width={500}
                    height={200}
                    className="max-w-[600px] h-auto mx-auto"
                    sizes="100vw"
                />
                <Link href="/" className="-mt-5 mb-2 inline-block">
                    <button className="bg-indigo-500 font-medium text-white rounded-full px-5 py-2 flex items-center gap-2">
                        <FaHome />
                        <span>Back to Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;