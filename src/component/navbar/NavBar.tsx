import { Link, NavLink } from "react-router-dom";
import openNotification from "../../utils/notification";

export const NavBar = () => {
  const handleLogout = () => {
    openNotification("Logout Successful");
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/">
            <h1 className="logo">Contact Manager</h1>
          </Link>
        </div>
        <div className="nav-items">
          <NavLink to={"/contact/add"} className="addContact-btn">
           
            Add Contact
          </NavLink>
          <NavLink onClick={handleLogout} className="logout" to="/login">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};
