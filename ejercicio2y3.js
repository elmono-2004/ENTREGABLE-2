function RealizarOperacion(num1, num2, operadoracion){
    if(operadoracion === "+"){
        return num1 + num2;
    }else if(operadoracion === "-"){
        return num1 - num2;
    }else if(operadoracion === "*"){
        return num1 * num2;
    }else if(operadoracion == "/"){
        if (num2 === 0){
            return "No se puede dividir entre 0";
             }else{
            return num1 / num2;
        }
    } else{
        return "Operacion no valida, solo se permiten + - * / ";
    }
    
}   
document.writeln(RealizarOperacion(20, 10, "+") + "<br>");
document.writeln(RealizarOperacion(20, 10, "-") + "<br>");
document.writeln(RealizarOperacion(20, 10, "*") + "<br>");
document.writeln(RealizarOperacion(20, 10, "/") + "<br>");

