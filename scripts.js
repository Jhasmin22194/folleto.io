// Actualiza la posición del fondo en respuesta al movimiento del dispositivo
window.addEventListener('deviceorientation', handleOrientation, true);

function handleOrientation(event) {
    const body = document.querySelector('body');
    // Mapea los valores de inclinación del dispositivo a la posición del fondo
    const xOffset = event.gamma / 90 * 50; // Rango de -50 a 50
    const yOffset = event.beta / 90 * 50; // Rango de -50 a 50
    // Aplica la posición del fondo
    body.style.backgroundPositionX = `${xOffset}%`;
    body.style.backgroundPositionY = `${yOffset}%`;
}
