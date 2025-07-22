import { Navigate } from 'react-router-dom';

const user = {
  usuario: {
    nombre: "Lupe",
    role: "Usuario"
  },
  admin: {
    nombre: "Paco",
    role: "Administrador"
  }
};

export default function Login() {
  const handleLogin = (tipo) => {
    localStorage.setItem("usuario", user[tipo].nombre);
    localStorage.setItem("rol", user[tipo].role);
    localStorage.setItem("isLogged", "true");

    tipo === 'Administrador' ? <Navigate to="/panel" replace={true} /> : <Navigate to="/dashboard" replace={true} />;
  };

  return (
    <>
      <button onClick={handleLogin("usuario")}>Iniciar Sesión User</button>
      <button onClick={handleLogin("admin")}>Iniciar Sesión Admin</button>
    </>
  );
}
