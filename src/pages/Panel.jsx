import { Outlet, Link } from 'react-router-dom';

function Panel() {
  return (
    <div>
      <h2>Panel de Usuario: <b>{localStorage.getItem('usuario')}</b></h2>
      <nav>
        <Link to="perfil">Perfil</Link>&emsp;
        <Link to="configuracion">Configuración</Link>
      </nav>

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
}

export default Panel;
