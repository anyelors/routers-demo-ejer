import { Navigate } from 'react-router-dom';

export default function RutaPrivada({ children }) {
  const rol = localStorage.getItem('rol');
  return rol === 'Administrador' ? children : <Navigate to="/dashboard" replace = {true}/>;
}
