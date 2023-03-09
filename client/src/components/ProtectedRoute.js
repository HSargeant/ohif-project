import { useNavigate,useOutletContext } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  const navigate=useNavigate()
  const {user} = useOutletContext()
  return user ? children : navigate("/")
};
export default ProtectedRoute