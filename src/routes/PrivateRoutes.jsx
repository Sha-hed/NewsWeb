import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation } from 'react-router-dom';
  

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location);

   const {user, loading } =  useContext(AuthContext);
    
   if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
   }
   if(user){
    return children
   }
   return  <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;