import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ isLogged, children }) => {
    if (localStorage.getItem('isLogged'))
        isLogged = true;

    return isLogged ? children : <Navigate to="/login" replace />;
};

export default RutaProtegida;