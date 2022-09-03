const inputTexto = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".mensaje");
const adv = document.querySelector(".advertencia");
const copiar = document.querySelector(".btnCopiar");

copiar.style.display = "none"

//Encriptar mensaje

function btnCript() {
  const textoEncriptado = cript(inputTexto.value)
  mensaje.value = textoEncriptado
  mensaje.style.backgroundImage="none"
  adv.style.display= "none"
  inputTexto.value = ""
  copiar.style.display = "block"

}

function cript(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
      if(stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }                
  }
  return stringEncriptada;
  
}


//Desencriptar mensaje

function btnDscript() {
  const textoEncriptado = dsCript(inputTexto.value)
  mensaje.value = textoEncriptado
  inputTexto.value = ""  
}

function dsCript(stringDesencriptada) {
  let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])) {
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
  }

  return stringDesencriptada;
}


//botón copiar

function copiarJS() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("Texto Copiado")
}