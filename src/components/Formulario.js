import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 00 100px;
`;

const Select = styled.select`
    display: block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s esase;
    margin-top: 2rem;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color:white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({setResumen, setLoading}) => {

    // declaracion del State
    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    // State para gestionar el error
    const [ error, setError ] = useState(false);


    // Extraer los valores del state
    const { marca, year, plan } = datos;


    // Leer los datos del formulario y colocarlos en el state
    const getInformation = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    // Al submit el fomr
    const cotizarSeguro = (event) => {
        event.preventDefault();

        // validar datos
        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '' ){
            setError(true);
            return;
        }

        setError(false);
        

        // Base de datos de 2000 USD de precio base del seguro
        let resultado = 2000;

        // Logica de calculo
        // Obtener la diferencia de años
        const diferenciaYears = obtenerDiferenciaYear( year.trim() );

        // por cada año hay q restar el 3%
        resultado = resultado*( 1 - 0.03*diferenciaYears );
        
        // Americano incrementa 15%
        // Europeo incrementa 30%
        // Asiatico incrementa 5%
        resultado = resultado*calcularMarca( marca.trim() );
        
        // Planes
        // BAscio aumenta 20%
        // Completo 50%
        resultado = parseFloat(resultado*obtenerPlan(plan.trim())).toFixed(2);

        // Muestro el spinner
        setLoading(true);
        // Espero 3 segundos, simulando q esta cargando los datos
        setTimeout( () => {
            
            // Oculto el spinner
            setLoading(false);
            // Total
            setResumen({
                cotizacion: parseInt(resultado),
                datos
            })

        }, 2000 )


    }

    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            { error ? <Error>Todos los campso son obligatorios</Error> : null }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={getInformation}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={getInformation}
                /> Completo
                
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Formulario;
