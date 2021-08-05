import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {toUppercase} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    // extraer datos
    const { year, marca, plan } = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {toUppercase(marca)}</li>
                <li>Plan: {toUppercase(plan)}</li>
                <li>Año: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;