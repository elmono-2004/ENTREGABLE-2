function RealizarOperacion() {
    while (true) {
        let operacion = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división, salir)");
        
        if (operacion === "salir") {
            alert("Gracias por usar el programa, que te vaya bien.");
            break;
        }

        let num1 = parseFloat(prompt("Ingrese el primer número"));
        let num2 = parseFloat(prompt("Ingrese el segundo número"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Debe ingresar valores numéricos.");
            continue; // Volver al inicio del bucle
        }

        let resultado;
        if (operacion === "suma") {
            resultado = num1 + num2;
        } else if (operacion === "resta") {
            resultado = num1 - num2;
        } else if (operacion === "multiplicación") {
            resultado = num1 * num2;
        } else if (operacion === "división") {
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("No se puede dividir por cero.");
                continue; // Volver al inicio del bucle
            }
        } else {
            alert("Operación no válida. Solo se permiten suma, resta, multiplicación y división.");
            continue; // Volver al inicio del bucle
        }

        alert("El resultado de la operación " + operacion + " es: " + resultado);
    }
}

RealizarOperacion();
alert("El resultado de la operacion es: " + operacion + " es: " + resultado);

    
