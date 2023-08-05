const cipher = {
  encode: function (offset, textArea1) {
    let resultado = '';
    if (offset > 0 && typeof textArea1 === 'string') {

      if (textArea1 && textArea1.length > 0) {
        if (textArea1.match(/[a-z]/)) {
          alert("Solo se admiten mayúsculas");
          return; // Detenemos el cifrado si hay minúsculas.
        }

        for (let i = 0; i < textArea1.length; i++) {
          const caracterCodigo = textArea1.charCodeAt(i);
          const cifrado = ((caracterCodigo - 65 + offset) % 26 + 65);
          resultado += String.fromCharCode(cifrado);
        }
      }

      return resultado;
    }
    else { throw new TypeError('No valido') }
  },

  decode: function (offset, textArea2) {
    let resultado = '';
    if (offset > 0 && typeof textArea2 === 'string') {

      // hacer un if que si ponemos 0 o null nos salga type error 
      if (textArea2 && textArea2.length > 0) {
        if (textArea2.match(/[a-z]/)) {
          alert("Solo se admiten mayúsculas");
          return; // Detenemos el descifrado si hay minúsculas.
        }

        for (let i = 0; i < textArea2.length; i++) {
          const caracterCodigo = textArea2.charCodeAt(i);
          const descifrado = ((caracterCodigo - offset + 65) % 26 + 65);
          resultado += String.fromCharCode(descifrado);
        }
      }

      return resultado;
    }
    else { throw new TypeError('No valido') }
  }
};
export default cipher;

