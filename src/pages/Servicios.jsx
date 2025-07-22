import { Outlet, Link } from 'react-router-dom';

function Servicios() {
  return (
    <div>
      <h2>Panel de Servicios</h2>
      <nav>
        <Link to="web">Web</Link>&emsp;
        <Link to="mobile">Mobile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Servicios;