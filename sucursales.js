var productos={
  "chexa":{ "nombre":"Chexa",
            "direccion":"Av. Fuerza Aérea 3700",
            "telefono":"(0351) 4669400",
            "direccion2":"Av. Gral. Savio 1571, Río Tercero",
            "telefono2":"(03571) 504050"},
  "turin":{ "nombre":"Turin",
            "direccion":"Av. Fuerza Aérea 3808",
            "telefono":"(0351) 4879300",
            "direccion2":"Costanera y Puente Tablada",
            "telefono2":"(0351) 4879350",
            "direccion3":"Urquiza 1002, San Francisco",
            "telefono3":"(03546) 430450"},
  "hiperplatinum":{ "nombre":"HiperPlatinum",
                    "direccion":"Av. Fuerza Aérea 3742",
                    "telefono":"(0351) 4858830",
                    "direccion2":"",
                    "telefono2":"",
                    "direccion3":"",
                    "telefono3":""},
                   
   "hiperauto":{ "nombre":"HiperAuto",
            "direccion":"Av. Fuerza Aérea 3742",
            "telefono":"(0351) 4858830",
            "direccion2":"",
            "telefono2":""},

          
"jea":{ "nombre":"JEA Jeep",
            "direccion":"Colon 208, Rafaela, Santa Fe",
            "telefono":"0800 777 5337",
            "direccion2":"",
            "telefono2":""},

        
"geelycor":{ "nombre":"GeelyCor",
            "direccion":"Av. Fuerza Aérea 3780",
            "telefono":"(0351) 152404444",
            "direccion2":"Av. Emilio Caraffa 2100",
            "telefono2":"(0351) 4526300"},   

"utilxa":{ "nombre":"Utilxa DFSK",
            "direccion":"Av. Emilio Caraffa 2106",
            "telefono":"(0351) 262555",
            "direccion2":"",
            "telefono2":""},
     
        
"chexsur":{ "nombre":"Chexsur",
            "direccion":"Lateral A005 1223, Río Cuarto",
            "telefono":"(0351) 4630505",
            "direccion2":"",
            "telefono2":""}
       
             
}

$(".individual").click(function(){
    var id= $(this).attr ("productID")
    var producto= productos[id]
    
$(".nombre").text(producto.nombre)
$(".direccion").text(producto.direccion)
$(".telefono").text(producto.telefono)
$(".direccion2").text(producto.direccion2)
$(".telefono2").text(producto.telefono2)
$(".direccion3").text(producto.direccion3)
$(".telefono3").text(producto.telefono3)
$(".carta").fadeToggle("slow")

});


$(".boton").click (function(){
  $(".ventanaoculta").slideToggle("slow")
 
});

/* No logré hacer funcionar el formulario, si bien aparece en todas las páginas,
 sólo en Contactanos.js está el .js del formulario escrito, ya que sino al escribirlo 
 en las otras páginas dejaban de funcionar todas las funciones de .js que tenían.*/