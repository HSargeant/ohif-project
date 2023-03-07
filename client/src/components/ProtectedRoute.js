import { useNavigate,useOutletContext, Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const navigate=useNavigate()
  const {user,setUser} = useOutletContext()
  return user ? children : navigate("/")
};
export default ProtectedRoute