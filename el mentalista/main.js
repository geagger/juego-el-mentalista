let numeroSecreto = parseInt(Math.random() * 1000 + 1); // Genera un número secreto
let intentos = 0; // Inicializa el contador de intentos
const maxIntentos = 8; // Número máximo de intentos permitidos

while (intentos < maxIntentos) {
    let numeroDigitado = prompt("Intento " + (intentos + 1) + " de " + maxIntentos + "\nIngresa un número entre 1 y 1000");

    // Verifica si el usuario ha cancelado el cuadro de diálogo o ha ingresado un valor no numérico
    if (numeroDigitado === null || isNaN(numeroDigitado)) {
        alert("Ingreso inválido. Por favor, ingresa un número válido.");
    } else {
        numeroDigitado = parseInt(numeroDigitado);
        intentos++; // Incrementa el contador de intentos

        if (numeroSecreto === numeroDigitado) {
            alert("¡Correcto! Adivinaste el número en " + intentos + " intentos.");
            break; // Sale del bucle si el número es correcto
        } else if (numeroSecreto > numeroDigitado) {
            alert("El número secreto es mayor que " + numeroDigitado);
        } else {
            alert("El número secreto es menor que " + numeroDigitado);
        }
    }
}

if (intentos === maxIntentos) {
    alert("Fin del juego. Agotaste tus " + maxIntentos + " intentos. El número secreto era " + numeroSecreto + ".");
}
