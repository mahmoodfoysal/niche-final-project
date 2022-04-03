import React from 'react';
import useAuth from '../../../hooks/useAuth';
import OtherFacility from '../../OtherFacility/OtherFacility';
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
            <OtherFacility></OtherFacility>
        </div>
    );
};

export default Home;