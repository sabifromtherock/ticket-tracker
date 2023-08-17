import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  label: string;
};

const NavLink = ({ path, label }: NavLinkProps) => {
  return <Link to={path}>{label}</Link>;
};

export default NavLink;
