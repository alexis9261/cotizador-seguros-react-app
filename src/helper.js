// obtener la diferencia entre los años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// calcular el incremento del seguro en base a la marca
export function calcularMarca(marca){

    let incremento;

    switch (marca) {
        case 'americano':
                incremento = 1.15;
            break;

        case 'europeo':
            incremento = 1.30;
            break;

        default:
            incremento = 1.05;
            break;
    }

    return incremento;
}

// calcular el tipo de seguro
export function obtenerPlan( plan ){
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Funcion para primera letra en mayusculas
export function toUppercase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}