import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

PrivateRoute.propTypes = {
    
};

function PrivateRoute({children}) {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg mt-[100px] flex justify-center max-w-7xl mx-auto "></span>;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
}

PrivateRoute.propTypes = {
   children:PropTypes.node,
}

export default PrivateRoute;