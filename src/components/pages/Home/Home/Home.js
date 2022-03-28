import { Alert } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    const {users} = useAuth();
    return (
        <div>
                        {users.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
            <Services></Services>
        </div>
    );
};

export default Home;