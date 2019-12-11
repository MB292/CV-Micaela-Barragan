
$(".boton").click (function(){
  $(".ventanaoculta").slideToggle("slow")
 
});

$(document).ready(function(){
  $('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
});

/* No logré hacer funcionar el formulario, si bien aparece en todas las páginas,
 sólo en Contactanos.js está el .js del formulario escrito, ya que sino al escribirlo 
 en las otras páginas dejaban de funcionar todas las funciones de .js que tenían.*/