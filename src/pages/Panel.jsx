import { Outlet, Link, useNavigate } from 'react-router-dom';

function Panel() {
  const navigate = useNavigate();
  
  // Obtener datos del usuario desde localStorage con valores por defecto
  const usuario = localStorage.getItem('usuario') || 'Invitado';
  const rol = localStorage.getItem('rol') || 'Sin rol';

  // Verificar si el usuario está autenticado
  if (!localStorage.getItem('usuario')) {
    navigate('/', { replace: true });
    return null;
  }

  const handleLogout = () => {
    // Limpiar solo las claves relacionadas con la sesión
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');
    localStorage.removeItem('isLogged');
     
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>
        Panel de Administrador: <b>{usuario}</b>  Rol: <b>{rol}</b>
      </h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link
          to="perfil"
          className='cls-link'
        >
          Perfil
        </Link>
        <Link
          to="configuracion"
          className='cls-link'
        >
          Configuración
        </Link>
      </nav>
      <Outlet />
      <button
        onClick={handleLogout}
        className='cls-btn-panel'
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Panel;