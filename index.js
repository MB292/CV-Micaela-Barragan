var productos={
    "chexa":{ "nombre":"Chexa",
              "direccion":"Av. Fuerza Aérea 3700",
              "telefono":03514789200 },
    "turin":{ "nombre":"Turin",
              "direccion":"Av. Fuerza Aérea 3808",
              "telefono":03514879300 },
    "hiperplatinum":{ "nombre":"HiperPlatinum",
                      "direccion":"Av. Fuerza Aérea 3750",
                      "telefono":03514298755 },
    "hiperauto":{ "nombre":"HiperAuto",
                  "direccion":"Av. Fuerza Aérea 3780",
                  "telefono":03514290125 }
}

$(".individual").click(function(){
    var id= $(this).attr ("productID")
    var producto= productos[id]
    
$(".nombre").text(producto.nombre)
$(".direccion").text(producto.direccion)
$(".telefono").text(producto.telefono)
$(".carta").addClass("visible")

});


$(".boton").click (function(){
  $(".ventanaoculta").addClass("ventanavisible")
 });
 


var db= firebase.database()
db.ref("Fiat/Furgón").on("value",function(datalist){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
var lista=datalist.val()
var toshow=""
for(var i in lista){
toshow+="<div class='col-md-4'><p>"+lista[i].Versión+"</p><p>"+lista[i].Patente+"</p><p>"+lista[i].Combustible+"</p></div>"

}
$(".tocomplete").html(toshow)
})


