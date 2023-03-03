import { useEffect,useState} from 'react';
import { useNavigate,useOutletContext, Navigate } from 'react-router-dom';
import { API_BASE } from '../constants';

const ProtectedRoute = ({children}) => {
  console.log(children,"Adsfasdfasdf")
  const navigate = useNavigate();
  const {user,setUser} = useOutletContext()
  return user ? children : <Navigate to={"/"}/>
};

export default ProtectedRoute