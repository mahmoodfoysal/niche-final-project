import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {users, isLoading} = useAuth();
    if(isLoading) {
      return <div className="d-flex justify-content-center mt-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    }
    return (
<Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;