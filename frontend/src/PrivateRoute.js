import React from 'react';
import { Route, useNavigate,BrowserRouter as Router, RouterProvider,Routes,Link } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const navigate = useNavigate(); // useNavigate is called within a functional component

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navigate('/login') 
        )
      }
    />
  );
};

export default PrivateRoute;
