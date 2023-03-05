import { useEffect,useState} from 'react';
import { useNavigate,useOutletContext, Navigate } from 'react-router-dom';
import { API_BASE } from '../constants';

const ProtectedRoute = ({children}) => {
<<<<<<< HEAD
  const navigate=useNavigate()
=======
  console.log(children,"Adsfasdfasdf")
  const navigate = useNavigate();
>>>>>>> parent of 469c031 (protected route)
  const {user,setUser} = useOutletContext()
  return user ? children : navigate("/")
};

export default ProtectedRoute