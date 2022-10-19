const toggleButton = document.getElementById('boton-menu')
const navWrapper = document.getElementById('menu-vertical')
console.log(navWrapper);
toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('visible')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'menu-vertical'){
    navWrapper.classList.remove('visible')
    toggleButton.classList.remove('close')
  }
})



const acordeon = document.getElementsByClassName('contenedor-acordeon');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}


//Validación Formulario
var errores = "";
var error_nombre = "";
var error_email = "";
var error_comentario = "";


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
  document.querySelector("#nombre").addEventListener("change", validarNombre);
  document.querySelector("#email").addEventListener("change", validarEmail);
  document.querySelector("#comentario").addEventListener("change", validarComentario);
});
function validarFormulario(evento) {
  let mensaje_error = document.querySelector("#mensaje_error");
  validarNombre(error_nombre);
  validarEmail(error_email);
  validarComentario(error_comentario);
  evento.preventDefault();
  /*
  if ((nombre.value.length < 10) || (email.value.length < 10) || (comentario.value.length == 0 || comentario.value.length > 500 )){
    alert("Entro a errores");
    mensaje_error.innerHTML = window.errores;
    return errores;
  }else{
    this.submit();
  }
*/
errores = error_nombre + error_email + error_comentario
if(window.errores !=""){
  mensaje_error.innerHTML = window.errores;
}else{
  this.submit();
}
}
function validarNombre(evento,errores){
  if (nombre.value.length < 10) {
    nombre.classList.add("error");
    window.error_nombre = "El nombre debe tener mas de 10 caracteres.<br>";
    console.log(errores);
  }else{
    window.error_nombre = "";
    nombre.classList.remove("error");
  }
}
function validarEmail(evento, errores){
  if (email.value.length < 10) {
    email.classList.add("error");
    window.error_email = "El formato del email no es correcto.<br>";
    console.log(errores);
  }else{
    window.error_email = "";
    email.classList.remove("error");
  }
}
function validarComentario(evento, errores){
  if (comentario.value.length == 0 || comentario.value.length > 500 ) {
    comentario.classList.add("error");
    window.error_comentario = "El comentario no debe estar vacio.<br>";
    console.log(errores);
  }else{
    window.error_comentario = "";
    comentario.classList.remove("error");
  }
}



function mostrar(numero){
  let identificador = `#texto_oculto_${numero}`;
  let boton = `#boton-${numero}`;
  var estado = document.querySelector(identificador).className;
  if(estado == "oculto"){
    document.querySelector(identificador).className="visible";
    document.querySelector(boton).textContent="Menos info";
  }
  else{
     document.querySelector(identificador).className="oculto";
     document.querySelector(boton).textContent="Más info";
  }
  
}

