import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__title">Ticket Tracker</h1>
      <div className="nav__link-container">
        <Link className="nav__link" to={"/"}>
          Home
        </Link>
        <Link className="nav__link" to={"/tickets"}>
          Tickets
        </Link>
      </div>
    </div>
  );
};

export default Nav;
