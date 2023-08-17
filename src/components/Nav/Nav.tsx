import NavLink from "../NavLink/NavLink";

const Nav = () => {
  return (
    <div className="header">
      <h1 className="header__title">Ticket Tracker</h1>
      <NavLink path={"/"} label={"Home"} />
      <NavLink path={"/tickets"} label={"Tickets"} />
    </div>
  );
};

export default Nav;
