import logo from "../../assets/logo/InStock-Logo.svg"
import { Link, NavLink } from "react-router-dom";
import "./Header.scss"


export default function Header() {
  return (

    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__logo"><img src={logo} alt="company logo"/></Link>

        <nav className="header__links">
          <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "header__link" : isActive ? "header__link header__link--active" : "header__link"}>
            <h3>Warehouses</h3>
          </NavLink>

          <NavLink to="/inventories" className={({ isActive, isPending }) =>
            isPending ? "header__link" : isActive ? "header__link header__link--active" : "header__link"}>
            <h3>Inventory</h3>
          </NavLink>
        </nav>
      </div>
    </header>

  );
}