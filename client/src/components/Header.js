import NavBarSide from "../NavBarSide/navbarside";

const Header = () => {
  return (
    <div>
      <nav id="topsec">
        {/* <img src="images/exaLog.png" class="logo"> */}
        <ul id="sidemenu">
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/exams">All Exams</a>
          </li>
          <li>
            <a href="exams/new">Add New Exam</a>
          </li>
          <li>
            <a href="/register">Create and Account</a>
          </li>
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </nav>
      {/* <NavBarSide /> */}
    </div>
  );
};

export default Header;
