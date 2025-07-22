import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleSesion = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div>
            <h2>Bienvenido Usuario: <b>{localStorage.getItem('usuario')}</b> Rol: <b>{localStorage.getItem('rol')}</b></h2>
            <button onClick={handleSesion}>Cerrar sesión</button>
        </div>
    );
}
