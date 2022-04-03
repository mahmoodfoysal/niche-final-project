import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ProductsRatings from '../../ProductRating/ProductsRatings';

import Banner from '../Banner/Banner';
import HomeProducts from '../Products/HomeProducts';


const Home = () => {
    const { users,setIsLoading, isLoading } = useAuth();
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <ProductsRatings></ProductsRatings>
        </div>
    );
};

export default Home;