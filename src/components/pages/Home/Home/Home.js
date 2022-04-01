import { Alert } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import HomeProducts from '../Products/HomeProducts';


const Home = () => {
    const { users,setIsLoading, isLoading } = useAuth();
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;