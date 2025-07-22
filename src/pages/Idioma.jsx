import { useSearchParams } from 'react-router-dom';

function IdiomaSelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idioma = searchParams.get('lang') || 'es'; // Idioma por defecto es español

  const cambiarIdioma = (nuevoIdioma) => {
    setSearchParams({ lang: nuevoIdioma });
  };

  return (
    <div>
      <p>Idioma actual: {idioma}</p>
      <button onClick={() => cambiarIdioma('es')}>Español</button>
      <button onClick={() => cambiarIdioma('en')}>Inglés</button>
    </div>
  );
}

function Contenido() {
    const [searchParams] = useSearchParams();
    const idioma = searchParams.get('lang') || 'es';

    const textos = {
        es: {
            saludo: "¡Hola, mundo!",
            descripcion: "Este es un ejemplo sencillo."
        },
        en: {
            saludo: "Hello, world!",
            descripcion: "This is a simple example."
        }
    };

    return (
        <div>
            <h2>{textos[idioma].saludo}</h2>
            <p>{textos[idioma].descripcion}</p>
        </div>
    );
}

function Idioma() {
  return (
    <div>
      <IdiomaSelector />
      <Contenido />
    </div>
  );
}

export default Idioma;