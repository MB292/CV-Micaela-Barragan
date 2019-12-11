
$(".boton").click (function(){
  $(".ventanaoculta").slideToggle("slow")
 
});


/* No logré hacer funcionar el formulario, si bien aparece en todas las páginas,
 sólo en Contactanos.js está el .js del formulario escrito, ya que sino al escribirlo 
 en las otras páginas dejaban de funcionar todas las funciones de .js que tenían.*/


//formulario

var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("enviar", submitForm);

function submitForm(event){
  event.preventDefault();

  var nombre = getInputVal("nombre");
  var email = getInputVal("email");
  var telefono = getInputVal("telefono");
  var consulta = getInputVal("consulta");

  saveMessage(nombre, email, telefono, consulta);
}


function getInputVal(id) {
  return document.getElementById(id).nodeValue;
}

function saveMessage (nombre, email, telefono, consulta){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre:nombre,
    email:email,
    telefono:telefono,
    consulta:consulta

  });
}