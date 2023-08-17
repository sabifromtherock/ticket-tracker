import { Link } from "react-router-dom";
import "./Nav.scss";
import { useState } from "react";

const Nav = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  let path: string = "/tickets";
  let label: string = "Tickets";

  if (isClicked) {
    path = "/";
    label = "Home";
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="nav">
      <h1 className="nav__title">Ticket Tracker</h1>
      <Link className="nav__link" to={path} onClick={handleClick}>
        {label}
      </Link>
    </div>
  );
};

export default Nav;
