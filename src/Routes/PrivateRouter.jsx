import React from 'react';
import { Navigate } from 'react-router-dom';
import { useData } from '../Hooks/useData';

const PrivateRouter = ({ children }) => {
    const { isUser } = useData();
    if (isUser) return children;
    return <Navigate to="/login" />
}

export default PrivateRouter
