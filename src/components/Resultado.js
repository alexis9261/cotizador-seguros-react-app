import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
// import TransitionGroup from '../src/TransitionGroup';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    border: 1px solid #26c6da;
    text-align: center;
    padding: .5em;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.span`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;


const Resultado = ({cotizacion}) => {

    return ( 
        (cotizacion === 0) 
        ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : (
            <ResultadoCotizacion>
                <TransitionGroup    
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}}
                    >
                        <TextoCotizacion>El total es: $USD {cotizacion} </TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
            )

     );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;