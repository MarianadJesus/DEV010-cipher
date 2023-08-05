import cipher from './cipher.js';

const textArea1 = document.getElementById('area1');
const textArea2 = document.getElementById('area2');
const offset = document.getElementById('offset');
const botoncifrar = document.getElementById('cifrar');
const botondescifrar = document.getElementById('descifrar');
const botonlimpiar = document.getElementById('limpiar');

// evento click
botoncifrar.addEventListener('click', capturatexto); // Indentación correcta
botondescifrar.addEventListener('click', capturacodigo); // Indentación correcta
botonlimpiar.addEventListener('click', limpiar); // Indentación correcta

// Funciones
function capturatexto() {
  const codigomsj =cipher.encode(parseInt(offset.value),textArea1.value); // Indentación correcta
  textArea2.value =codigomsj; // Indentación correcta
}

function capturacodigo() {
  const decodigomsj = cipher.decode(parseInt(offset.value), textArea2.value); // Indentación correcta
  textArea1.value = decodigomsj; // Indentación correcta
}

function limpiar() {
  textArea1.value = ''; // Indentación correcta
  textArea2.value = ''; // Indentación correcta
  offset.value = '1'; 
}
