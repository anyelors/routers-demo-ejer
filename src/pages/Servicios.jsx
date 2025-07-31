import { Outlet, Link } from 'react-router-dom';

function Servicios() {
  return (
    <div>
      <h2>Panel de Servicios</h2>
      <nav>
        <Link className='cls-link' to="web">Web</Link>&emsp;
        <Link className='cls-link' to="mobile">Mobile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Servicios;