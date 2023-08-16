'use client';

import useAuth from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import React, { startTransition } from 'react';
import { toast } from 'react-hot-toast';

const Logout = () => {
    const {signOutUser} = useAuth()
    const { replace, refresh } = useRouter();
    const path = usePathname();

    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await signOutUser();
            const res = await fetch("/api/auth/logout", {
              method: "POST",
            });
            await res.json();

            if (path.includes("/dashboard")) {
              replace(`/login?redirectUrl=${path}`);
            }
            toast.dismiss(toastId);
            toast.success("Logout successful!");
            startTransition(() => {
              refresh();
            });
          } catch (error) {
            toast.error("An error has been occurred while logout!");
            toast.dismiss(toastId);
          }
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;