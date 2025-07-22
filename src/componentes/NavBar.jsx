import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <NavLink className="nav-link" activeclassname="active" to="/">Inicio</NavLink>&emsp;
        <NavLink className="nav-link" activeclassname="active" to="/servicios">Servicios</NavLink>&emsp;
        <NavLink className="nav-link" activeclassname="active" to="/login">Login</NavLink>&emsp;
        <NavLink className="nav-link" activeclassname="active" to="/dashboard">Dashboard</NavLink>&emsp;
        <NavLink className="nav-link" activeclassname="active" to="/panel">Panel</NavLink>&emsp;
      </nav>
      <hr />
    </>
  );
}

export default NavBar;
