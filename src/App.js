import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicios from './pages/Servicios';
import Web from './pages/Web';
import Mobile from './pages/Mobile';
import Error404 from './pages/Error404';
import NavBar from './componentes/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import RutaProtegida from './pages/RutaProtegida';
import Dashboard from './pages/Dashboard';
import Idioma from './pages/Idioma';
import RutaPrivada from './componentes/RutaPrivada';
import Configuracion from './pages/Configuracion';
import Perfil from './pages/Perfil';
import Panel from './pages/Panel';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RutaProtegida isLogged={false}>
              <Dashboard />
            </RutaProtegida>
          }
        />
        <Route
          path="/panel"
          element={
            <RutaPrivada>
              <Panel />
            </RutaPrivada>
          }
        >
          <Route path="perfil" element={<Perfil />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
        <Route
          path="/servicios"
          element={<Servicios />}
        >
          <Route path="web" element={<Web />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>

        <Route path="*" element={<Error404 />} />

      </Routes>
      <hr />
      <Idioma />
    </Router>
  );
}

export default App;
