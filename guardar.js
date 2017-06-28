$(document).ready(function(){
    $("#enviar").click(function(){
        console.log("click en el boton")
        $.ajax({
            url:"http://127.0.0.1:5000/agregar_usuario",
            data: $("#usuarios").serialize(),
            type: "POST",
            success: function(respuesta){
                console.log(respuesta)
                window.alert("Guardado!")
                document.getElementById("usuarios").reset()
            },
            error: function(respuesta){
                console.log(respuesta)
                window.alert("Error")
            }
        })
    })  
})
