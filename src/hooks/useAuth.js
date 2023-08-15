import AuthContext from '@/contexts/AuthContext';
import React, { useContext } from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;