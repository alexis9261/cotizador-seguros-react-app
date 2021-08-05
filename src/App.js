import { useState } from 'react';
import Header from './components/Header.js'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

// Styled-Component
const Contenedor = styled.div`
  max-width: 600px;
  margin:0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  // state para el total del seguro
  const [ resumen, setResumen ] = useState({
    cotizacion: 0,
    datos: {
      year: '',
      marca: '',
      plan: ''
    }
  });

  // State para el spinner de cargando
  const [ loading, setLoading ] = useState(false);

  // extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setLoading={setLoading}
        />

        { loading ? <Spinner /> : null }
        { !loading 
          ? <Resumen
              datos={datos}
            />
          : null }
        
        { !loading 
          ? <Resultado
              cotizacion={cotizacion}
            /> 
          : null }
        
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

