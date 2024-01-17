function esNumeroValido(valor) {
    return !isNaN(valor) && isFinite(valor) && valor > 0 && Number.isInteger(Number(valor));
}

function fibonacci(n) {
    const secuencia = [];
    let a = 0, b = 1;
    while (a <= n) {
        secuencia.push(a);
        [a, b] = [b, a + b];
    }
    return secuencia;
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado.join(', ');
}

function generarFibonacci() {
    let numero = document.getElementById('inputNumero').value;

    if (esNumeroValido(numero)) {
        let resultado = fibonacci(parseInt(numero));
        mostrarResultado(resultado);
    } else {
        alert('Por favor, ingresa un número entero positivo.');
    }
}
