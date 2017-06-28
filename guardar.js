$(document).ready(function(){
    $("#enviar").click(function(){
        console.log("click en el boton")
        $.ajax({
            url:"http://127.0.0.1:5000/agregar_usuario",
            data: $("#usuarios").serialize(),
            type: "POST",
            succes: function(respuesta){
                console.log("Guardado")
            },
            error: function(respuesta){
                console.log(respuesta)
            }
        })
    })  
})
