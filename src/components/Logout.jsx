'use client';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

const Logout = () => {
    const router = useRouter()
    const {signOutUser} = useAuth()

    const handleLogout = () => {
        signOutUser().then(() => {
            toast.success("Logout successful!");
            router.push('/')
        })
        .catch(error => console.log(error?.message))
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;