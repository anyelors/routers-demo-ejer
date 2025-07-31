import { Navigate, useNavigate } from 'react-router-dom';

const usuarios = {
  usuario1: {
    id: 1,
    nombre: "Lupe",
    rol: "Administrador"
  },
  usuario2: {
    id: 2,
    nombre: "Paco",
    rol: "usuario"
  }
};

export default function Login() {
  const navigate = useNavigate();

  // Verificar si el usuario ya está logueado al cargar el componente
  if (localStorage.getItem("isLogged") === "true") { 
      if (localStorage.getItem("rol") === "Administrador") {
        return <Navigate to="/panel" replace />;
      } else {
        return <Navigate to="/dashboard" replace />;
      }
  }

  const handleLogin = (tipo) => {
    localStorage.setItem("usuario", usuarios[tipo].nombre);
    localStorage.setItem("rol", usuarios[tipo].rol);
    localStorage.setItem("isLogged", "true");
    
    // Redirigir inmediatamente si es administrador
    if (usuarios[tipo].rol === "Administrador") {
      navigate('/panel', { replace: true });
    } else {
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <>
      <button onClick={() => handleLogin("usuario1")} className='cls-btn'>Iniciar Sesión Administrador</button>&emsp;
      <button onClick={() => handleLogin("usuario2")} className='cls-btn'>Iniciar Sesión Usuario</button>&emsp;
    </>
  );
}