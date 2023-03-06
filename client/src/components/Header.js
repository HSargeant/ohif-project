import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav id="topsec">
      {/* <img src="images/exaLog.png" className="logo"> */}
      <ul id="sidemenu" >
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/exams">All Exams</Link>
        </li>
        <li>
          <Link to="exams/new">Add New Exam</Link>
        </li>
        <li>
          <Link to="/register">Create an Account</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
