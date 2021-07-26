(function() {
    const somar = (v1, v2) => v1 + v2;
    const subtrair = (v1, v2) => v1 - v2;
    const dividir = (v1, v2) => v1 / v2;
    const multiplicar = (v1, v2) => v1 * v2;
    const resto = (v1, v2) => v1 % v2;

    const calculadora = (valor1 = 0, op = '', valor2 = 0) => {
        switch (op) {
            case '+':
                return somar(valor1, valor2);
                break;
            case '-':
                return subtrair(valor1, valor2);
                break;
            case '/':
                return dividir(valor1, valor2);
                break;
            case '*':
                return multiplicar(valor1, valor2);
                break;
            case '%':
                return resto(valor1, valor2);
                break;
            default:
                return 'Operação Inválida';
        }

    }

    console.log(calculadora(5, '+', 10));
    console.log(calculadora(5, '*', 2));
    console.log(calculadora(5, '-', 2));
    console.log(calculadora(5, '/', 1));
    console.log(calculadora(100, '%', 20));
})();