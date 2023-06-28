import logo from "../../assets/baby-journal-logo.png";
import "../navbar/navbar.styles.scss";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="top-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="top-right">
        <ul>
          <li>Psalm</li>
          <li>Contact</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
