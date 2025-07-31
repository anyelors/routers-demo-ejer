import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    
    // Obtener datos del usuario desde localStorage
    const usuario = localStorage.getItem('usuario') || 'Invitado';
    const rol = localStorage.getItem('rol') || 'Sin rol';

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('rol');
        localStorage.removeItem('isLogged');
        
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>
                Bienvenido Usuario: <b>{usuario}</b>  Rol: <b>{rol}</b>
            </h2>
            <button 
                onClick={handleLogout}
                className='cls-btn-panel'
            >
                Cerrar Sesión
            </button>
        </div>
    );
}
